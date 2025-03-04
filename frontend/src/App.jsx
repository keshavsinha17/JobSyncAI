import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Dashboard2 from './Components/Dashboard2'
import Login from './Components/Login'
import PageNotFound from './Pages/PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
import RefreshHandler from './Components/RefreshHandler'
import AddJob from './Components/AddJob'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!(userInfo && token));
    setIsLoading(false);
  }, []);

  const GoogleAuthWrapper = () => {
    if (isAuthenticated) {
      return <Navigate to="/dashboard" replace />;
    }
    return (
      <GoogleOAuthProvider clientId="125166014448-09633mpn1l85bkv9f21meq1r0rl3qlnh.apps.googleusercontent.com">
        <Login setIsAuthenticated={setIsAuthenticated} />
      </GoogleOAuthProvider>
    );
  };
  
  const ProtectedRoute = ({ element }) => {
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
<BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
  <Routes>
  <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard2 />} />} />
        <Route path="/add-job" element={<ProtectedRoute element={<AddJob />} />} />
        <Route path="*" element={<PageNotFound />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
