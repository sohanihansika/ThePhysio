// src/components/reports/FinancialReport.js
import React from 'react';

const FinancialReport = () => {
  // Placeholder data for financial report
  const financialData = [
    { type: 'Revenue', amount: '$50,000', date: '2024-07-15' },
    { type: 'Expense', amount: '$20,000', date: '2024-07-16' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border">Type</th>
            <th className="py-2 border">Amount</th>
            <th className="py-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border">{entry.type}</td>
              <td className="py-2 border">{entry.amount}</td>
              <td className="py-2 border">{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialReport;
