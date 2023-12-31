import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handlelogout = () => {
    sessionStorage.removeItem('authToken');
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:"4.2rem"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Let-Note</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {!sessionStorage.getItem('authToken') && <form className="d-flex" role="search">
            {location.pathname !== "/login" && <Link className="btn btn-outline-success" type="submit" to={'/login'}>Log In</Link>}
            {location.pathname !== "/signup" && <Link className="btn btn-outline-success mx-2" type="submit" to={'/signup'}>Sign Up</Link>}
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
            {/* <button className="btn btn-outline-success mx-2" type="submit">Search</button> */}
          </form>}
          {sessionStorage.getItem('authToken') && <button className="btn btn-outline-success mx-2" type="submit" onClick={handlelogout}>Log-out</button> }
        </div>
      </div>
    </nav>
  )
}

export default Navbar