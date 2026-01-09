import ReferralForm from "../components/ReferralForm";
import CandidateCard from "../components/CandidateCard";
import useCandidates from "../hooks/useCandidates";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Dashboard = () => {
  const { candidates, loading, loadCandidates } = useCandidates();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
      </div>
    );

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    window.location.href = "/login"; // redirect to login page
  };

  const total = candidates.length;
  const pending = candidates.filter((c) => c.status === "Pending").length;
  const reviewed = candidates.filter((c) => c.status === "Reviewed").length;
  const hired = candidates.filter((c) => c.status === "Hired").length;

  const filteredCandidates = candidates.filter((c) => {
    const matchJob = c.jobTitle.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status ? c.status === status : true;
    return matchJob && matchStatus;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Candidate Referrals
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Referral Form */}
      <div className="mb-6">
        <ReferralForm onSuccess={loadCandidates} />
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h4 className="text-gray-500 font-medium">Total Referred</h4>
          <p className="text-2xl font-bold text-gray-800 mt-2">{total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h4 className="text-gray-500 font-medium">Pending</h4>
          <p className="text-2xl font-bold text-yellow-500 mt-2">{pending}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h4 className="text-gray-500 font-medium">Reviewed</h4>
          <p className="text-2xl font-bold text-blue-500 mt-2">{reviewed}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h4 className="text-gray-500 font-medium">Hired</h4>
          <p className="text-2xl font-bold text-green-500 mt-2">{hired}</p>
        </div>
      </div>

      {/* Candidates List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandidates.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">
            No candidates found.
          </p>
        ) : (
          filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate._id}
              candidate={candidate}
              onStatusUpdate={loadCandidates}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
