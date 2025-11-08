import { useState, useRef, useEffect } from 'react';
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null); // Keep this state

  useEffect(() => {
    // Check if the effect hasn't been created yet
    if (!vantaEffect) {
      // Create and set the effect in state
      setVantaEffect(FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x08f2f2, 
        midtoneColor: 0x110b0b,
        lowlightColor: 0x0d072a, 
        baseColor: 0x110808
      }));
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]); 

  return (
    <>
     
      <div 
        className="w-full h-full fixed top-0 left-0 z-[-1]" 
        ref={vantaRef}>
      </div>

     
      <div className="w-full relative z-10 font-bold overflow-x-hidden">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;