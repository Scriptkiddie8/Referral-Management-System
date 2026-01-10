import { useState } from "react";
import { createCandidate } from "../services/api";

const ReferralForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));

      if (resume) {
        formData.append("resume", resume);
      }

      await createCandidate(formData);

      setForm({ name: "", email: "", phone: "", jobTitle: "" });
      setResume(null);
      setSuccess(true);

      onSuccess && onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800">Refer a Candidate</h2>

      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

      <input
        name="name"
        placeholder="Candidate Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="jobTitle"
        placeholder="Job Title"
        value={form.jobTitle}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="w-full text-sm text-gray-600"
      />

      {success && (
        <p className="text-green-600 text-sm font-medium">
          Referral submitted successfully
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-lg font-medium text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } transition`}
      >
        {loading ? "Submitting..." : "Submit Referral"}
      </button>
    </form>
  );
};

export default ReferralForm;
