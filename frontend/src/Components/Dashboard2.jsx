import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard2 = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const data = localStorage.getItem("user-info");
            const token = localStorage.getItem("token");
            if (!data || !token) {
                navigate("/login");
                return;
            }
            setUser(JSON.parse(data));
        } catch (error) {
            console.error("Error loading user data:", error);
            navigate("/login");
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array means this runs once on mount

    const handleLogout = () => {
        localStorage.removeItem("user-info");
        localStorage.removeItem("token");
        navigate("/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">No user data found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center space-x-6">
                        {user.image && (
                            <img 
                                src={user.image} 
                                alt="Profile" 
                                className="w-20 h-20 rounded-full border-2 border-gray-200"
                            />
                        )}
        <div>
                            <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard2;   