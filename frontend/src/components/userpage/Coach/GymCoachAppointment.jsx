import React, { useState, useEffect } from 'react';
import { format, isAfter, isBefore, parseISO } from 'date-fns';

const GymCoachAppointment = () => {
  // Dummy data for appointments
  const [appointments] = useState([
    { id: 1, date: '2024-07-29', time: '10:00', user: 'John Doe' },
    { id: 2, date: '2024-07-29', time: '11:00', user: 'Jane Smith' },
    { id: 3, date: '2024-07-29', time: '09:00', user: 'Alice Johnson' },
    { id: 4, date: '2024-07-30', time: '10:00', user: 'Wade Wilson' },
    { id: 5, date: '2024-07-30', time: '11:00', user: 'Norman Johnson' },
    { id: 6, date: '2024-07-30', time: '13:00', user: 'Bruise Johnson' },
    { id: 7, date: '2024-07-31', time: '09:00', user: 'Alice Doe' },
    { id: 8, date: '2024-07-31', time: '10:00', user: 'Alice Mendez' },
    { id: 9, date: '2024-07-28', time: '09:00', user: 'Douglas Johnson' },
    { id: 10, date: '2024-08-07', time: '09:00', user: 'Michael Johnson' },
    { id: 11, date: '2024-08-08', time: '09:00', user: 'Tineesha Johnson' },
    { id: 12, date: '2024-08-08', time: '11:00', user: 'Samadhi Johnson' }
  ]);

  const currentDateTime = new Date();

  const completedAppointments = appointments.filter(appointment =>
    isBefore(parseISO(`${appointment.date}T${appointment.time}:00`), currentDateTime)
  );

  const upcomingAppointments = appointments.filter(appointment =>
    isAfter(parseISO(`${appointment.date}T${appointment.time}:00`), currentDateTime)
  );

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold text-gray-800 mt-6">Completed Appointments</h3>
      {completedAppointments.length > 0 ? (
        <table className="table-auto w-full mt-4 border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-center text-gray-700">Date</th>
              <th className="border px-4 py-2 text-center text-gray-700">Time</th>
              <th className="border px-4 py-2 text-center text-gray-700">User</th>
            </tr>
          </thead>
          <tbody>
            {completedAppointments.map(appointment => (
              <tr key={appointment.id} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition-all">
                <td className="border px-4 py-2 text-center">{appointment.date}</td>
                <td className="border px-4 py-2 text-center">{appointment.time}</td>
                <td className="border px-4 py-2 text-center">{appointment.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4 text-center text-gray-600">No Completed Appointments</p>
      )}

      <h3 className="text-2xl font-bold text-gray-800 mt-6">Upcoming Appointments</h3>
      {upcomingAppointments.length > 0 ? (
        <table className="table-auto w-full mt-4 border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-center text-gray-700">Date</th>
              <th className="border px-4 py-2 text-center text-gray-700">Time</th>
              <th className="border px-4 py-2 text-center text-gray-700">User</th>
            </tr>
          </thead>
          <tbody>
            {upcomingAppointments.map(appointment => (
              <tr key={appointment.id} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition-all">
                <td className="border px-4 py-2 text-center">{appointment.date}</td>
                <td className="border px-4 py-2 text-center">{appointment.time}</td>
                <td className="border px-4 py-2 text-center">{appointment.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4 text-center text-gray-600">No Upcoming Appointments</p>
      )}
    </div>
  );
};

export default GymCoachAppointment;
