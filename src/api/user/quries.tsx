import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  USERS = "user",
}

export const useGetAllUsers = () =>
  useQuery({
    queryKey: [QueryKeys.USERS],
    queryFn: asyncGetAllUsers,
  });

// Get All Users
export const asyncGetAllUsers = async () => {
  try {
    console.log("Fetching all users data...");

    const response = await API_URL.get("/api/user");

    console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong, try again...", error);
    return error;
  }
};
