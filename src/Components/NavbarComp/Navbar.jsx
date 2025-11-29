import React from "react";
import logo from "../../images/red logo.jpg";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#Home">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            className="me-2"
          />
          <span>Portfolio</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center" style={{ gap: "20px" }}>
            <li className="nav-item">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact">
                <button className="contact-btn">Contact Me</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
