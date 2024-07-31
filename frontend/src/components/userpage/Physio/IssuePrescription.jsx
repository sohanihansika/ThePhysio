import React, { useState } from 'react';
import '../../../CSS/issueprescription.css';

const PrescriptionForm = () => {
  const [formData, setFormData] = useState({
    indexNo: '',
    patientId: '',
    name: '',
    age: '',
    referredBy: '',
    presentingCondition: '',
    bodyChartPart: '',
    painSeverity: '',
    aggravatingFactors: '',
    easingFactors: '',
    hxPresentingCondition: '',
    investigations: '',
    medication: '',
    previousRx: '',
    pmh: '',
    redFlags: '',
    patientGoals: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit the form data to the backend or handle it as needed
  };

  return (
    <div className="wrapper">
      <div className="prescription_form">
        <form onSubmit={handleSubmit}>
          <table className="prescription" border="1">
            <tbody>
              <tr>
                <td colSpan="3">
                  <div className="header">
                    <div className="logo">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56Sg3QFXTwU0vgTY-7xFI9Db3yeXpS0VYpA&s"
                        alt="Hospital Logo"
                        style={{ maxHeight: '60px' }}
                      />
                    </div>
                    <div className="credentials">
                      <label>
                        <strong>Index No:</strong>
                        <input
                          type="text"
                          name="indexNo"
                          value={formData.indexNo}
                          onChange={handleChange}
                          className="input medium-input"
                          required
                        />
                      </label>
                      <label>
                        <strong>Patient ID:</strong>
                        <input
                          type="text"
                          name="patientId"
                          value={formData.patientId}
                          onChange={handleChange}
                          className="input medium-input"
                          required
                        />
                      </label>
                      <label>
                        <strong>Patient Name:</strong>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input medium-input"
                          required
                        />
                      </label>
                      <label>
                        <strong>Age:</strong>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="input medium-input"
                          required
                        />
                      </label>
                      <label>
                        <strong>Referred By:</strong>
                        <input
                          type="text"
                          name="referredBy"
                          value={formData.referredBy}
                          onChange={handleChange}
                          className="input medium-input"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="40%">
                  <div className="desease_details">
                    <div className="present">
                      <h5>Presenting Condition</h5>
                      <textarea
                        name="presentingCondition"
                        value={formData.presentingCondition}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                    <hr />
                    <div className="bodychart">
                      <h5>Body Chart</h5>
                      <textarea
                        name="bodyChartPart"
                        value={formData.bodyChartPart}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                    <hr />
                    <div className="serverity">
                      <h5>Pain Severity</h5>
                      <input
                        type="number"
                        name="painSeverity"
                        value={formData.painSeverity}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                    <hr />
                    <div className="factor">
                      <h5>Aggravating Factors</h5>
                      <textarea
                        name="aggravatingFactors"
                        value={formData.aggravatingFactors}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                  </div>
                </td>
                <td width="30%" valign="top">
                  <div className="details_section">
                    <h5>Easing Factors</h5>
                    <textarea
                      name="easingFactors"
                      value={formData.easingFactors}
                      onChange={handleChange}
                      className="input medium-input"
                      required
                    />
                    <hr />
                    <div className="condition">
                      <h5>Hx of Presenting Condition</h5>
                      <textarea
                        name="hxPresentingCondition"
                        value={formData.hxPresentingCondition}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                    <hr />
                    <div className="invest">
                      <h5>Investigations</h5>
                      <textarea
                        name="investigations"
                        value={formData.investigations}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                    <hr />
                    <div className="medi">
                      <h5>Medication</h5>
                      <textarea
                        name="medication"
                        value={formData.medication}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                  </div>
                </td>
                <td width="50%" valign="top">
                  <div className="details_section">
                    <h5>Previous Rx</h5>
                    <textarea
                      name="previousRx"
                      value={formData.previousRx}
                      onChange={handleChange}
                      className="input medium-input"
                      required
                    />
                    <hr />
                    <div className="pmh">
                      <h5>PMH</h5>
                      <textarea
                        name="pmh"
                        value={formData.pmh}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                      <h5>Red Flags</h5>
                      <textarea
                        name="redFlags"
                        value={formData.redFlags}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                    <hr />
                    <div className="goals">
                      <h5>Patient Goals</h5>
                      <textarea
                        name="patientGoals"
                        value={formData.patientGoals}
                        onChange={handleChange}
                        className="input medium-input"
                        required
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button_group">
            <button type="submit" className="issue_prescription btn btn-success">Issue Prescription</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionForm;
