import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light'); // State to track the current theme (light or dark)
  const [alert, setAlert] = useState(null); // State to manage alert messages

  // Function to show alert with a message and type
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null); // Clear the alert after 2 seconds
    }, 2000);
  };

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); // Switch to dark mode
      document.body.style.background = `linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)`; // Apply gradient background for dark mode
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light'); // Switch to light mode
      document.body.style.background = 'white'; // Reset to white background for light mode
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>  {/* Router to manage navigation */}
        <Navbar title="Content-Handler" mode={mode} toggleMode={toggleMode} /> {/* Navbar with dynamic theme toggle */}
        <Alert alert={alert} /> {/* Alert component to show status messages */}
        <div className="container my-3">

          {/* Define routes for navigation */}
          <Routes>

            {/* About page */}
            <Route
              path="/about"
              element={<About mode={mode} />}
            />
            
            {/* Home page with TextForm component */}
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Start typing here to analyze your text..."
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;