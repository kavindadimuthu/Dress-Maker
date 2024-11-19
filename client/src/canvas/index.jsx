import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import state from '../store';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Chair from './Chair';
import Human from './Human';

const CanvasModel = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* <OrbitControls enableZoom={true} enableRotate={true} /> */}

      <CameraRig>
        <Backdrop />
        <Center>
          {snap.intro === "Home" && <Shirt />}
          {snap.intro === "AvatarCustomizer" && <Human />}
          {snap.intro === "DressCustomizer" && <Shirt />}
          {snap.intro === "Simulator" && <Human />}
          {/* <Shirt /> */}
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel