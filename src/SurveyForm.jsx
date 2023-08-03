import React, { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";

function SurveyForm() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    // Add more fields as needed
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        return <Step1 data={userData} handleChange={handleChange} />;
      case 2:
        return <Step2 data={userData} handleChange={handleChange} />;
      case 3:
        return <Step3 data={userData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="xs" style={{}}>

    <div style={{background:"#eee" ,padding:"50px",borderRadius:"15px"}}>
      {renderStep()}
      <div style={{display:"flex",justifyContent:"space-between"  ,marginTop:"30px"}}>
        {step < 3 ? (
            <Button onClick={handleNextStep} variant="contained">
            Continue
          </Button>
        ) : (
            <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        )}
        {step > 1 && <Button onClick={handlePreviousStep}  variant="outlined">Previous</Button>}
      </div>
    </div>

    </Container>
  );
}

export default SurveyForm;
