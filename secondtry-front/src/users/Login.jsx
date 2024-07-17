import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../CSS/Login.module.css'; // Import the CSS module
import logo from '../IMG/logowithoutback.png';


const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const employeeResponse = await axios.post("http://localhost:8080/api/employees/login", { email, password });
      if (employeeResponse.status === 200) {
        setUserRole('employee');
        navigate("/employee");
        return;
      }
    } catch (error) {
      console.error("Error logging in as employee:", error);
    }

    try {
      const physioResponse = await axios.post("http://localhost:8080/api/physios/login", { email, password });
      if (physioResponse.status === 200) {
        setUserRole('physio');
        navigate("/Physio");
        return;
      }
    } catch (error) {
      console.error("Error logging in as physio:", error);
    }

    setErrorMessage("Invalid email or password. Please try again.");
  };

  return (
    <div className={styles.grid}>
      <div className={styles.register}>
      <img src={logo} alt="Logo" style={{ width: '80px', height: '50px', marginRight: '10px' }} />

        <h2>Sign In</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.formField}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className={styles.formField}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className={styles.formField}>
            <input type="submit" value="Log In" />
          </div>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
