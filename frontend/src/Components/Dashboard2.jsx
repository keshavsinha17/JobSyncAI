import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobCard from "./JobCard";

const Dashboard2 = () => {
    const [user, setUser] = useState(null);
    const [jobs, setJobs] = useState([]);
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
            fetchJobs();
        } catch (error) {
            console.error("Error loading user data:", error);
            navigate("/login");
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    const fetchJobs = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/api/jobs/my-jobs', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setJobs(response.data.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const handleJobUpdate = (updatedJob) => {
        setJobs(jobs.map(job => 
            job._id === updatedJob._id ? updatedJob : job
        ));
    };

    const handleJobDelete = (jobId) => {
        setJobs(jobs.filter(job => job._id !== jobId));
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
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
        <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600">Welcome, {user.name}</p>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => navigate('/add-job')}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                        >
                            Add New Job
                        </button>
                        <button
                            onClick={() => {
                                localStorage.removeItem("user-info");
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map(job => (
                        <JobCard
                            key={job._id}
                            job={job}
                            onUpdate={handleJobUpdate}
                            onDelete={handleJobDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard2;   