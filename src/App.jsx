import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav />
    </main>
  )
}

export default App
