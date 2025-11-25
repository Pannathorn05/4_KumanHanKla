import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import MemberFilters from "../components/MemberFilters";
import MemberTable from "../components/MemberTable";
import "../styles/MembersPage.css";

const initialMembers = [
  {
    id: 101,
    fullname: "สมชาย ใจดี",
    username: "somchai01",
    email: "somchai@example.com",
    phone: "082-1234567",
  },
  {
    id: 102,
    fullname: "นักธิดา โอชา",
    username: "natty",
    email: "nat@example.com",
    phone: "081-8887777",
  },
  {
    id: 103,
    fullname: "ศิริพร มีสุข",
    username: "araya",
    email: "aya@example.com",
    phone: "089-2221111",
  },
];

const MembersPage = () => {
  const [members, setMembers] = useState(initialMembers);
  const [searchText, setSearchText] = useState("");

  const filteredMembers = useMemo(() => {
    const keyword = searchText.toLowerCase();
    return members.filter(
      (m) =>
        m.fullname.toLowerCase().includes(keyword) ||
        m.username.toLowerCase().includes(keyword) ||
        m.email.toLowerCase().includes(keyword) ||
        m.phone.toLowerCase().includes(keyword)
    );
  }, [members, searchText]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("ต้องการลบสมาชิกคนนี้ใช่หรือไม่?");
    if (!confirmDelete) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="dashboard-root">
      <Sidebar />

      <div className="dashboard-main admin-members-page">
        <h1 className="members-page-title">สมาชิกทั้งหมด</h1>

        <MemberFilters searchText={searchText} setSearchText={setSearchText} />

        <MemberTable members={filteredMembers} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default MembersPage;
