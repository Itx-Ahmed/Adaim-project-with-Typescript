import { API_URL } from "../../config/Config";

// Register User
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

// Login User
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

// Update (Update User Data)
export const asyncUpdateUser = async (userId: string, data: any) => {
  try {
    console.log("Updating user data...", data);
    const response = await API_URL.put(`/api/user/${userId}`, data);
    console.log("API Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error updating user:", error);
    return error;
  }
};

// Delete (Delete User)
export const asyncDeleteUser = async (userId: string) => {
  try {
    console.log("Deleting user with ID:", userId);
    const response = await API_URL.delete(`/api/user/${userId}`);
    console.log("API Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error deleting user:", error);
    return error;
  }
};

//  (Create User)
export const asyncCreateUser = async (data: any) => {
  try {
    console.log("Creating user with data:", data);
    const response = await API_URL.post("/api/user", data);
    console.log("API Response:", response);
    return response.data;
  } catch (error) {
    console.log("Error creating user:", error);
    return error;
  }
};
