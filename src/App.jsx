import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NurseDashboard from "./components/NurseDashboard";
import ChiefDashboard from "./components/ChiefDashboard";
import ChiefManagement from "./pages/ChiefManagement";
import NurseSchedule from "./pages/NurseSchedule";
import LoginPage from "./pages/LoginPage";

function App() {
  const user = { name: "Ophelia Johnson", role: "chief" }; // Mock user, we can change to "nurse" to see the diference between the views

  return (
    <Router>
      <div>
        <Header userName={user.name} />
        <Navbar role={user.role} />
        <main>
          <Routes>
            <Route path="/" element={<h1>Home Page - it works!</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/nurse-dashboard" element={<NurseDashboard />} />
            <Route path="/chief-dashboard" element={<ChiefDashboard />} />
            <Route path="/chief-management" element={<ChiefManagement />} />
            <Route path="/schedule" element={<NurseSchedule />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
