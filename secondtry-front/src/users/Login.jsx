// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login = ({ setUserRole }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const employeeResponse = await axios.post("http://localhost:8080/api/employees/login", { email, password });
//       if (employeeResponse.status === 200) {
//         setUserRole('employee');
//         navigate("/employee");
//         return;
//       }
//     } catch (error) {
//       console.error("Error logging in as employee:", error);
//     }
  
//     try {
//       const physioResponse = await axios.post("http://localhost:8080/api/physios/login", { email, password });
//       if (physioResponse.status === 200) {
//         setUserRole('physio');
//         navigate("/Physio");
//         return;
//       }
//     } catch (error) {
//       console.error("Error logging in as physio:", error);
//     }
  
//     setErrorMessage("Invalid email or password. Please try again.");
//   };
  

//   return (
//     <section className="vh-100" style={{ backgroundColor: '#172B59' }}>
//       <div className="container-fluid h-custom">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-md-8 col-lg-6 col-xl-5">
//             <form onSubmit={onSubmit} className="border rounded p-4 mt-4 shadow-lg" style={{ backgroundColor: '#fff' }}>
//               <h2 className="text-center mb-4" style={{ color: '#172B59' }}>Login</h2>

//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label" style={{ color: '#172B59' }}>Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter your email"
//                   style={{ borderColor: '#172B59' }}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label" style={{ color: '#172B59' }}>Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Enter your password"
//                   style={{ borderColor: '#172B59' }}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               {errorMessage && (
//                 <div className="alert alert-danger" role="alert">
//                   {errorMessage}
//                 </div>
//               )}

//               <div className="text-center">
//                 <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#172B59', borderColor: '#172B59' }}>
//                   Login
//                 </button>
//                 <p className="small fw-bold mt-3" style={{ color: '#172B59' }}>
//                   Don't have an account?{' '}
//                   <Link className='btn btn-primary mb-2' to='/register'>Register</Link>


//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
//         {/* Footer content omitted for brevity */}
//       </div>
//     </section>
//   );
// };

// export default Login;
 

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../CSS/login.css'; // Make sure to add your custom styles here
import '../CSS/NavBar.css';


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
    <div className="grid align__item">
      <div className="register">
        <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412">
          <defs>
            <linearGradient id="a" x1="0%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#8ceabb"/>
              <stop offset="100%" stopColor="#378f7b"/>
            </linearGradient>
          </defs>
          <path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/>
        </svg>
        <h2>Sign In</h2>
        <form onSubmit={onSubmit} className="form">
          <div className="form__field">
            <input 
              type="email" 
              placeholder="" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form__field">
            <input 
              type="password" 
              placeholder="" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="form__field">
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
