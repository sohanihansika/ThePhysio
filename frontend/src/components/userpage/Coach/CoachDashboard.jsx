import React, { useRef } from 'react';
import { FaCalendarCheck, FaUsers } from 'react-icons/fa';
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import subscribersData from './subscribersData';
import { tableItemsOngoing, tableItemsUpcoming } from './GymCoachAppointment';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const CoachDashboard = () => {
  const todayAppointmentsRef = useRef(null);

  // Combine ongoing and upcoming appointments
  const combinedAppointments = [...tableItemsOngoing, ...tableItemsUpcoming];

  // Get the start and end of the current week
  const startOfCurrentWeek = startOfWeek(new Date());
  const endOfCurrentWeek = endOfWeek(new Date());

  // Get the start and end of the current month
  const startOfCurrentMonth = startOfMonth(new Date());
  const endOfCurrentMonth = endOfMonth(new Date());

  // Filter weekly and monthly appointments using combinedAppointments
  const weeklyAppointments = combinedAppointments.filter(appointment =>
    new Date(appointment.date) >= startOfCurrentWeek && new Date(appointment.date) <= endOfCurrentWeek
  );

  const monthlyAppointments = combinedAppointments.filter(appointment =>
    new Date(appointment.date) >= startOfCurrentMonth && new Date(appointment.date) <= endOfCurrentMonth
  );

  // Prepare data for bar charts
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Appointments',
        data: Array(7).fill(0).map((_, idx) => weeklyAppointments.filter(appointment => new Date(appointment.date).getDay() === (idx + 1) % 7).length),
        backgroundColor: 'rgba(66, 133, 244, 0.6)', // Light blue
        borderColor: 'rgba(66, 133, 244, 1)', // Darker blue
        borderWidth: 2 // Set border width for individual bars
      }
    ]
  };

  const monthlyData = {
    labels: Array.from({ length: endOfCurrentMonth.getDate() }, (_, idx) => idx + 1),
    datasets: [
      {
        label: 'Appointments',
        data: Array(endOfCurrentMonth.getDate()).fill(0).map((_, idx) => monthlyAppointments.filter(appointment => new Date(appointment.date).getDate() === idx + 1).length),
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Light blue
        borderColor: 'rgba(54, 162, 235, 1)', // Darker blue
        borderWidth: 2 // Set border width for individual bars
      }
    ]
  };

  // Prepare data for pie chart
  const pieData = {
    labels: Object.keys(subscribersData),
    datasets: [
      {
        label: 'Subscriber Distribution',
        data: Object.values(subscribersData).map(group => group.length),
        backgroundColor: [
          'rgba(66, 133, 244, 0.6)', // Light blue
          'rgba(33, 150, 243, 0.6)', // Slightly darker blue
          'rgba(100, 181, 246, 0.6)', // Lightest blue
          'rgba(41, 98, 255, 0.6)', // Darker blue
          'rgba(0, 77, 255, 0.6)', // Even darker blue
          'rgba(0, 51, 204, 0.6)'  // Deep blue
        ],
        borderColor: [
          'rgba(66, 133, 244, 1)', // Darker blue
          'rgba(33, 150, 243, 1)', // Slightly darker blue
          'rgba(100, 181, 246, 1)', // Lightest blue
          'rgba(41, 98, 255, 1)', // Darker blue
          'rgba(0, 77, 255, 1)', // Even darker blue
          'rgba(0, 51, 204, 1)'  // Deep blue
        ],
        borderWidth: 2 // Set border width for individual segments
      }
    ]
  };

  const totalSubscribers = Object.values(subscribersData).reduce((total, subscribers) => total + subscribers.length, 0);

  const integrations = [
    {
      title: "Today's Sessions",
      desc: combinedAppointments.length.toString(), // Using combinedAppointments length
      path: "#",
      icon: <FaCalendarCheck />,
      action: () => {
        todayAppointmentsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: "Subscribers",
      desc: totalSubscribers.toString(), // Convert totalSubscribers to string
      path: "/subscriptionPlans",
      icon: <FaUsers />
    }
  ];

  return (
    <section className='py-2'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-1'>
        <ul className="mt-5 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
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
        <div ref={todayAppointmentsRef} className='mt-16'>
          <h3 className="text-2xl font-bold text-gray-800">Today's Appointments</h3>
          {combinedAppointments.length > 0 ? (
            <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                  <tr>
                    <th className="py-3 px-6">Time</th>
                    <th className="py-3 px-6">Member Name</th>
                    <th className="py-3 px-6">Session Type</th>
                  </tr>
                </thead>
                <tbody className="text-black divide-y">
                  {combinedAppointments.map(appointment => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.session}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-4 text-center text-gray-600">No Appointments Today</p>
          )}
        </div>
        <div className='mt-16 flex gap-28'> 
          <div className='py-3 '>
            <h3 className="text-xl font-bold text-gray-800 ">Weekly Appointments</h3>
            <div className="chart-container mb-8 border-2 border-gray-300 p-4 rounded-lg shadow-lg flex items-center justify-center " style={{ width: '400px', height: '300px' }}> 
              <Bar data={weeklyData} options={{ responsive: true, plugins: { legend: { display: false }, title: { display: true, text: 'Weekly Appointments' } } }} />
            </div>
          </div>
          <div className='py-2  '>
            <h3 className="text-xl font-bold text-gray-800">Subscriber Distribution</h3>
            <div className="chart-container mb-4 border-2 border-gray-300 p-4 rounded-lg shadow-lg  " style={{ width: '400px', height: '300px' }}> {/* Increased padding and added shadow */}
              <Pie 
                data={pieData} 
                options={{
                  responsive: true, 
                  plugins: {
                    legend: {
                      position: 'right', // Position the legend at the bottom
                      labels: {
                        boxWidth: 10,
                        padding: 20
                      }
                    }, 
                    tooltip: { 
                      callbacks: { 
                        label: (context) => `${context.label}: ${context.raw}` 
                      }
                    }
                  }
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachDashboard;
