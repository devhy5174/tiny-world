import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Character from "./components/Character";
import { useState } from "react";

type Position = [number, number, number];

function App() {
  const [position, setPosition] = useState<Position>([0, 0, 0]);
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={1} />
      <Character position={position} setPosition={setPosition} />
      {/* 바닥 */}
      <mesh
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(e) => {
          setPosition([e.point.x, 0, e.point.z]);
        }}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}

export default App;
