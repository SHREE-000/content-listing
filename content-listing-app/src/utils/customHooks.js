"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const useAPI = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fetchApi = async () => {
    const response = await axios.get(url);
    setData(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data };
};

export default useAPI;
