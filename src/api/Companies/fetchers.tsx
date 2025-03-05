import { API_URL } from "../../config/Config";

// To Delete a Company
export const asyncDeleteCompany = async (id: number) => {
  try {
    const response = await API_URL.delete(`/api/company/${id}`);
    console.log("Company deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

// To Update a Company
export const asyncUpdateCompany = async (
  id: number,
  updatedCompanyData: any
) => {
  try {
    const response = await API_URL.patch(
      `/api/company/${id}`,
      updatedCompanyData
    );
    console.log("Company updated successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong updating company...", error);
    return error;
  }
};

// To Create a Company
export const asyncCreateCompany = async (newCompanyData: any) => {
  try {
    const response = await API_URL.post(`/api//company`, newCompanyData);
    console.log("Company created successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong creating the company...", error);
    return error;
  }
};
