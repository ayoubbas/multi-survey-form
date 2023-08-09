// import logo from './logo.svg';
import "./App.css";
import SurveyForm from "./SurveyForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App" style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center" ,flexDirection:"column" ,background:"#001C30"}}>      
      <Container  maxWidth="lg">
        <SurveyForm  />
      {/* <div className="g-recaptcha" data-sitekey="6LcK640nAAAAADYu7TIXBfcgWVlv2HQHprv6SFMv"></div> */}

      </Container>
    </div>
  );
}

export default App;
