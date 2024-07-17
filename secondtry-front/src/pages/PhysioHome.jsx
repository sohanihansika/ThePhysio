import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PhysioHome() {
  const [physios, setPhysios] = useState([]);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null); // State to track employee ID for deletion

  useEffect(() => {
    loadPhysios();
  }, []);

  const loadPhysios = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/physios');
      setPhysios(result.data);
    } catch (error) {
      console.error('Error loading employees:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/physios/${id}`);
      loadPhysios(); // Call loadPhysios to reload employees after deletion
      setDeleteEmployeeId(null); // Clear deleteEmployeeId state after deletion
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const confirmDelete = (id) => {
    setDeleteEmployeeId(id); // Set the ID of the employee to be deleted
  };

  const cancelDelete = () => {
    setDeleteEmployeeId(null); // Clear deleteEmployeeId state to close the modal
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Specialty</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Action</th>


            </tr>
          </thead>
          <tbody>
            {physios.map((physio, index) => (
              <tr key={physio.id}>
                <th scope="row">{index + 1}</th>
                <td>{physio.firstName}</td>
                <td>{physio.lastName}</td>
                <td>{physio.email}</td>
                <td>{physio.specialty}</td>
                <td>{physio.contactNumber}</td>

                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewphysio/${physio.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/editphysio/${physio.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => confirmDelete(physio.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary mb-2" to="/addphysio">Add Employee</Link>

        {/* Modal for confirmation */}
        {deleteEmployeeId && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header bg-danger text-white"  style={{ color: '#172B59' }}>
                  <h5 className="modal-title">Confirm Deletion</h5>
                  <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close" onClick={cancelDelete}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="mb-0">Are you sure you want to delete this employee?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={cancelDelete}>Cancel</button>
                  <button type="button" className="btn btn-danger" onClick={() => deleteEmployee(deleteEmployeeId)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {deleteEmployeeId && <div className="modal-backdrop fade show"></div>}
      </div>
    </div>
  );
}
