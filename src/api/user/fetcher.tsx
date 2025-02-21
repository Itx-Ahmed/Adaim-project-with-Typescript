import { API_URL } from "../../config/Config";

export const asyncRegisterUser = async (data: any) => {
  try {
    // console.log("incoming data", data);
    const response = await API_URL.post("/api/user", data);
    // console.log("Response", response);
    return response.data;
  } catch (error) {
    throw console.log("register error", error);
  }
};

export const asyncLoginUser = async (data: any) => {
  try {
    console.log("incoming data", data);
    const response = await API_URL.post("/api/login", data);
    console.log("Response", response);
    localStorage.setItem("token", response.data?.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const asyncGetAllUsers = async () => {
  try {
    console.log(" Fetching all users data...");
    const response = await API_URL.get("/api/user");
    console.log(" API Response:", response.data);
    return response.data.data;
  } catch (error) {
    console.log(" something went wrong...", error);
    return error;
  }
};

// getting single user id
export const asyncGetUserById = async (id: string) => {
  try {
    console.log(`Fetching user data for ID: ${id}...`);
    const response = await API_URL.get(`api/user/${id}`);
    console.log("Response of API:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching single user by ID:", error);
    return error;
  }
};
