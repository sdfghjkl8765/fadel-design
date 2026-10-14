"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SceneObjects() {
  const sceneRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Mesh>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => { reducedMotion.current = preference.matches; };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useFrame((state, delta) => {
    if (!sceneRef.current) return;
    sceneRef.current.rotation.y = THREE.MathUtils.damp(sceneRef.current.rotation.y, state.pointer.x * 0.2, 5, delta);
    sceneRef.current.rotation.x = THREE.MathUtils.damp(sceneRef.current.rotation.x, -state.pointer.y * 0.12, 5, delta);
    if (orbitRef.current && !reducedMotion.current) orbitRef.current.rotation.z += delta * 0.16;
  });

  return (
    <group ref={sceneRef}>
      <mesh position={[-0.12, -1.19, -0.28]} scale={[1.22, 0.17, 0.68]}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshBasicMaterial color="#060812" transparent opacity={0.62} />
      </mesh>

      <group position={[-0.15, 0.02, 0]} rotation={[0.02, -0.06, 0]}>
        <mesh castShadow receiveShadow position={[-0.05, 0.12, 0]}>
          <boxGeometry args={[2.24, 1.48, 0.13]} />
          <meshStandardMaterial color="#1b1d2c" metalness={0.72} roughness={0.3} />
        </mesh>
        <mesh position={[-0.05, 0.12, 0.073]}>
          <boxGeometry args={[2.08, 1.32, 0.018]} />
          <meshBasicMaterial color="#17152f" />
        </mesh>
        <mesh position={[-0.05, 0.12, 0.085]}>
          <planeGeometry args={[2.03, 1.27]} />
          <meshBasicMaterial color="#252054" />
        </mesh>
        <mesh position={[-0.05, 0.12, 0.09]}>
          <planeGeometry args={[2.03, 1.27]} />
          <meshBasicMaterial color="#5139b8" transparent opacity={0.2} />
        </mesh>

        <mesh position={[-0.72, 0.59, 0.101]}>
          <boxGeometry args={[0.34, 0.055, 0.012]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
        <mesh position={[-0.72, 0.46, 0.101]}>
          <boxGeometry args={[0.42, 0.025, 0.012]} />
          <meshBasicMaterial color="#aaa1db" />
        </mesh>
        <mesh position={[-0.72, 0.38, 0.101]}>
          <boxGeometry args={[0.29, 0.025, 0.012]} />
          <meshBasicMaterial color="#77719d" />
        </mesh>
        <mesh position={[-0.72, 0.1, 0.101]}>
          <boxGeometry args={[0.42, 0.43, 0.014]} />
          <meshBasicMaterial color="#302969" />
        </mesh>
        <mesh position={[-0.72, 0.12, 0.11]}>
          <boxGeometry args={[0.26, 0.22, 0.012]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.82} />
        </mesh>
        <mesh position={[-0.07, 0.51, 0.101]}>
          <boxGeometry args={[0.84, 0.19, 0.014]} />
          <meshBasicMaterial color="#28244e" />
        </mesh>
        <mesh position={[-0.27, 0.52, 0.11]}>
          <boxGeometry args={[0.28, 0.035, 0.012]} />
          <meshBasicMaterial color="#f1efff" />
        </mesh>
        <mesh position={[-0.22, 0.45, 0.11]}>
          <boxGeometry args={[0.38, 0.018, 0.012]} />
          <meshBasicMaterial color="#aaa1db" />
        </mesh>
        <mesh position={[0.59, 0.07, 0.101]}>
          <boxGeometry args={[0.72, 0.69, 0.014]} />
          <meshBasicMaterial color="#211e43" />
        </mesh>
        <mesh position={[0.4, -0.03, 0.11]}>
          <boxGeometry args={[0.13, 0.24, 0.014]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
        <mesh position={[0.57, 0.07, 0.11]}>
          <boxGeometry args={[0.13, 0.42, 0.014]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
        <mesh position={[0.74, 0.01, 0.11]}>
          <boxGeometry args={[0.13, 0.3, 0.014]} />
          <meshBasicMaterial color="#d9a7ff" />
        </mesh>

        <mesh castShadow position={[-0.05, -0.76, -0.01]}>
          <boxGeometry args={[0.15, 0.38, 0.12]} />
          <meshStandardMaterial color="#777b91" metalness={0.8} roughness={0.24} />
        </mesh>
        <mesh castShadow position={[-0.05, -0.96, 0.02]} rotation={[0.04, 0, 0]}>
          <boxGeometry args={[0.66, 0.08, 0.36]} />
          <meshStandardMaterial color="#333747" metalness={0.74} roughness={0.28} />
        </mesh>
      </group>

      <group position={[1.43, -0.44, 0.18]} rotation={[0.02, -0.12, -0.13]}>
        <mesh castShadow>
          <boxGeometry args={[0.58, 1.12, 0.1]} />
          <meshStandardMaterial color="#11131e" metalness={0.65} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.058]}>
          <planeGeometry args={[0.51, 1.02]} />
          <meshBasicMaterial color="#172d48" />
        </mesh>
        <mesh position={[0, 0.19, 0.064]}>
          <planeGeometry args={[0.51, 0.6]} />
          <meshBasicMaterial color="#244e7b" />
        </mesh>
        <mesh position={[0, 0.18, 0.068]}>
          <planeGeometry args={[0.37, 0.28]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.62} />
        </mesh>
        <mesh position={[0, -0.2, 0.067]}>
          <boxGeometry args={[0.37, 0.1, 0.012]} />
          <meshBasicMaterial color="#292447" />
        </mesh>
        <mesh position={[0, -0.39, 0.067]}>
          <boxGeometry args={[0.37, 0.19, 0.012]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 0.49, 0.066]}>
          <boxGeometry args={[0.11, 0.012, 0.01]} />
          <meshBasicMaterial color="#8a90a8" />
        </mesh>
      </group>

      <group position={[-1.56, 0.55, 0.27]} rotation={[0.08, 0.23, 0.12]}>
        <mesh castShadow>
          <boxGeometry args={[0.78, 0.56, 0.07]} />
          <meshStandardMaterial color="#20243a" metalness={0.38} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0.041]}>
          <planeGeometry args={[0.7, 0.48]} />
          <meshBasicMaterial color="#25204f" />
        </mesh>
        <mesh position={[-0.12, 0.06, 0.047]}>
          <boxGeometry args={[0.31, 0.2, 0.01]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
        <mesh position={[0.16, 0.06, 0.047]}>
          <boxGeometry args={[0.19, 0.2, 0.01]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
        <mesh position={[0, -0.15, 0.047]}>
          <boxGeometry args={[0.53, 0.025, 0.01]} />
          <meshBasicMaterial color="#ece9ff" />
        </mesh>
      </group>

      <mesh ref={orbitRef} position={[-0.25, 0.08, -0.36]} rotation={[0.28, 0.5, 0.2]}>
        <torusGeometry args={[1.62, 0.009, 8, 120]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.62} />
      </mesh>
      <mesh position={[-1.9, -0.76, 0.1]} rotation={[0.4, 0.3, 0.2]}>
        <octahedronGeometry args={[0.16]} />
        <meshStandardMaterial color="#67e8f9" metalness={0.55} roughness={0.2} emissive="#14566a" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[1.1, 0.92, -0.12]} rotation={[0.4, 0.2, 0.5]}>
        <icosahedronGeometry args={[0.14, 0]} />
        <meshStandardMaterial color="#a78bfa" metalness={0.48} roughness={0.25} emissive="#39246e" emissiveIntensity={0.45} />
      </mesh>
      <mesh position={[0.95, -1.05, 0.02]}>
        <sphereGeometry args={[0.055, 20, 16]} />
        <meshBasicMaterial color="#d9a7ff" />
      </mesh>
    </group>
  );
}

export default function HeroScene({ label }: { label: string }) {
  return (
    <div className="hero-scene" role="img" aria-label={label}>
      <Canvas camera={{ position: [0, 0, 6.2], fov: 39 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.15} />
        <directionalLight position={[-3, 4, 5]} intensity={2.1} color="#e5ddff" />
        <pointLight position={[2.5, 1.5, 2]} intensity={24} distance={6} color="#67e8f9" />
        <pointLight position={[-2.5, -1.5, 1]} intensity={17} distance={5} color="#8b5cf6" />
        <SceneObjects />
      </Canvas>
    </div>
  );
}