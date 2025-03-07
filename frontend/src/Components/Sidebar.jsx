import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = ({ userName }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    return (
        <aside className={`bg-custom text-white ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 ease-in-out`}>
            <div className="h-full flex flex-col">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        {/* <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8"/> */}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAABYWFikpKTz8/Pw8PCGhobMzMwLCwuKioqxsbF3d3epqalERET4+PiZmZlJSUnAwMBiYmLk5OQ3NzdoaGjq6urb29vR0dEkJCQqKio9PT2SkpJTU1O5ubkWFhZ0dHSAgIAcHBzf398wMDAQEBA5OTkZGRntW1ukAAAE+0lEQVR4nO2d63aiMBRGRRQqYlCUixYoXuq8/xuOEGo7EjAhkaSzvv1rpqtJz4YQQsgJkwkAAAAAAAAAAAAAAAAAAAAAAAAAAADg1ZBNUE65iTIv1h2xGNujJcx6oztqATJxv4p8qztwTsh6mOANV3fsXJD3wYK/RDGSELSsX9BQva9Yd5nNTXA/LLnu+J/TRHpJxYqRZVPQ+B61OYVr8ZI2LfmuPia1rOow/8wHFF3+iitxTqP0Jcp6qmNSS1oH+TZsCFbWhY+KQ1KMWwe5GlY4qAtP1Uakms3QfqbClyk8FjDsBYZGAMNeYGgEMOzF02s4m3Mwa4IkPL/cKkyfLlZ8hYlavSTLPy2z2If2kAcYNnGoW6eDhSLBQrdIN3slD5O+bo1ezvKCrm6Hfj6lexzyodvhCZGs4dcEfejGM5M4F7smMsFJvdYpPNBqCtkj9QKONLRSrhY672LZKiJSDr2J7WdSldCpk5OikBST0MMv153SlmDq9Ne+jk5ulnxpcCOdTOhbLrkJVmo4aIJ3BFYw5ACGeoEhDzDUCwx5gKFeYMgDDPUCQx5gqBcY8gBDvcCQBxjqBYY8wFAvMOQBhnqBIQ8w1Is6Q1PfH6oz3Id2oigoZczSYPqmzLDiNPXNsUyD9ds9MlWGNZEfK171KAxJgvzfoORWwgTWI4fS05Z7NUsCxjJJubUYZNWu0bJ2UaFgxZwgqT3ds4KRXoJZlOyVbR/liCn0Z3/KDMI6OJKLvihbdu23PvYoZkkahMps/c7M4khuOdQPaL/FPper5Ybvujwv8uuOsi45V/kkfnRgtyA1DfQONXTjrqO5O26errlePByYpwXOXsS87qyTUxBam6NGb3I3rP6Z+OGJ/XcXm7420+4D+8587JXsY3lYFvWheaFhRWKH7KO7Wrgd12X7rmNdO/7Y1ltemLW/l989+IsNJ/WdqaPFrh2GJWH9JmMssi1K9o4Mp+W/d+HXG9Ykdkcffs0eehKP9VsPmwuQYsnuVayo3WOPZFiR2vkfZlirzP2+Lo/1jy4bl9JcZN+1zAuH3e4PocccW4xoOKlG+dn0jRnfNEtpl0n7meCrBPlpGG+OzIGTdYq6x/rjGlbcnmVyZpif68wlzW4gbcOZ67DtrMg+9w0MxjescYOOjVvyK9MwY/eZFsdzmibDG8TNcnaLZRgy2E9troGmPsOKOF2wW+wzwzBIeAeaeg0rbuey3QT7DNdBKjIg129YQTaLK4/h260zEo3IDMOK261g3WuYL9whiZLmGFbEhXNiGt7O3dA0ULMMJ/13/EHAUBQYPgWGwsBQFBg+5Ujv7l//9f8/Q+YshszuesYZzlmGMu9djTN8fEtX8SEzJW+eIdm1DKXSd80znMweH4rl8pMNNLz1Nj8cLwvJvWWMNKy2KYopM+lX5YYaKgSGosBwfGAoCgzHB4aiwHB8YCgKDMcHhqLAcHxgKAoMxweGosBwfGAoCgzHB4aiwHB8VBvSHByTvmrn1BFlyup7WMRsAPRNnbr85GNd305ZfdI02XTqWlXz/QdzTmKzZlVZct59xau6bDgp5k2qTqiwzvsHfh3+b4u+iu+EKyXpow2kIyNJK6VCwfsW9iZxUZw3b9ynSiQ/icAgaa/50Un0ip0PbHMuxvxV46s0WIb8H71/EaHjG/5BXQAAAAAAAAAAAAAAAAAAAAAAAAAAAMzlL5xzTt0zZj5lAAAAAElFTkSuQmCC" alt="Logo" className="h-6 w-4 rounded"/>
                        <button 
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="text-white hover:text-gray-300 focus:outline-none rounded-button"
                        >
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
                <nav className="flex-1 px-4">
                    <div className="space-y-4">
                        {navItems.map((item) => (
                            <NavItem 
                                key={item.path}
                                {...item}
                                isCollapsed={isCollapsed}
                                isActive={location.pathname === item.path}
                            />
                        ))}
                    </div>
                </nav>
                <div className="p-6 border-t border-white/10">
                    <div className="flex items-center">
                        <img 
                            src={localStorage.getItem("user-info") &&JSON.parse(localStorage.getItem("user-info")).image }
                            alt="User Avatar" 
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        {!isCollapsed && (
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
    );
};

const NavItem = ({ path, icon, text, isCollapsed, isActive }) => (
    <Link 
        to={path}
        className={`flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors group ${
            isActive ? 'bg-white/10' : ''
        }`}
    >
        <i className={`fas ${icon} w-6`}></i>
        {!isCollapsed && <span className="ml-3">{text}</span>}
    </Link>
);

export default Sidebar;
