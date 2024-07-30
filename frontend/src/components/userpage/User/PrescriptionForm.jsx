import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../../../CSS/prescription.css';

const PrescriptionForm = () => {
  // Dummy data
  const patientData = {
    indexNo: '12345',
    patientId: '67890',
    name: 'John Doe',
    age: '45',
    referredBy: 'Dr. Smith',
    presentingCondition: 'Back pain, Difficulty in movement',
    bodyChartPart: 'Back',
    painSeverity: '7',
    aggravatingFactors: 'Long sitting, Heavy lifting',
    easingFactors: 'Rest, Pain relievers',
    hxPresentingCondition: 'Chronic back pain for 2 years',
    investigations: 'MRI Scan, X-ray',
    medication: 'Painkillers, Muscle relaxants',
    previousRx: 'Physiotherapy sessions',
    pmh: 'Hypertension, Diabetes',
    redFlags: 'CVD',
    patientGoals: 'Improve mobility, Reduce pain'
  };

  return (
    <div
      className="wrapper"
      style={{ backgroundColor: 'rgba(243, 244, 246, 1)' }} // Adjust opacity if needed
    >
      <div className="prescription_form">
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
                    <p><strong>Index No:</strong> {patientData.indexNo}</p>
                    <p><strong>Patient ID:</strong> {patientData.patientId}</p>
                    <p><strong>Patient Name:</strong> {patientData.name}</p>
                    <p><strong>Age:</strong> {patientData.age}</p>
                    <p><strong>Referred By:</strong> {patientData.referredBy}</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td width="40%">
                <div className="desease_details">
                  <div className="present">
                    <h5>Presenting Condition</h5>
                    <p>{patientData.presentingCondition}</p>
                  </div>
                  <hr />
                  <div className="bodychart">
                    <h5>Body chart</h5>
                    <br />
                    <img
                      src="https://img.freepik.com/free-photo/lumbars-muscles_1048-1899.jpg?ga=GA1.1.319732266.1661310700&semt=ais_user"
                      style={{ maxHeight: '50px' }}
                      alt="Body Chart"
                    />
                    <p><strong>Part Affected:</strong> {patientData.bodyChartPart}</p>
                  </div>
                  <hr />
                  <div className="serverity">
                    <h5>Pain Severity</h5>
                    <p>{patientData.painSeverity}</p>
                  </div>
                  <hr />
                  <div className="factor">
                    <h5>Aggravating Factors</h5>
                    <p>{patientData.aggravatingFactors}</p>
                  </div>
                </div>
              </td>
              <td width="60%" valign="top">
                <h5>Easing factors</h5>
                <p>{patientData.easingFactors}</p>
                <hr />
                <div className="condition">
                  <h5>Hx of Presenting Condition</h5>
                  <p>{patientData.hxPresentingCondition}</p>
                </div>
                <hr />
                <div className="invest">
                  <h5>Investigations</h5>
                  <p>{patientData.investigations}</p>
                </div>
                <hr />
                <div className="medi">
                  <h5>Medication</h5>
                  <p>{patientData.medication}</p>
                </div>
              </td>
              <td width="60%" valign="top">
                <h5>Previous Rx</h5>
                <p>{patientData.previousRx}</p>
                <hr />
                <div className="pmh">
                  <h5>PMH</h5>
                  <p>{patientData.pmh}</p>
                  <h5>Red flags</h5>
                  <p>{patientData.redFlags}</p>
                </div>
                <hr />
                <div className="goals">
                  <h5>Patient Goals</h5>
                  <p>{patientData.patientGoals}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="button_group">
          <button className="issue_prescription btn btn-success">Issue</button>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionForm;
