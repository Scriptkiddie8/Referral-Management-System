import { updateCandidateStatus } from "../services/api";

const statusColorMap = {
  Pending: "text-yellow-400",
  Reviewed: "text-red-400",
  Hired: "text-green-400",
};

const CandidateCard = ({ candidate, onStatusUpdate }) => {
  const handleChange = async (e) => {
    await updateCandidateStatus(candidate._id, e.target.value);
    onStatusUpdate();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">{candidate.name}</h3>

      <p className="text-sm text-gray-600 mt-1">
        <strong>Job:</strong> {candidate.jobTitle}
      </p>

      <p className="text-sm mt-2">
        <strong>Status:</strong>{" "}
        <span className={`font-semibold ${statusColorMap[candidate.status]}`}>
          {candidate.status}
        </span>
      </p>

      <select
        value={candidate.status}
        onChange={handleChange}
        className="mt-3 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Pending">Pending</option>
        <option value="Reviewed">Reviewed</option>
        <option value="Hired">Hired</option>
      </select>

      {candidate.resumeUrl && (
        <a
          href={candidate.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-blue-600 text-sm font-medium hover:underline"
        >
          View Resume
        </a>
      )}
    </div>
  );
};

export default CandidateCard;
