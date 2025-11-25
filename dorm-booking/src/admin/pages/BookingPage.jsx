import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import BookingFilters from "../components/BookingFilters";
import BookingTable from "../components/BookingTableB";
import BookingModal from "../components/BookingModal";
import "../styles/BookingPage.css";

const initialBookings = [
  {
    id: 101,
    name: "สมชาย ใจดี",
    building: "A",
    people: 1,
    checkinDate: "22/11/2568",
    status: "pending", // pending | approved | rejected
    phone: "080-123-4567",
    line: "@somchai",
    email: "somchai@example.com",
    extra: "",
  },
  {
    id: 102,
    name: "นักรัตถ์ ใจชา",
    building: "B",
    people: 2,
    checkinDate: "22/11/2568",
    status: "pending",
    phone: "081-222-3333",
    line: "@nakrat",
    email: "nakrat@example.com",
    extra: "",
  },
  {
    id: 103,
    name: "ศิริพร มีสุข",
    building: "A",
    people: 1,
    checkinDate: "22/11/2568",
    status: "approved",
    phone: "082-999-8888",
    line: "@siriporn",
    email: "siriporn@example.com",
    extra: "",
  },
];

const BookingPage = () => {
  const [bookings, setBookings] = useState(initialBookings);

  // filter
  const [searchName, setSearchName] = useState("");
  const [buildingFilter, setBuildingFilter] = useState("ทั้งหมด");
  const [statusFilter, setStatusFilter] = useState("ทั้งหมด");

  // modal
  const [activeModal, setActiveModal] = useState(null); // 'detail' | 'approve' | 'reject'
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [approveNote, setApproveNote] = useState("");
  const [rejectReason, setRejectReason] = useState("");

  const openModal = (type, booking) => {
    setSelectedBooking(booking);
    setActiveModal(type);
    setApproveNote("");
    setRejectReason("");
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedBooking(null);
  };

  const handleApprove = () => {
    if (!selectedBooking) return;
    setBookings((prev) =>
      prev.map((b) =>
        b.id === selectedBooking.id
          ? { ...b, status: "approved", extra: approveNote }
          : b
      )
    );
    closeModal();
  };

  const handleReject = () => {
    if (!selectedBooking) return;
    setBookings((prev) =>
      prev.map((b) =>
        b.id === selectedBooking.id
          ? { ...b, status: "rejected", extra: rejectReason }
          : b
      )
    );
    closeModal();
  };

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchName = b.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const matchBuilding =
        buildingFilter === "ทั้งหมด" || b.building === buildingFilter;
      const matchStatus =
        statusFilter === "ทั้งหมด" || b.status === statusFilter;
      return matchName && matchBuilding && matchStatus;
    });
  }, [bookings, searchName, buildingFilter, statusFilter]);

  return (
    <div className="dashboard-root">
      <Sidebar />

      <div className="dashboard-main admin-booking-page">
        <h1 className="booking-page-title">การจอง</h1>

        <BookingFilters
          searchName={searchName}
          setSearchName={setSearchName}
          buildingFilter={buildingFilter}
          setBuildingFilter={setBuildingFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <BookingTable
          bookings={filteredBookings}
          onDetail={(b) => openModal("detail", b)}
          onApprove={(b) => openModal("approve", b)}
          onReject={(b) => openModal("reject", b)}
        />

        <BookingModal
          type={activeModal}
          booking={selectedBooking}
          approveNote={approveNote}
          setApproveNote={setApproveNote}
          rejectReason={rejectReason}
          setRejectReason={setRejectReason}
          onClose={closeModal}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </div>
  );
};

export default BookingPage;
