import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "../services/specialistService";

/**
 * Hook for fetching specialists using React Query.
 * Automatically handles:
 * - caching
 * - loading & error states
 * - retry behavior
 */
export const useSpecialists = () => {
  return useQuery({
    queryKey: ["specialists"],
    queryFn: fetchSpecialists,
    retry: 2, // retry twice on failure
  });
};
