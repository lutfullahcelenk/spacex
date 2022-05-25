import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaunchContextProvider from "./provider";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const Launches = React.lazy(() => import("./pages/Launches"));
const LaunchDetail = React.lazy(() => import("./pages/LaunchDetail"));
const Rockets = React.lazy(() => import("./pages/Rockets"));
const RocketDetail = React.lazy(() => import("./pages/RocketDetail"));

const App = () => {
  return (
    <LaunchContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rockets/:rocketId" element={<RocketDetail />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:flightNumber" element={<LaunchDetail />} />
        </Routes>
      </Router>
    </LaunchContextProvider>
  );
};

export default App;
