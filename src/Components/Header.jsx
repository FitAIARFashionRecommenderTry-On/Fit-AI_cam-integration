import React from 'react'
// import './tailwind.css';
import logo from './images/walmartLogo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './compo.css';
// import Shop from './Shop'

// import './tailwindcss/tailwind.css'; // Import Tailwind CSS
// import './compo.css'; // Import your custom CSS if needed

export const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img loading="lazy" alt="Walmart" className="db" height="32" src={logo} width="130" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
           <a className="nav-link active  gaping" aria-current="page" href="#">Department</a>
            <a className="nav-link active  gaping" href="#">Service</a>
            <a className="nav-link active  gaping" href="#"> <form className="d-flex">
              <input className="form-control me-2 radius  search" type="search" placeholder="Search Walmart" aria-label="Search" />
            </form></a>
            <a className="nav-link active gaping" href="#">record my account</a>
            <a className="nav-link active gaping">sign account</a>
            {/* <a className="nav-link active"><button type="button" className="btn btn-primary position-relative" onClick={<Shop/>}>
             shopping
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </button></a> */}
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
