// src/components/reports/ClassAttendanceReport.js
import React from 'react';

const ClassAttendanceReport = () => {
  // Placeholder data for class attendance report
  const attendanceData = [
    { class: 'Yoga', attendees: 15, date: '2024-07-15' },
    { class: 'Pilates', attendees: 12, date: '2024-07-16' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Class Attendance Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border">Class</th>
            <th className="py-2 border">Attendees</th>
            <th className="py-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border">{attendance.class}</td>
              <td className="py-2 border">{attendance.attendees}</td>
              <td className="py-2 border">{attendance.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassAttendanceReport;
