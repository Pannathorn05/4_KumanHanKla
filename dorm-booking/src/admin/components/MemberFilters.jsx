import React from "react";
import "../styles/MembersComponents.css";

const MemberFilters = ({ searchText, setSearchText }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกัน reload หน้า
  };

  return (
    <form className="member-filters" onSubmit={handleSubmit}>
      <input
        type="text"
        className="member-search-input"
        placeholder="ค้นหา"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" className="member-search-button">
        ค้นหา
      </button>
    </form>
  );
};

export default MemberFilters;
