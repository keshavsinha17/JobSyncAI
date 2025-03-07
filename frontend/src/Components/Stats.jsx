import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Stats = () => {
    const [timeRange, setTimeRange] = useState('30');

    const chartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Applications Sent',
                data: [15, 25, 40, 30],
                borderColor: 'rgb(59, 130, 246)',
                tension: 0.4
            },
            {
                label: 'Responses Received',
                data: [5, 10, 15, 12],
                borderColor: 'rgb(34, 197, 94)',
                tension: 0.4
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    };

    return (
        <main className="flex-1 p-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                Statistics
            </h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard 
                    title="Applications Sent"
                    value="124"
                    trend="+12% this month"
                    icon="fa-paper-plane"
                    iconColor="text-blue-500"
                />
                <StatCard 
                    title="Interviews Scheduled"
                    value="8"
                    trend="+3 this week"
                    icon="fa-calendar-check"
                    iconColor="text-purple-500"
                />
                <StatCard 
                    title="Response Rate"
                    value="32%"
                    trend="+5% this month"
                    icon="fa-chart-line"
                    iconColor="text-green-500"
                />
                <StatCard 
                    title="Offer Letters"
                    value="2"
                    trend="Pending responses"
                    icon="fa-file-contract"
                    iconColor="text-yellow-500"
                    trendColor="text-gray-500"
                />
            </div>

            {/* Recent Applications and Interviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
                    <div className="space-y-4">
                        <RecentApplication 
                            title="Senior Frontend Developer"
                            company="Google Inc."
                            time="2d ago"
                        />
                        <RecentApplication 
                            title="UX Designer"
                            company="Apple"
                            time="3d ago"
                        />
                        <RecentApplication 
                            title="Product Manager"
                            company="Microsoft"
                            time="5d ago"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Upcoming Interviews</h3>
                    <div className="space-y-4">
                        <InterviewCard 
                            title="Technical Interview"
                            company="Amazon"
                            position="Senior Frontend Developer"
                            time="Tomorrow at 10:00 AM"
                        />
                        <InterviewCard 
                            title="HR Round"
                            company="Netflix"
                            position="UI Engineer"
                            time="Dec 24, 2023 at 2:00 PM"
                        />
                    </div>
                </div>
            </div>

            {/* Chart and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-white rounded-xl p-6 shadow-sm col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Application Status</h3>
                        <select 
                            className="border-gray-300 rounded-lg text-sm"
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                        >
                            <option value="30">Last 30 days</option>
                            <option value="60">Last 60 days</option>
                            <option value="90">Last 90 days</option>
                        </select>
                    </div>
                    <div className="h-72 w-full">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <QuickActionButton 
                            icon="fa-edit"
                            text="Update Resume"
                            iconColor="text-blue-500"
                        />
                        <QuickActionButton 
                            icon="fa-search"
                            text="Job Search"
                            iconColor="text-green-500"
                        />
                        <QuickActionButton 
                            icon="fa-bell"
                            text="Notifications"
                            iconColor="text-yellow-500"
                        />
                        <QuickActionButton 
                            icon="fa-cog"
                            text="Settings"
                            iconColor="text-gray-500"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

// Helper Components
const StatCard = ({ title, value, trend, icon, iconColor, trendColor = "text-green-500" }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
            <i className={`fas ${icon} ${iconColor}`}></i>
        </div>
        <p className="text-3xl font-bold">{value}</p>
        <p className={`${trendColor} text-sm mt-2`}>
            {trendColor === "text-green-500" && <i className="fas fa-arrow-up"></i>} {trend}
        </p>
    </div>
);

const RecentApplication = ({ title, company, time }) => (
    <div className="flex items-center justify-between">
        <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-500">{company}</p>
        </div>
        <span className="text-blue-500 text-sm">{time}</span>
    </div>
);

const InterviewCard = ({ title, company, position, time }) => (
    <div className="p-4 border border-gray-200 rounded-lg">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{company} - {position}</p>
        <p className="text-sm text-blue-500 mt-2">{time}</p>
    </div>
);

const QuickActionButton = ({ icon, text, iconColor }) => (
    <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
        <span className="flex items-center">
            <i className={`fas ${icon} mr-3 ${iconColor}`}></i>
            {text}
        </span>
        <i className="fas fa-chevron-right text-gray-400"></i>
    </button>
);

export default Stats; 