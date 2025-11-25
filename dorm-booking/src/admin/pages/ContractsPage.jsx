import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import ContractFilters from "../components/ContractFilters";
import ContractTable from "../components/ContractTable";
import ContractModal from "../components/ContractModal";
import "../styles/ContractsPage.css";

const initialContracts = [
  {
    id: 101,
    name: "สมชาย ใจดี",
    building: "A",
    checkinDate: "22/11/2568",
    contractDate: "23/11/2568",
    status: "waiting", // waiting | today | done
    room: "",
  },
  {
    id: 102,
    name: "นักธิดา โอชา",
    building: "B",
    checkinDate: "22/11/2568",
    contractDate: "25/11/2568",
    status: "today",
    room: "",
  },
  {
    id: 103,
    name: "ศิริพร มีสุข",
    building: "A",
    checkinDate: "22/11/2568",
    contractDate: "23/11/2568",
    status: "done",
    room: "A10",
  },
];

const ContractsPage = () => {
  const [contracts, setContracts] = useState(initialContracts);

  const [searchText, setSearchText] = useState("");
  const [buildingFilter, setBuildingFilter] = useState("ทั้งหมด");
  const [statusFilter, setStatusFilter] = useState("ทั้งหมด");

  const [selected, setSelected] = useState(null);
  const [roomNumber, setRoomNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredContracts = useMemo(() => {
    const kw = searchText.toLowerCase();
    return contracts.filter((c) => {
      const matchText =
        c.name.toLowerCase().includes(kw) ||
        String(c.id).includes(kw);

      const matchBuilding =
        buildingFilter === "ทั้งหมด" || c.building === buildingFilter;

      const matchStatus =
        statusFilter === "ทั้งหมด" || c.status === statusFilter;

      return matchText && matchBuilding && matchStatus;
    });
  }, [contracts, searchText, buildingFilter, statusFilter]);

  const openModal = (contract) => {
    setSelected(contract);
    setRoomNumber(contract.room || "");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelected(null);
    setRoomNumber("");
  };

  const handleConfirm = () => {
    if (!selected) return;
    setContracts((prev) =>
      prev.map((c) =>
        c.id === selected.id ? { ...c, status: "done", room: roomNumber } : c
      )
    );
    closeModal();
  };

  return (
    <div className="dashboard-root">
      <Sidebar />

      <div className="dashboard-main admin-contracts-page">
        <h1 className="contracts-page-title">การทำสัญญา</h1>

        <ContractFilters
          searchText={searchText}
          setSearchText={setSearchText}
          buildingFilter={buildingFilter}
          setBuildingFilter={setBuildingFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <ContractTable contracts={filteredContracts} onOpenModal={openModal} />

        <ContractModal
          isOpen={isModalOpen}
          contract={selected}
          roomNumber={roomNumber}
          setRoomNumber={setRoomNumber}
          onClose={closeModal}
          onConfirm={handleConfirm}
        />
      </div>
    </div>
  );
};

export default ContractsPage;
