import * as THREE from "three";

function ChristmasTree() {
  // 별 모양 만들기
  const starShape = new THREE.Shape();
  const points = 5;
  const outerRadius = 0.35;
  const innerRadius = 0.15;
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;

    const angle = (i * Math.PI) / points - Math.PI / 2;

    const x = Math.cos(angle) * radius;

    const y = Math.sin(angle) * radius;
    if (i === 0) {
      starShape.moveTo(x, y);
    } else {
      starShape.lineTo(x, y);
    }
  }
  starShape.closePath();

  return (
    <group position={[2, 0, -2]}>
      {/* 나무 줄기 */}
      <mesh position={[0, 0.5, 0]}>
        {/* cylinderGeometry -> 원기둥 */}
        <cylinderGeometry args={[0.2, 0.25, 1, 16]} />
        <meshStandardMaterial color="saddlebrown" />
      </mesh>

      {/* 아래쪽 잎 */}
      <mesh position={[0, 1.2, 0]}>
        <coneGeometry args={[1.2, 1.5, 16]} />
        <meshStandardMaterial color="darkgreen" />
      </mesh>

      {/* 가운데 잎 */}
      <mesh position={[0, 2, 0]}>
        <coneGeometry args={[0.9, 1.4, 16]} />

        <meshStandardMaterial color="green" />
      </mesh>

      {/* 위쪽 잎 */}
      <mesh position={[0, 2.7, 0]}>
        <coneGeometry args={[0.6, 1.2, 16]} />
        <meshStandardMaterial color="forestgreen" />
      </mesh>

      {/* 빨간 오너먼트 */}
      <mesh position={[0.65, 1.4, 0.65]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position={[-0.55, 1.8, 0.55]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* 금색 오너먼트 */}
      <mesh position={[0.45, 2.2, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="gold" />
      </mesh>
      <mesh position={[-0.3, 2.65, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="gold" />
      </mesh>

      {/* 뒤쪽 장식 */}
      <mesh position={[0.5, 1.45, -0.65]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="gold" />
      </mesh>

      <mesh position={[-0.5, 2.05, -0.5]}>
        <sphereGeometry args={[0.11, 16, 16]} />

        <meshStandardMaterial color="red" />
      </mesh>

      {/* 오른쪽 장식 */}

      <mesh position={[0.85, 1.75, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />

        <meshStandardMaterial color="gold" />
      </mesh>

      <mesh position={[0.55, 2.45, -0.15]}>
        <sphereGeometry args={[0.1, 16, 16]} />

        <meshStandardMaterial color="red" />
      </mesh>

      {/* 왼쪽 장식 */}
      <mesh position={[-0.85, 1.5, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position={[-0.5, 2.4, 0.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="gold" />
      </mesh>

      {/* 꼭대기 별 */}

      <mesh position={[0, 3.45, 0]}>
        <extrudeGeometry
          args={[
            starShape,

            {
              depth: 0.12,

              bevelEnabled: false,
            },
          ]}
        />

        <meshStandardMaterial
          color="gold"
          emissive="gold"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

export default ChristmasTree;
