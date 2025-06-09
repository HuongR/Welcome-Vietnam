import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/content/Home";
import History from "../pages/home/history/History";
import Multimedia from "../pages/home/multimedia/Multimedia";
import Profile from "../pages/home/profile/Profile";
import Login, { SignIn, Register } from "../components/ui/Login";
import Setting from "../components/ui/Setting";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-signin" element={<SignIn />} />
        <Route path="/login-register" element={<Register />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;