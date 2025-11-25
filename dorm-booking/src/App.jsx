import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

/* USER */
import Navbar from "./user/components/Navbar";
import HomePage from "./user/pages/HomePage";
import LoginPage from "./user/pages/LoginPage";
import RegisterPage from "./user/pages/RegisterPage";
import RoomsPage from "./user/pages/RoomsPage";
import ProfilePage from "./user/pages/ProfilePage";

/* ADMIN */
import AdminLoginPage from "./admin/pages/LoginPage";
import DashboardPage from "./admin/pages/DashboardPage";
import BookingPage from "./admin/pages/BookingPage";
import MembersPage from "./admin/pages/MembersPage";
import ContractsPage from "./admin/pages/ContractsPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  /* USER AUTH */
  const handleUserLogin = () => setIsLoggedIn(true);
  const handleUserLogout = () => setIsLoggedIn(false);

  /* ADMIN AUTH */
  const handleAdminLogin = () => setIsAdminLoggedIn(true);
  const handleAdminLogout = () => setIsAdminLoggedIn(false);

  return (
    <div className="App">

      {/* ซ่อน Navbar เมื่อเป็นหน้า admin */}
      {!window.location.pathname.startsWith("/admin") && (
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleUserLogout} />
      )}

      <Routes>

        {/* ------------------------- USER ROUTES ------------------------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleUserLogin} />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ------------------------- ADMIN ROUTES ------------------------- */}
        <Route
          path="/admin"
          element={<AdminLoginPage onLogin={handleAdminLogin} />}
        />

        <Route
          path="/admin/dashboard"
          element={
            isAdminLoggedIn ? (
              <DashboardPage onLogout={handleAdminLogout} />
            ) : (
              <AdminLoginPage onLogin={handleAdminLogin} />
            )
          }
        />

        <Route
          path="/admin/bookings"
          element={
            isAdminLoggedIn ? (
              <BookingPage onLogout={handleAdminLogout} />
            ) : (
              <AdminLoginPage onLogin={handleAdminLogin} />
            )
          }
        />

        <Route
          path="/admin/members"
          element={
            isAdminLoggedIn ? (
              <MembersPage />
            ) : (
              <AdminLoginPage onLogin={handleAdminLogin} />
            )
          }
        />

        <Route
          path="/admin/contracts"
          element={
            isAdminLoggedIn ? (
              <ContractsPage />
            ) : (
              <AdminLoginPage onLogin={handleAdminLogin} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
