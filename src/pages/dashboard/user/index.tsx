import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "../../../api/user/quries";

function DashboardUsersPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchUserData, // Call the function from Queries.tsx
  });

  console.log("User data response:", data); // Console mein data dekhne ke liye

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  const users = data?.users || data?.data || [];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-6 flex flex-col">
      <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
        <div className="flex items-center justify-between w-full mb-4 md:mb-6">
          <h2 className="text-lg md:text-3xl font-bold text-gray-800">Users</h2>
          <button className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all">
            Add
          </button>
        </div>

        <div className="overflow-x-auto mt-2 md:mt-5">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-xs md:text-sm">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user: any) => (
                  <tr
                    key={user.id}
                    className="text-sm text-gray-700 bg-white hover:bg-gray-100"
                  >
                    <td className="px-4 py-2 border">{user.id}</td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center p-4 text-gray-600">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardUsersPage;
