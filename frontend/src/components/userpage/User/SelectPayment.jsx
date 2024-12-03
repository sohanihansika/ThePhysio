import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManualPayment = () => {
  const initialFormData = {
    name: '',
    amount: '',
    paymentMethod: 'credit_card',
    cardType: 'visa', // Default card type
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [showCVV, setShowCVV] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cvv') {
      // Ensure only numeric input and limit to 3 digits
      const cvv = value.replace(/\D/g, '').slice(0, 3);
      setFormData({
        ...formData,
        [name]: cvv,
      });
    } else if (name === 'cardNumber') {
      // Ensure only numeric input
      const cardNumber = value.replace(/\D/g, '').slice(0, 16);
      setFormData({
        ...formData,
        [name]: cardNumber,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here if needed

    // Navigate to the popup page
    navigate('/paymentconfirmpop');
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
            value="2000"
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
          </select>
        </div>

        {formData.paymentMethod === 'credit_card' && (
          <div>
            <h3 className="text-lg font-bold mb-4">Card Details</h3>

            {/* Card Type Selection */}
            <fieldset className="mb-4">
              <legend className="block text-sm font-medium text-black">Card Type</legend>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cardType"
                    value="visa"
                    checked={formData.cardType === 'visa'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <img src="./src/assets/visapng.png" alt="Visa" className="w-8 h-5" />
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cardType"
                    value="mastercard"
                    checked={formData.cardType === 'mastercard'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <img src="./src/assets/master.png" alt="MasterCard" className="w-8 h-5" />
                </label>
              </div>
            </fieldset>

            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-black">Card Number</label>
              <div className="relative">
                <input
                  type={showCardNumber ? 'text' : 'password'}
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCardNumber((prev) => !prev)}
                  className="absolute inset-y-0 right-2 flex items-center text-blue-500"
                >
                  {showCardNumber ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiryMonth" className="block text-sm font-medium text-black">Expiry Month</label>
                <select
                  id="expiryMonth"
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                >
                  <option value="">Month</option>
                  {[...Array(12).keys()].map(month => (
                    <option key={month + 1} value={String(month + 1).padStart(2, '0')}>
                      {String(month + 1).padStart(2, '0')} - {new Date(0, month).toLocaleString('default', { month: 'long' })}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-1/2">
                <label htmlFor="expiryYear" className="block text-sm font-medium text-black">Expiry Year</label>
                <select
                  id="expiryYear"
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                >
                  <option value="">Year</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="cvv" className="block text-sm font-medium text-black">CVV</label>
              <div className="relative">
                <input
                  type={showCVV ? 'text' : 'password'}
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="3 digits behind the card"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCVV((prev) => !prev)}
                  className="absolute inset-y-0 right-2 flex items-center text-blue-500"
                >
                  {showCVV ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>
        )}

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
