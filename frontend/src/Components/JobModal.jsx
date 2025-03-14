import React from 'react';

const JobModal = ({ job, onClose , onUpdate, onDelete}) => {
    const { title, company, salary, location, description, requirements, status, appliedDate } = job;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold">Job Details</h2>
                    <button 
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <div className="text-custom font-medium">{salary}</div>
                    </div>
                    
                    <p className="text-gray-600">{company}</p>
                    
                    <div className="flex items-center text-gray-500">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {location}
                    </div>
                    
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Job Description</h4>
                        <p className="text-gray-600">{description || 'Detailed job description goes here...'}</p>
                    </div>
                    
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-gray-600">
                            {requirements?.map((req, index) => (
                                <li key={index}>{req}</li>
                            )) || (
                                <>
                                    <li>5+ years of experience in frontend development</li>
                                    <li>Strong proficiency in JavaScript, HTML, CSS</li>
                                    <li>Experience with modern frameworks</li>
                                </>
                            )}
                        </ul>
                    </div>
                    
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Application Status</h4>
                        <div className="flex items-center justify-between">
                            <span className="text-yellow-600">Status: {status}</span>
                            <span className="text-gray-500">Applied: {appliedDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobModal;
  