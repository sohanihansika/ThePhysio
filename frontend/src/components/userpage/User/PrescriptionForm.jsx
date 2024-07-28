import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../../../CSS/prescription.css';

const PrescriptionForm = () => {
  return (
    <div className="wrapper">
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
                    <label htmlFor="index">Index No</label>
                    <br />
                    <label htmlFor="patientid">Patient ID</label>
                    <input type="text" required className="input" />
                    <br />
                    <label htmlFor="name">Patient Name</label>
                    <br />
                    <label htmlFor="age">Age</label>
                    <br />
                    <label htmlFor="doctor">Referred By</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td width="40%">
                <div className="desease_details">
                  <div className="present">
                    <h5>Presenting Condition</h5>
                    <ul
                      className="symp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Click to edit."
                      contentEditable="true"
                    ></ul>
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
                    <select id="parts" name="parts" required className="input">
                      <option value="hand">Hand</option>
                      <option value="leg">Leg</option>
                      <option value="back">Back</option>
                      <option value="neck">Neck</option>
                    </select>
                  </div>
                  <hr />
                  <div className="serverity">
                    <h5>Pain Severity</h5>
                    <select id="serverity" name="serverity" required className="input">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <hr />
                  <div className="factor">
                    <h5>Aggravating Factors</h5>
                    <ul
                      className="symp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Click to edit."
                      contentEditable="true"
                    ></ul>
                  </div>
                </div>
              </td>
              <td width="60%" valign="top">
                <h5>Easing factors</h5>
                <ul
                  className="symp"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Click to edit."
                  contentEditable="true"
                ></ul>
                <hr />
                <div className="condition">
                  <h5>Hx of Presenting Condition</h5>
                  <ul
                    className="symp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to edit."
                    contentEditable="true"
                  ></ul>
                </div>
                <hr />
                <div className="invest">
                  <h5>Investigations</h5>
                  <ul
                    className="symp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to edit."
                    contentEditable="true"
                  ></ul>
                </div>
                <hr />
                <div className="medi">
                  <h5>Medication</h5>
                  <ul
                    className="symp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to edit."
                    contentEditable="true"
                  ></ul>
                </div>
              </td>
              <td width="60%" valign="top">
                <h5>Previous Rx</h5>
                <ul
                  className="symp"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Click to edit."
                  contentEditable="true"
                ></ul>
                <hr />
                <div className="pmh">
                  <h5>PMH</h5>
                  <ul
                    className="symp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to edit."
                    contentEditable="true"
                  ></ul>
                  <h5>Red flags</h5>
                  <select id="redflags" name="redflags" required className="input">
                    <option value="cvd">CVD</option>
                    <option value="va">VA</option>
                    <option value="ce">CE</option>
                    <option value="wl">WL</option>
                    <option value="ca">CA</option>
                    <option value="tx">TX Pain</option>
                  </select>
                </div>
                <hr />
                <div className="goals">
                  <h5>Patient Goals</h5>
                  <ul
                    className="symp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to edit."
                    contentEditable="true"
                  ></ul>
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
