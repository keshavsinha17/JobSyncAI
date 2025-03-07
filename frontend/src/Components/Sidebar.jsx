import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = ({ userName }) => {
    // Track both mobile and desktop collapse states
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Check if we're on mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update isMobile state on window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Close mobile menu when switching to desktop
            if (!mobile) setIsMobileMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { path: '/dashboard', icon: 'fa-home', text: 'Dashboard' },
        { path: '/score', icon: 'fa-chart-bar', text: 'Check Your Score' },
        { path: '/stats', icon: 'fa-chart-line', text: 'Stats' },
        { path: '/profile', icon: 'fa-user', text: 'Profile' }
    ];

    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem("user-info");
        localStorage.removeItem("token");
        
        // Notify extension about logout
        window.postMessage({
            type: 'FROM_WEBPAGE',
            action: 'AUTH_TOKEN',
            token: null
        }, '*');
        
        // Navigate to login
        navigate("/login");
    };

    // Determine sidebar visibility classes based on mobile/desktop state
    const sidebarClasses = `
        bg-custom text-white 
        ${isCollapsed ? 'w-20' : 'w-64'} 
        transition-all duration-300 ease-in-out h-screen
        ${isMobile ? 'fixed left-0 top-0 z-50' : 'sticky top-0'}
        ${isMobile && !isMobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}
    `;

    // Overlay for mobile menu
    const renderOverlay = () => {
        if (isMobile && isMobileMenuOpen) {
            return (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            );
        }
        return null;
    };

    return (
        <>
            {/* Mobile Menu Button - Only show on mobile */}
            {isMobile && (
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="fixed top-4 left-4 z-50 bg-custom p-2 rounded-lg text-white"
                >
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                </button>
            )}

            {renderOverlay()}

            <aside className={sidebarClasses}>
                <div className="h-full flex flex-col">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            {/* <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8"/> */}
                            <img 
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAABYWFikpKTz8/Pw8PCGhobMzMwLCwuKioqxsbF3d3epqalERET4+PiZmZlJSUnAwMBiYmLk5OQ3NzdoaGjq6urb29vR0dEkJCQqKio9PT2SkpJTU1O5ubkWFhZ0dHSAgIAcHBzf398wMDAQEBA5OTkZGRntW1ukAAAE+0lEQVR4nO2d63aiMBRGRRQqYlCUixYoXuq8/xuOEGo7EjAhkaSzvv1rpqtJz4YQQsgJkwkAAAAAAAAAAAAAAAAAAAAAAAAAAADg1ZBNUE65iTIv1h2xGNujJcx6oztqATJxv4p8qztwTsh6mOANV3fsXJD3wYK/RDGSELSsX9BQva9Yd5nNTXA/LLnu+J/TRHpJxYqRZVPQ+B61OYVr8ZI2LfmuPia1rOow/8wHFF3+iitxTqP0Jcp6qmNSS1oH+TZsCFbWhY+KQ1KMWwe5GlY4qAtP1Uakms3QfqbClyk8FjDsBYZGAMNeYGgEMOzF02s4m3Mwa4IkPL/cKkyfLlZ8hYlavSTLPy2z2If2kAcYNnGoW6eDhSLBQrdIN3slD5O+bo1ezvKCrm6Hfj6lexzyodvhCZGs4dcEfejGM5M4F7smMsFJvdYpPNBqCtkj9QKONLRSrhY672LZKiJSDr2J7WdSldCpk5OikBST0MMv153SlmDq9Ne+jk5ulnxpcCOdTOhbLrkJVmo4aIJ3BFYw5ACGeoEhDzDUCwx5gKFeYMgDDPUCQx5gqBcY8gBDvcCQBxjqBYY8wFAvMOQBhnqBIQ8w1Is6Q1PfH6oz3Id2oigoZczSYPqmzLDiNPXNsUyD9ds9MlWGNZEfK171KAxJgvzfoORWwgTWI4fS05Z7NUsCxjJJubUYZNWu0bJ2UaFgxZwgqT3ds4KRXoJZlOyVbR/liCn0Z3/KDMI6OJKLvihbdu23PvYoZkkahMps/c7M4khuOdQPaL/FPper5Ybvujwv8uuOsi45V/kkfnRgtyA1DfQONXTjrqO5O26errlePByYpwXOXsS87qyTUxBam6NGb3I3rP6Z+OGJ/XcXm7420+4D+8587JXsY3lYFvWheaFhRWKH7KO7Wrgd12X7rmNdO/7Y1ltemLW/l989+IsNJ/WdqaPFrh2GJWH9JmMssi1K9o4Mp+W/d+HXG9Ykdkcffs0eehKP9VsPmwuQYsnuVayo3WOPZFiR2vkfZlirzP2+Lo/1jy4bl9JcZN+1zAuH3e4PocccW4xoOKlG+dn0jRnfNEtpl0n7meCrBPlpGG+OzIGTdYq6x/rjGlbcnmVyZpif68wlzW4gbcOZ67DtrMg+9w0MxjescYOOjVvyK9MwY/eZFsdzmibDG8TNcnaLZRgy2E9troGmPsOKOF2wW+wzwzBIeAeaeg0rbuey3QT7DNdBKjIg129YQTaLK4/h260zEo3IDMOK261g3WuYL9whiZLmGFbEhXNiGt7O3dA0ULMMJ/13/EHAUBQYPgWGwsBQFBg+5Ujv7l//9f8/Q+YshszuesYZzlmGMu9djTN8fEtX8SEzJW+eIdm1DKXSd80znMweH4rl8pMNNLz1Nj8cLwvJvWWMNKy2KYopM+lX5YYaKgSGosBwfGAoCgzHB4aiwHB8YCgKDMcHhqLAcHxgKAoMxweGosBwfGAoCgzHB4aiwHB8VBvSHByTvmrn1BFlyup7WMRsAPRNnbr85GNd305ZfdI02XTqWlXz/QdzTmKzZlVZct59xau6bDgp5k2qTqiwzvsHfh3+b4u+iu+EKyXpow2kIyNJK6VCwfsW9iZxUZw3b9ynSiQ/icAgaa/50Un0ip0PbHMuxvxV46s0WIb8H71/EaHjG/5BXQAAAAAAAAAAAAAAAAAAAAAAAAAAAMzlL5xzTt0zZj5lAAAAAElFTkSuQmCC" 
                                alt="Logo" 
                                className="h-6 w-4 rounded"
                            />
                            {!isMobile && (
                                <button 
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                    className="text-white hover:text-gray-300 focus:outline-none rounded-button"
                                >
                                    <i className="fas fa-bars text-xl"></i>
                        </button>
                            )}
                    </div>
                </div>
                    <nav className="flex-1 px-4 overflow-y-auto">
                        <div className="space-y-4">
                            {navItems.map((item) => (
                                <NavItem 
                                    key={item.path}
                                    {...item}
                                    isCollapsed={isCollapsed && !isMobile}
                                    isActive={location.pathname === item.path}
                                    onClick={() => isMobile && setIsMobileMenuOpen(false)}
                                />
                            ))}
                    </div>
                </nav>
                    <div className="p-6 border-t border-white/10 mt-auto">
                        <div className="flex items-center">
                            <img 
                                src={localStorage.getItem("user-info") && JSON.parse(localStorage.getItem("user-info")).image}
                                alt="User Avatar" 
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            {(!isCollapsed || isMobile) && (
                                <div className="ml-3">
                                    <p className="text-sm font-medium">{userName}</p>
                                    <button 
                                        onClick={handleLogout}
                                        className="text-sm text-gray-300 hover:text-white flex items-center mt-1 rounded-button"
                                    >
                                        <i className="fas fa-sign-out-alt mr-2"></i>
                                Logout
                            </button>
                        </div>
                            )}
                    </div>
                </div>
            </div>
        </aside>
        </>
    );
};

const NavItem = ({ path, icon, text, isCollapsed, isActive, onClick }) => (
    <Link 
        to={path}
        onClick={onClick}
        className={`flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors group ${
            isActive ? 'bg-white/10' : ''
        }`}
    >
        <i className={`fas ${icon} w-6`}></i>
        {!isCollapsed && <span className="ml-3">{text}</span>}
    </Link>
);

export default Sidebar;
