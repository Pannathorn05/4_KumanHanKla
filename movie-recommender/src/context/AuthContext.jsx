import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email, isAdmin }

  const login = async ({ email, password }) => {
    // TODO: เปลี่ยนเป็นเรียก API จริง
    const isAdmin = email.toLowerCase().includes("admin");
    setUser({
      name: isAdmin ? "Admin" : "User",
      email,
      isAdmin
    });
  };

  const logout = () => {
    setUser(null);
  };

  const register = async ({ email, password, username }) => {
    // TODO: เรียก API สมัครสมาชิกจริง
    setUser({
      name: username,
      email,
      isAdmin: false
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
