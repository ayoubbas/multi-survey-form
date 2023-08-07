import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Step2({ data, myError, handleChange}) {


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
          <TextField
            error={myError.occupation}
            id="occupation"
            label="Occupation"
            variant="standard"
            name="occupation"
            defaultValue={data.occupation}
            onChange={handleChange}
          />
          <TextField
            error={myError.city}
            id="city"
            label="City"
            variant="standard"
            name="city"
            defaultValue={data.city}
            onChange={handleChange}
          />
          <TextField
            error={myError.phone}
            id="phone"
            type="number"
            label="Phone Number"
            variant="standard"
            name="phone"
            defaultValue={data.phone}
            onChange={handleChange}
          />

        </form>
      </Box>

      {/* Add more input fields for other survey questions */}
    </div>
  );
}

export default Step2;
