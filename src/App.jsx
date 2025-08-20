import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import PingPong from './components/PingPong'
import WorkingOn from './components/WorkingOn'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav />
      <Hero />
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
