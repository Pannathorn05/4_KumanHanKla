import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo">
          LOGO
        </Link>

        <div className="header-auth">
          {user ? (
            <>
              <span className="header-user">
                สวัสดี, {user.name}
                {user.isAdmin && <span className="badge-admin">Admin</span>}
              </span>
              {user.isAdmin && (
                <Link
                  to="/admin"
                  className={
                    location.pathname === "/admin"
                      ? "header-link active"
                      : "header-link"
                  }
                >
                  แอดมิน
                </Link>
              )}
              <button className="btn-link" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={
                  location.pathname === "/login"
                    ? "header-link active"
                    : "header-link"
                }
              >
                login
              </Link>
              <span className="header-divider">|</span>
              <Link
                to="/signup"
                className={
                  location.pathname === "/signup"
                    ? "header-link active"
                    : "header-link"
                }
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
