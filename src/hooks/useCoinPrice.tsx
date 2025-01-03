import { useQuery } from "@tanstack/react-query";
import client from "../services/client";

const useCoinPrice = () => {
  const fetchPrice = () => client(`${import.meta.env.VITE_API_URL}/prices`);

  return useQuery({
    queryKey: ['coinPrice'],
    queryFn: fetchPrice,
  });
};

export default useCoinPrice;