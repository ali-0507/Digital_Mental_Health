import React from "react";
import AdminDashboardBox from "../components/AdminDashboardBox"; // adjust path if needed
import "./Home.css";

function AdminDashboard() {
  return (
    <div className="admindashboard">
      <h2 className="mb-4 text-center">Admin Dashboard</h2>
      <p className="text-muted text-center mb-4">
        Manage users, monitor posts, and handle reports effectively from this panel.
      </p>

      <div className="card p-4 shadow-sm">
        <AdminDashboardBox />
      </div>
    </div>
  );
}

export default AdminDashboard;