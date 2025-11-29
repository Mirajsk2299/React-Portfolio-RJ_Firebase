import React from "react";
import "../../App.css";

const Footer = () => {
  return (
    <div
      style={{
        minHeight: "18vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.3rem",
        padding: "10px",
      }}
    >
      <div
        className="footer-icons"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1.5rem",
        }}
      >
        <i className="fa-brands fa-facebook fa-2x icon-border"></i>
        <i className="fa-brands fa-instagram fa-2x icon-border"></i>
        <i className="fa-brands fa-twitter fa-2x icon-border"></i>
      </div>

      <div>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          Created with ❤️ by <strong>Miraj Shaikh</strong>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          Copyright © 2025 – All Rights Reserved, But feel free to get inspired
          !
        </p>
      </div>
    </div>
  );
};

export default Footer;
