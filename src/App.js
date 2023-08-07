// import logo from './logo.svg';
import "./App.css";
import SurveyForm from "./SurveyForm";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App" style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center" ,flexDirection:"column" ,background:"#001C30"}}>      
      <Container  maxWidth="xl">
        <SurveyForm  />
      </Container>
    </div>
  );
}

export default App;
