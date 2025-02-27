import { useState } from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Components/Login'
import PageNotFound from './Pages/PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
function App() {
  const [count, setCount] = useState(0)
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="125166014448-09633mpn1l85bkv9f21meq1r0rl3qlnh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    );
  };
  
  return (
<BrowserRouter>
  <Routes>
  {/* <Route path="/" element={<LandingPage />} /> */}
  <Route path="/login" element={<GoogleAuthWrapper />} />
  <Route path="/"element= {<Navigate to="/login" />}/>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="*" element={<PageNotFound /> } />
  </Routes>
</BrowserRouter>
  )
  
}

export default App
