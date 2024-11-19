import Canvas from './canvas';
import AvatarCustomizer from './pages/AvatarCustomizer';
import Customizer from './pages/Customizer';
import DressCustomizer from './pages/DressCustomizer';
import Home from './pages/Home';
import Simulator from './pages/Simulator';

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      {/* <Customizer /> */}
      <AvatarCustomizer />
      <DressCustomizer />
      <Simulator />
      <Canvas />
    </main> 
  )
}

export default App
