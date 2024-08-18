import React from 'react';
import { FaUsers, FaReceipt, FaCalendarCheck, FaRegClock, FaRegFileAlt } from 'react-icons/fa';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminDashboard = () => {
    const metrics = [
        {
            title: "Total Users",
            desc: "150",
            path: "/users",
            icon: <FaUsers />
        },
        {
            title: "Reservations",
            desc: "120",
            path: "/reservations",
            icon: <FaCalendarCheck />
        },
        {
            title: "Pending Reports",
            desc: "5",
            path: "/reports",
            icon: <FaReceipt />
        },
        {
            title: "Active Sessions",
            desc: "35",
            path: "/sessions",
            icon: <FaRegClock />
        },
        {
            title: "Recent Updates",
            desc: "3",
            path: "/updates",
            icon: <FaRegFileAlt />
        },
    ];

    const weeklyReservationsData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Reservations',
                data: [15, 25, 30, 35, 40, 45, 50],
                backgroundColor: 'rgba(173, 216, 230, 1)',
                borderColor: 'rgba(64, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const paymentsData = {
        labels: ['Full Payment', 'Advanced Payment', 'Manual Payments'],
        datasets: [
            {
                label: 'Payments',
                data: [500, 250, 100],
                backgroundColor: [
                    'rgba(173, 216, 230, 1)',
                    'rgba(64, 162, 235, 1)',
                    'rgba(23, 43, 89, 1)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const recentUpdates = [
        {
            date: "2024-07-29",
            update: "System maintenance completed successfully."
        },
        {
            date: "2024-07-15",
            update: "New features added to the user dashboard."
        },
        {
            date: "2024-07-01",
            update: "Resolved security vulnerabilities."
        },
    ];

    return (
        <section className="py-4">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8">
                {/* Metrics Cards */}
                <ul className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {metrics.map((item, idx) => (
                    <li key={idx} className="border rounded-lg bg-blue-100 p-4 shadow-md flex flex-col justify-between w-full w-84 h-32">
                        <a href={item.path} className="w-full h-full flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                    <span className="text-4xl">{item.icon}</span>
                                    <h4 className="text-gray-800 font-semibold text-lg">{item.title}</h4>
                                </div>
                                <p className="text-gray-600 text-4xl text-right">{item.desc}</p>
                            </div>
                        </a>
                    </li>
                ))}
                </ul>

                {/* Charts */}
                <div className="mt-12">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-3">Insights and Analytics</h3>
                    <div className="mt-6 flex flex-row gap-4">
                        <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
                            <h4 className="text-gray-800 text-sm font-bold mt-3">Weekly Reservations</h4>
                            <div className="mt-3">
                                <Bar data={weeklyReservationsData} options={{ maintainAspectRatio: false }} height={200} />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
                            <h4 className="text-gray-800 text-sm font-bold mt-3">Payments Distribution</h4>
                            <div className="mt-3">
                                <Pie data={paymentsData} options={{ maintainAspectRatio: false }} height={200} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Updates */}
                <div className="mt-12">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-3">Recent System Updates</h3>
                    <div className="mt-6 space-y-4">
                        {recentUpdates.map((update, idx) => (
                            <div key={idx} className="p-4 border rounded-lg shadow-md bg-white flex items-start space-x-4">
                                <div className="text-blue-500">
                                    <FaRegClock className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-gray-700 text-sm font-medium">{update.date}</p>
                                    <p className="text-gray-900 mt-1">{update.update}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
