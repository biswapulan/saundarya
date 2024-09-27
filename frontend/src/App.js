import logo from "./logo.svg";
import "./App.css"; // Ensure styles are correctly imported
import { Navigate, Route, Routes, useLocation } from "react-router-dom"; // Import necessary components
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import RefreshHandler from "./Pages/RefreshHandler";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation(); // Get current location

  // Define the PrivateRoute component
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  // useEffect to handle body class changes
  useEffect(() => {
    // Remove all body classes initially
    document.body.classList.remove("body-login-signup", "body-home");

    // Apply classes based on the current path
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.classList.add("login-signup");
    } else {
      document.body.classList.add("home-page");
    }

    // Cleanup function to remove classes when component unmounts
    return () => {
      document.body.classList.remove("login-signup", "home-page");
    };
  }, [location]);

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
