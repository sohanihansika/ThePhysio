import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { FaFilePdf, FaCalendarAlt, FaChartBar, FaFileAlt, FaUsers, FaComments } from 'react-icons/fa';
import logo from '../../../assets/LOGO.jpg'; // Ensure the path is correct

const dummyData = {
  customerFeedback: [
    { name: 'John Doe', feedback: 'Excellent service!', date: '2024-07-25' },
    { name: 'Jane Smith', feedback: 'Very satisfied with the service.', date: '2024-07-26' },
    { name: 'Michael Brown', feedback: 'Good experience.', date: '2024-07-25' },
  ],
  membership: [
    { memberId: '12345', name: 'Mark Johnson', status: 'Active', startDate: '2024-07-25', endDate: '2024-07-30' },
    { memberId: '67890', name: 'Emily Davis', status: 'Inactive', startDate: '2024-07-26', endDate: '2024-08-05' },
    { memberId: '54321', name: 'Linda White', status: 'Active', startDate: '2024-07-25', endDate: '2024-08-01' },
  ],
  financial: [
    { month: 'July', year: '2024', revenue: '$10,000', expenses: '$5,000', startDate: '2024-07-01', endDate: '2024-07-31' },
    { month: 'June', year: '2024', revenue: '$8,000', expenses: '$4,000', startDate: '2024-06-01', endDate: '2024-06-30' },
    { month: 'July', year: '2024', revenue: '$10,500', expenses: '$5,200', startDate: '2024-07-01', endDate: '2024-07-31' },
  ],
};

const ReportSelector = () => {
  const [selectedReport, setSelectedReport] = useState('customerFeedback');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pdfPreview, setPdfPreview] = useState(null);
  const [error, setError] = useState('');

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
  };

  const handleStartDateChange = (e) => {
    const chosenStartDate = new Date(e.target.value);
    const today = new Date();
    today.setDate(today.getDate() - 1); // Set to yesterday

    if (chosenStartDate > today) {
      setError('Start date cannot be today or a future date.');
      setStartDate('');
    } else {
      setError('');
      setStartDate(e.target.value);
    }
  };

  const handleEndDateChange = (e) => {
    const chosenEndDate = new Date(e.target.value);
    const chosenStartDate = new Date(startDate);
    const today = new Date();

    if (chosenEndDate > today) {
      setError('End date cannot be a future date.');
      setEndDate('');
    } else if (chosenEndDate < chosenStartDate) {
      setError('End date cannot be earlier than start date.');
      setEndDate('');
    } else {
      setError('');
      setEndDate(e.target.value);
    }
  };

  const handleGenerateReport = () => {
    if (error) {
      alert(error);
      return;
    }
  
    const doc = new jsPDF();
  
    try {
      // Add the logo
      const logoWidth = 25; // Adjust the width as needed
      const logoHeight = 20; // Adjust the height as needed
      doc.addImage(logo, 'jpg', 10, 10, logoWidth, logoHeight);
  
      // Define the title and its color
      const title = 'The Physio';
      const titleXPosition = 10 + logoWidth + 10; // Position title right after the logo with some padding
      const titleYPosition = 20; // Adjust this value to vertically align with the logo
  
      doc.setFontSize(30);
      doc.setTextColor(0, 0, 139); // Dark blue color
      doc.text(title, titleXPosition, titleYPosition);
  
      // Add the report type to the left side
      const reportType = `${selectedReport.replace(/([A-Z])/g, ' $1').toUpperCase()} Report`;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); // Black color
      doc.text(reportType, 10, 40);
  
      // Add selected date range if present
      if (startDate && endDate) {
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // Black color
        doc.text(`Start Date: ${startDate}`, 10, 50);
        doc.text(`End Date: ${endDate}`, 10, 60);
      }
  
      // Add generated date
      doc.setFontSize(12);
      doc.text(`Generated Date: ${new Date().toLocaleDateString()}`, 10, 70);
  
      // Add data
      doc.setFontSize(12);
      doc.text('Data:', 10, 80);
  
      const data = dummyData[selectedReport];
      let yOffset = 90;
  
      // Filter data based on the selected date range
      const filteredData = data.filter(item => {
        const itemStartDate = new Date(item.startDate || item.date);
        const itemEndDate = new Date(item.endDate || item.date);
        return itemStartDate >= new Date(startDate) && itemEndDate <= new Date(endDate);
      });
  
      if (filteredData.length === 0) {
        doc.text('No data available for the selected date range.', 10, yOffset);
      } else {
        filteredData.forEach(item => {
          for (const [key, value] of Object.entries(item)) {
            doc.text(`${key}: ${value}`, 10, yOffset);
            yOffset += 10;
          }
          yOffset += 10;
        });
      }
  
      // Add footer
      const footerText = 'The Physio | Contact: thephysio@gmail.com | Phone: (+94) 71 23-4567';
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0); // Black color
      doc.text(footerText, 10, doc.internal.pageSize.height - 10);
  
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfPreview(pdfUrl);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-12 bg-fixed bg-cover bg-center"
      
    >
      <div className="w-full relative mb-10">
  <div className="flex items-center justify-between">
    <h1 className="text-3xl font-bold text-[#000000] ml-3 mt-0 ">Generate Reports</h1>
  </div>
</div>
      <div className="container p-7 border-gray-100 shadow-lg rounded-lg w-full md:w-3/4 lg:w-1/2 bg-white bg-opacity-70">
        <div className="flex flex-col items-start mb-4">
          <label className="text-gray-700 mb-1"><FaFileAlt className="inline-block mr-2" /> Report Type:</label>
          <select
            value={selectedReport}
            onChange={handleReportChange}
            className="border border-gray-300 p-3 rounded-md mb-4 w-full"
          >
            <option value="customerFeedback"><FaComments className="inline-block mr-2" /> Customer Feedback Reports</option>
            <option value="membership"><FaUsers className="inline-block mr-2" /> Membership Reports</option>
            <option value="financial"><FaChartBar className="inline-block mr-2" /> Financial Reports</option>
          </select>
          <label className="text-gray-700 mb-1"><FaCalendarAlt className="inline-block mr-2" /> Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="border border-gray-300 p-3 rounded-md mb-4 w-full"
          />
          <label className="text-gray-700 mb-1"><FaCalendarAlt className="inline-block mr-2" /> End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="border border-gray-300 p-3 rounded-md mb-4 w-full"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleGenerateReport}
            className="bg-[#000099] text-white p-3 rounded-md hover:bg-[#00007f]"
          >
            <FaFilePdf className="inline-block mr-2" /> Generate Report
          </button>
        </div>
        {pdfPreview && (
          <div className="mt-4">
            <iframe src={pdfPreview} width="100%" height="600px" title="PDF Preview"></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportSelector;
