import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import PingPong from './components/PingPong'
import WorkingOn from './components/WorkingOn'
import Footer from './components/Footer'

function App() {
  const [onTop, setOnTop] = useState(true)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY === 0)
      setOpen(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <main id='main' className='bg-white selection:bg-blue selection:text-white'>
      <div className='h-dvh flex flex-col justify-between'>
        <Nav onTop={onTop} open={open} setOpen={handleOpen} />
        <Hero />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <PingPong />
      <WorkingOn />
      <Footer />
    </main>
  )
}

export default App
