import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const FinancialReport = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Gym fee per member per day
  const gymFeePerDay = 10;
  
  // Gym fee per member per month
  const gymFeePerMonth = 300;

  // Function to generate months for dropdown
  const getMonths = () => {
    const months = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date(2024, i);
      months.push(date.toLocaleString('default', { month: 'long' }));
    }
    return months;
  };

  // Function to generate years for dropdown
  const getYears = () => {
    const currentYear = new Date().getFullYear();
    return [currentYear, currentYear - 1, currentYear - 2];
  };

  // Calculate Monthly Fee
  const calculateMonthlyFee = () => {
    if (selectedMonth && selectedYear) {
      return gymFeePerMonth;
    }
    return 0;
  };

  // Calculate Daily Fee
  const calculateDailyFee = () => {
    if (selectedDate) {
      return gymFeePerDay;
    }
    return 0;
  };

  // Function to generate and download PDF
  const downloadPDF = () => {
    const input = document.getElementById('reportTable');

    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      // Add title and subtitle
      pdf.setFontSize(22);
      pdf.text('Financial Report', 10, 10);
      pdf.setFontSize(16);
      pdf.text('Monthly and Daily Fees Report', 10, 20);

      // Add date information
      pdf.setFontSize(12);
      pdf.text(`Report Date: ${new Date().toLocaleDateString()}`, 10, 30);
      pdf.text(`Selected Month: ${selectedMonth || 'N/A'}`, 10, 40);
      pdf.text(`Selected Year: ${selectedYear || 'N/A'}`, 10, 50);
      pdf.text(`Selected Date: ${selectedDate || 'N/A'}`, 10, 60);

      // Add the table image
      pdf.addImage(imgData, 'PNG', 0, 70, imgWidth, imgHeight);

      // Add monthly fee
      let yOffset = imgHeight + 80;
      pdf.setFontSize(16);
      pdf.text('Monthly Fee:', 10, yOffset);
      pdf.setFontSize(12);
      pdf.text(`For ${selectedMonth} ${selectedYear}: $${calculateMonthlyFee()}`, 10, yOffset + 10);

      // Add daily fee
      yOffset += 20;
      pdf.setFontSize(16);
      pdf.text('Daily Fee:', 10, yOffset);
      pdf.setFontSize(12);
      pdf.text(`For ${selectedDate}: $${calculateDailyFee()}`, 10, yOffset + 10);

      pdf.save('financial-report.pdf');
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Report</h1>

      {/* Month Dropdown */}
      <div className="mb-4">
        <label className="block mb-2">Select Month:</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">--Select Month--</option>
          {getMonths().map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
      </div>

      {/* Year Dropdown */}
      <div className="mb-4">
        <label className="block mb-2">Select Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">--Select Year--</option>
          {getYears().map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>

      {/* Button to Download PDF */}
      <div className="mb-4">
        <button
          onClick={downloadPDF}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Download Report as PDF
        </button>
      </div>

      {/* Report Table */}
      <div id="reportTable">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 border">Month</th>
              <th className="py-2 border">Year</th>
              <th className="py-2 border">Date</th>
              <th className="py-2 border">Monthly Fee</th>
              <th className="py-2 border">Daily Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-2 border">{selectedMonth}</td>
              <td className="py-2 border">{selectedYear}</td>
              <td className="py-2 border">{selectedDate}</td>
              <td className="py-2 border">${calculateMonthlyFee()}</td>
              <td className="py-2 border">${calculateDailyFee()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialReport;
