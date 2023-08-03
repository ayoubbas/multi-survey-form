import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Step3({ data, handleChange }) {
  return (
    <div style={{ marginTop: "-40px" }}>
      <h2>Confirm</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "-20px",
          }}
        >
          <h5 style={{ marginBottom: "-20px" }}>First Name</h5>
          <p>{data.firstName}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "-20px",
          }}
        >
          <h5 style={{ marginBottom: "-20px" }}>Last Name </h5>
          <p> {data.lastName}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "-20px",
          }}
        >
          <h5 style={{ marginBottom: "-20px" }}>Email </h5>
          <p> {data.email}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "-20px",
          }}
        >
          <h5 style={{ marginBottom: "-20px" }}>Occupation </h5>
          <p> {data.occupation}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "-20px",
          }}
        >
          <h5 style={{ marginBottom: "-20px" }}>City </h5>
          <p> {data.city}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "-20px",
          }}
        >
          <h5 style={{ marginBottom: "-20px" }}>Phone </h5>
          <p>{data.phone}</p>
        </div>
      </div>

      {/* Add more input fields for other survey questions */}
    </div>
  );
}

export default Step3;
