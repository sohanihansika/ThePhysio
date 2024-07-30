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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-7">
      <div className="w-full mb-16 flex items-center">
        <div className="relative flex-grow">
          <h1 className="text-3xl font-bold mb-4 text-black" style={{ marginLeft: '-1rem' }}>
            Schedules
          </h1>
        </div>
        <div className="w-full max-w-md">
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Search by date"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#000000]">Physiotherapy Sessions</h2>
        <table className="min-w-full bg-gray-100 border border-[#150A7D] shadow-md rounded-lg">
          <thead className="bg-[#150A7D] text-white">
            <tr>
              <th className="py-3 px-4 border-b">Patient Name</th>
              <th className="py-3 px-4 border-b">Physiotherapist</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Time Slot</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {filterSchedulesByDate(physioSchedules).length > 0 ? (
              filterSchedulesByDate(physioSchedules).map((schedule, index) => (
                <tr key={index} className="text-center">
                  <td className="py-3 px-4 border-b">{schedule.patientName}</td>
                  <td className="py-3 px-4 border-b">{schedule.physiotherapist}</td>
                  <td className="py-3 px-4 border-b">{schedule.date}</td>
                  <td className="py-3 px-4 border-b">{schedule.timeSlot}</td>
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
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#000000]">Gym Sessions</h2>
          <table className="min-w-full bg-gray-100 border border-[#150A7D] shadow-md rounded-lg">
            <thead className="bg-[#150A7D] text-white">
              <tr>
                <th className="py-3 px-4 border-b">Gym Member</th>
                <th className="py-3 px-4 border-b">Gym Coach</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Time Slot</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {filterSchedulesByDate(gymSchedules).length > 0 ? (
                filterSchedulesByDate(gymSchedules).map((schedule, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-3 px-4 border-b">{schedule.gymMember}</td>
                    <td className="py-3 px-4 border-b">{schedule.gymCoach}</td>
                    <td className="py-3 px-4 border-b">{schedule.date}</td>
                    <td className="py-3 px-4 border-b">{schedule.timeSlot}</td>
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
    </div>
  );
};

export default SchedulePage;
