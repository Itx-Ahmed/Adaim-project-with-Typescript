import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllTeams } from "../../../api/team/queries";

import {
  asyncCreateTeam,
  asyncDeleteTeam,
  asyncUpdateTeam,
} from "../../../api/team/fetchers";

type TeamMember = {
  id: number;
  name: string;
  phoneNo: string;
  job: string;
  image: string;
};

function DashboardTeamPage() {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await asyncDeleteTeam(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted Team Member ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["teamMembers"] });
    },
    onError: (error) => {
      console.log("Error in Deleting Team Member:", error);
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      newData,
    }: {
      id: number;
      newData: TeamMember;
    }) => {
      await asyncUpdateTeam(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(
        `Successfully updated Team Member ID: ${id} with data:`,
        newData
      );
      queryClient.invalidateQueries({ queryKey: ["teamMembers"] });
    },
    onError: (error) => {
      console.error("Error updating Team Member data:", error);
    },
  });

  const handleUpdate = (id: number) => {
    const newData: TeamMember = {
      name: "Muhammad",
      job: "Bs software Engineer",
      address: "i am muhammad a software engineer.",
      image: "updated_image_url.jpg",
    };
    updateMutation.mutate({ id, newData });
  };

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: TeamMember) => {
      await asyncCreateTeam(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully added a new Team Member");
      queryClient.invalidateQueries({ queryKey: ["teamMembers"] });
    },
    onError: (error) => {
      console.log("Error in creating Team Member:", error);
    },
  });

  const handleCreate = () => {
    const newData: TeamMember = {
      name: " ibrahon saif",
      phoneNo: "03456795666",
      job: "Engineer.",
      image: "new_image_url.jpg",
    };
    createMutation.mutate(newData);
  };

  // Get All Team Members
  const { data: teamMembers, isLoading, isError } = useGetAllTeams();
  console.log("All Team Members:", teamMembers);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Team Members</h2>
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">phoneNo</th>
              <th className="px-4 py-2 border">Job</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers && teamMembers.length > 0 ? (
              teamMembers.map((member: TeamMember) => (
                <tr
                  key={member.id}
                  className="text-gray-700 bg-white hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border">{member.id}</td>
                  <td className="px-4 py-2 border">{member.name}</td>
                  <td className="px-4 py-2 border">{member.phoneNo}</td>
                  <td className="px-4 py-2 border">{member.job}</td>
                  <td className="px-4 py-2 border">{member.image}</td>
                  <td className="px-4 py-2 border flex gap-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      onClick={() => deleteMutation.mutate(member.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={() => handleUpdate(member.id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
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
    </div>
  );
}

export default DashboardTeamPage;
