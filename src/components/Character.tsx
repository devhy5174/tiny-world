function Character() {
  return (
    <group position={[0, 0, 0]}>
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
