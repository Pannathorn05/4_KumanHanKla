import React, { useEffect, useState } from "react";
import "../styles/ProfilePage.css";

const dummyUser = {
    fullName: "สมชาย ใจดี",
    phone: "082-xxx-xxxx",
    email: "somchai@gmail.com",
};

function ProfilePage() {
    const [bookingHistory, setBookingHistory] = useState([]);

    useEffect(() => {
        try {
            const data = JSON.parse(localStorage.getItem("bookingHistory") || "[]");
            setBookingHistory(data);
        } catch (err) {
            console.error("Failed to load booking history", err);
        }
    }, []);

    const formatDateThai = (iso) => {
        if (!iso) return "xx/xx/xxxx";
        const d = new Date(iso);
        const day = d.getDate().toString().padStart(2, "0");
        const month = (d.getMonth() + 1).toString().padStart(2, "0");
        const year = d.getFullYear() + 543; // ปี พ.ศ.
        const hh = d.getHours().toString().padStart(2, "0");
        const mm = d.getMinutes().toString().padStart(2, "0");

        return {
            dateText: `${day}/${month}/${year}`,
            fullText: `จองเมื่อ: ${day}/${month}/${year} เวลา ${hh}:${mm} น.`,
        };
    };

    const hasBooking = bookingHistory.length > 0;
    const latestBooking =
        hasBooking && bookingHistory[bookingHistory.length - 1];

    const moveInFormatted = latestBooking
        ? formatDateThai(latestBooking.moveInDate).dateText
        : "xx/xx/xxxx";

    const bookingCreatedText = latestBooking
        ? formatDateThai(latestBooking.createdAt).fullText
        : "";

    return (
        <main className="profile-wrapper">
            <div className="profile-container">
                {/* การ์ดข้อมูลผู้ใช้ */}
                <section className="profile-card">
                    <h2 className="profile-name">{dummyUser.fullName}</h2>
                    <p className="profile-phone">{dummyUser.phone}</p>
                    <p className="profile-email">{dummyUser.email}</p>
                </section>

                {/* ประวัติการจอง */}
                <section className="history-section">
                    <h2 className="history-title">ประวัติการจอง</h2>

                    <div className="history-card">

                        <div className="history-header">
                            <p>จองเมื่อ: 22/11/2568</p>
                            <a href="#" className="history-link">ขั้นตอนการทำสัญญา</a>
                        </div>

                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>อาคาร</th>
                                    <th>จำนวนผู้เข้า</th>
                                    <th>วันที่เข้าพัก</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{latestBooking.building}</td>
                                    <td>{latestBooking.numPeople}</td>
                                    <td>{moveInFormatted}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="history-status">
                            <p><strong>สถานะ:</strong> <span className="status-orange">รอทำสัญญา</span></p>
                            <p><strong>วันที่สัญญา:</strong> รอแจ้ง (ภายใน 24 ชม.)</p>
                            <p><strong>เลขห้อง:</strong> แจ้งในวันทำสัญญา</p>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default ProfilePage;
