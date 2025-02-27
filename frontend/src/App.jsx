import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Dashboard2 from './Components/Dashboard2'
import Login from './Components/Login'
import PageNotFound from './Pages/PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
import RefreshHandler from './Components/RefreshHandler'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!(userInfo && token));
  }, []);

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="125166014448-09633mpn1l85bkv9f21meq1r0rl3qlnh.apps.googleusercontent.com">
        <Login setIsAuthenticated={setIsAuthenticated} />
      </GoogleOAuthProvider>
    );
  };
  
  const ProtectedRoute = ({ element }) => {
    const userInfo = localStorage.getItem("user-info");
    const token = localStorage.getItem("token");
    return userInfo && token ? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard2 />} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
