// src/components/reports/CustomerFeedbackReport.js
import React from 'react';

const CustomerFeedbackReport = () => {
  // Placeholder data for customer feedback report
  const feedbackData = [
    { customer: 'John Doe', feedback: 'Great service!', date: '2024-07-15' },
    { customer: 'Jane Roe', feedback: 'Very satisfied with the treatment.', date: '2024-07-16' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Feedback Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 border">Customer</th>
            <th className="py-2 border">Feedback</th>
            <th className="py-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border">{feedback.customer}</td>
              <td className="py-2 border">{feedback.feedback}</td>
              <td className="py-2 border">{feedback.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerFeedbackReport;
