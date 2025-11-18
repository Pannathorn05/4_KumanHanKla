import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email: form.email, password: form.password });
    navigate("/");
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">welcome back!</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="auth-field">
          <input
            type="email"
            name="email"
            placeholder="user name or email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="auth-field">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <label className="auth-remember">
          <input
            type="checkbox"
            name="remember"
            checked={form.remember}
            onChange={handleChange}
          />
          remember me
        </label>

        <button type="submit" className="btn-primary auth-submit">
          Login
        </button>

        <p className="auth-subtext">
          Don&apos;t have your account?{" "}
          <span className="link-text">Sign in</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
