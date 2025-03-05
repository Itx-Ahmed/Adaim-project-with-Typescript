import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  TEAMS = "teams",
}

export const useGetAllTeams = () =>
  useQuery({
    queryKey: [QueryKeys.TEAMS],
    queryFn: asyncGetAllTeams,
  });

// Get All Teams
export const asyncGetAllTeams = async () => {
  try {
    console.log("Fetching all teams data...");

    const response = await API_URL.get("/api/team");

    console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong, try again...", error);
    return error;
  }
};
