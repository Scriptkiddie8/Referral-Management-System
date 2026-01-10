import Layout from "../components/Layout";
import ReferralForm from "../components/ReferralForm";
import CandidateCard from "../components/CandidateCard";
import SearchBar from "../components/SearchBar";
import useCandidates from "../hooks/useCandidates";
import { useState } from "react";

const Dashboard = () => {
  const { candidates, loading, loadCandidates } = useCandidates();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  if (loading) return <p>Loading...</p>;

  const filteredCandidates = candidates.filter((c) => {
    const matchJob = c.jobTitle.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status ? c.status === status : true;
    return matchJob && matchStatus;
  });

  const total = candidates.length;
  const pending = candidates.filter((c) => c.status === "Pending").length;
  const reviewed = candidates.filter((c) => c.status === "Reviewed").length;
  const hired = candidates.filter((c) => c.status === "Hired").length;

  return (
    <Layout title="Dashboard">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total", value: total, color: "text-blue-500" },
          { label: "Pending", value: pending, color: "text-yellow-500" },
          { label: "Reviewed", value: reviewed, color: "text-red-500" },
          { label: "Hired", value: hired, color: "text-green-500" },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition text-center"
          >
            <p className="text-gray-500 text-sm font-medium">{label}</p>
            <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {/* Candidate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {filteredCandidates.map((candidate) => (
          <CandidateCard
            key={candidate._id}
            candidate={candidate}
            onStatusUpdate={loadCandidates}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
