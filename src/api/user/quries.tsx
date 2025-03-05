import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  USERS = "users",
}

export const useGetAllUsers = () =>
  useQuery({
    queryKey: [QueryKeys.USERS],
    queryFn: asyncGetAllUsers,
  });

export const useGetSingleUser = (userId: string) =>
  useQuery({
    queryKey: [QueryKeys.USERS, userId],
    queryFn: () => asyncGetUserById(userId),
  });

// Fetch all users
export const asyncGetAllUsers = async () => {
  try {
    const response = await API_URL.get("/api/user");
    return response.data?.data;
  } catch (error) {
    console.error("Error  in fetching all users:", error);
    return error;
  }
};

// Fetch single user by ID
export const asyncGetUserById = async (id: string) => {
  try {
    const response = await API_URL.get(`/api/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return error;
  }
};
