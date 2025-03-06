import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllBlogs } from "../../../api/blog/queries";
import {
  asyncCreateBlog,
  asyncDeleteBlog,
  asyncUpdateBlog,
} from "../../../api/blog/fetcher";

type BlogPost = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  datePublished: string;
};

function DashboardBlogPage() {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await asyncDeleteBlog(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted Blog Post ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["blogposts"] });
    },
    onError: (error) => {
      console.log("Error in Deleting Blog Post:", error);
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, newData }: { id: number; newData: BlogPost }) => {
      await asyncUpdateBlog(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(
        `Successfully updated Blog Post ID: ${id} with data:`,
        newData
      );
      queryClient.invalidateQueries({ queryKey: ["blogposts"] });
    },
    onError: (error) => {
      console.error("Error updating Blog Post data:", error);
    },
  });

  const handleUpdate = (id: number) => {
    const newData: BlogPost = {
      title: "14 Breathtaking Travel Destinations 2025",
      subTitle:
        "Explore stunning places, hidden gems, and unforgettable travel experiences.",
      description:
        "Explore mesmerizing landscapes, rich cultural wonders, and essential travel destinations for 2025.",
      image: "updated_image_url.jpg",
      datePublished: "2025-03-04",
    };
    updateMutation.mutate({ id, newData });
  };

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: BlogPost) => {
      await asyncCreateBlog(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully created a new Blog Post");
      queryClient.invalidateQueries({ queryKey: ["blogposts"] });
    },
    onError: (error) => {
      console.log("Error in creating Blog Post:", error);
    },
  });

  const handleCreate = () => {
    const newData: BlogPost = {
      title: "Top 14 Travel Destinations 2025",
      subTitle:
        "Unforgettable places, hidden gems, and stunning travel experiences.",
      description:
        "Explore mesmerizing landscapes, rich cultural wonders, and must-visit destinations for 2025.",
      image: "new_image_url.jpg",
      datePublished: "2025-03-04",
    };
    createMutation.mutate(newData);
  };

  // Get All Blog Posts
  const { data: blogPosts, isLoading, isError } = useGetAllBlogs();
  console.log("All Blog Posts:", blogPosts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Blog Posts
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-2 sm:px-4 py-2 border">ID</th>
              <th className="px-2 sm:px-4 py-2 border">Title</th>
              <th className="px-2 sm:px-4 py-2 border">SubTitle</th>
              <th className="px-2 sm:px-4 py-2 border">Description</th>
              <th className="px-2 sm:px-4 py-2 border">Image</th>
              <th className="px-2 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogPosts && blogPosts.length > 0 ? (
              blogPosts.map((item: BlogPost) => (
                <tr
                  key={item.id}
                  className="text-gray-700 bg-white hover:bg-gray-100"
                >
                  <td className="px-2 sm:px-4 py-2 border">{item.id}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.title}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.subTitle}</td>
                  <td className="px-2 sm:px-4 py-2 border">
                    {item.description}
                  </td>
                  <td className="px-2 sm:px-4 py-2 border">{item.image}</td>
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
                      className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
                      onClick={handleCreate}
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

      <div className="mt-6 flex justify-center"></div>
    </div>
  );
}

export default DashboardBlogPage;
