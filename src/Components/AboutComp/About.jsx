import React from "react";
import masimg from "../../images/avtar.avif";
import "../../App.css";

const About = () => {
  return (
    <div
      id="About"
      style={{
        minHeight: "80vh",
        height: "auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1%",
      }}
    >
      <div
        className="about-second"
        style={{
          height: "90%",
          width: "95vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "2rem",
          padding: "1%",
        }}
      >
        <div className="about-left" style={{ width: "44%", height: "95%" }}>
          <img
            src={masimg}
            alt="Loading..."
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="about-right"
          style={{
            width: "52%",
            height: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            gap: "0.5rem",
            padding: "2%",
          }}
        >
          <div className="upper-box" style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "1.5rem" }}>Discover</p>
            <h1 className="about-head" style={{ fontSize: "3rem" }}>
              About Me
            </h1>
          </div>

          <div className="about-para" style={{ width: "80%" }}>
            <p>
              I am a passionate Web Developer with experience in building
              responsive and user-friendly websites using HTML, CSS, JavaScript,
              and React. I enjoy turning complex problems into clean and
              efficient code. My goal is to create Web Applications that provide
              seamless user experiences which meets modern Design standards.
            </p>
          </div>

          <div className="about-names">
            <p>
              <strong>Name :-</strong> Miraj Shaikh
            </p>
            <p>
              <strong>Contact :-</strong> +91 7721852240
            </p>

            <p>
              <strong>Address :-</strong> Pune, India
            </p>
            <p>
              <strong>Experience :-</strong> 2+ Years
            </p>
          </div>

          <div className="about-btn">
            <a
              href="/myfiles.pdf/Miraj_Shaikh_Frontend_Developer.pdf"
              download="Miraj_Shaikh_Frontend_Developer.pdf"
            >
              <button className="every-btn">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
