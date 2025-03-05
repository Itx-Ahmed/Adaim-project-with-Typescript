import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  asyncCreateUser,
  asyncDeleteUser,
  asyncUpdateUser,
} from "../../../api/user/fetcher";
import { useGetAllUsers } from "../../../api/user/quries";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

function DashboardUserPage() {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await asyncDeleteUser(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted User ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("Error in Deleting User:", error);
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, newData }: { id: number; newData: User }) => {
      await asyncUpdateUser(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(`Successfully updated User ID: ${id} with data:`, newData);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error updating User data:", error);
    },
  });

  const handleUpdate = (id: number) => {
    const newData: User = {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    };
    updateMutation.mutate({ id, newData });
  };

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: User) => {
      await asyncCreateUser(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully created a new User");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("Error in creating User:", error);
    },
  });

  const handleCreate = () => {
    const newData: User = {
      name: "New User",
      email: "new.user@example.com",
      role: "User",
      status: "Inactive",
    };
    createMutation.mutate(newData);
  };

  // Get All Users
  const { data: users, isLoading, isError } = useGetAllUsers();
  console.log("All Users:", users);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Users</h2>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-2 sm:px-4 py-2 border">ID</th>
              <th className="px-2 sm:px-4 py-2 border">Name</th>
              <th className="px-2 sm:px-4 py-2 border">Email</th>
              <th className="px-2 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user: User) => (
                <tr
                  key={user.id}
                  className="text-gray-700 bg-white hover:bg-gray-100"
                >
                  <td className="px-2 sm:px-4 py-2 border">{user.id}</td>
                  <td className="px-2 sm:px-4 py-2 border">{user.name}</td>
                  <td className="px-2 sm:px-4 py-2 border">{user.email}</td>
                  <td className="px-2 sm:px-4 py-2 border flex gap-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                      onClick={() => deleteMutation.mutate(user.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                      onClick={() => handleUpdate(user.id)}
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

export default DashboardUserPage;
