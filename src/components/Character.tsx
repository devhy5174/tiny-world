import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type Position = [number, number, number];
type CharacterProps = {
  setTargetPosition: React.Dispatch<React.SetStateAction<Position>>;
  targetPosition: Position;
};

function Character({ setTargetPosition, targetPosition }: CharacterProps) {
  useEffect(() => {
    // 키보드 이동 조작키
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "w") {
        setTargetPosition(([x, y, z]) => [x, y, z - 0.2]);
      }
      if (event.key === "s") {
        setTargetPosition(([x, y, z]) => [x, y, z + 0.2]);
      }
      if (event.key === "a") {
        setTargetPosition(([x, y, z]) => [x - 0.2, y, z]);
      }
      if (event.key === "d") {
        setTargetPosition(([x, y, z]) => [x + 0.2, y, z]);
      }
    };
    // 접속시 키보드세팅
    window.addEventListener("keydown", handleKeyDown);
    // 종료시 키보드세팅종료
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setTargetPosition]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const target = new THREE.Vector3(...targetPosition);
    //캐릭터의 위치에게 target 쪽으로 5%이동해
    groupRef.current.lookAt(target);
    //캐릭터 타겟으로 5%이동
    groupRef.current.position.lerp(target, 0.05); // 0.05는 한 프레임마다 목적지까지 남은 거리의 5%만큼 가까워져라
  });
  return (
    <group ref={groupRef}>
      {/* 몸 */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[0.7, 1, 0.4]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      {/* 머리 */}
      <mesh position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="peachpuff" />
      </mesh>

      {/* 왼쪽 눈 */}

      <mesh position={[-0.14, 1.98, 0.36]}>
        <sphereGeometry args={[0.045, 16, 16]} />

        <meshStandardMaterial color="black" />
      </mesh>

      {/* 오른쪽 눈 */}

      <mesh position={[0.14, 1.98, 0.36]}>
        <sphereGeometry args={[0.045, 16, 16]} />

        <meshStandardMaterial color="black" />
      </mesh>

      {/* 왼팔 */}
      <mesh position={[-0.5, 1.1, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      {/* 오른팔 */}
      <mesh position={[0.5, 1.1, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      {/* 왼다리 */}
      <mesh position={[-0.2, 0.35, 0]}>
        <boxGeometry args={[0.25, 0.7, 0.3]} />
        <meshStandardMaterial color="navy" />
      </mesh>

      {/* 오른다리 */}
      <mesh position={[0.2, 0.35, 0]}>
        <boxGeometry args={[0.25, 0.7, 0.3]} />
        <meshStandardMaterial color="navy" />
      </mesh>
    </group>
  );
}

export default Character;
