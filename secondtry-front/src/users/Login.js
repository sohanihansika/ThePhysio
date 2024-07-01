import React from 'react';

export default function Login() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#172B59' }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <form className="border rounded p-4 mt-4 shadow-lg" style={{ backgroundColor: '#fff' }}>
              <h2 className="text-center mb-4" style={{ color: '#172B59' }}>Login</h2>

              {/* Email input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ color: '#172B59' }}>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={{ borderColor: '#172B59' }}
                />
              </div>

              {/* Password input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: '#172B59' }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  style={{ borderColor: '#172B59' }}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#172B59', borderColor: '#172B59' }}>
                  Login
                </button>
                <p className="small fw-bold mt-3" style={{ color: '#172B59' }}>
                  Don't have an account?{' '}
                  <a href="#!" className="text-decoration-none" style={{ color: '#000' }}>Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Footer content */}
        {/* Footer content omitted for brevity */}
      </div>
    </section>
  );
}
