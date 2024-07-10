import React, { useState } from 'react';
import { Tooltip } from 'bootstrap';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './GymRegister.css';
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

  React.useEffect(() => {
    const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach((tooltip) => new Tooltip(tooltip));
  }, []);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-6">Gym Membership</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                  <li className="nav-item">
                    <a
                      href="#"
                      onClick={() => handleTabClick('credit-card')}
                      className={`nav-link ${selectedTab === 'credit-card' ? 'active' : ''}`}
                    >
                      <i className="fas fa-credit-card mr-2"></i> Credit Card
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      onClick={() => handleTabClick('paypal')}
                      className={`nav-link ${selectedTab === 'paypal' ? 'active' : ''}`}
                    >
                      <i className="fab fa-paypal mr-2"></i> Paypal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      onClick={() => handleTabClick('net-banking')}
                      className={`nav-link ${selectedTab === 'net-banking' ? 'active' : ''}`}
                    >
                      <i className="fas fa-mobile-alt mr-2"></i> Net Banking
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                {selectedTab === 'credit-card' && (
                  <div id="credit-card" className="tab-pane fade show active pt-3">
                    <form role="form" onSubmit={handlePayment}>
                      <div className="form-group">
                        <label htmlFor="username">
                          <h6>Card Owner</h6>
                        </label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Card Owner Name"
                          required
                          className="form-control"
                          value={cardOwner}
                          onChange={(e) => setCardOwner(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardNumber">
                          <h6>Card number</h6>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="Valid card number"
                            className="form-control"
                            required
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text text-muted">
                              <i className="fab fa-cc-visa mx-1"></i>
                              <i className="fab fa-cc-mastercard mx-1"></i>
                              <i className="fab fa-cc-amex mx-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="form-group">
                            <label>
                              <h6>Expiration Date</h6>
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                placeholder="MM"
                                name="expiryMonth"
                                className="form-control"
                                required
                                value={expiryMonth}
                                onChange={(e) => setExpiryMonth(e.target.value)}
                              />
                              <input
                                type="number"
                                placeholder="YY"
                                name="expiryYear"
                                className="form-control"
                                required
                                value={expiryYear}
                                onChange={(e) => setExpiryYear(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-4">
                            <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                              <h6>
                                CVV <i className="fa fa-question-circle d-inline"></i>
                              </h6>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              value={cvv}
                              onChange={(e) => setCvv(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button type="submit" className="subscribe btn btn-primary btn-block shadow-sm">
                          Confirm Payment
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                {selectedTab === 'paypal' && (
                  <div id="paypal" className="tab-pane fade pt-3">
                    <h6 className="pb-2">Select your PayPal account type</h6>
                    <div className="form-group">
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="optradio"
                          checked={paypalType === 'Domestic'}
                          onChange={() => setPaypalType('Domestic')}
                        />
                        Domestic
                      </label>
                      <label className="radio-inline ml-5">
                        <input
                          type="radio"
                          name="optradio"
                          checked={paypalType === 'International'}
                          onChange={() => setPaypalType('International')}
                        />
                        International
                      </label>
                    </div>
                    <p>
                      <button type="button" className="btn btn-primary">
                        <i className="fab fa-paypal mr-2"></i> Log into my PayPal
                      </button>
                    </p>
                    <p className="text-muted">
                    Note: After clicking on the button, you will be directed to a secure gateway for payment. After
                    completing the payment process, you will be redirected back to your gym profile.
                    </p>
                  </div>
                )}
                {selectedTab === 'net-banking' && (
                  <div id="net-banking" className="tab-pane fade pt-3">
                    <div className="form-group">
                      <label htmlFor="SelectYourBank">
                        <h6>Select your Bank</h6>
                      </label>
                      <select
                        className="form-control"
                        id="ccmonth"
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                      >
                        <option value="" selected disabled>
                          --Please select your Bank--
                        </option>
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
                    <div className="form-group">
                      <p>
                        <button type="button" className="btn btn-primary">
                          <i className="fas fa-mobile-alt mr-2"></i> Proceed Payment
                        </button>
                      </p>
                    </div>
                    <p className="text-muted">
                      Note: After clicking on the button, you will be directed to a secure gateway for payment. After
                      completing the payment process, you will be redirected back to your gym profile.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymRegister;
