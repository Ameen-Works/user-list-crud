import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p className="description">
        A list of users, comprising their name, age, gender, contact
        information, and address, is a comprehensive database for managing
        individual profiles.
      </p>
      <Link to="/users">
        <button className="button">List Users</button>
      </Link>
    </div>
  );
}

export default Dashboard;
