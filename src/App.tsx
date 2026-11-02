import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Character from "./components/Character";

function App() {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={1} />
      <Character />
      {/* 바닥 */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}

export default App;
