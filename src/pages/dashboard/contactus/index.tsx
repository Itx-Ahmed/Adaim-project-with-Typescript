import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllContacts } from "../../../api/contactus/queries";
import {
  asyncCreateContact,
  asyncDeleteContact,
  asyncUpdateContact,
} from "../../../api/contactus/fetchers";

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  phoneNo: string;
};

function DashboardContactUsPage() {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await asyncDeleteContact(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted Contact ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error) => {
      console.log("Error in Deleting Contact:", error);
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, newData }: { id: number; newData: Contact }) => {
      await asyncUpdateContact(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(`Successfully updated Contact ID: ${id} with data:`, newData);
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error) => {
      console.error("Error updating Contact data:", error);
    },
  });

  const handleUpdate = (id: number) => {
    const newData: Contact = {
      name: "John Doe",
      email: "john.doe@example.com",
      message: "Updated message content",
      phoneNo: "1234567890",
    };
    updateMutation.mutate({ id, newData });
  };

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: Contact) => {
      await asyncCreateContact(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully created a new Contact");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error) => {
      console.log("Error in creating Contact:", error);
    },
  });

  const handleCreate = () => {
    const newData: Contact = {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      message: "New contact message",
      phoneNo: "0987654321",
    };
    createMutation.mutate(newData);
  };

  // Get All Contacts
  const { data: contacts, isLoading, isError } = useGetAllContacts();
  console.log("All Contacts:", contacts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-2 sm:px-4 py-2 border">ID</th>
              <th className="px-2 sm:px-4 py-2 border">Name</th>
              <th className="px-2 sm:px-4 py-2 border">Email</th>
              <th className="px-2 sm:px-4 py-2 border">Message</th>
              <th className="px-2 sm:px-4 py-2 border">Phone No</th>
              <th className="px-2 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts && contacts.length > 0 ? (
              contacts.map((item: Contact) => (
                <tr
                  key={item.id}
                  className="text-gray-700 bg-white hover:bg-gray-100"
                >
                  <td className="px-2 sm:px-4 py-2 border">{item.id}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.name}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.email}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.message}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.phoneNo}</td>
                  <td className="px-2 sm:px-4 py-2 border flex gap-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                      onClick={() => deleteMutation.mutate(item.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                      onClick={() => handleCreate()}
                    >
                      Create
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6"></div>
    </div>
  );
}

export default DashboardContactUsPage;
