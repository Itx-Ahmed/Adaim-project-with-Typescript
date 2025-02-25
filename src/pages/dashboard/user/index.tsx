import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetSingleUser, useGetAllUsers } from "../../../api/user/quries";
import { asyncDeleteSingleUser } from "../../../api/user/fetcher";

function DashboardUsersPage() {
  const QueryClient = useQueryClient();
  console.log(QueryClient);

  // Delete user mutation
  const DeleteMutation = useMutation({
    mutationFn: (id: any) => asyncDeleteSingleUser(id),
    onSuccess: () => {
      console.log("User deleted successfully");
    },

    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });

  // Fetch all users
  const { data: users, isError, isLoading } = useGetAllUsers();

  // Getting single user
  const userId = "25";
  const { data: singleUser } = useGetSingleUser(userId);

  // Error handling
  if (isError) return <h1>Something went wrong</h1>;
  if (isLoading) return <h1>Loading...</h1>;

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
              {/* Single user row */}
              {singleUser && (
                <tr className="text-sm text-gray-700 bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border">{singleUser.id}</td>
                  <td className="px-4 py-2 border">{singleUser.name}</td>
                  <td className="px-4 py-2 border">{singleUser.email}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                      onClick={() => DeleteMutation.mutate(singleUser.id)}
                    >
                      Delete User
                    </button>
                  </td>
                </tr>
              )}

              {/* All users Data row */}
              {/* Uncomment karne se yeh sab users show karega */}
              {/* {users?.length > 0 ? (
                users.map((user: any) => (
                  <tr
                    key={user.id}
                    className="text-sm text-gray-700 bg-white hover:bg-gray-100"
                  >
                    <td className="px-4 py-2 border">{user.id}</td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                        onClick={() => DeleteMutation.mutate(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-600">
                    No users found.
                  </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardUsersPage;
