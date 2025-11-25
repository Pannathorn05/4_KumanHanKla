import React from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import BookingTable from "../components/BookingTable";
import "../styles/DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-root">
      <Sidebar />

      <div className="dashboard-main">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
        </header>

        <section className="stat-grid">
          <StatCard label="การจองใหม่ (รอบเดือน)" value="12" accent="yellow" />
          <StatCard label="ห้องว่างทั้งหมด" value="40" accent="cyan" />
          <StatCard label="การจองทั้งหมด" value="30" accent="magenta" />
          <StatCard label="สัญญาที่ต้องทำวันนี้" value="5" accent="green" />
        </section>

        <BookingTable />
      </div>
    </div>
  );
};

export default DashboardPage;
