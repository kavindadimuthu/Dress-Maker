import { proxy } from 'valtio';

const state = proxy({
  intro: "Home",
  color: '#636AE8',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;