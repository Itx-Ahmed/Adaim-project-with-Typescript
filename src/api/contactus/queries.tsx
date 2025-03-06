import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  CONTACTS = "contacts",
}

export const useGetAllContacts = () =>
  useQuery({
    queryKey: [QueryKeys.CONTACTS],
    queryFn: asyncGetAllContacts,
  });

// Get All Contacts
export const asyncGetAllContacts = async () => {
  try {
    console.log("Fetching all contacts data...");

    const response = await API_URL.get("/api/contact");

    console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong, try again...", error);
    return error;
  }
};
