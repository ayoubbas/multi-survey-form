import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
// import TextField from './step/@mui/material/TextField';

function Step1({ data,myError, handleChange }) {
  console.log(myError);
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
        <form  style={{ display: "flex", flexDirection: "column" }}>
          <TextField error={myError.firstName} id="firstName" label="First Name" variant="standard" name="firstName" defaultValue={data.firstName} onChange={handleChange} />
          <TextField error={myError.lastName} id="lastName" label="Last Name" variant="standard" name="lastName"  defaultValue={data.lastName} onChange={handleChange}/>
          <TextField error={myError.email} id="email" label="Email" type="email" variant="standard" name="email"  defaultValue={data.email} onChange={handleChange}/>
        </form>
      </Box>

      {/* Add more input fields for other survey questions */}
    </div>
  );
}

export default Step1;
