import React from "react";
import "../styles/LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };
  const handleAdminLogin = () => {
    localStorage.setItem("adminAuth", "true"); // 👈 เซฟว่าเป็น admin
    window.location.href = "/admin/dashboard";  // 👈 พาเข้า dashboard
  };

  return (
    <div className="login-root">
      <div className="login-card">
        <div className="login-title">admin หอพักใจ</div>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="ลงชื่อเข้าใช้"
            className="login-input"
          />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            className="login-input"
          />
          <button type="submit" className="login-button">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
