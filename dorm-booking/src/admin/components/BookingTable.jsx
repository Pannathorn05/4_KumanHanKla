import React from "react";
import { Link } from "react-router-dom"; // 👈 เพิ่ม import
import "../styles/DashboardPage.css";

const data = [
  {
    name: "สมชาย ใจดี",
    building: "A",
    people: 1,
    date: "22/11/2568",
    status: "รอตรวจสอบ",
    statusType: "pending",
  },
  {
    name: "นักรัตถ์ ใจชา",
    building: "B",
    people: 2,
    date: "22/11/2568",
    status: "รอทำสัญญา",
    statusType: "contract",
  },
  {
    name: "ศิริพร มีสุข",
    building: "A",
    people: 1,
    date: "22/11/2568",
    status: "อนุมัติแล้ว",
    statusType: "success",
  },
];

const BookingTable = () => {
  return (
    <div className="booking-table-wrapper">
      
      {/* ------------------ ตารางการจองล่าสุด ------------------ */}
      <div className="section-title">
        การจองล่าสุด
        <Link to="/admin/bookings" className="view-all-btn">ดูทั้งหมด</Link>
      </div>

      <table className="booking-table">
        <thead>
          <tr>
            <th>ชื่อ-นามสกุล</th>
            <th>อาคาร</th>
            <th>จำนวน(คน)</th>
            <th>วันที่เข้าพัก</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              <td>{row.building}</td>
              <td>{row.people}</td>
              <td>{row.date}</td>
              <td>
                <span className={`status-badge ${row.statusType}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ------------------ ตารางทำสัญญาวันนี้ ------------------ */}
      <div className="section-title section-title-bottom">
        ทำสัญญาวันนี้
        <Link to="/admin/contracts" className="view-all-btn">ดูทั้งหมด</Link>
      </div>

      <div className="booking-current">
        <div className="booking-current-text">
          สมชาย ใจดี • อาคาร A • 09:00 น.
        </div>
      </div>

      <div className="booking-current">
        <div className="booking-current-text">
          นักรัตถ์ ใจชา • อาคาร B • 11:00 น.
        </div>
      </div>

    </div>
  );
};

export default BookingTable;
