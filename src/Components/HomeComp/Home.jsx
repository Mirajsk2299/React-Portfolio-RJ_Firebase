import { useState, useEffect } from "react";
import React from "react";
import logo from "../../images/home.avif";
import "../../App.css";

const Home = () => {
  const sentences = [
    "I'm a Web Developer ",
    "I'm a Front End Developer ",
    "I'm a UI/UX Designer ",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div
      id="Home"
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="second-hombox"
        style={{
          width: "95vw",
          height: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "1%",
        }}
      >
        <div
          className="home-imgbox"
          style={{
            width: "45%",
            height: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="loading"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="home-txt"
          style={{
            width: "55%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "2rem" }}>Hello, I'm</p>
            <h1
              className="home-name"
              style={{ fontSize: "5rem", marginBottom: "2.5rem" }}
            >
              Miraj Shaikh
            </h1>

            <h3
              style={{
                fontSize: "2rem",
                marginBottom: "1.3rem",
                color: "#333",
                transition: "opacity 0.5s ease-in-out",
                opacity: fade ? 1 : 0,
              }}
            >
              {sentences[index]}
            </h3>

            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "1.8rem",
                color: "black",
              }}
            >
              A Software Developer based in India, Specializing in Web
              Development, UI/UX Design, <br /> and building responsive,
              user-friendly applications.
            </p>

            <a
              href="/myfiles.pdf/Miraj_Shaikh_Frontend_Developer.pdf"
              download="Miraj_Shaikh_Frontend_Developer.pdf"
            >
              <button
                className="every-btn"
                style={{
                  marginBottom: "1rem",
                }}
              >
                Download CV
              </button>
            </a>

            <div
              style={{
                display: "flex",
                gap: "1rem",

                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin fa-2x icon-border"></i>
              </a>

              <a
                href="https://github.com/Mirajsk2299?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github fa-2x icon-border"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
