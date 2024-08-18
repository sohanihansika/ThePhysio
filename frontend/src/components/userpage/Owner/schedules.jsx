import React, { useState, useEffect } from 'react';

// Sample data for schedules
const physiotherapySchedules = [
  { patientName: 'John Doe', physiotherapist: 'Smith', date: '2024-07-20', timeSlot: '10:00 AM - 11:00 AM' },
  { patientName: 'Jane Roe', physiotherapist: 'Brown', date: '2024-07-21', timeSlot: '02:00 PM - 03:00 PM' },
  { patientName: 'Emily Davis', physiotherapist: 'Lee', date: '2024-07-22', timeSlot: '11:00 AM - 12:00 PM' },
  { patientName: 'Michael Wilson', physiotherapist: 'Green', date: '2024-07-23', timeSlot: '03:00 PM - 04:00 PM' },
];

const gymSchedules = [
  { gymMember: 'Alice Johnson', gymCoach: 'Williams', date: '2024-07-20', timeSlot: '09:00 AM - 10:00 AM' },
  { gymMember: 'Bob Smith', gymCoach: 'Taylor', date: '2024-07-21', timeSlot: '04:00 PM - 05:00 PM' },
  { gymMember: 'Sarah Brown', gymCoach: 'Davis', date: '2024-07-22', timeSlot: '06:00 PM - 07:00 PM' },
  { gymMember: 'James White', gymCoach: 'Clark', date: '2024-07-23', timeSlot: '07:00 AM - 08:00 AM' },
];

const Schedules = () => {
  const [searchDate, setSearchDate] = useState('');
  const [searchTime, setSearchTime] = useState('');
  const [scheduleType, setScheduleType] = useState('both');

  // Filter schedules based on the selected date and time
  const filterSchedules = (schedules) => {
    return schedules.filter(schedule =>
      (schedule.date.includes(searchDate) &&
      (searchTime === '' || schedule.timeSlot.replace(/[^0-9]/g, '').includes(searchTime)))
    );
  };

  return (
    <div
      className="min-h-screen p-4"
      
    >
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-md mr-2"
              style={{ width: '200px' }}
            />
            <input
              type="text"
              placeholder="Search by time..."
              value={searchTime}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setSearchTime(value);
                }
              }}
              className="border border-gray-300 p-2 rounded-md ml-2"
              style={{ width: '200px' }}
            />
            <select
              value={scheduleType}
              onChange={(e) => setScheduleType(e.target.value)}
              className="border border-gray-300 p-2 rounded-md ml-2"
              style={{ width: '200px' }}
            >
              <option value="both">All Schedules</option>
              <option value="clinic">Physiotherapy Clinic</option>
              <option value="gym">Gym</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {(scheduleType === 'both' || scheduleType === 'clinic') && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#172b59]">Physiotherapy Schedules</h2>
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
              <thead className="bg-gray-300 text-white">
                <tr>
                  <th className="py-3 px-4 border-b">Patient Name</th>
                  <th className="py-3 px-4 border-b">Physiotherapist</th>
                  <th className="py-3 px-4 border-b">Date</th>
                  <th className="py-3 px-4 border-b">Time Slot</th>
                </tr>
              </thead>
              <tbody className="bg-gray-50">
                {filterSchedules(physiotherapySchedules).length > 0 ? (
                  filterSchedules(physiotherapySchedules).map((schedule, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-3 px-4 border-b">{schedule.patientName}</td>
                      <td className="py-3 px-4 border-b">{schedule.physiotherapist}</td>
                      <td className="py-3 px-4 border-b">{schedule.date}</td>
                      <td className="py-3 px-4 border-b">{schedule.timeSlot}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-3 px-4 text-center text-gray-700">No schedules found for the selected filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        {(scheduleType === 'both' || scheduleType === 'gym') && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#172b59]">Gym Schedules</h2>
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
              <thead className="bg-gray-300 text-white">
                <tr>
                  <th className="py-3 px-4 border-b">Gym Member</th>
                  <th className="py-3 px-4 border-b">Gym Coach</th>
                  <th className="py-3 px-4 border-b">Date</th>
                  <th className="py-3 px-4 border-b">Time Slot</th>
                </tr>
              </thead>
              <tbody className="bg-gray-50">
                {filterSchedules(gymSchedules).length > 0 ? (
                  filterSchedules(gymSchedules).map((schedule, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-3 px-4 border-b">{schedule.gymMember}</td>
                      <td className="py-3 px-4 border-b">{schedule.gymCoach}</td>
                      <td className="py-3 px-4 border-b">{schedule.date}</td>
                      <td className="py-3 px-4 border-b">{schedule.timeSlot}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-3 px-4 text-center text-gray-700">No schedules found for the selected filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedules;
