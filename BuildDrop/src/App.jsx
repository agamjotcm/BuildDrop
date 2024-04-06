
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AnimatedCursor from 'react-animated-cursor'
import {OrbitSpace} from 'orbit-space'

function App() {

  return (
  <>
  {/* <OrbitSpace> */}

<AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
  {/* </OrbitSpace> */}
  </>

  );
}

export default App
