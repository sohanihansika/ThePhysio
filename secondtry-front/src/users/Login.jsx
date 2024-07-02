import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/employees/login", { email, password });
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#172B59' }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <form onSubmit={onSubmit} className="border rounded p-4 mt-4 shadow-lg" style={{ backgroundColor: '#fff' }}>
              <h2 className="text-center mb-4" style={{ color: '#172B59' }}>Login</h2>

              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ color: '#172B59' }}>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={{ borderColor: '#172B59' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: '#172B59' }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  style={{ borderColor: '#172B59' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#172B59', borderColor: '#172B59' }}>
                  Login
                </button>
                <p className="small fw-bold mt-3" style={{ color: '#172B59' }}>
                  Don't have an account?{' '}
                  <Link className='btn btn-primary mb-2' to='/register'>Register</Link>


                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Footer content omitted for brevity */}
      </div>
    </section>
  );
};

export default Login;
