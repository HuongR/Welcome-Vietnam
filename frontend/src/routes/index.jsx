import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/content/Home";
import History from "../pages/home/history/History";
import Multimedia from "../pages/home/multimedia/Multimedia";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
