import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewPhysio() {
  const [physio, setPhysio] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const loadPhysio = async () => {
      const result = await axios.get(`http://localhost:8080/api/physios/${id}`);
      setPhysio(result.data);
    };
    loadPhysio();
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
                  <b>First Name:</b> {physio.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b> {physio.lastName}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {physio.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/physiohome"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
