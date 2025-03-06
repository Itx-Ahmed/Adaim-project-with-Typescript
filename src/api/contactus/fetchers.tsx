import { API_URL } from "../../config/Config";

// To Delete a Contact Message
export const asyncDeleteContact = async (id: number) => {
  try {
    const response = await API_URL.delete(`/api/contact${id}`);
    console.log("Contact message deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong deleting contact message...", error);
    return error;
  }
};

// To Update a Contact Message
export const asyncUpdateContact = async (
  id: number,
  updatedContactData: any
) => {
  try {
    const response = await API_URL.patch(
      `/api/contact/${id}`,
      updatedContactData
    );
    console.log("Contact message updated successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong updating contact message...", error);
    return error;
  }
};

// To Create a Contact Message
export const asyncCreateContact = async (newContactData: any) => {
  try {
    const response = await API_URL.post(`/api/contact`, newContactData);
    console.log("Contact message created successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong creating the contact message...", error);
    return error;
  }
};
