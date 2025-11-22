import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "../services/specialistService";

// 使用 react-query 來管理資料載入
export const useSpecialists = () => {
  return useQuery({
    queryKey: ["specialists"],
    queryFn: fetchSpecialists,
    retry: 2,
  });
};
