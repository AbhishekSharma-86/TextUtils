import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#050a44"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        {/* <Routes>
          <Route path="/" element={<TextForm heading="Enter your text here" mode={mode} />} />
          <Route path="about" element={<About />} />
        </Routes> */}
        {/* <TextForm heading="Enter your text here" mode={mode} /> */}
        {/* <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm heading="Enter your text here" mode={mode} />
          </Route>
        </Switch> */}
        <TextForm heading="Enter your text here" mode={mode} />
      </div>

    {/* </Router> */}
    </>
  );
}

export default App;


