import React from 'react';

const JobCard2 = ({ job, onClick }) => {
    const { title, company, salary, location, type, workMode, status, appliedDate } = job;

    return (
        <div 
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer relative w-full"
            onClick={onClick}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg truncate">{title}</h3>
                <div className="text-custom font-medium whitespace-nowrap">{salary}</div>
            </div>
            <p className="text-gray-600 mb-3 truncate">{company}</p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span className="truncate">{location}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{type}</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{workMode}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                    Status: <span className="text-yellow-600">{status}</span>
                </div>
                <div className="text-sm text-gray-500">Applied: {appliedDate}</div>
            </div>
            <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                    <button 
                        className="text-blue-600 hover:text-blue-700"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button 
                        className="text-red-600 hover:text-red-700"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                <div className="flex gap-2">
                    <button 
                        className="text-sm text-gray-600 hover:text-gray-800"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <i className="fas fa-bell mr-1"></i>
                        Follow up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard2;