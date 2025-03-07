import React, { useState } from 'react';
import JobCard2 from '../Components/JobCard2';
import JobModal from '../Components/JobModal';

const CentralDashboard = ({ userName }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            title: "Frontend Developer",
            company: "Google Inc.",
            salary: "$80k-$100k",
            location: "San Francisco, CA",
            type: "Full-time",
            workMode: "Remote",
            status: "Interviewing",
            appliedDate: "2024-01-15"
        },
        {
            title: "UX Designer",
            company: "Apple Inc.",
            salary: "$70k-$90k",
            location: "Cupertino, CA",
            type: "Full-time",
            workMode: "On-site",
            status: "Applied",
            appliedDate: "2024-01-16"
        },
        {
            title: "Backend Developer",
            company: "Microsoft",
            salary: "$90k-$120k",
            location: "Seattle, WA",
            type: "Full-time",
            workMode: "Hybrid",
            status: "Pending",
            appliedDate: "2024-01-17"
        }
    ];

    return (
        <main className="flex-1 p-8 bg-gray-50">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                Welcome Back, {userName.toUpperCase()}!
            </h1>
            
            <div className="mb-6">
                <div className="flex justify-between items-center w-full">
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
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
                />
            )}
        </main>
    );
};

export default CentralDashboard;