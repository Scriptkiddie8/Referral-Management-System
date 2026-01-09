import { useEffect, useState } from "react";
import { fetchCandidates } from "../services/api";

const useCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCandidates = async () => {
    try {
      const res = await fetchCandidates();
      setCandidates(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCandidates();
  }, []);

  return { candidates, setCandidates, loading, loadCandidates };
};

export default useCandidates;
