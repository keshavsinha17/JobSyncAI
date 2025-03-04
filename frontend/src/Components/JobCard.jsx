import React, { useState } from 'react';
import axios from 'axios';

const JobCard = ({ job, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedJob, setEditedJob] = useState(job);

    const handleStatusChange = async (newStatus) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(
                `http://localhost:3000/api/jobs/${job._id}/status`,
                { status: newStatus },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            onUpdate(response.data.data);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(
                `http://localhost:3000/api/jobs/${job._id}`,
                editedJob,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            onUpdate(response.data.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating job:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(
                `http://localhost:3000/api/jobs/${job._id}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            onDelete(job._id);
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800',
        applied: 'bg-blue-100 text-blue-800',
        interviewing: 'bg-purple-100 text-purple-800',
        offered: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800'
    };

    if (isEditing) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <input
                    type="text"
                    value={editedJob.title}
                    onChange={(e) => setEditedJob({ ...editedJob, title: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Job Title"
                />
                <input
                    type="text"
                    value={editedJob.company}
                    onChange={(e) => setEditedJob({ ...editedJob, company: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Company"
                />
                <textarea
                    value={editedJob.description}
                    onChange={(e) => setEditedJob({ ...editedJob, description: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Description"
                />
                <input
                    type="text"
                    value={editedJob.salary}
                    onChange={(e) => setEditedJob({ ...editedJob, salary: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Salary"
                />
                <input
                    type="text"
                    value={editedJob.link}
                    onChange={(e) => setEditedJob({ ...editedJob, link: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Job Link"
                />
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${statusColors[job.status]}`}>
                    {job.status}
                </span>
            </div>
            
            <p className="text-gray-700 mb-4">{job.description}</p>
            
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-gray-600">Salary: {job.salary}</p>
                    <a 
                        href={job.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Job
                    </a>
                </div>
                <div className="flex space-x-2">
                    <select
                        value={job.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="pending">Pending</option>
                        <option value="applied">Applied</option>
                        <option value="interviewing">Interviewing</option>
                        <option value="offered">Offered</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <button
                        onClick={handleEdit}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
