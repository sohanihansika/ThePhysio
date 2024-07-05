import React, { useState } from 'react';
// import './GymRegister.css';

export default function GymRegister() {
  const [selectedTab, setSelectedTab] = useState('credit-card');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

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
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group">
                        <label>
                          <h6>Card Owner</h6>
                        </label>
                        <input type="text" name="username" placeholder="Card Owner Name" required className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>
                          <h6>Card number</h6>
                        </label>
                        <div className="input-group">
                          <input type="text" name="cardNumber" placeholder="Valid card number" className="form-control" required />
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
                              <input type="number" placeholder="MM" className="form-control" required />
                              <input type="number" placeholder="YY" className="form-control" required />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-4">
                            <label>
                              <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                            </label>
                            <input type="text" required className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button type="button" className="subscribe btn btn-primary btn-block shadow-sm">
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
                        <input type="radio" name="optradio" defaultChecked /> Domestic
                      </label>
                      <label className="radio-inline">
                        <input type="radio" name="optradio" className="ml-5" /> International
                      </label>
                    </div>
                    <p>
                      <button type="button" className="btn btn-primary">
                        <i className="fab fa-paypal mr-2"></i> Log into my PayPal
                      </button>
                    </p>
                    <p className="text-muted">
                      Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected to gym profile.
                    </p>
                  </div>
                )}
                {selectedTab === 'net-banking' && (
                  <div id="net-banking" className="tab-pane fade pt-3">
                    <div className="form-group">
                      <label>
                        <h6>Select your Bank</h6>
                      </label>
                      <select className="form-control">
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
                    Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected to gym profile.
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
}
