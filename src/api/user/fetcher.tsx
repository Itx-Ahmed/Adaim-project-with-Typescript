import { API_URL } from "../../config/Config";

// Register user
export const asyncRegisterUser = async (data: any) => {
  try {
    const response = await API_URL.post("/api/user", data);
    return response.data;
  } catch (error) {
    console.error("Error in Register:", error);
    return error;
  }
};

// Login user
export const asyncLoginUser = async (data: any) => {
  try {
    const response = await API_URL.post("/api/login", data);
    localStorage.setItem("token", response.data?.token);
    return response.data;
  } catch (error) {
    console.error(" Error in Login :", error);
    return error;
  }
};

// Delete a user by ID
export const asyncDeleteUser = async (id: string) => {
  try {
    const response = await API_URL.delete(`/api/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return error;
  }
};

// Update a user
export const asyncUpdateUser = async (id: string, data: any) => {
  try {
    const response = await API_URL.put(`/api/user/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error in updating user:", error);
    return error;
  }
};

// Create a new user
export const asyncCreateUser = async (data: any) => {
  try {
    const response = await API_URL.post("/api/user", data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    return error;
  }
};
