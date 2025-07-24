import { Canvas } from '@react-three/fiber';
import { ScrollControls, Loader } from '@react-three/drei';
import { Leva } from 'leva';
import Experience from './components/3D/Experience';
import Overlay from './components/UI/Overlay';

function App() {
  // Total number of pages/sections in the portfolio
  const pages = 4;

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 30 }}
        className="r3f-canvas"
      >
        <color attach="background" args={['#111111']} />
        <ScrollControls pages={pages} damping={0.1}>
          {/* 3D Experience Component */}
          <Experience />
          
          {/* HTML Overlay UI Component */}
          <Overlay />
        </ScrollControls>
      </Canvas>
      <Loader />
      <Leva collapsed />
    </>
  );
}

export default App;
