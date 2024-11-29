import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MediReprtService from '../../service/MediReprtService';
import UserService from '../../service/UserService'; // Import the UserService
import '../../../CSS/prescription.css';

const PrescriptionForm = () => {
  const [reportData, setReportData] = useState(null);
  const [userDetails, setUserDetails] = useState(null); // State for user details
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();
  
  // Extract reportId from URL
  const queryParams = new URLSearchParams(location.search);
  const reportId = queryParams.get('reportId');

  useEffect(() => {
    const fetchReportData = async () => {
      if (reportId) {
        try {
          const token = localStorage.getItem("token");
          const data = await MediReprtService.getReportById(reportId, token);
          setReportData(data);
        } catch (err) {
          setError('Error fetching report data');
        } 
      }
    };

    fetchReportData();
  }, [reportId]);

 

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (reportData && reportData.userId) {
        try {
          const token = localStorage.getItem("token");
          const response = await UserService.getUserById(reportData.userId, token);
          setUserDetails(response.ourUsers); // Access the ourUsers property
          console.log(response.ourUsers);
        } catch (err) {
          setError('Error fetching user details');
        }
      }
    };

    fetchUserDetails();
  }, [reportData]);


  useEffect(() => {
    const fetchUsername = async () => {
      if (reportData && reportData.physioId) {
        try {
          const token = localStorage.getItem("token");
          const response = await UserService.getUserById(reportData.physioId, token);
          const physioName = response.ourUsers ? response.ourUsers.name : 'N/A';
setUsername(physioName);
          console.log(response);
          console.log(physioName);

        } catch (error) {
          console.error('Error fetching username:', error);
          setError('Error fetching username');
        }
      }
    };

    fetchUsername();
  }, [reportData]);

  if (error) return <p>Error: {error}</p>;
  if (!reportData || !userDetails) return <p>No report or user data available.</p>;

  const formattedDate = new Date(reportData.date).toLocaleDateString('en-GB'); // Format as DD/MM/YYYY

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
          <p><strong>Index No:</strong> {reportData.userId}</p>
          <p><strong>Contact No:</strong> {userDetails.contact_no}</p>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Date:</strong> {formattedDate}</p> {/* Display formatted date */}
          <p><strong>Email:</strong> {userDetails.email}</p> {/* Add Email if available */}
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
                src={reportData.bodyChart}
                style={{ maxHeight: '50px' }}
                alt="Body Chart"
              />
              <p>P&N Numbness: {reportData.painAssessment1}</p>
            </div>

            <div style={sectionStyle}>
              <h3 style={headingStyle}>Pain Assessment</h3>
              <p><strong>Severity:</strong> {reportData.painAssessment1}</p>
              <p><strong>Aggravating Factors:</strong> {reportData.redFlags.join(', ')}</p>
              <p><strong>Easing Factors:</strong> {reportData.medication}</p>
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
          <p><strong>Assessed by:</strong> Dr. {username || 'Loading...'}</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionForm;
