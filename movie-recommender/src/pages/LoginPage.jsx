import React from "react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="page auth-page auth-page-login">
      <div className="auth-background">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
