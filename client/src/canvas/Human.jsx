import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Human = ({ texturePath }) => {
  const { scene } = useGLTF("/avatar.glb"); // Load your model
  const texture = useTexture("/sample-texture-2.jpg"); // Load texture based on user selection

  // Apply the texture to the avatar model's materials
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture; // Apply the selected texture
      child.material.needsUpdate = true; // Update the material with the new texture
    }
  });

  return <primitive object={scene} scale={0.1} position={[0, 0, 0]} />;
};

export default Human