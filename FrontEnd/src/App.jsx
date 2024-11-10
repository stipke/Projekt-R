import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SleepDataComponent from './SleepDataComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SleepDataComponent />
    </>
  )
}

export default App
