import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const dummyData = {
  customerFeedback: [
    { name: 'John Doe', feedback: 'Excellent service!', date: '2024-07-25' },
    { name: 'Jane Smith', feedback: 'Very satisfied with the service.', date: '2024-07-26' },
    { name: 'Michael Brown', feedback: 'Good experience.', date: '2024-07-25' },
  ],
  membership: [
    { memberId: '12345', name: 'Mark Johnson', status: 'Active', startDate: '2024-07-25' },
    { memberId: '67890', name: 'Emily Davis', status: 'Inactive', startDate: '2024-07-26' },
    { memberId: '54321', name: 'Linda White', status: 'Active', startDate: '2024-07-25' },
  ],
  financial: [
    { month: 'July', year: '2024', revenue: '$10,000', expenses: '$5,000', date: '2024-07-25' },
    { month: 'June', year: '2024', revenue: '$8,000', expenses: '$4,000', date: '2024-06-30' },
    { month: 'July', year: '2024', revenue: '$10,500', expenses: '$5,200', date: '2024-07-26' },
  ],
};

const ReportSelector = () => {
  const [selectedReport, setSelectedReport] = useState('customerFeedback');
  const [selectedDate, setSelectedDate] = useState('');

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleGenerateReport = () => {
    const doc = new jsPDF();
    const title = `${selectedReport.replace(/([A-Z])/g, ' $1').toUpperCase()} Report`;

    doc.setFontSize(20);
    doc.text(title, 10, 10);

    if (selectedDate) {
      doc.setFontSize(12);
      doc.text(`Selected Date: ${selectedDate}`, 10, 20);
    }

    doc.setFontSize(12);
    doc.text(`Generated Date: ${new Date().toLocaleDateString()}`, 10, 30);

    doc.setFontSize(12);
    doc.text('Data:', 10, 40);

    const data = dummyData[selectedReport];
    let yOffset = 50;

    // Filter data based on the selected date
    const filteredData = data.filter(item => item.date === selectedDate);

    if (filteredData.length === 0) {
      doc.text('No data available for the selected date.', 10, yOffset);
    } else {
      filteredData.forEach(item => {
        for (const [key, value] of Object.entries(item)) {
          doc.text(`${key}: ${value}`, 10, yOffset);
          yOffset += 10;
        }
        yOffset += 10;
      });
    }

    doc.save(`${title}.pdf`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#000099]">Select Report Type</h1>
        <div className="flex flex-col items-center mb-4">
          <select
            value={selectedReport}
            onChange={handleReportChange}
            className="border border-gray-300 p-3 rounded-md mb-4 w-full md:w-1/2 lg:w-1/3"
          >
            <option value="customerFeedback">Customer Feedback Reports</option>
            <option value="membership">Membership Reports</option>
            <option value="financial">Financial Reports</option>
          </select>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-3 rounded-md mb-4 w-full md:w-1/2 lg:w-1/3"
          />
          <button
            onClick={handleGenerateReport}
            className="bg-[#000099] text-white p-3 rounded-md hover:bg-[#00007f] w-full md:w-1/2 lg:w-1/3"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportSelector;
