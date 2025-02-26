import { useState } from 'react'
import './App.css'

import LandingPage from './Pages/LandingPage'
import Dashboard from './Pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <JobApplicationTracker/> */}
      {/* <Dashboard/> */}
      {/* //fix this either creatie or otherwise */}
      <LandingPage/>
    </>
  )
}

export default App
