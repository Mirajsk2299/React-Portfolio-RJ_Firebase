import React, { useState } from "react";
import axios from "axios";
import "../../App.css";

const Contact = () => {
  const [firstname, setfirstName] = useState("");
  const [lasttname, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  function firstnameH(e) {
    setfirstName(e.target.value);
  }

  function lastnameH(e) {
    setlastName(e.target.value);
  }

  function emailH(e) {
    setemail(e.target.value);
  }

  function messageH(e) {
    setmessage(e.target.value);
  }

  function submitH(e) {
    e.preventDefault();
    alert("Form Submitted");
    document.getElementById("contact_form").reset();

    const userData = {
      firstname: firstname,
      lasttname: lasttname,
      email: email,
      message: message,
    };

    try {
      async function sendData() {
        await axios.post(
          "https://second-portfolio-b5985-default-rtdb.firebaseio.com/userData.json",
          { ...userData }
        );
      }
      sendData();
    } catch (err) {
      console.log("Submission error", err);
    }
  }

  return (
    <div
      id="Contact"
      style={{
        minHeight: "65vh",
        width: "100vw",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2%",
      }}
    >
      <div>
        <p className="cont-htxt" style={{ fontSize: "1.5rem" }}>
          Get in touch
        </p>
        <h1 className="cont-head" style={{ fontSize: "2.8rem" }}>
          Contact Me
        </h1>
      </div>
      {/* 
      <div className="cnt-form"> */}
      <form
        id="contact_form"
        onSubmit={submitH}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <div
          className="upper-boxcnt"
          style={{
            display: "flex",
            flesDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <div>
            <label>First Name</label> <br />
            <input
              className="fname-inp"
              type="text"
              required
              onChange={firstnameH}
              style={{
                width: "16rem",
                height: "2.7rem",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            />
          </div>

          <div>
            <label>Last Name</label> <br />
            <input
              className="lname-inp"
              type="text"
              required
              onChange={lastnameH}
              style={{
                width: "16rem",
                height: "2.7rem",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            />
          </div>
        </div>

        <div>
          <label>Email</label> <br />
          <input
            className="email-inp"
            type="email"
            required
            onChange={emailH}
            style={{
              width: "35rem",
              height: "2.7rem",
              borderRadius: "10px",
              border: "1px solid black",
            }}
          />
        </div>

        <div>
          <label>Message</label> <br />
          <textarea
            className="txt-inp"
            type="text"
            required
            onChange={messageH}
            style={{
              width: "35rem",
              height: "7rem",
              borderRadius: "10px",
              border: "1px solid black",
            }}
          />
        </div>

        <div>
          <button type="submit" className="send-btn">
            Send it
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Contact;
