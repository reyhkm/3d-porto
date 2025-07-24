import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';
import Avatar from './Avatar';
import FloatingShapes from './FloatingShapes';
import ErrorBoundary from '../utils/ErrorBoundary.jsx';

// A fallback component to show while the model is loading or if it fails
const AvatarPlaceholder = () => {
  return (
    <group scale={1.5} position-y={-1.5}>
      <mesh castShadow receiveShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </group>
  );
};

const Experience = () => {
  const data = useScroll();
  const groupRef = useRef();
  const avatarRef = useRef();

  // Leva controls for easy debugging
  const { rotationIntensity, floatFrequency, floatAmplitude } = useControls('Animation', {
    rotationIntensity: { value: 2, min: 0, max: 10, step: 0.1 },
    floatFrequency: { value: 1, min: 0, max: 5, step: 0.1 },
    floatAmplitude: { value: 0.1, min: 0, max: 1, step: 0.01 },
  });

  // useFrame is called on every rendered frame
  useFrame((state, delta) => {
    // The scroll offset (0-1)
    const scrollOffset = data.offset;

    // Animate the group containing the avatar and shapes
    if (groupRef.current) {
      // Move the group up based on scroll
      groupRef.current.position.y = -scrollOffset * 10;

      // Rotate the group based on scroll
      groupRef.current.rotation.y = scrollOffset * Math.PI * rotationIntensity;
    }

    // Animate the avatar itself (floating effect)
    if (avatarRef.current) {
      const time = state.clock.getElapsedTime();
      avatarRef.current.position.y = Math.sin(time * floatFrequency) * floatAmplitude;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={2} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      <group ref={groupRef}>
        <group ref={avatarRef}>
          <ErrorBoundary fallback={<AvatarPlaceholder />}>
            <Suspense fallback={<AvatarPlaceholder />}>
              <Avatar />
            </Suspense>
          </ErrorBoundary>
        </group>
        <FloatingShapes />
      </group>

      {/* Floor plane to receive shadows */}
      <mesh receiveShadow position-y={-2} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </>
  );
};

export default Experience;
