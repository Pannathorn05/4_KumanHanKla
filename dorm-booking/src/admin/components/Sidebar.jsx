import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/DashboardPage.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">admin หอพักใจ</div>

      <div className="sidebar-header2">_____________</div>

      <nav className="sidebar-menu">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            "sidebar-menu-item" + (isActive ? " active" : "")
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            "sidebar-menu-item" + (isActive ? " active" : "")
          }
        >
          การจอง
        </NavLink>

        <NavLink
          to="/admin/members"
          className={({ isActive }) =>
            "sidebar-menu-item" + (isActive ? " active" : "")
          }
        >
          สมาชิก
        </NavLink>

        <NavLink
          to="/admin/contracts"
          className={({ isActive }) =>
            "sidebar-menu-item" + (isActive ? " active" : "")
          }
        >
          การทำสัญญา
        </NavLink>
      </nav>

      <div className="sidebar-footer">ออกจากระบบ</div>
    </div>
  );
};

export default Sidebar;
