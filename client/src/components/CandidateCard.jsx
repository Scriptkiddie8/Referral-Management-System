import { updateCandidateStatus } from "../services/api";

const CandidateCard = ({ candidate, onStatusUpdate }) => {
  const handleChange = async (e) => {
    await updateCandidateStatus(candidate._id, e.target.value);
    onStatusUpdate();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between">
      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {candidate.name}
      </h3>

      {/* Job & Status */}
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Job:</span> {candidate.jobTitle}
      </p>
      <p className="text-gray-700 mb-3">
        <span className="font-medium">Status:</span> {candidate.status}
      </p>

      {/* Status Selector */}
      <select
        value={candidate.status}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
      >
        <option value="Pending">Pending</option>
        <option value="Reviewed">Reviewed</option>
        <option value="Hired">Hired</option>
      </select>

      {/* Resume Link */}
      {candidate.resumeUrl && (
        <a
          href={`http://localhost:5000/${candidate.resumeUrl}`}
          target="_blank"
          className="text-blue-600 hover:underline text-sm"
        >
          View Resume
        </a>
      )}
    </div>
  );
};

export default CandidateCard;
