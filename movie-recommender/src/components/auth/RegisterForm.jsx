import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    await register({
      email: form.email,
      password: form.password,
      username: form.username
    });

    navigate("/");
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Let&apos;s create your account!</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="auth-field">
          <input
            type="email"
            name="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-field">
          <input
            type="text"
            name="username"
            placeholder="user name"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-field">
          <input
            type="password"
            name="password"
            placeholder="create password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-field">
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary auth-submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
