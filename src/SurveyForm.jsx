import React, { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";

function SurveyForm() {
  const [step, setStep] = useState(1);
  const [myError, setMyError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    occupation: false,
    city: false,
    phone: false,

  });
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    phone: "",

  });

  const handleNextStep = () => {
    const lettersRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\d{10,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      let hasError = false;

      if (userData.firstName === ""|| !lettersRegex.test(userData.firstName)) {
        setMyError((prevMyError) => ({ ...prevMyError, firstName: true }));
        hasError = true;
      }

      if (userData.lastName === ""|| !lettersRegex.test(userData.lastName)) {
        setMyError((prevMyError) => ({ ...prevMyError, lastName: true }));
        hasError = true;
      }
      if (userData.email === "" || !emailRegex.test(userData.email)) {
        setMyError((prevMyError) => ({ ...prevMyError, email: true }));
        hasError = true;
      }

      // next step
      if (!hasError) {
        setStep(step + 1);
      }
    }
    if (step === 2) {
      let hasError = false;

      if (userData.occupation === ""|| !lettersRegex.test(userData.occupation)) {
        setMyError((prevMyError) => ({ ...prevMyError, occupation: true }));
        hasError = true;
      }

      if (userData.city === ""|| !lettersRegex.test(userData.city)) {
        setMyError((prevMyError) => ({ ...prevMyError, city: true }));
        hasError = true;
      }
      if (userData.phone === "" || !phoneRegex.test(userData.phone)) {
        setMyError((prevMyError) => ({ ...prevMyError, phone: true }));
        hasError = true;
      }
      
      // next step
      if (!hasError) {
        setStep(step + 1);
      }
    }

  };
  

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyError({
      firstName: false,
      lastName: false,
      email: false,
      occupation: false,
      city: false,
      phone: false,

      // Add more fields as needed
    });
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform form submission logic here, e.g., send data to the server
    console.log("User Data:", userData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            data={userData}
            myError={myError}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <Step2
            data={userData}
            myError={myError}
            handleChange={handleChange}
          />
        );
      case 3:
        return <Step3 data={userData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="xs" style={{}}>
      <div
        style={{ background: "#eee", padding: "50px", borderRadius: "15px" }}
      >
        {renderStep()}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          {step < 3 ? (
            <Button onClick={handleNextStep} variant="contained">
              Continue
            </Button>
          ) : (
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          )}
          {step > 1 && (
            <Button onClick={handlePreviousStep} variant="outlined">
              Previous
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default SurveyForm;
