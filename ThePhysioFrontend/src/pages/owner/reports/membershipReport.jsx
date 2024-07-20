// src/components/reports/MembershipReport.js
import React from 'react';

const MembershipReport = () => {
  // Placeholder data for membership report
  const membershipData = [
    { member: 'Alice Johnson', status: 'Active', startDate: '2024-06-01', endDate: '2025-06-01' },
    { member: 'Bob Smith', status: 'Expired', startDate: '2023-06-01', endDate: '2024-06-01' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Membership Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border">Member Name</th>
            <th className="py-2 border">Status</th>
            <th className="py-2 border">Start Date</th>
            <th className="py-2 border">End Date</th>
          </tr>
        </thead>
        <tbody>
          {membershipData.map((membership, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border">{membership.member}</td>
              <td className="py-2 border">{membership.status}</td>
              <td className="py-2 border">{membership.startDate}</td>
              <td className="py-2 border">{membership.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembershipReport;
