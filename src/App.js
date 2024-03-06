
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import text_utils_bg_dark from './static/text_utils_bg_dark.jpg';
import text_utils_bg_light from './static/text_utils_bg_light.jpg';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, alert) => {
    setAlert ({
      msg: message,
      type: alert
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundImage = `url('${text_utils_bg_dark}')`;
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundImage = `url('${text_utils_bg_light}')`;
    }
  }

  return (
    <>
     <div className="App">
     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleModeClick={toggleMode}></Navbar>
     <Alert alert={alert} />
      <Routes>
        <Route path="/" element={ 
           <div className="container my-3">
      
           <TextForm showAlert={showAlert} heading="Enter your input below" mode={mode}/>
         </div>
        } />
        <Route path="about" element={ <About/> } />
      </Routes>
    </div>
    
    
   
    </>

  );
}

export default App;
