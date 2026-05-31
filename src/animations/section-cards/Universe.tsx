import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function RotatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 1 * delta;
      meshRef.current.rotation.y += 1 * delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function UniverseAnimation() {
  return (
    <div style={{ height: "10vh", width: "10vw", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <RotatingCube />
      </Canvas>
    </div>
  );
}
