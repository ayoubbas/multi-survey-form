// import logo from './logo.svg';
import "./App.css";
import Navbar from "./NavBar";
// import ResponsiveAppBar from "./NavBar";
import SurveyForm from "./SurveyForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Container maxWidth="md" style={{height:"85vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <SurveyForm  />
      </Container>
    </div>
  );
}

export default App;
