import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const MembershipReport = () => {
  const [searchName, setSearchName] = useState('');

  // Placeholder data for membership report
  const membershipData = [
    { member: 'Alice Johnson', status: 'Active', startDate: '2024-06-01', endDate: '2025-06-01' },
    { member: 'Bob Smith', status: 'Expired', startDate: '2023-06-01', endDate: '2024-06-01' },
    { member: 'Charlie Brown', status: 'Active', startDate: '2024-05-01', endDate: '2025-05-01' },
    { member: 'David Williams', status: 'Active', startDate: '2024-04-01', endDate: '2025-04-01' },
    { member: 'Eve Miller', status: 'Expired', startDate: '2023-05-01', endDate: '2024-05-01' },
    // Add more data as needed
  ];

  // Function to filter membership data by member name
  const filterDataByName = (data) => {
    return data.filter(entry =>
      entry.member.toLowerCase().includes(searchName.toLowerCase())
    );
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
      pdf.text('Membership Report', 10, 20);

      // Add date information
      pdf.setFontSize(12);
      pdf.text(`Report Date: ${new Date().toLocaleDateString()}`, 10, 30);
      pdf.text(`Selected Member: ${searchName || 'N/A'}`, 10, 40);

      // Add the table image
      pdf.addImage(imgData, 'PNG', 0, 50, imgWidth, imgHeight);
      pdf.save('membership-report.pdf');
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gym Membership Report</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Search by member name"
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

      {/* Membership Table */}
      <div id="reportTable">
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
            {filterDataByName(membershipData).length > 0 ? (
              filterDataByName(membershipData).map((membership, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 border">{membership.member}</td>
                  <td className="py-2 border">{membership.status}</td>
                  <td className="py-2 border">{membership.startDate}</td>
                  <td className="py-2 border">{membership.endDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 text-center text-gray-700">No memberships found for the selected name.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipReport;
