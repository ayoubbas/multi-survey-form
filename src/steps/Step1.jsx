import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
// import TextField from './step/@mui/material/TextField';

function Step1({ data, handleChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Enter User Details</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleChange} style={{ display: "flex", flexDirection: "column" }}>
          <TextField id="firstName" label="First Name" variant="standard" />
          <TextField id="lastName" label="Last Name" variant="standard" />
          <TextField id="email" label="Email" variant="standard" />
        </form>
      </Box>

      {/* Add more input fields for other survey questions */}
    </div>
  );
}

export default Step1;