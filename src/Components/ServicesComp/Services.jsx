import React from "react";
import "../../App.css";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div
      id="Services"
      style={{
        minHeight: "120vh",
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2%",
      }}
    >
      <div
        className="services-heading"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.5rem" }}>What I Do</p>
        <h1 className="service-head" style={{ fontSize: "2.5rem" }}>
          Our Services
        </h1>
      </div>

      <div
        className="service-cards"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          minHeight: "70vh",
          height: "auto",
          width: "95vw",
          padding: "1%",
        }}
      >
        <div
          className="card-box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "28%",
            height: "90%",
            borderRadius: "10px",

            padding: "1%",
            textAlign: "center",
            border: "1px solid grey",
          }}
        >
          <i className="fa-solid fa-code fa-4x"></i>
          <h3 style={{ marginTop: "10px" }}>
            Web <br /> Development
          </h3>
          <p style={{ color: "black" }}>
            I design and build interactive, responsive websites with strong
            attention to detail, ensuring excellent usability, fast performance,
            and clean, modern visual aesthetics.
          </p>
          <button className="every-btn">Know More</button>
        </div>

        <div
          className="card-box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "28%",
            height: "90%",
            borderRadius: "10px",

            padding: "1%",
            textAlign: "center",
            border: "1px solid grey",
          }}
        >
          <i className="fa-brands fa-react fa-4x"></i>
          <h3 style={{ marginTop: "10px" }}>
            React JS <br /> Development
          </h3>
          <p style={{ color: "black" }}>
            I build high-performance React applications with clean architecture,
            solving complex problems and delivering smooth workflows with
            consistently intuitive user experiences.
          </p>
          <button className="every-btn">Know More</button>
        </div>

        <div
          className="card-box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "28%",
            height: "90%",

            borderRadius: "10px",
            padding: "1%",
            textAlign: "center",
            border: "1px solid grey",
          }}
        >
          <i className="fas fa-palette fa-4x"></i>
          <h3 style={{ marginTop: "10px" }}>
            UI/UX <br /> Solutions
          </h3>
          <p style={{ color: "black" }}>
            I apply core UI/UX principles to create clean, modern, and highly
            interactive interfaces that provide engaging, purposeful, and
            user-friendly experiences for all audiences.
          </p>
          <button className="every-btn">Know More</button>
        </div>
      </div>

      <div className="service-footer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h2>Let Me Get You A Beautiful Website.</h2>

          <Link to="Contact" smooth={true} duration={500} offset={-50}>
            <button className="hire-btn">Hire Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
