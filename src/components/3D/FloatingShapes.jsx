import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const FloatingShapes = () => {
  const meshRef = useRef();

  // Create a set of random positions for the shapes
  const shapes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;
      const scale = Math.random() * 0.2 + 0.1;
      temp.push({ position: [x, y, z], scale });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} scale={shape.scale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#0074d9" roughness={0.3} metalness={0.7} />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingShapes;
