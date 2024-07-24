import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = () => {
  const [cardOwner, setCardOwner] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log({
      cardOwner,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
    });
    navigate('/gym-profile');
  };

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Gym Membership</h1>
      </div>
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <ul className="flex justify-center mb-3">
              <li className="flex-1">
                <a href="#" className="block text-center py-2 px-4 rounded bg-blue-500 text-white font-semibold">
                  <i className="fas fa-credit-card mr-2"></i> Credit Card
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label htmlFor="cardOwner" className="block text-sm font-medium text-blue-600">
                  Card Owner
                </label>
                <input
                  type="text"
                  id="cardOwner"
                  name="cardOwner"
                  placeholder="Card Owner Name"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={cardOwner}
                  onChange={(e) => setCardOwner(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-blue-600">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Valid card number"
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                    <i className="fab fa-cc-visa mx-1"></i>
                    <i className="fab fa-cc-mastercard mx-1"></i>
                    <i className="fab fa-cc-amex mx-1"></i>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-blue-600">Expiration Date</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="MM"
                    name="expiryMonth"
                    className="mt-1 block w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={expiryMonth}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="YY"
                    name="expiryYear"
                    className="mt-1 block w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={expiryYear}
                    onChange={(e) => setExpiryYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm font-medium text-blue-600">
                  CVV
                  <i className="fa fa-question-circle ml-1 text-gray-400" data-toggle="tooltip" title="Three digit CV code on the back of your card"></i>
                </label>
                <input
                  type="text"
                  id="cvv"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-black py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
                >
                  Confirm Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
