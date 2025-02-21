import { useGetAllUsers, useGetSingleUser } from "../../../api/user/quries";

function DashboardUsersPage() {
  //  Getting single user data
  const userId = "25";
  const { data: user, isError, isLoading } = useGetSingleUser(userId);

  console.log("getting single userid", userId);

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <div>loading..</div>;
  }
  // const { data, isLoading, error } = useGetAllUsers();

  // console.log("User data:", data);

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-6 flex flex-col">
      <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-3xl font-bold text-gray-800 mb-4">
          Users
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-xs md:text-sm">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
              </tr>
            </thead>

            {/* getting single user id */}
            <tbody>
              <tr>
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
              </tr>

              {/* getting all user id  */}
              {/* {data.length > 0 ? (
                data.map((user: any) => (
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
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardUsersPage;
