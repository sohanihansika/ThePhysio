import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GymRegister = () => {
  const [selectedTab, setSelectedTab] = useState('credit-card');
  const [cardOwner, setCardOwner] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalType, setPaypalType] = useState('Domestic');
  const [selectedBank, setSelectedBank] = useState('');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log({
      cardOwner,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
      paypalType,
      selectedBank,
    });
    navigate('/gym-profile');
  };

  return (
    <div className="py-5">
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold">Gym Membership</h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg">
          <div className="bg-gray-100 p-4 rounded-t-lg">
            <ul className="flex border-b">
              <li className="flex-1">
                <button
                  onClick={() => handleTabClick('credit-card')}
                  className={`py-2 px-4 text-center rounded-t-lg ${selectedTab === 'credit-card' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <i className="fas fa-credit-card mr-2"></i> Credit Card
                </button>
              </li>
              <li className="flex-1">
                <button
                  onClick={() => handleTabClick('paypal')}
                  className={`py-2 px-4 text-center rounded-t-lg ${selectedTab === 'paypal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <i className="fab fa-paypal mr-2"></i> Paypal
                </button>
              </li>
              <li className="flex-1">
                <button
                  onClick={() => handleTabClick('net-banking')}
                  className={`py-2 px-4 text-center rounded-t-lg ${selectedTab === 'net-banking' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <i className="fas fa-mobile-alt mr-2"></i> Net Banking
                </button>
              </li>
            </ul>
          </div>
          <div className="p-4">
            {selectedTab === 'credit-card' && (
              <div>
                <form onSubmit={handlePayment}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="username">
                      Card Owner
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Card Owner Name"
                      required
                      className="w-full border border-gray-300 rounded-lg py-2 px-3"
                      value={cardOwner}
                      onChange={(e) => setCardOwner(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Valid card number"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                        <i className="fab fa-cc-visa mx-1"></i>
                        <i className="fab fa-cc-mastercard mx-1"></i>
                        <i className="fab fa-cc-amex mx-1"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex-1 mr-2">
                      <label className="block text-sm font-medium mb-2" htmlFor="expiryMonth">
                        Expiration Date
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          placeholder="MM"
                          name="expiryMonth"
                          className="w-full border border-gray-300 rounded-lg py-2 px-3 mr-2"
                          required
                          value={expiryMonth}
                          onChange={(e) => setExpiryMonth(e.target.value)}
                        />
                        <input
                          type="number"
                          placeholder="YY"
                          name="expiryYear"
                          className="w-full border border-gray-300 rounded-lg py-2 px-3"
                          required
                          value={expiryYear}
                          onChange={(e) => setExpiryYear(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-2" htmlFor="cvv">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        className="w-full border border-gray-300 rounded-lg py-2 px-3"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
                      Confirm Payment
                    </button>
                  </div>
                </form>
              </div>
            )}
            {selectedTab === 'paypal' && (
              <div>
                <h6 className="text-lg font-semibold mb-2">Select your PayPal account type</h6>
                <div className="mb-4">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="paypalType"
                      checked={paypalType === 'Domestic'}
                      onChange={() => setPaypalType('Domestic')}
                      className="form-radio"
                    />
                    <span className="ml-2">Domestic</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paypalType"
                      checked={paypalType === 'International'}
                      onChange={() => setPaypalType('International')}
                      className="form-radio"
                    />
                    <span className="ml-2">International</span>
                  </label>
                </div>
                <p>
                  <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
                    <i className="fab fa-paypal mr-2"></i> Log into my PayPal
                  </button>
                </p>
                <p className="text-gray-600 mt-2">
                  Note: After clicking on the button, you will be directed to a secure gateway for payment. After
                  completing the payment process, you will be redirected back to your gym profile.
                </p>
              </div>
            )}
            {selectedTab === 'net-banking' && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="bankSelect">
                    Select your Bank
                  </label>
                  <select
                    id="bankSelect"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3"
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                  >
                    <option value="" disabled>--Please select your Bank--</option>
                    <option>Bank 1</option>
                    <option>Bank 2</option>
                    <option>Bank 3</option>
                    <option>Bank 4</option>
                    <option>Bank 5</option>
                    <option>Bank 6</option>
                    <option>Bank 7</option>
                    <option>Bank 8</option>
                    <option>Bank 9</option>
                    <option>Bank 10</option>
                  </select>
                </div>
                <div>
                  <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
                    <i className="fas fa-mobile-alt mr-2"></i> Proceed Payment
                  </button>
                </div>
                <p className="text-gray-600 mt-2">
                  Note: After clicking on the button, you will be directed to a secure gateway for payment. After
                  completing the payment process, you will be redirected back to your gym profile.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymRegister;
