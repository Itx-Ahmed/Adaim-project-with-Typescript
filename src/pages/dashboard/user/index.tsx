import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllUsers } from "../../../api/user/quries";
import { asyncDeleteUsers } from "../../../api/user/fetcher";

function DashboardUsersPage() {
  // Delete users with the help of useMutation Hook.
  const queryClient = useQueryClient();

  const DeleteMutation = useMutation({
    mutationFn: (id: any) => asyncDeleteUsers(id),
    onSuccess: () => {
      console.log("User deleted successfully");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error) => {
      console.log("Error in deleting...", error);
    },
  });

  // Get all users
  const { data: users, isLoading, isError } = useGetAllUsers();
  console.log("data is here", users);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something Went Wrong...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-6 flex flex-col">
      <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-4xl font-bold text-gray-800">Users</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
            Add User
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-xs md:text-sm">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user.id} className="text-sm border-t">
                  <td className="px-4 py-2 border">{user.id}</td>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border flex justify-center gap-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700 transition">
                      Update
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                      onClick={() => DeleteMutation.mutate(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardUsersPage;
