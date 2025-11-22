import React from "react";
import "./../styles/AuthPage.css";

function RegisterPage() {
  return (
    <main className="auth-wrapper">
      <div className="auth-inner">
        <div className="auth-card">
          <h2 className="auth-title">สมัครสมาชิก</h2>
          <p className="auth-subtitle">ลงทะเบียนเพื่อจองหอพักใจ</p>

          <form className="auth-form">
            <label className="auth-label">
              ชื่อ–นามสกุล
              <input type="text" className="auth-input" />
            </label>
            <label className="auth-label">
              เบอร์โทรศัพท์
              <input type="tel" className="auth-input" />
            </label>
            <label className="auth-label">
              อีเมล
              <input type="email" className="auth-input" />
            </label>
            <label className="auth-label">
              ชื่อผู้ใช้
              <input type="text" className="auth-input" />
            </label>
            <label className="auth-label">
              รหัสผ่าน
              <input type="password" className="auth-input" />
            </label>

            <button type="submit" className="btn-primary auth-submit">
              สมัครสมาชิก
            </button>
          </form>

          <p className="auth-footer-text">
            มีบัญชีอยู่แล้ว? <a href="/login">เข้าสู่ระบบ</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
