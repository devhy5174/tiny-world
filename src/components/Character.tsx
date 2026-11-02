import { useEffect } from "react";

type Position = [number, number, number];
type CharacterProps = {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

function Character({ position, setPosition }: CharacterProps) {
  useEffect(() => {
    // 키보드 이동 조작키
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "w") {
        setPosition(([x, y, z]) => [x, y, z - 0.2]);
      }
      if (event.key === "s") {
        setPosition(([x, y, z]) => [x, y, z + 0.2]);
      }
      if (event.key === "a") {
        setPosition(([x, y, z]) => [x - 0.2, y, z]);
      }
      if (event.key === "d") {
        setPosition(([x, y, z]) => [x + 0.2, y, z]);
      }
    };
    // 접속시 키보드세팅
    window.addEventListener("keydown", handleKeyDown);
    // 종료시 키보드세팅종료
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <group position={position}>
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
