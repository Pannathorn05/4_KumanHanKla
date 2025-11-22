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
                <section className="profile-card-wrapper">
                    <div className="profile-card-shadow" />
                    <div className="profile-card">
                        <h2 className="profile-name">{dummyUser.fullName}</h2>
                        <p className="profile-text">{dummyUser.phone}</p>
                        <p className="profile-text">{dummyUser.email}</p>
                    </div>
                </section>

                {/* ประวัติการจอง */}
                <section className="profile-history">
                    <h3 className="profile-history-title">ประวัติการจอง</h3>

                    {!hasBooking && (
                        <div className="profile-history-card">
                            <p>ไม่พบการจอง</p>
                        </div>
                    )}

                    {hasBooking && (
                        <div className="profile-history-card profile-history-card--has">
                            <div className="profile-history-header">
                                <span className="profile-history-date">
                                    {bookingCreatedText}
                                </span>
                                <span className="profile-history-status">ยืนยันแล้ว</span>
                            </div>

                            <div className="profile-history-table">
                                <div className="profile-history-row profile-history-row--head">
                                    <span>อาคาร</span>
                                    <span>จำนวนผู้เข้าพัก</span>
                                    <span>วันที่เข้าพัก</span>
                                </div>
                                <div className="profile-history-row">
                                    <span>{latestBooking.building}</span>
                                    <span>{latestBooking.numPeople}</span>
                                    <span>{moveInFormatted}</span>
                                </div>
                            </div>

                            <div className="profile-history-footer">
                                <button
                                    type="button"
                                    className="profile-history-link"
                                    onClick={() =>
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }
                                >
                                    ขั้นตอนการทำสัญญา
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

export default ProfilePage;
