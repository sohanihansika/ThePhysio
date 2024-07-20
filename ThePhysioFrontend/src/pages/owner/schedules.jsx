// src/components/SchedulePage.js

import React from 'react';

const SchedulePage = () => {
  const physioSchedules = [
    {
      patientName: 'John Doe',
      physiotherapist: 'Dr. Smith',
      date: '2024-07-20',
      timeSlot: '10:00 AM - 11:00 AM',
    },
    {
      patientName: 'Jane Roe',
      physiotherapist: 'Dr. Brown',
      date: '2024-07-21',
      timeSlot: '02:00 PM - 03:00 PM',
    },
    // Add more physiotherapy schedules here
  ];

  const gymSchedules = [
    {
      gymMember: 'Alice Johnson',
      gymCoach: 'Coach Williams',
      date: '2024-07-20',
      timeSlot: '09:00 AM - 10:00 AM',
    },
    {
      gymMember: 'Bob Smith',
      gymCoach: 'Coach Taylor',
      date: '2024-07-21',
      timeSlot: '04:00 PM - 05:00 PM',
    },
    // Add more gym schedules here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#150A7D]">Schedules</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-[#000000]">Physiotherapy Sessions</h2>
        <table className="min-w-full bg-white border border-[#150A7D]">
          <thead>
            <tr>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Patient Name</th>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Physiotherapist</th>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Date</th>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {physioSchedules.map((schedule, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 border-b border-[#150A7D]">{schedule.patientName}</td>
                <td className="py-2 border-b border-[#150A7D]">{schedule.physiotherapist}</td>
                <td className="py-2 border-b border-[#150A7D]">{schedule.date}</td>
                <td className="py-2 border-b border-[#150A7D]">{schedule.timeSlot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#000000]">Gym Sessions</h2>
        <table className="min-w-full bg-white border border-[#150A7D]">
          <thead>
            <tr>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Gym Member</th>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Gym Coach</th>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Date</th>
              <th className="py-2 border-b border-[#150A7D] text-[#150A7D]">Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {gymSchedules.map((schedule, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 border-b border-[#150A7D]">{schedule.gymMember}</td>
                <td className="py-2 border-b border-[#150A7D]">{schedule.gymCoach}</td>
                <td className="py-2 border-b border-[#150A7D]">{schedule.date}</td>
                <td className="py-2 border-b border-[#150A7D]">{schedule.timeSlot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePage;
