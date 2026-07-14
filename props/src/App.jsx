import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MyComponent from './component/MyComponent'
import MyArray from './component/MyArray'

function App() {
  const [count, setCount] = useState(0)
  const arr = [1,2,3,4,5]
  function btn_Clicked() {
    alert('Button Clicked')
  }

  return (
    <>
     <MyComponent caption='Click me coming from app.jsx'/>
     <MyArray array = {arr}/>
     <button onClick={btn_Clicked}>Click Me</button>
     <button onClick={() => alert('Button Clicked')}>Click Me</button>
    </>
  )
}

export default App
