import React, { useState, useEffect,useCallback } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { myConfig } from "./firebas";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/storage"; // Import the firebase/app module
import { db } from "./firebas";

function SurveyForm() {
  firebase.initializeApp(myConfig);
  const [step, setStep] = useState(1);
  const [fromFirebase, setFromFirebase] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    console.log(value);
  };
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
    captcha:""
  });


  // hundle submit button 💦💦💦💦💦💦💦💦💦

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "formData"), {
        data: userData,
      });
      console.log("Document written with ID: ", docRef.id);
      await fetchPost();
      setStep(step + 1);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

    // fetching the data from firebase 💦💦💦💦💦💦💦💦💦

  const fetchPost =useCallback(async () => {
    await getDocs(collection(db, "formData")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(userData, newData);
      setFromFirebase(newData);
    });
  },[userData]) ;
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);


  // next button to another page 💦💦💦💦💦💦💦💦💦
  const handleNextStep = () => {
    const lettersRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\d{10,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      let hasError = false;

      if (userData.firstName === "" || !lettersRegex.test(userData.firstName)) {
        setMyError((prevMyError) => ({ ...prevMyError, firstName: true }));
        hasError = true;
      }

      if (userData.lastName === "" || !lettersRegex.test(userData.lastName)) {
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

      if (
        userData.occupation === "" ||
        !lettersRegex.test(userData.occupation)
      ) {
        setMyError((prevMyError) => ({ ...prevMyError, occupation: true }));
        hasError = true;
      }

      if (userData.city === "" || !lettersRegex.test(userData.city)) {
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

  // preveious to return the last page 💦💦💦💦💦💦💦💦💦
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // set if there an error in an input or not 💦💦💦💦💦💦💦💦💦
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

  // button of add user 💦💦💦💦💦💦💦💦💦
  const addUser = () => {
    setStep(1);
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      phone: "",
    });
  };

  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            data={userData}
            myError={myError}
            handleChange={handleChange}
            recaptcha={setRecaptchaValue}
            handleRecaptchaChange={handleRecaptchaChange}
          />
        );
      case 2:
        return (
          <Step2
            data={userData}
            myError={myError}
            setData={setUserData}
            userData={userData}
            handleChange={handleChange}
            
          />
        );
      case 3:
        return <Step3 data={userData} handleChange={handleChange} />;
      case 4:
        return <Step4 datas={fromFirebase} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <>
      {fromFirebase &&  (
        <Button
          onClick={() => {
            setStep(4);
          }}
          style={{ background: "#00ADB5", marginBottom: "10px" }}
          variant="contained"
        >
          show data
        </Button>
      )}
      <Container maxWidth={step === 4 ? "lg" : "xs"}>
        <div
          style={{ background: "#eee", padding: "50px 15px", borderRadius: "15px" }}
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
              <Button
                onClick={handleNextStep}
                style={{ background: "#00ADB5" }}
                variant="contained"
              >
                Continue
              </Button>
            ) : (
              <>
                <Button
                  style={{ background: "#00ADB5" }}
                  onClick={step < 4 ? handleSubmit : addUser}
                  variant="contained"
                >
                  {step === 4 ? "Add User" : "Submit"}
                </Button>
              </>
            )}
            {step > 1 && step !== 4 && (
              <Button
                style={{ color: "#00ADB5", borderColor: "#00ADB5" }}
                onClick={handlePreviousStep}
                variant="outlined"
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default SurveyForm;
