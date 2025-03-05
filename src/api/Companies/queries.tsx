import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  COMPANIES = "companies",
}

export const useGetAllCompanies = () =>
  useQuery({
    queryKey: [QueryKeys.COMPANIES],
    queryFn: asyncGetAllCompanies,
  });

// Get All Companies
export const asyncGetAllCompanies = async () => {
  try {
    console.log("Fetching all companies data...");

    const response = await API_URL.get("/api/company");

    console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong, try again...", error);
    return error;
  }
};
