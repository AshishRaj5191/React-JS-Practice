import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Bio from './component/Bio'
import Contact from './component/Contact'
import Experience from './component/Experience'
import Skills from './component/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Bio/>
      <hr />
      <Contact/>
      <hr />
      <Experience/>
      <hr />
      <Skills/>
    </div>
  )
}

export default App
