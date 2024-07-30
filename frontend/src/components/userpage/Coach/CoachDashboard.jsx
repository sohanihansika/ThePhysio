import React, { useState } from 'react';
import { FaCalendarCheck, FaVideo, FaComment } from 'react-icons/fa6';
import { isToday, startOfWeek, endOfWeek, startOfMonth, endOfMonth, format } from 'date-fns';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CoachDashboard = () => {
  const integrations = [
    {
      title: "Appointments",
      desc: "12",
      path: "/coachAppointment",
      icon: <FaCalendarCheck />
    },
    {
      title: "Advertisements",
      desc: "3",
      path: "/video-advertisements",
      icon: <FaVideo />
    },
    {
      title: "Reviews",
      desc: "10",
      path: "/ViewReviews",
      icon: <FaComment />
    }
  ];

  // Dummy data for appointments
  const [appointments] = useState([
    { id: 1, date: '2024-07-29', time: '10:00', user: 'John Doe' },
    { id: 2, date: '2024-07-29', time: '11:00', user: 'Jane Smith' },
    { id: 3, date: '2024-07-29', time: '09:00', user: 'Alice Johnson' },
    { id: 4, date: '2024-07-30', time: '10:00', user: 'Wade Wilson' },
    { id: 5, date: '2024-07-30', time: '11:00', user: 'Norman Johnson' },
    { id: 6, date: '2024-07-30', time: '13:00', user: 'Bruise Johnson' },
    { id: 7, date: '2024-08-31', time: '09:00', user: 'Alice Doe' },
    { id: 8, date: '2024-08-05', time: '10:00', user: 'Alice Mendez' },
    { id: 9, date: '2024-07-28', time: '09:00', user: 'Douglas Johnson' },
    { id: 10, date: '2024-08-07', time: '09:00', user: 'Michael Johnson' },
    { id: 11, date: '2024-08-08', time: '09:00', user: 'Tineesha Johnson' },
    { id: 12, date: '2024-08-08', time: '11:00', user: 'Samadhi Johnson' }
  ]);

  // Filter today's appointments
  const todayAppointments = appointments.filter(appointment =>
    isToday(new Date(appointment.date))
  );

  // Get the start and end of the current week
  const startOfCurrentWeek = startOfWeek(new Date());
  const endOfCurrentWeek = endOfWeek(new Date());

  // Get the start and end of the current month
  const startOfCurrentMonth = startOfMonth(new Date());
  const endOfCurrentMonth = endOfMonth(new Date());

  // Filter weekly and monthly appointments
  const weeklyAppointments = appointments.filter(appointment =>
    new Date(appointment.date) >= startOfCurrentWeek && new Date(appointment.date) <= endOfCurrentWeek
  );

  const monthlyAppointments = appointments.filter(appointment =>
    new Date(appointment.date) >= startOfCurrentMonth && new Date(appointment.date) <= endOfCurrentMonth
  );

  // Prepare data for bar charts
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Appointments',
        data: Array(7).fill(0).map((_, idx) => weeklyAppointments.filter(appointment => new Date(appointment.date).getDay() === (idx + 1) % 7).length),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const monthlyData = {
    labels: Array.from({ length: endOfCurrentMonth.getDate() }, (_, idx) => idx + 1),
    datasets: [
      {
        label: 'Appointments',
        data: Array(endOfCurrentMonth.getDate()).fill(0).map((_, idx) => monthlyAppointments.filter(appointment => new Date(appointment.date).getDate() === idx + 1).length),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <section className='py-2'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <ul className='mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {integrations.map((item, idx) => (
            <li key={idx} className="border rounded-2xl bg-blue-100 p-4 shadow-md hover:bg-blue-200 transition-colors">
              <div className="flex items-start justify-center">
                <div className="space-y-2">
                  <a href={item.path}>
                    <div className="flex-shrink-0 items-center text-center">
                      <span className="text-6xl mb-2">{item.icon}</span>
                      <h4 className="text-gray-800 font-semibold text-xl mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-lg">{item.desc}</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-16'>
          <h3 className="text-2xl font-bold text-gray-800">Today's Appointments</h3>
          {todayAppointments.length > 0 ? (
            <table className="table-auto w-full mt-4 border-collapse border border-gray-300 shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2 text-center text-gray-700">Date</th>
                  <th className="border px-4 py-2 text-center text-gray-700">Time</th>
                  <th className="border px-4 py-2 text-center text-gray-700">User</th>
                </tr>
              </thead>
              <tbody>
                {todayAppointments.map(appointment => (
                  <tr key={appointment.id} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition-all">
                    <td className="border px-4 py-2 text-center">{appointment.date}</td>
                    <td className="border px-4 py-2 text-center">{appointment.time}</td>
                    <td className="border px-4 py-2 text-center">{appointment.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="mt-4 text-center text-gray-600">No Appointments Today</p>
          )}
        </div>
        <div className='mt-16 flex flex-col lg:flex-row lg:space-x-4'>
          <div className='lg:w-1/2'>
            <h3 className="text-2xl font-bold text-gray-800">Weekly Appointments</h3>
            <Bar data={weeklyData} options={{ responsive: true, plugins: { legend: { display: false }, title: { display: true, text: 'Weekly Appointments' } } }} />
          </div>
          <div className='lg:w-1/2 mt-8 lg:mt-0'>
            <h3 className="text-2xl font-bold text-gray-800">Monthly Appointments</h3>
            <Bar data={monthlyData} options={{ responsive: true, plugins: { legend: { display: false }, title: { display: true, text: 'Monthly Appointments' } } }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachDashboard;
