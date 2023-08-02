import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Step2({ data, handleChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Enter Personal Details</h2>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form
          onSubmit={handleChange}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField id="occupation" label="Occupation" variant="standard" />
          <TextField id="city" label="City" variant="standard" />
          <TextField id="bio" label="Bio" variant="standard" />
        </form>
      </Box>

      {/* Add more input fields for other survey questions */}
    </div>
  );
}

export default Step2;
