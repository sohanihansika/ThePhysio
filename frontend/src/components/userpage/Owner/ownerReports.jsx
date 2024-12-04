import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaFileAlt, FaUsers, FaChartBar, FaFilePdf } from 'react-icons/fa';

const ReportSelector = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [overallReport, setOverallReport] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
  };

  const handleOverallReportChange = (e) => {
    setOverallReport(e.target.checked);
  
    if (e.target.checked) {
      setStartDate('2024-01-01');
      setEndDate(new Date().toISOString().split('T')[0]); // Current date in YYYY-MM-DD
    } else {
      setStartDate('');
      setEndDate('');
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleGenerateReport = () => {
    const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
  
    // Validate if the start date is earlier than the end date
    if (startDate && endDate && startDate >= endDate) {
      setError("Start date must be earlier than the end date.");
      return;
    }
  
    // Validate specific report conditions
    if (selectedReport === "patients" || selectedReport === "staff") {
      // Start and end dates must not be in the future
      if (startDate > today || endDate > today) {
        setError("For Patients and Staff reports, dates cannot be in the future.");
        return;
      }
    }
  
    if (!selectedReport) {
      setError("Please select a report type.");
      return;
    }
  
    if (!overallReport && (!startDate || !endDate)) {
      setError("Please select a date range or choose Overall Report.");
      return;
    }
  
    // If all validations pass
    setError("");
    const queryParams = new URLSearchParams({
      startDate,
      endDate,
    }).toString();
  
    switch (selectedReport) {
      case "patients":
        navigate(`/membershipReport?${queryParams}`);
        break;
      case "staff":
        navigate(`/staffreport?${queryParams}`);
        break;
      case "financial":
        navigate(`/financialreport?${queryParams}`);
        break;
      case "leave":
        navigate(`/leavereport?${queryParams}`);
        break;
      default:
        setError("Invalid report type selected.");
    }
  };
  

  useEffect(() => {
    console.log("startDate", startDate);
    console.log("endDate", endDate);
  }, [startDate, endDate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-12 bg-gray-100">
      <div className="w-full relative mb-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800 ml-3 mt-0">Generate Reports</h1>
        </div>
      </div>
      <div className="container p-7 border-gray-100 shadow-lg rounded-lg w-full md:w-3/4 lg:w-1/2 bg-white">
        <div className="flex flex-col items-start mb-4">
          <label className="text-gray-700 mb-1">
            <FaFileAlt className="inline-block mr-2" /> Report Type:
          </label>
          <select
            value={selectedReport}
            onChange={handleReportChange}
            className="border border-gray-300 p-3 rounded-md mb-4 w-full"
          >
            <option value="">Select Report Type</option>
            <option value="patients">Patients Report</option>
            <option value="staff">Staff Report</option>
            <option value="financial">Financial Report</option>
            <option value="leave">Leave Report</option>
          </select>

          <label className="text-gray-700 mb-2">
            <input
              type="radio"
              checked={overallReport}
              onChange={handleOverallReportChange}
              className="mr-2"
            />
            Overall Report
          </label>

          {!overallReport && (
            <>
              <label className="text-gray-700 mb-1">
                <FaCalendarAlt className="inline-block mr-2" /> Start Date:
              </label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="border border-gray-300 p-3 rounded-md mb-4 w-full"
              />

              <label className="text-gray-700 mb-1">
                <FaCalendarAlt className="inline-block mr-2" /> End Date:
              </label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="border border-gray-300 p-3 rounded-md mb-4 w-full"
              />
            </>
          )}

          {error && <p className="text-red-500">{error}</p>}

          <button
            onClick={handleGenerateReport}
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
          >
            <FaFilePdf className="inline-block mr-2" /> Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportSelector;
