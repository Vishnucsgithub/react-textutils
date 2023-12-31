
// import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';

import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";





function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has enabled", 'success')
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "TextUtils is amazing"
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils - Install now"
      }, 1500);

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has enabled", 'success')
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>

      {/* <Router /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}

          {/* <Route path='/about' element={ */}
          {/* <About /> */}
          {/* } /> */}

          {/* <Route path='/' element={ */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* } /> */}



        {/* </Routes> */}

        {/* <About/>   */}
      </div>
      {/* <Router /> */}
    </>
  );
}

export default App;
