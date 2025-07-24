import { useGLTF } from '@react-three/drei';

const Avatar = (props) => {
  // Load the 3D model from the public directory.
  // Make sure you have an 'avatar.glb' file in your /public folder.
  // You can download free models from Sketchfab.
  const { nodes, materials } = useGLTF('/avatar.glb');

  return (
    <group {...props} dispose={null} scale={1.5} position-y={-1.5}>
      {/* This is an example structure. It will vary based on your GLB file. */}
      {/* You might need to inspect your model to see the correct node names. */}
      {Object.keys(nodes).map(nodeName => {
        const node = nodes[nodeName];
        if (node.isMesh) {
          // Enable casting and receiving shadows for all meshes in the model
          node.castShadow = true;
          node.receiveShadow = true;
          return <mesh key={node.uuid} geometry={node.geometry} material={node.material} />
        }
        return null;
      })}
      {/* Fallback if model fails to load or has no meshes */}
      {Object.keys(nodes).length === 0 && (
        <mesh castShadow receiveShadow>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      )}
    </group>
  );
};

// Preload the model to prevent pop-in
useGLTF.preload('/avatar.glb');

export default Avatar;
