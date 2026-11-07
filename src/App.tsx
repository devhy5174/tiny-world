import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Character from "./components/Character";
import { useState } from "react";
import ChristmasTree from "./components/ChristmasTree";

type Position = [number, number, number];

function App() {
  const [position, setPosition] = useState<Position>([0, 0, 0]);
  const [targetPosition, setTargetPosition] = useState<Position>([0, 0, 0]);
  return (
    <Canvas camera={{ position: [5, 5, 5] }} shadows>
      {/* 세상 전체에 골고루 뿌리는 기본 조명 */}
      <ambientLight intensity={0.5} />
      {/* 한 방향에서 비추는 강한 빛 */}
      <directionalLight position={[5, 8, 5]} intensity={2} castShadow />
      <Character
        targetPosition={targetPosition}
        setTargetPosition={setTargetPosition}
      />
      {/* 바닥 */}
      <mesh
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow //그림자를 받아서 보여줌
        onClick={(e) => {
          setTargetPosition([e.point.x, 0, e.point.z]);
        }}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#e8eef2" />
      </mesh>
      {/* 트리 */}
      <ChristmasTree />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
