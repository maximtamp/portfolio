import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CarStep from './pages/CarStep.jsx'
import JourneyToTheUpperworld from './pages/JourneyToTheUpperworld.jsx'

import Nav from './components/Nav.jsx'
import ScrollRestoration from './ScrollRestoration.jsx'

function App() {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="car-step" element={<CarStep />} />
        <Route path="journey-to-the-upperworld" element={<JourneyToTheUpperworld />} />
      </Routes>
    </>
  )
}

export default App
