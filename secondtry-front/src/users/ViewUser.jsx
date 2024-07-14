import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const loadEmployee = async () => {
      const result = await axios.get(`http://localhost:8080/api/employees/${id}`);
      setEmployee(result.data);
    };
    loadEmployee();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Employee id: {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b> {employee.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b> {employee.lastName}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {employee.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
