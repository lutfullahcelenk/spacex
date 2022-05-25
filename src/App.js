import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//context
import LaunchContextProvider from "./provider";
//components
import Navbar from "./components/Navbar";
//pages
import Home from "./pages/Home";
import Rockets from "./pages/Rockets";
import Launches from "./pages/Launches";
import LaunchDetail from "./pages/LaunchDetail";
import RocketDetail from "./pages/RocketDetail";


const App = () => {
  return (
    <Router>
      <LaunchContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rockets/:rocketId" element={<RocketDetail />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:flightNumber" element={<LaunchDetail />} />
        </Routes>
      </LaunchContextProvider>
    </Router>
  );
};

export default App;
