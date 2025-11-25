import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/RoomsPage.css";

const dummyUser = {
  fullName: "สมชาย ใจดี",
  phone: "083-xxx-xxxx",
  email: "somchai@gmail.com",
};
// TODO: เปลี่ยนเป็นข้อมูลจริงจากระบบสมัครสมาชิกได้ภายหลัง

function RoomsPage() {
  const navigate = useNavigate();
  const [building, setBuilding] = useState("A");
  const [moveInDate, setMoveInDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);

  const [guest2, setGuest2] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [bookingSummary, setBookingSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!moveInDate) {
      alert("กรุณาเลือกวันที่เข้าพัก");
      return;
    }

    if (numPeople === 2) {
      if (!guest2.fullName || !guest2.phone || !guest2.email) {
        alert("กรุณากรอกข้อมูลผู้เข้าพักคนที่ 2 ให้ครบ");
        return;
      }
    }

    const summary = {
      building,
      moveInDate,
      numPeople,
      guest1: dummyUser,
      guest2: numPeople === 2 ? guest2 : null,
    };
    setBookingSummary(summary);
    setShowConfirm(true);
  };

    const handleConfirmBooking = () => {
    setShowConfirm(false);
    setBookingDone(true);

    // บันทึกประวัติการจองลง localStorage
    if (bookingSummary) {
      const record = {
        building: bookingSummary.building,
        moveInDate: bookingSummary.moveInDate,
        numPeople: bookingSummary.numPeople,
        createdAt: new Date().toISOString(), // เวลา/วันที่จอง
      };

      try {
        const existing = JSON.parse(
          localStorage.getItem("bookingHistory") || "[]"
        );
        existing.push(record);
        localStorage.setItem("bookingHistory", JSON.stringify(existing));
      } catch (err) {
        console.error("Failed to save booking history", err);
      }
    }

    // TODO: ตรงนี้ถ้าคุณมี backend จริง ค่อยยิง API เพิ่มได้
  };


  const handleCancelConfirm = () => {
    setShowConfirm(false);
  };

  const handleGuest2Change = (field, value) => {
    setGuest2((prev) => ({ ...prev, [field]: value }));
  };

  // helper แสดงวันที่แบบ dd/mm/yyyy
  const formatDateThai = (value) => {
    if (!value) return "xx/xx/xxxx";
    const [y, m, d] = value.split("-");
    return `${d}/${m}/${y}`;
  };

  return (
    <main className="rooms-wrapper">
      <div className="rooms-container">
        <h1 className="rooms-title">จองห้องพัก</h1>

        {!bookingDone ? (
          <>
            {/* การ์ดข้อมูลห้องพัก */}
            <section className="rooms-section">
              <div className="rooms-card rooms-roominfo-card">
                <h2 className="rooms-card-title">ข้อมูลห้องพัก</h2>
                <div className="rooms-roomtype-box">
                  <p className="rooms-roomtype-name">ห้องพักมาตรฐาน</p>
                  <p>ขนาด 20 ตร.ม.</p>
                  <p className="rooms-roomtype-price">
                    45,000 บาท/ปี<br />
                    <span>ไม่รวมค่าไฟ ค่าน้ำ</span>
                  </p>
                </div>
              </div>
            </section>

            {/* ตารางจำนวนห้องว่าง */}
            <section className="rooms-section">
              <div className="rooms-card">
                <h3 className="rooms-card-subtitle">จำนวนห้องว่าง</h3>
                <div className="rooms-table-wrapper">
                  <table className="rooms-table">
                    <thead>
                      <tr>
                        <th>อาคาร</th>
                        <th>ห้องทั้งหมด</th>
                        <th>ห้องว่าง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>80</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>B</td>
                        <td>80</td>
                        <td>20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ฟอร์มจอง */}
            <form className="rooms-form" onSubmit={handleSubmit}>
              {/* เลือกอาคาร */}
              <div className="rooms-card rooms-form-card">
                <label className="rooms-label">เลือกอาคาร</label>
                <select
                  className="rooms-input"
                  value={building}
                  onChange={(e) => setBuilding(e.target.value)}
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>

              {/* วันที่เข้าพัก */}
              <div className="rooms-card rooms-form-card">
                <label className="rooms-label">วันที่เข้าพัก</label>
                <input
                  type="date"
                  className="rooms-input"
                  value={moveInDate}
                  onChange={(e) => setMoveInDate(e.target.value)}
                />
              </div>

              {/* จำนวนผู้เข้าพัก */}
              <div className="rooms-card rooms-form-card">
                <label className="rooms-label">จำนวนผู้เข้าพัก</label>
                <select
                  className="rooms-input"
                  value={numPeople}
                  onChange={(e) => setNumPeople(Number(e.target.value))}
                >
                  <option value={1}>1 คน</option>
                  <option value={2}>2 คน</option>
                </select>
              </div>

              {/* ข้อมูลผู้เข้าพักคนที่ 1 (auto จากระบบ) */}
              <div className="rooms-card rooms-form-card">
                <div className="rooms-label">ข้อมูลผู้เข้าพักคนที่ 1</div>
                <input
                  className="rooms-input rooms-input-readonly"
                  value={dummyUser.fullName}
                  disabled
                />
                <input
                  className="rooms-input rooms-input-readonly"
                  value={dummyUser.phone}
                  disabled
                />
                <input
                  className="rooms-input rooms-input-readonly"
                  value={dummyUser.email}
                  disabled
                />
              </div>

              {/* ข้อมูลผู้เข้าพักคนที่ 2 (ถ้ามี) */}
              {numPeople === 2 && (
                <div className="rooms-card rooms-form-card">
                  <div className="rooms-label">ข้อมูลผู้เข้าพักคนที่ 2</div>
                  <input
                    className="rooms-input"
                    placeholder="ชื่อ-นามสกุล"
                    value={guest2.fullName}
                    onChange={(e) =>
                      handleGuest2Change("fullName", e.target.value)
                    }
                  />
                  <input
                    className="rooms-input"
                    placeholder="เบอร์โทรศัพท์"
                    value={guest2.phone}
                    onChange={(e) =>
                      handleGuest2Change("phone", e.target.value)
                    }
                  />
                  <input
                    className="rooms-input"
                    placeholder="อีเมล"
                    value={guest2.email}
                    onChange={(e) =>
                      handleGuest2Change("email", e.target.value)
                    }
                  />
                </div>
              )}

              <button type="submit" className="rooms-submit-btn">
                ยืนยันการจอง
              </button>
            </form>
          </>
        ) : (
          /* ---------------------------------
             หน้าหลังจากจองสำเร็จ
          -----------------------------------*/
          <section className="rooms-success">
            <h2 className="rooms-success-title">
              จองสำเร็จ! ขอบคุณที่เลือกใช้บริการหอพักใจ
            </h2>

            <div className="rooms-success-icon-wrapper">
              <div className="rooms-success-icon">✓</div>
            </div>

            <div className="rooms-card rooms-next-steps-card">
              <h3 className="rooms-card-subtitle">ขั้นตอนต่อไป: การทำสัญญา</h3>
              <div className="rooms-next-steps-grid">
                <div className="rooms-next-step-box step-purple">
                  <h4>เอกสารที่ต้องเตรียม</h4>
                  <ul>
                    <li>สำเนาบัตรประชาชนผู้พัก (จำนวน 2 ฉบับ)</li>
                    <li>สำเนาบัตรประชาชนผู้ปกครอง (จำนวน 2 ฉบับ)</li>
                    <li>สำเนาทะเบียนบ้านผู้พัก (จำนวน 1 ฉบับ)</li>
                  </ul>
                </div>

                <div className="rooms-next-step-box step-green">
                  <h4>เงินที่ต้องชำระในวันทำสัญญา</h4>
                  <ul>
                    <li>ค่าประกันห้อง 3,000 บาท (ครั้งเดียว)</li>
                    <li>ค่าเช่าล่วงหน้า 1 เดือน 3,000 บาท</li>
                    <li>รวมทั้งสิ้น 6,000 บาท</li>
                  </ul>
                </div>

                <div className="rooms-next-step-box step-yellow">
                  <h4>สถานที่ทำสัญญา</h4>
                  <ul>
                    <li>ชั้น 1 ห้องพักใจ</li>
                    <li>เวลาทำการ 09.00–18.00 น.</li>
                    <li>สอบถามเพิ่มเติม โทร 02-232-2323</li>
                  </ul>
                </div>

                <div className="rooms-next-step-box step-pink">
                  <h4>หมายเหตุสำคัญ</h4>
                  <ul>
                    <li>กรุณานำเอกสารตัวจริงมาในวันทำสัญญาด้วยทุกครั้ง</li>
                    <li>การจองมีอายุ 7 วัน หากไม่มาทำสัญญาจะถือว่าสละสิทธิ์</li>
                    <li>หลังทำสัญญาไม่สามารถคืนเงินจองได้</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary rooms-history-btn"
              onClick={() => navigate("/profile")}
            >
              ประวัติการจอง
            </button>
          </section>
        )}
      </div>

      {/* Modal ยืนยันการจอง */}
      {showConfirm && bookingSummary && (
        <div className="rooms-modal-backdrop">
          <div className="rooms-modal">
            <h3 className="rooms-modal-title">ยืนยันการจอง</h3>
            <div className="rooms-modal-body">
              <p>อาคาร : {bookingSummary.building}</p>
              <p>วันที่เข้าพัก : {formatDateThai(bookingSummary.moveInDate)}</p>
              <p>จำนวน : {bookingSummary.numPeople} คน</p>
              <p>
                ผู้เข้าพักคนที่ 1 : {bookingSummary.guest1.fullName} | เบอร์โทร :{" "}
                {bookingSummary.guest1.phone} | อีเมล :{" "}
                {bookingSummary.guest1.email}
              </p>
              {bookingSummary.guest2 && (
                <p>
                  ผู้เข้าพักคนที่ 2 : {bookingSummary.guest2.fullName} | เบอร์โทร
                  : {bookingSummary.guest2.phone} | อีเมล :{" "}
                  {bookingSummary.guest2.email}
                </p>
              )}
            </div>
            <div className="rooms-modal-actions">
              <button
                type="button"
                className="rooms-modal-btn rooms-modal-btn-secondary"
                onClick={handleCancelConfirm}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="rooms-modal-btn rooms-modal-btn-primary"
                onClick={handleConfirmBooking}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default RoomsPage;
