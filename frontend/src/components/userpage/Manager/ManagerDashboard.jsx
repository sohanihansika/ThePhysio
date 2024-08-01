import React from 'react';
import { FaUsers, FaReceipt, FaCalendarCheck, FaDumbbell, FaUserTie } from "react-icons/fa6";
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default () => {
    const integrations = [
        {
            title: "Total Membership",
            desc: "500",
            path: "/membership",
            icon: <FaUsers />
        },
        {
            title: "Total Subscriptions",
            desc: "500",
            path: "/subscriptions",
            icon: <FaReceipt />
        },
        {
            title: "Coaches Count",
            desc: "10",
            path: "/coaches",
            icon: <FaUserTie />
        },
        {
            title: "Reservations",
            desc: "70",
            path: "/reservations",
            icon: <FaCalendarCheck />
        },
        {
            title: "Reports",
            desc: "0",
            path: "/reports",
            icon: <FaReceipt />
        },
    ];

    const weeklyReservationsData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Reservations',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(173, 216, 230, 1)',
                borderColor: 'rgba(64, 162, 235, 4)',
                borderWidth: 1,
            },
        ],
    };

    const paymentsData = {
        labels: ['Full Payment', 'Advanced Payment', 'Manual Payments'],
        datasets: [
            {
                label: 'Payments',
                data: [300, 150, 50],
                backgroundColor: [
                    'rgba(173, 216, 230, 1)',
                    'rgba(64, 162, 235, 4)',
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

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Liam James",
            email: "liamjames@example.com",
            last_login: "2024.04.04",
            last_logout: "2024.06.04",
            createdDate: "2022.04.08",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            last_login: "2024.06.10",
            last_logout: "2024.07.04",
            createdDate: "2022.06.08",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            last_login: "2024.07.04",
            last_logout: "2024.07.19",
            createdDate: "2023.04.15",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            last_login: "2024.07.24",
            last_logout: "2024.07.28",
            createdDate: "2022.09.02",
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            last_login: "2024.04.04",
            last_logout: "2024.05.14",
            createdDate: "2021.03.08",
        },
    ];

    return (
        <section className="py-2">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {
                integrations.map((item, idx) => (
                    <li key={idx} className="border rounded-lg bg-blue-100 p-2 shadow-md w-84 h-32">
                       <a href={item.path} className="w-full h-full">
                         <div className="flex items-center justify-between p-2 h-full">
                            <div className="flex items-center space-x-2">
                               <span className="text-4xl">{item.icon}</span>
                               <h4 className="text-gray-800 font-semibold text-lg">{item.title}</h4>
                             </div>
                             <p className="text-gray-600 text-4xl text-right w-1/2">{item.desc}</p>
                         </div>
                       </a>
                    </li>
                ))
            }
            </ul>
            </div>

            {/* Charts */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-3">Charts</h3>
                <div className="mt-6 flex flex-row gap-4">
                    <div className="w-full md:w-1/2 p-4 border rounded-lg">
                        <h4 className="text-gray-800 text-sm font-bold mt-3">Weekly Reservations</h4>
                        <div className="mt-3">
                            <Bar data={weeklyReservationsData} options={{ maintainAspectRatio: false }} height={200} />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 border rounded-lg">
                        <h4 className="text-gray-800 text-sm font-bold mt-3">Payments Distribution</h4>
                        <div className="mt-3">
                            <Pie data={paymentsData} options={{ maintainAspectRatio: false }} height={200} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="items-start justify-between md:flex">
                    <div className="max-w-lg">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-3">Activity Logs</h3>
                    </div>
                </div>
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Username</th>
                                <th className="py-3 px-6">Last Login</th>
                                <th className="py-3 px-6">Last Logout</th>
                                <th className="py-3 px-6">Created Date</th>
                                <th className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                            <span className="block text-gray-700 text-xs">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.last_login}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.last_logout}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.createdDate}</td>
                                    <td className="text-right px-6 whitespace-nowrap"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
