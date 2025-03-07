import React, { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api.js";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const userInfo = localStorage.getItem("user-info");
    const token = localStorage.getItem("token");
    if (userInfo && token) {
      // Share existing token with extension if user is already logged in
      window.postMessage({
        type: 'FROM_WEBPAGE',
        action: 'AUTH_TOKEN',
        token: token
      }, '*');
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const responseGoogle = async (authResult) => {
    try {
      if (authResult?.code) {
        const result = await googleAuth(authResult.code);
        if (result.status === "success") {
          // Save both user info and token
          localStorage.setItem("user-info", JSON.stringify(result.user));
          localStorage.setItem("token", result.token);
          
          // Share token with extension
          window.postMessage({
            type: 'FROM_WEBPAGE',
            action: 'AUTH_TOKEN',
            token: result.token
          }, '*');
          
          // Update authentication state
          setIsAuthenticated(true);
          
          // Redirect to dashboard
          navigate("/dashboard", { replace: true });
        } else {
          console.error("Login failed:", result);
        }
      } else {
        console.log("No auth code received:", authResult);
      }
    } catch (error) {
      console.error("Google Auth Failed:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.error("Login Failed:", error),
    flow: "auth-code",
  });

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    localStorage.removeItem("token");
    
    // Notify extension about logout
    window.postMessage({
      type: 'FROM_WEBPAGE',
      action: 'AUTH_TOKEN',
      token: null
    }, '*');
    
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome to JobSyncAI
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to continue
          </p>
        </div>
        <button
          onClick={googleLogin}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img
            className="h-5 w-5 mr-2"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
