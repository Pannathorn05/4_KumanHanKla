import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="page auth-page auth-page-register">
      <div className="auth-background">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
