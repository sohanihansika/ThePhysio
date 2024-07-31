import React from 'react';

import '../../../CSS/prescription.css';

const PrescriptionForm = () => {
  // Dummy data (same as before)
  const reportData = {
    indexNo: 'PT2024-0728',
    referredBy: 'Dr. Sarah Johnson',
    contactNo: '+1 (555) 123-4567',
    name: 'Michael Thompson',
    dob: '1985-03-15',
    occupation: 'Software Developer',
    presentingCondition: 'Lower back pain radiating to left leg',
    hxPresentingCondition: 'Gradual onset over 3 months, worsened after long periods of sitting',
    investigations: 'MRI shows mild disc bulge at L4-L5',
    medication: 'Ibuprofen 400mg PRN, Cyclobenzaprine 10mg at night',
    previousRx: 'Heat therapy, gentle stretching exercises',
    pmh: 'Hypertension (controlled with medication)',
    redFlags: ['CVD', 'Tx pain'],
    patientGoals: 'Return to regular exercise routine, improve posture at work'
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
                    />          <h1 style={{ color: '#3366cc' }}>PHYSIOTHERAPY ASSESSMENT REPORT</h1>
        </div>
        
        <div className="patient-info" style={sectionStyle}>
          <h3 style={headingStyle}>Patient Information</h3>
          <p><strong>Index No:</strong> {reportData.indexNo}</p>
          <p><strong>Referred By:</strong> {reportData.referredBy}</p>
          <p><strong>Contact No:</strong> {reportData.contactNo}</p>
          <p><strong>Name:</strong> {reportData.name}</p>
          <p><strong>DOB:</strong> {reportData.dob}</p>
          <p><strong>Occupation:</strong> {reportData.occupation}</p>
        </div>

        <div className="assessment-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="left-column" style={{ width: '48%' }}>
            <div style={sectionStyle}>
              <h3 style={headingStyle}>Presenting Condition</h3>
              <p>{reportData.presentingCondition}</p>
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
              <p><strong>Severity:</strong> 7/10 at worst, 3/10 at best</p>
              <p><strong>Aggravating Factors:</strong> Prolonged sitting, bending forward, lifting heavy objects</p>
              <p><strong>Easing Factors:</strong> Walking, lying flat, gentle stretching</p>
            </div>
          </div>
          
          <div className="right-column" style={{ width: '48%' }}>
            <div style={sectionStyle}>
              <h3 style={headingStyle}>History of Presenting Condition</h3>
              <p>{reportData.hxPresentingCondition}</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Investigations</h3>
              <p>{reportData.investigations}</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Medication</h3>
              <p>{reportData.medication}</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Previous Treatment</h3>
              <p>{reportData.previousRx}</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Past Medical History</h3>
              <p>{reportData.pmh}</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Red Flags</h3>
              <p>{reportData.redFlags.join(', ')}</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Patient Expectations/Goals</h3>
              <p>{reportData.patientGoals}</p>
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