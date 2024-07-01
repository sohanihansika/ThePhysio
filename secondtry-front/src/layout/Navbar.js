import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#172B59' }}>
<div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* add a button to login */}
    <div className="container-fluid">
      <div className="row">
        <div className="col text-end">
          <Link className='btn btn-outline-light me-2' to='/gym'>GYM</Link>
          <Link className='btn btn-outline-light me-2' to='/login'>Login</Link>
          <Link className='btn btn-outline-light' to='/adduser'>Users</Link>
          <Link className='btn btn-outline-light' to='/edituser'>Edit</Link>

        </div>
      </div>
    </div>
  </div>
</nav>   
    </div>
  )
}
