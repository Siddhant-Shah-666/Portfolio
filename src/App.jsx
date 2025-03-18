import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
