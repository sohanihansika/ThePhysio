import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManualPayment = () => {
  const initialFormData = {
    name: '',
    amount: '',
    paymentDate: '', // New date input
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here if needed

    // Navigate to the popup page
    navigate('/popup3');
  };

  return (
    <div className="relative max-w-lg mx-auto p-4 bg-[#C0C0C0] rounded-md shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-black">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paymentDate" className="block text-sm font-medium text-black">Payment Date</label>
          <input
            type="date"
            id="paymentDate"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#051B40] text-white rounded-md shadow-sm hover:bg-[#051B40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default ManualPayment;
