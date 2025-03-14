import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard2 from '../Components/JobCard2';
import JobModal from '../Components/JobModal';
import axios from 'axios';

const CentralDashboard = ({ userName }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobs, setJobs] = useState([]);

    // const fetchJobs = async () => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await axios.get('http://localhost:3000/api/jobs/my-jobs', {
    //             headers: { Authorization: `Bearer ${token}` }
    //         });
    //         // setJobs(response.data.data);
    //         console.log(response.data.data);
    //     } catch (error) {
    //         console.error('Error fetching jobs:', error);
    //     }
    // };
    // useEffect(() => {
    //     fetchJobs();
    // }, []);
    // const jobs = [
    //     {
    //         title: "Frontend Developer",
    //         company: "Google Inc.",
    //         salary: "$80k-$100k",
    //         location: "San Francisco, CA",
    //         type: "Full-time",
    //         workMode: "Remote",
    //         status: "Interviewing",
    //         appliedDate: "2024-01-15"
    //     },
    //     {
    //         title: "UX Designer",
    //         company: "Apple Inc.",
    //         salary: "$70k-$90k",
    //         location: "Cupertino, CA",
    //         type: "Full-time",
    //         workMode: "On-site",
    //         status: "Applied",
    //         appliedDate: "2024-01-16"
    //     },
    //     {
    //         title: "Backend Developer",
    //         company: "Microsoft",
    //         salary: "$90k-$120k",
    //         location: "Seattle, WA",
    //         type: "Full-time",
    //         workMode: "Hybrid",
    //         status: "Pending",
    //         appliedDate: "2024-01-17"
    //     }
    // ];

    useEffect(() => {
        fetchJobs();
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

    return (
        <main className="flex-1 p-8 bg-gray-50">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                Welcome Back, {userName.toUpperCase()}!
            </h1>

            <div className="mb-6">
                <div className="flex justify-between items-center w-full">
                    <button
                        onClick={() => navigate('/add-job')}
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-colors"
                    >
                        <i className="fas fa-plus mr-2"></i>
                        Add New Job
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg flex items-center border border-gray-300 hover:bg-gray-50 transition-colors">
                        <i className="fas fa-filter mr-2"></i>
                        Filter
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                {jobs.map((job, index) => (
                    <JobCard2
                        key={index}
                        job={job}
                        onClick={() => {
                            setSelectedJob(job);
                            setShowModal(true);
                        }}
                    />
                ))}
            </div>

            {showModal && (
                <JobModal
                    job={selectedJob}
                    onClose={() => setShowModal(false)}
                    onUpdate={handleJobUpdate}
                    onDelete={handleJobDelete}
                />
            )}
        </main>
    );
};

export default CentralDashboard;