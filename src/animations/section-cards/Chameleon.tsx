import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Scene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 1 * delta;
    }
  });

  const gltf = useLoader(GLTFLoader, "public/models/chameleon/scene.gltf");
  return (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene} scale={7} />;
    </mesh>
  );
}

export default function ChameleonAnimation() {
  return (
    <div style={{ height: "10vh", width: "10vw", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Scene />
      </Canvas>
    </div>
  );
}
