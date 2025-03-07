import React, { useState } from 'react';

const Score = () => {
    const [selectedPosition, setSelectedPosition] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFile(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log({
            selectedPosition,
            jobTitle,
            companyName,
            jobDescription,
            file
        });
    };

    return (
        <main className="flex-1 p-8">
            <div className="max-w-3xl mx-auto">
            {/* <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                Check Your Score
            </h1> */}
                <div className="bg-white rounded-lg shadow p-6 space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Select Job Position
                            </label>
                            <select 
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-custom focus:ring-custom"
                                value={selectedPosition}
                                onChange={(e) => setSelectedPosition(e.target.value)}
                            >
                                <option value="">Choose a position...</option>
                                <option value="frontend">Frontend Developer</option>
                                <option value="backend">Backend Developer</option>
                                <option value="fullstack">Full Stack Developer</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div id="manual-job-form" className="space-y-4">
                            {/* <div> */}
                                {/* <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Title
                                </label> */}
                                {/* <input 
                                    type="text" 
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-custom focus:ring-custom" 
                                    placeholder="Enter job title"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                            </div> */}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company Name
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-custom focus:ring-custom" 
                                    placeholder="Enter company name"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Description
                                </label>
                                <textarea 
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-custom focus:ring-custom h-32" 
                                    placeholder="Enter job description"
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Resume
                            </label>
                            <div 
                                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <div className="space-y-1 text-center">
                                    <svg 
                                        className="mx-auto h-12 w-12 text-gray-400" 
                                        stroke="currentColor" 
                                        fill="none" 
                                        viewBox="0 0 48 48"
                                    >
                                        <path 
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600 justify-center">
                                        <label className="relative cursor-pointer rounded-md font-medium text-custom hover:text-custom-dark">
                                            <span>Upload a file</span>
                                            <input 
                                                type="file" 
                                                className="sr-only"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PDF, DOC, DOCX up to 10MB
                                    </p>
                                    {file && (
                                        <p className="text-sm text-green-600">
                                            Selected file: {file.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-custom text-white py-2 px-4 rounded-lg hover:bg-custom-dark transition-colors mt-4"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Score; 


