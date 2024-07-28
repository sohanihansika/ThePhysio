// src/components/reports/CustomerFeedbackReport.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CustomerFeedbackReport = () => {
  const [selectedStars, setSelectedStars] = useState('');

  // Placeholder data for customer feedback report
  const feedbackData = [
    { customer: 'John Doe', feedback: 'Great service!', stars: 5, date: '2024-07-15', physiotherapist: 'Dr. Smith' },
    { customer: 'Jane Roe', feedback: 'Very satisfied with the treatment.', stars: 4, date: '2024-07-16', physiotherapist: 'Dr. Johnson' },
    { customer: 'Alice Smith', feedback: 'Good experience.', stars: 4, date: '2024-07-17', physiotherapist: 'Dr. Lee' },
    { customer: 'Bob Johnson', feedback: 'Needs improvement.', stars: 2, date: '2024-07-18', physiotherapist: 'Dr. Brown' },
    { customer: 'Charlie Brown', feedback: 'Excellent service!', stars: 5, date: '2024-07-19', physiotherapist: 'Dr. Davis' },
    { customer: 'David Williams', feedback: 'Average experience.', stars: 3, date: '2024-07-20', physiotherapist: 'Dr. Wilson' },
    { customer: 'Eva Davis', feedback: 'Great service!', stars: 5, date: '2024-07-21', physiotherapist: 'Dr. Smith' },
    { customer: 'Frank Harris', feedback: 'Not satisfied.', stars: 1, date: '2024-07-22', physiotherapist: 'Dr. Johnson' },
    { customer: 'Grace Lee', feedback: 'Very good service.', stars: 4, date: '2024-07-23', physiotherapist: 'Dr. Lee' },
    { customer: 'Hank Green', feedback: 'Excellent!', stars: 5, date: '2024-07-24', physiotherapist: 'Dr. Brown' },
    // Add more data as needed
  ];

  // Function to filter feedback data by stars
  const filterDataByStars = (data, stars) => {
    if (!stars) return data;
    return data.filter(entry => entry.stars === parseInt(stars));
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
      pdf.text('The Physio', 10, 10);
      pdf.setFontSize(16);
      pdf.text('Customer Feedback Report', 10, 20);

      // Add date information
      pdf.setFontSize(12);
      pdf.text(`Report Date: ${new Date().toLocaleDateString()}`, 10, 30);
      pdf.text(`Selected Stars: ${selectedStars || 'N/A'}`, 10, 40);

      // Add the table image
      pdf.addImage(imgData, 'PNG', 0, 50, imgWidth, imgHeight);

      pdf.save('customer-feedback-report.pdf');
    });
  };

  const filteredFeedback = filterDataByStars(feedbackData, selectedStars);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Feedback Report</h1>

      {/* Filter by Stars */}
      <div className="mb-4">
        <label className="block mb-2">Select Number of Stars:</label>
        <select
          value={selectedStars}
          onChange={(e) => setSelectedStars(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">--Select Stars--</option>
          {[1, 2, 3, 4, 5].map(star => (
            <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
          ))}
        </select>
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

      {/* Feedback Table */}
      <div id="reportTable">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 border">Customer</th>
              <th className="py-2 border">Feedback</th>
              <th className="py-2 border">Stars</th>
              <th className="py-2 border">Date</th>
              <th className="py-2 border">Physiotherapist</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedback.length > 0 ? (
              filteredFeedback.map((feedback, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 border">{feedback.customer}</td>
                  <td className="py-2 border">{feedback.feedback}</td>
                  <td className="py-2 border">{feedback.stars}</td>
                  <td className="py-2 border">{feedback.date}</td>
                  <td className="py-2 border">{feedback.physiotherapist}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 text-center text-gray-700">No feedback found for the selected stars.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerFeedbackReport;
