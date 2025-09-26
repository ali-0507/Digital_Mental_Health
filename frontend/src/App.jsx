// import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Screening from "./pages/Screening";
import AIChat from "./pages/AIChat";
import Booking from "./pages/Booking";
import Resources from "./pages/Resources";
import PeerSupport from "./pages/PeerSupport";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-fill container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screening" element={<Screening />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/peer-support" element={<PeerSupport />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

