import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import sunImage from "@/assets/2k_sun.jpg";

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

function RotationSphere() {
  const texture = useLoader(TextureLoader, sunImage);
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 1 * delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.8, 32, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function UniverseAnimation() {
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

function SphereAnimation() {
  return (
    <div style={{ height: "10vh", width: "10vw", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <RotationSphere />
      </Canvas>
    </div>
  );
}

export { UniverseAnimation, SphereAnimation };
