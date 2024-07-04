import './App.css'
import { useEffect } from 'react';
import Home from './Component/Home';
import Navbar from './Component/Navbar'
import About from './Component/About'
import Skill from './Component/Skill';
import Education from './Component/Education';
import Work from './Component/Work';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])
  return (
    <>
    <div className="overflow-hidden main-contain scroll">
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Education/>
    <Work/>
    <Experience/>
    <Contact/>
    </div>
    </>
  )
}
export default App