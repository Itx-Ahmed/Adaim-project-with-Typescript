import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllCompanies } from "../../../api/Companies/queries";
import {
  asyncCreateCompany,
  asyncDeleteCompany,
  asyncUpdateCompany,
} from "../../../api/Companies/fetchers";

type Company = {
  id: number;
  name: string;
  logo: string;
  email: string;
  image: string;
  address: string;
  description: string;
  phoneNo: string;
};

function DashboardCompanyPage() {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await asyncDeleteCompany(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted Company ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
    onError: (error) => {
      console.log("Error in Deleting Company:", error);
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, newData }: { id: number; newData: Company }) => {
      await asyncUpdateCompany(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(`Successfully updated Company ID: ${id} with data:`, newData);
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
    onError: (error) => {
      console.error("Error updating Company data:", error);
    },
  });

  const handleUpdate = (id: number) => {
    const newData: Company = {
      id,
      name: "Updated Company Name",
      logo: "Updated Logo URL",
      email: "updated@example.com",
      image: "Updated Image URL",
      address: "Updated Address",
      description: "Updated Description",
      phoneNo: "Updated Phone Number",
    };
    updateMutation.mutate({ id, newData });
  };

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: Company) => {
      await asyncCreateCompany(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully created a new Company");
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
    onError: (error) => {
      console.log("Error in creating Company:", error);
    },
  });

  const handleCreate = () => {
    const newData: Company = {
      id: Date.now(),
      name: "New Company",
      logo: "New Logo URL",
      email: "new@example.com",
      image: "New Image URL",
      address: "New Address",
      description: "New Description",
      phoneNo: "New Phone Number",
    };
    createMutation.mutate(newData);
  };

  // Get All Companies
  const { data: companies, isLoading, isError } = useGetAllCompanies();
  console.log("All Companies:", companies);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Companies
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-2 sm:px-4 py-2 border">ID</th>
              <th className="px-2 sm:px-4 py-2 border">Name</th>
              <th className="px-2 sm:px-4 py-2 border">Logo</th>
              <th className="px-2 sm:px-4 py-2 border">Email</th>
              <th className="px-2 sm:px-4 py-2 border">Image</th>
              <th className="px-2 sm:px-4 py-2 border">Address</th>
              <th className="px-2 sm:px-4 py-2 border">Description</th>
              <th className="px-2 sm:px-4 py-2 border">Phone No</th>
              <th className="px-2 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies && companies.length > 0 ? (
              companies.map((item: Company) => (
                <tr
                  key={item.id}
                  className="text-gray-700 bg-white hover:bg-gray-100"
                >
                  <td className="px-2 sm:px-4 py-2 border">{item.id}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.name}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.logo}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.email}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.image}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.address}</td>
                  <td className="px-2 sm:px-4 py-2 border">
                    {item.description}
                  </td>
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
                <td colSpan={9} className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardCompanyPage;
