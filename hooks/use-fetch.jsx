// File purpose: hooks\use-fetch.jsx
// This file defines reusable React hooks for managing state and side effects.
// It is written to help beginners understand how this file connects to the rest of the app.

import { useState } from "react";
import { toast } from "sonner";

// useFetch: custom hook that manages reusable state and API logic for UI behavior.
const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;