import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
// import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Stats from './Components/Stats';
import Score from './Components/Score';
import CentralDashboard from './Pages/CentralDashboard';
import AddJob from './Components/AddJob';

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
            <div className="min-h-screen flex overflow-hidden bg-gray-50">
                <Sidebar userName={userInfo?.name || 'User'} />
                {/* Add padding-left for mobile menu button */}
                <div className="flex-1 overflow-y-auto relative md:pl-0 pl-16">
                    {children}
                </div>
            </div>
        );
    };

    return (
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
                path="/add-job" 
                element={
                    <ProtectedLayout>
                        <AddJob />
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

            {/* Root Route */}
            <Route 
                path="/" 
                element={
                    isAuthenticated ? 
                    <Navigate to="/dashboard" replace /> : 
                    <Navigate to="/login" replace />
                } 
            />

            {/* 404 Route */}
            <Route 
                path="*" 
                element={
                    isAuthenticated ? 
                    <Navigate to="/dashboard" replace /> : 
                    <Navigate to="/login" replace />
                } 
            />
        </Routes>
    );
};

export default App;
