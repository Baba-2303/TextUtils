// import logo from './logo.svg';
// import './App.css';
// import {Greet} from './Components/Greet';
import React,{useState} from "react";
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("body-secondary");
  const [txtColor,setTxtColor] = useState("dark");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if(mode==="body-secondary"){
      setMode("dark");
      setTxtColor("light");
      document.body.style.backgroundColor= "rgb(48,48,48)";
      showAlert("Dark Mode Enabled!","success");
    }
    else{
      setMode("body-secondary");
      setTxtColor("dark");
      document.body.style.backgroundColor= "white";
      showAlert("Dark Mode Disabled!","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar navTitle = "TextUtils" mode = {mode} toggleMode = {toggleMode} txtColor={txtColor}/>
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter the Text for Analysis" mode = {mode} txtColor={txtColor}/>
    {/* <Routes> */}
        {/* <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the Text for Analysis" mode = {mode} txtColor={txtColor}/> } /> */}
        {/* <Route path="about" element={ <About/> } /> */}
    {/* </Routes> */}
    {/* </Router> */}
      
    
    </>
  );
}

export default App;
