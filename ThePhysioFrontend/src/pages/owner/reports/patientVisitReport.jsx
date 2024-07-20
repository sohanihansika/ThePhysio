// src/components/reports/PatientVisitReport.js
import React from 'react';

const PatientVisitReport = () => {
  // Placeholder data for patient visits
  const patientVisits = [
    { name: 'John Doe', date: '2024-07-15', treatment: 'Physical Therapy', age: 30, gender: 'Male' },
    { name: 'Jane Roe', date: '2024-07-16', treatment: 'Massage Therapy', age: 25, gender: 'Female' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Visit Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border">Patient Name</th>
            <th className="py-2 border">Date</th>
            <th className="py-2 border">Treatment</th>
            <th className="py-2 border">Age</th>
            <th className="py-2 border">Gender</th>
          </tr>
        </thead>
        <tbody>
          {patientVisits.map((visit, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border">{visit.name}</td>
              <td className="py-2 border">{visit.date}</td>
              <td className="py-2 border">{visit.treatment}</td>
              <td className="py-2 border">{visit.age}</td>
              <td className="py-2 border">{visit.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientVisitReport;
