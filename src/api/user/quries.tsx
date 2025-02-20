import axios from "axios";

export async function fetchUserData() {
  try {
    const { data } = await axios.get("http://localhost:3009/api/user");
    return data ?? { users: [] }; // Default fallback value if data is null/undefined
  } catch (error: any) {
    console.error("Something went wrong:", error.message || error);
    return { users: [] };
  }
}
