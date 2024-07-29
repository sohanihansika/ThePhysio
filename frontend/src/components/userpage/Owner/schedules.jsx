import React, { useState } from 'react';

const SchedulePage = () => {
  const [searchDate, setSearchDate] = useState('');

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
    {
      patientName: 'Emily Davis',
      physiotherapist: 'Dr. Lee',
      date: '2024-07-22',
      timeSlot: '11:00 AM - 12:00 PM',
    },
    {
      patientName: 'Michael Wilson',
      physiotherapist: 'Dr. Green',
      date: '2024-07-23',
      timeSlot: '03:00 PM - 04:00 PM',
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
    {
      gymMember: 'Sarah Brown',
      gymCoach: 'Coach Davis',
      date: '2024-07-22',
      timeSlot: '06:00 PM - 07:00 PM',
    },
    {
      gymMember: 'James White',
      gymCoach: 'Coach Clark',
      date: '2024-07-23',
      timeSlot: '07:00 AM - 08:00 AM',
    },
    // Add more gym schedules here
  ];

  const filterSchedulesByDate = (schedules) => {
    return schedules.filter(schedule =>
      schedule.date.includes(searchDate)
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#000000]">Schedules</h1>
      <div className="mb-6 w-full max-w-md">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Search by date"
        />
      </div>

      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#000000]">Physiotherapy Sessions</h2>
        <table className="min-w-full bg-white border border-[#150A7D] shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Patient Name</th>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Physiotherapist</th>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Date</th>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {filterSchedulesByDate(physioSchedules).length > 0 ? (
              filterSchedulesByDate(physioSchedules).map((schedule, index) => (
                <tr key={index} className="text-center">
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.patientName}</td>
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.physiotherapist}</td>
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.date}</td>
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.timeSlot}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-700">No schedules found for the selected date.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-[#000000]">Gym Sessions</h2>
        <table className="min-w-full bg-white border border-[#150A7D] shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Gym Member</th>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Gym Coach</th>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Date</th>
              <th className="py-3 px-4 border-b border-[#150A7D] text-[#150A7D]">Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {filterSchedulesByDate(gymSchedules).length > 0 ? (
              filterSchedulesByDate(gymSchedules).map((schedule, index) => (
                <tr key={index} className="text-center">
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.gymMember}</td>
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.gymCoach}</td>
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.date}</td>
                  <td className="py-3 px-4 border-b border-[#150A7D]">{schedule.timeSlot}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-700">No schedules found for the selected date.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePage;
