import React, { useState } from 'react';
import '../../../CSS/prescription.css';

const PrescriptionForm = () => {
  // Initial state for the form data
  const [reportData, setReportData] = useState({
    indexNo: '',
    referredBy: '',
    contactNo: '',
    name: '',
    dob: '',
    occupation: '',
    presentingCondition: '',
    hxPresentingCondition: '',
    investigations: '',
    medication: '',
    previousRx: '',
    pmh: '',
    redFlags: [],
    patientGoals: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...reportData,
      [name]: value
    });
  };

  // Handle array input for redFlags
  const handleRedFlagsChange = (e) => {
    setReportData({
      ...reportData,
      redFlags: e.target.value.split(',').map(flag => flag.trim())
    });
  };

  const sectionStyle = {
    marginBottom: '30px',
    padding: '15px',
    backgroundColor: '#f0f4f8',
    borderRadius: '8px'
  };

  const headingStyle = {
    color: '#2c5282',
    backgroundColor: '#e2e8f0',
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '10px'
  };

  return (
    <div className="wrapper" style={{ backgroundColor: '#f3f4f6', padding: '20px' }}>
      <div className="assessment-form" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px' }}>
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56Sg3QFXTwU0vgTY-7xFI9Db3yeXpS0VYpA&s"
            alt="Hospital Logo"
            style={{ maxHeight: '60px' }}
          />
          <h1 style={{ color: '#3366cc' }}>PHYSIOTHERAPY ASSESSMENT REPORT</h1>
        </div>
        
        <div className="patient-info" style={sectionStyle}>
          <h3 style={headingStyle}>Patient Information</h3>
          <input
            type="text"
            name="indexNo"
            value={reportData.indexNo}
            onChange={handleChange}
            placeholder="Index No"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <input
            type="text"
            name="referredBy"
            value={reportData.referredBy}
            onChange={handleChange}
            placeholder="Referred By"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <input
            type="text"
            name="contactNo"
            value={reportData.contactNo}
            onChange={handleChange}
            placeholder="Contact No"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <input
            type="text"
            name="name"
            value={reportData.name}
            onChange={handleChange}
            placeholder="Name"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <input
            type="date"
            name="dob"
            value={reportData.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <input
            type="text"
            name="occupation"
            value={reportData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </div>

        <div className="assessment-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="left-column" style={{ width: '48%' }}>
            <div style={sectionStyle}>
              <h3 style={headingStyle}>Presenting Condition</h3>
              <textarea
                name="presentingCondition"
                value={reportData.presentingCondition}
                onChange={handleChange}
                placeholder="Presenting Condition"
                style={{ width: '100%', height: '100px' }}
              />
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Body Chart</h3>
              <img
                src="https://img.freepik.com/free-photo/lumbars-muscles_1048-1899.jpg?ga=GA1.1.319732266.1661310700&semt=ais_user"
                style={{ maxHeight: '50px' }}
                alt="Body Chart"
              />
              <p>P&N Numbness: Left leg</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Pain Assessment</h3>
              <textarea
                name="painAssessment"
                value={reportData.painAssessment}
                onChange={handleChange}
                placeholder="Pain Assessment"
                style={{ width: '100%', height: '100px' }}
              />
            </div>
          </div>
          
          <div className="right-column" style={{ width: '48%' }}>
            <div style={sectionStyle}>
              <h3 style={headingStyle}>History of Presenting Condition</h3>
              <textarea
                name="hxPresentingCondition"
                value={reportData.hxPresentingCondition}
                onChange={handleChange}
                placeholder="History of Presenting Condition"
                style={{ width: '100%', height: '100px' }}
              />
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Investigations</h3>
              <textarea
                name="investigations"
                value={reportData.investigations}
                onChange={handleChange}
                placeholder="Investigations"
                style={{ width: '100%', height: '100px' }}
              />
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Medication</h3>
              <textarea
                name="medication"
                value={reportData.medication}
                onChange={handleChange}
                placeholder="Medication"
                style={{ width: '100%', height: '100px' }}
              />
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Previous Treatment</h3>
              <textarea
                name="previousRx"
                value={reportData.previousRx}
                onChange={handleChange}
                placeholder="Previous Treatment"
                style={{ width: '100%', height: '100px' }}
              />
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Past Medical History</h3>
              <textarea
                name="pmh"
                value={reportData.pmh}
                onChange={handleChange}
                placeholder="Past Medical History"
                style={{ width: '100%', height: '100px' }}
              />
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Red Flags</h3>
              <textarea
                name="redFlags"
                value={reportData.redFlags.join(', ')}
                onChange={handleRedFlagsChange}
                placeholder="Red Flags (comma separated)"
                style={{ width: '100%', height: '100px' }}
              />
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Patient Expectations/Goals</h3>
              <textarea
                name="patientGoals"
                value={reportData.patientGoals}
                onChange={handleChange}
                placeholder="Patient Goals"
                style={{ width: '100%', height: '100px' }}
              />
            </div>
          </div>
        </div>

        <div className="footer" style={{ marginTop: '30px', textAlign: 'right' }}>
          <p><strong>Assessed by:</strong> Dr. Emily Parker, PT, DPT</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionForm;