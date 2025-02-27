import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('user-info');
        const token = localStorage.getItem('token');
        
        if (userInfo && token) {
            setIsAuthenticated(true);
            // If user is authenticated and tries to access login or root, redirect to dashboard
            if (location.pathname === '/' || location.pathname === '/login') {
                navigate('/dashboard', { replace: true });
            }
        } else {
            setIsAuthenticated(false);
            // If user is not authenticated and not on login page, redirect to login
            if (location.pathname !== '/login') {
                navigate('/login', { replace: true });
            }
        }
    }, [location, navigate, setIsAuthenticated]);

    return null;
}

export default RefreshHandler;