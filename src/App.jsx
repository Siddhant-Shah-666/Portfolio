import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <Skills/>
    </>
  )
}

export default App
