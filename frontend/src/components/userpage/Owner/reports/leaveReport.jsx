import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import jspdf-autotable
import LeaveService from "../../../service/LeaveService";
import UserService from "../../../service/UserService"; // Import UserService
import { useLocation } from "react-router-dom";
import logo from "../../../../assets/logowithoutback.png"; // Ensure the logo path is correct

const LeaveReport = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [filteredLeaveData, setFilteredLeaveData] = useState([]); // State for filtered data
  const [physioMap, setPhysioMap] = useState({}); // Map of physioId to physioName
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch leave data
        const response = await LeaveService.getAllleaves(token);
        const allLeaves = response || [];

        if (!Array.isArray(allLeaves)) {
          setError("Data is not in the expected format.");
          return;
        }

        const start = new Date(startDate).setHours(0, 0, 0, 0);
        const end = new Date(endDate).setHours(23, 59, 59, 999);

        const filteredLeaves = allLeaves.filter((leave) => {
          if (!leave.date) return false;
          const leaveDate = new Date(leave.date).getTime();
          return leaveDate >= start && leaveDate <= end;
        });

        setLeaveData(filteredLeaves);
        setFilteredLeaveData(filteredLeaves); // Initialize filtered data

        // Fetch all physios to map physioId to physioName
        const physioResponse = await UserService.getAllPhysios(token);
        console.log(physioResponse);
        const allPhysios = physioResponse.ourUsersList || [];
        const physioMap = allPhysios.reduce((map, physio) => {
          map[physio.id] = physio.name; // Assuming physio object has `id` and `name`
          return map;
        }, {});
        setPhysioMap(physioMap);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveData();
  }, [startDate, endDate]);

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter leaveData based on the search term
    const filteredData = leaveData.filter((leave) => {
      const physioName = physioMap[leave.physioId]?.toLowerCase() || "unknown physio";
      return physioName.includes(value);
    });
    setFilteredLeaveData(filteredData);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const logoWidth = 25;
    const logoHeight = 20;
    const title = "The Physio";
    const reportTitle = "Leave Report";

    // Add the logo in the top right corner
    doc.addImage(logo, "jpg", 160, 10, logoWidth, logoHeight);

    // Title for the report and center-align
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(title, 20, 20);
    doc.setFontSize(16);
    doc.text(reportTitle, 20, 30);

    // Add date range
    doc.setFontSize(12);
    doc.text(`From Date: ${startDate}`, 20, 40);
    doc.text(`To Date: ${endDate}`, 20, 50);

    // Table headers
    const headers = ["Physio Name", "Leave Date", "Reason"];
    const data = filteredLeaveData.map((leave) => [
      physioMap[leave.physioId] || "Unknown Physio",
      new Date(leave.date).toLocaleDateString(),
      leave.reason,
    ]);

    // Add table with auto table plugin
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 60, // Starting Y position for the table
      theme: "striped",
      headStyles: {
        fillColor: [0, 0, 139], // Dark blue background for the header
        fontSize: 12,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      bodyStyles: { fontSize: 10 },
      tableWidth: "auto", // Make the table width adjust automatically to the content
      styles: { cellPadding: 3, fontSize: 10 },
      margin: { horizontal: 10 },
    });

    // Footer with contact details
    const footerText =
      "The Physio | Contact: thephysio@gmail.com | Phone: (+94) 71 23-4567";
    doc.setFontSize(8);
    doc.text(footerText, 10, doc.internal.pageSize.height - 10);

    // Save the PDF
    doc.save("leave-report.pdf");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Leave Report</h2>

      {/* Filter by name input */}
      <div style={{ textAlign:"center" , marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Filter by Physio Name"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      {filteredLeaveData.length === 0 ? (
        <p>No leave records found within the selected date range.</p>
      ) : (
        <div>
          {/* Table 1 - Leave details */}
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              marginBottom: "40px",
            }}
          >
            <table
              style={{
                width: "80%",
                margin: "0 auto",
                borderCollapse: "collapse",
                border: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <thead style={{ backgroundColor: "#000099", color: "white" }}>
                <tr>
                  <th>Physio Name</th>
                  <th>Leave Date</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaveData.map((leave) => (
                  <tr key={leave.id}>
                    <td>{physioMap[leave.physioId] || "Unknown Physio"}</td>
                    <td>{new Date(leave.date).toLocaleDateString()}</td>
                    <td>{leave.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table 2 - Leave count per Physio */}
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              marginBottom: "40px",
            }}
          >
            <table
              style={{
                width: "80%",
                margin: "0 auto",
                borderCollapse: "collapse",
                border: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <thead style={{ backgroundColor: "#000099", color: "white" }}>
                <tr>
                  <th>Physio Name</th>
                  <th>Total Leaves</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(
                  filteredLeaveData.reduce((acc, leave) => {
                    const physioName =
                      physioMap[leave.physioId] || "Unknown Physio";
                    acc[physioName] = (acc[physioName] || 0) + 1;
                    return acc;
                  }, {})
                ).map(([physioName, count]) => (
                  <tr key={physioName}>
                    <td>{physioName}</td>
                    <td>{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button
              onClick={generatePDF}
              style={{
                backgroundColor: "#000099",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveReport;
