import { API_URL } from "../../config/Config";

// To Delete a Team
export const asyncDeleteTeam = async (id: number) => {
  try {
    const response = await API_URL.delete(`/api/team/${id}`);
    console.log("Team deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

// To Update a Team
export const asyncUpdateTeam = async (id: number, updatedTeamData: any) => {
  try {
    const response = await API_URL.patch(`/api/team/${id}`, updatedTeamData);
    console.log("Team updated successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong updating team...", error);
    return error;
  }
};

// To Create a Team
export const asyncCreateTeam = async (newTeamData: any) => {
  try {
    const response = await API_URL.post(`/api/team`, newTeamData);
    console.log("Team created successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong creating the team...", error);
    return error;
  }
};
