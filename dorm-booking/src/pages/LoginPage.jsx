import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/AuthPage.css";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: ไว้ค่อยเช็ค username/password จริงทีหลัง
    if (onLogin) {
      onLogin();          // เปลี่ยนสถานะเป็นล็อกอิน
    }
    navigate("/");        // กลับไปหน้าแรก
  };

  return (
    <main className="auth-wrapper">
      <div className="auth-inner">
        <div className="auth-card">
          <h2 className="auth-title">เข้าสู่ระบบ</h2>
          <p className="auth-subtitle">กรอกข้อมูลเพื่อเข้าสู่ระบบหอพักใจ</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-label">
              ชื่อผู้ใช้
              <input type="text" className="auth-input" placeholder="Username" />
            </label>
            <label className="auth-label">
              รหัสผ่าน
              <input
                type="password"
                className="auth-input"
                placeholder="Password"
              />
            </label>

            <button type="submit" className="btn-primary auth-submit">
              เข้าสู่ระบบ
            </button>
          </form>

          <p className="auth-footer-text">
            ยังไม่มีบัญชี? <a href="/register">สมัครสมาชิก</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
