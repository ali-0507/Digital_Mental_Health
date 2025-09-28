import React, { useState } from "react";

function AdminDashboardBox() {
  const [users] = useState([
    { id: 1, name: "Anonymous User", status: "Active" },
    { id: 2, name: "Volunteer Moderator", status: "Active" },
    { id: 3, name: "Test User", status: "Flagged" },
  ]);

  return (
    <div className="admin-box">
      <h4 className="mb-3">User Management</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.status}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2">Suspend</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-5 mb-3">Reports Overview</h4>
      <ul>
        <li>3 flagged posts pending review</li>
        <li>1 appointment request requires approval</li>
      </ul>
    </div>
  );
}

export default AdminDashboardBox;