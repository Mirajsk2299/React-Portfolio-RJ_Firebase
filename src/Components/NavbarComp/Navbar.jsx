import React from "react";
import logo from "../../images/red logo.jpg";
import "../../App.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-4">
      <div className="container-fluid">
        <ScrollLink
          to="Home"
          smooth={true}
          duration={500}
          className="navbar-brand d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            className="me-2"
          />
          <span>Portfolio</span>
        </ScrollLink>

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
              <ScrollLink
                to="Home"
                smooth={true}
                duration={500}
                className="nav-link text-dark fw-semibold"
                style={{ cursor: "pointer" }}
              >
                Home
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="Services"
                smooth={true}
                duration={500}
                className="nav-link text-dark fw-semibold"
                style={{ cursor: "pointer" }}
              >
                Services
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="About"
                smooth={true}
                duration={500}
                className="nav-link text-dark fw-semibold"
                style={{ cursor: "pointer" }}
              >
                About Me
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="Contact"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <button
                  className="contact-btn text-dark fw-semibold"
                  style={{ width: "10rem" }}
                >
                  Contact Me
                </button>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
