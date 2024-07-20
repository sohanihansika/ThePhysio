// src/components/reports/OperationalEfficiencyReport.js
import React from 'react';

const OperationalEfficiencyReport = () => {
  // Placeholder data for operational efficiency report
  const efficiencyData = [
    { facility: 'Gym', utilizationRate: '80%', energyConsumption: '200 kWh', date: '2024-07-15' },
    { facility: 'Clinic', utilizationRate: '90%', energyConsumption: '150 kWh', date: '2024-07-16' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Operational Efficiency Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border">Facility</th>
            <th className="py-2 border">Utilization Rate</th>
            <th className="py-2 border">Energy Consumption</th>
            <th className="py-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {efficiencyData.map((efficiency, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border">{efficiency.facility}</td>
              <td className="py-2 border">{efficiency.utilizationRate}</td>
              <td className="py-2 border">{efficiency.energyConsumption}</td>
              <td className="py-2 border">{efficiency.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OperationalEfficiencyReport;
