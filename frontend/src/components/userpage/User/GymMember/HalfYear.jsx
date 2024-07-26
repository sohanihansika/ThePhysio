import React, { useState } from 'react';

const PaymentForm = () => {
  const initialFormData = {
    name: '',
    amount: '',
    paymentMethod: 'credit_card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setShowSuccess(true);
  };

  const handleClosePopup = () => {
    setShowSuccess(false);
    setFormData(initialFormData); // Reset the form data
  };

  return (
    
    <div className="relative max-w-lg mx-auto p-4 bg-[#C0C0C0] rounded-md shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Membership Payment</h2>
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
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-black">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">Cash</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>

        {formData.paymentMethod === 'credit_card' && (
          <>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-black">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-black">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-sm font-medium text-black">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#051B40] text-white rounded-md shadow-sm hover:bg-[#051B40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Payment
        </button>
      </form>


      {/* Success Popup */}
      {showSuccess && (
        <>
          {/* Backdrop for blurring */}
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="max-w-md mx-4 px-4 py-6 rounded-md border-l-4 border-green-500 bg-green-50">
              <div className="flex justify-between items-start">
                <div className="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="self-center ml-3">
                    <span className="text-green-600 font-semibold">Success</span>
                    <p className="text-green-600 mt-1">Payment was successful!</p>
                  </div>
                </div>
                <button onClick={handleClosePopup} className="text-green-500 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
    
    
  );
};

export default PaymentForm;
