// import logo from './logo.svg';
import "./App.css";
import Navbar from "./NavBar";
import ResponsiveAppBar from "./NavBar";
import SurveyForm from "./SurveyForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar/> */}
      <Navbar />
      
      <Container maxWidth="md">
        <SurveyForm  />
      </Container>
    </div>
  );
}

export default App;
