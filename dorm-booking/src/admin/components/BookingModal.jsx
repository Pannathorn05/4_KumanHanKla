import React from "react";
import "../styles/BookingComponents.css";

const BookingModal = ({
  type,
  booking,
  approveNote,
  setApproveNote,
  rejectReason,
  setRejectReason,
  onClose,
  onApprove,
  onReject,
}) => {
  if (!type || !booking) return null;

  const stop = (e) => e.stopPropagation();

  // -------------------- Detail Modal --------------------
  if (type === "detail") {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-card" onClick={stop}>
          <div className="modal-header">
            <div className="modal-title">
              รายละเอียดการจอง #{booking.id}
            </div>
          </div>

          <div className="modal-body">
            <div className="modal-row">
              <label>ชื่อผู้จอง</label>
              <input className="modal-input" value={booking.name} readOnly />
            </div>
            <div className="modal-row">
              <label>อาคาร</label>
              <input
                className="modal-input"
                value={booking.building}
                readOnly
              />
            </div>
            <div className="modal-row">
              <label>จำนวนคน</label>
              <input
                className="modal-input"
                value={booking.people}
                readOnly
              />
            </div>
            <div className="modal-row">
              <label>วันที่เข้าพัก</label>
              <input
                className="modal-input"
                value={booking.checkinDate}
                readOnly
              />
            </div>
            <div className="modal-row">
              <label>เบอร์โทร</label>
              <input className="modal-input" value={booking.phone} readOnly />
            </div>
            <div className="modal-row">
              <label>อีเมล</label>
              <input className="modal-input" value={booking.email} readOnly />
            </div>
            <div className="modal-row">
              <label>ไลน์</label>
              <input className="modal-input" value={booking.line} readOnly />
            </div>
          </div>

          <div className="modal-footer center">
            <button className="btn-simple" onClick={onClose}>
              ปิด
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------- Approve Modal --------------------
  if (type === "approve") {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-card" onClick={stop}>
          <div className="modal-header">
            <div className="modal-title">อนุมัติการจอง #{booking.id}</div>
          </div>

          <div className="modal-body">
            <div className="modal-row">
              <label>ชื่อผู้จอง</label>
              <input className="modal-input" value={booking.name} readOnly />
            </div>
            <div className="modal-row">
              <label>อาคาร</label>
              <input
                className="modal-input"
                value={booking.building}
                readOnly
              />
            </div>
            <div className="modal-row">
              <label>จำนวนคน</label>
              <input
                className="modal-input"
                value={booking.people}
                readOnly
              />
            </div>
            <div className="modal-row">
              <label>วันที่เข้าพัก</label>
              <input
                className="modal-input"
                value={booking.checkinDate}
                readOnly
              />
            </div>
            <div className="modal-row">
              <label>หมายเหตุ / เงื่อนไขการเข้าพัก</label>
              <input
                className="modal-input"
                placeholder="เช่น ชำระมัดจำภายใน 3 วัน"
                value={approveNote}
                onChange={(e) => setApproveNote(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn-simple" onClick={onClose}>
              ยกเลิก
            </button>
            <button className="btn-primary" onClick={onApprove}>
              ยืนยันอนุมัติ
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------- Reject Modal --------------------
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={stop}>
        <div className="modal-header">
          <div className="modal-title">ปฏิเสธการจอง #{booking.id}</div>
        </div>

        <div className="modal-body">
          <div className="modal-row">
            <label>เหตุผลการปฏิเสธ</label>
            <textarea
              className="modal-textarea"
              placeholder="กรุณากรอกเหตุผลการปฏิเสธ"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-simple" onClick={onClose}>
            ยกเลิก
          </button>
          <button className="btn-danger" onClick={onReject}>
            ยืนยันการปฏิเสธ
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
