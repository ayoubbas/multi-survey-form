import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
// import TextField from './step/@mui/material/TextField';
import ReCAPTCHA from "react-google-recaptcha";

function Step1({
  data,
  myError,
  handleChange,
  setRecaptchaValue,
  handleRecaptchaChange,
}) {
  console.log(myError);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h2>Enter User Details</h2>
      <Box
        component="form"
        // sx={{
        //   "& .MuiTextField-root": { m: 1, width: "40ch" },
        // }}
        noValidate
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <form style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            error={myError.firstName}
            style={{ width: "100%" }}
            id="firstName"
            label="First Name"
            variant="standard"
            name="firstName"
            defaultValue={data.firstName}
            onChange={handleChange}
          />
          <TextField
            error={myError.lastName}
            style={{ width: "100%" }}
            id="lastName"
            label="Last Name"
            variant="standard"
            name="lastName"
            defaultValue={data.lastName}
            onChange={handleChange}
          />
          <TextField
            error={myError.email}
            style={{ width: "100%" }}
            id="email"
            label="Email"
            type="email"
            variant="standard"
            name="email"
            defaultValue={data.email}
            onChange={handleChange}
          />
          <ReCAPTCHA
            // name="captcha"
            sitekey="6Le9_pUnAAAAAPz57O4Vpgy4g3UjG6JICw9MCcLs"
            onChange={handleRecaptchaChange}
          />
        </form>
      </Box>

      {/* Add more input fields for other survey questions */}
    </div>
  );
}

export default Step1;
