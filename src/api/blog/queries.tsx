import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  BLOGS = "blogs",
}

export const useGetAllBlogs = () =>
  useQuery({
    queryKey: [QueryKeys.BLOGS],
    queryFn: asyncGetAllBlogs,
  });

// Get All Blogs
export const asyncGetAllBlogs = async () => {
  try {
    console.log("Fetching all users data...");

    const response = await API_URL.get("/api/blog");

    console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong try again...", error);
    return error;
  }
};
