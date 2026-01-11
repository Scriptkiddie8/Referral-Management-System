import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add a request interceptor to attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchCandidates = () => API.get("/candidates");
export const createCandidate = (formData) => API.post("/candidates", formData);

export const updateCandidateStatus = (id, status) =>
  API.put(`/candidates/${id}/status`, { status });

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
