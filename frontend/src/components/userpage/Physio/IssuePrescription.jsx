import React, { useState, useEffect } from 'react';
import '../../../CSS/prescription.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService'; // Adjust the import path as needed
import MedicalReportService from '../../service/MediReprtService'; // Import the MedicalReportService

const sectionStyle = {
  marginBottom: '20px',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const headingStyle = {
  marginBottom: '10px',
  color: '#333',
};

const redFlagOptions = [
  'CVD',
  'VA',
  'CE',
  'WL',
  'TX pain'
];

const PrescriptionForm = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Initialize the navigate hook
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId'); // Get the user ID from the URL
  console.log('Retrieved userId from URL:', userId);

  const [reportData, setReportData] = useState({
    indexNo: '',
    contactNo: '',
    name: '',
    dob: '',
    email: '',
    presentingCondition: '',
    hxPresentingCondition: '',
    bodychart: '',
    painAssessment1: '',
    painAssessment2: '',
    investigations: '',
    medication: '',
    previousRx: '',
    pmh: '',
    redFlags: [], // Array for selected red flags
    patientGoals: '',
    painSensitivity: 0, // Add pain sensitivity to state
    userId: '', // Add userId to state
    physioId: '', // Add physioId to state
    date: '' // Add date to state
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        setLoading(true);
        setError('');
        try {
          const token = localStorage.getItem('token'); // Or however you store your token
          console.log('Fetching user data for ID:', userId);
          console.log('Token:', token);

          const userResponse = await UserService.getUserById(userId, token);
          console.log('Received user details:', userResponse);

          const userDetails = userResponse.ourUsers;
          
          // Update reportData with user details
          setReportData(prevData => ({
            ...prevData,
            indexNo: userDetails.id || '',
            contactNo: userDetails.contact_no || '',
            name: userDetails.name || '',
            dob: userDetails.added_date ? new Date(userDetails.added_date).toISOString().split('T')[0] : '', // Convert date to 'YYYY-MM-DD'
            email: userDetails.email || '',
            userId: userId // Set userId in reportData
          }));

          // Fetch the currently logged-in user's profile
          const profileResponse = await UserService.getMyProfile(token);
          console.log('Received profile details:', profileResponse);
          
          const profileDetails = profileResponse.ourUsers;
          console.log('Profile details:', profileDetails);
          
          // Update reportData with physioId and date
          setReportData(prevData => ({
            ...prevData,
            physioId: profileDetails?.id || '', // Use `id` instead of `userId`
            date: new Date().toISOString().split('T')[0]
          }));

         
          

        } catch (error) {
          console.error('Error fetching user data:', error);
          setError('Failed to fetch user data.');
        } finally {
          setLoading(false);
        }
      } else {
        console.log('No userId provided');
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    console.log('Updated physioId:', reportData.physioId);
  }, [reportData.physioId]); // This will log whenever physioId changes
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePainSensitivityChange = (value) => {
    setReportData(prevData => ({
      ...prevData,
      painSensitivity: value
    }));
  };

  const handleRedFlagsChange = (e) => {
    const { value, checked } = e.target;
    setReportData(prevData => {
      const newRedFlags = checked
        ? [...prevData.redFlags, value]
        : prevData.redFlags.filter(flag => flag !== value);
      return { ...prevData, redFlags: newRedFlags };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting report:', reportData);
    
    try {
      setLoading(true);
      setError('');
      
      // Construct the report data payload
      const reportPayload = {
        indexNo: reportData.indexNo,
        contactNo: reportData.contactNo,
        name: reportData.name,
        dob: reportData.dob,
        email: reportData.email,
        presentingCondition: reportData.presentingCondition,
        hxPresentingCondition: reportData.hxPresentingCondition,
        bodychart: reportData.bodychart,
        painAssessment1: reportData.painAssessment1,
        painAssessment2: reportData.painAssessment2,
        investigations: reportData.investigations,
        medication: reportData.medication,
        previousRx: reportData.previousRx,
        pmh: reportData.pmh,
        redFlags: reportData.redFlags,
        patientGoals: reportData.patientGoals,
        painSensitivity: reportData.painSensitivity,
        userId: reportData.userId,
        physioId: reportData.physioId,
        date: reportData.date,
      };
       const tokenValue=localStorage.getItem("token");
      // Call the API service to submit the report
      await MedicalReportService.saveReport(reportPayload,tokenValue);
      
       

      // Optionally, handle success feedback or redirect
      console.log('Report submitted successfully');
      alert('Report submitted successfully');
      // Optionally, clear form or redirect
      navigate('/patientReports');

      // e.g., navigate('/somePage');
      
    } catch (error) {
      console.error('Error submitting report:', error);
      setError('Failed to submit report.');
    } finally {
      setLoading(false);
    }
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
        
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="patient-info" style={sectionStyle}>
            <h3 style={headingStyle}>Patient Information</h3>
            <div style={{ width: '100%', marginBottom: '10px' }}>
              <strong>Index No:</strong> {reportData.indexNo}
            </div>
            <div style={{ width: '100%', marginBottom: '10px' }}>
              <strong>Contact No:</strong> {reportData.contactNo}
            </div>
            <div style={{ width: '100%', marginBottom: '10px' }}>
              <strong>Name:</strong> {reportData.name}
            </div>
            <div style={{ width: '100%', marginBottom: '10px' }}>
              <strong>Issued Date:</strong> {reportData.dob}
            </div>
            <div style={{ width: '100%', marginBottom: '10px' }}>
              <strong>Email:</strong> {reportData.email}
            </div>
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
                <p>P&N Numbness:<textarea
                  name="bodychart"
                  value={reportData.bodychart}
                  onChange={handleChange}
                /></p>
              </div>
             
              <div style={sectionStyle}>
  <h3 style={headingStyle}>Pain Sensitivity</h3>
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    {[...Array(10).keys()].map(i => (
      <button
        key={i + 1}
        type="button" // Prevents form submission
        onClick={() => handlePainSensitivityChange(i + 1)}
        style={{
          backgroundColor: reportData.painSensitivity === i + 1 ? '#4A90E2' : '#E2E2E2',
          color: reportData.painSensitivity === i + 1 ? '#FFFFFF' : '#000000',
          border: 'none',
          padding: '10px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {i + 1}
      </button>
    ))}
  </div>
  <p>Selected Pain Sensitivity: {reportData.painSensitivity}</p>
</div>


              <div style={sectionStyle}>
                <h3 style={headingStyle}>Aggravating Factors</h3>
                <textarea
                  name="painAssessment1"
                  value={reportData.painAssessment1}
                  onChange={handleChange}
                  placeholder="Pain Assessment"
                  style={{ width: '100%', height: '100px' }}
                />
              </div>
              <div style={sectionStyle}>
                <h3 style={headingStyle}>Easing Factors</h3>
                <textarea
                  name="painAssessment2"
                  value={reportData.painAssessment2}
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
                <div>
                  {redFlagOptions.map(option => (
                    <div key={option}>
                      <label style={{ display: 'block' }}>
                        <input
                          type="checkbox"
                          value={option}
                          checked={reportData.redFlags.includes(option)}
                          onChange={handleRedFlagsChange}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <textarea
                  name="redFlags"
                  value={reportData.redFlags.join(', ')}
                  readOnly
                  placeholder="Red Flags (comma separated)"
                  style={{ width: '100%', height: '100px', marginTop: '10px', backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
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
          <button type="submit" style={{
            backgroundColor: '#4A90E2',
            color: '#FFFFFF',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Save Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionForm;
