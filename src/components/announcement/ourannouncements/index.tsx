const announcements = [
  {
    id: 1,
    title: "New Feature Released!",
    description: "We have launched a new feature to enhance your experience.",
  },
  {
    id: 2,
    title: "Maintenance Update",
    description:
      "Scheduled maintenance will occur this Friday from 12 AM to 4 AM.",
  },
  {
    id: 3,
    title: "Special Announcement",
    description: "Stay tuned for an exciting update coming next week!",
  },
];

function OurAnnouncements() {
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-lg">
      <div className="font-bold text-3xl sm:text-4xl md:text-5xl mt-16 text-center">
        Our Announcements
      </div>

      <div className="mt-8 flex justify-between items-stretch gap-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="flex flex-col items-center p-6 w-full sm:w-1/3 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow h-48"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
              {announcement.title}
            </h2>
            <p className="text-gray-700 text-center">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurAnnouncements;
