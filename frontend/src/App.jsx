import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
// import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Stats from './Components/Stats';
import Score from './Components/Score';
import CentralDashboard from './Pages/CentralDashboard';

const App = () => {
    // Get user info from localStorage
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const isAuthenticated = !!localStorage.getItem('token');

    // Protected Route wrapper component
    const ProtectedLayout = ({ children }) => {
        if (!isAuthenticated) {
            return <Navigate to="/login" replace />;
        }

        return (
            <div className="min-h-screen flex">
                <Sidebar userName={userInfo?.name || 'User'} />
                {children}
            </div>
        );
    };

    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route 
                    path="/login" 
                    element={
                        isAuthenticated ? 
                        <Navigate to="/dashboard" replace /> : 
                        <Login />
                    } 
                />

                {/* Protected Routes */}
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedLayout>
                            <CentralDashboard userName={userInfo?.name || 'User'} />
                        </ProtectedLayout>
                    } 
                />
                <Route 
                    path="/score" 
                    element={
                        <ProtectedLayout>
                            <Score />
                        </ProtectedLayout>
                    } 
                />
                <Route 
                    path="/stats" 
                    element={
                        <ProtectedLayout>
                            <Stats />
                        </ProtectedLayout>
                    } 
                />
                <Route 
                    path="/profile" 
                    element={
                        <ProtectedLayout>
                            <Profile />
                        </ProtectedLayout>
                    } 
                />

                {/* Redirect root to dashboard */}
                <Route 
                    path="/" 
                    element={<Navigate to="/dashboard" replace />} 
                />

                {/* 404 Route */}
                <Route 
                    path="*" 
                    element={<Navigate to="/dashboard" replace />} 
                />
            </Routes>
        </Router>
    );
};

export default App;
