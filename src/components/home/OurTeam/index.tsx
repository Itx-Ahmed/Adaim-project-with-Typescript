import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Syed Ibadat Shah",
    role: "Marketing Manager | SEO Specialist",
    image: "images/home/syed.png",
  },
  {
    name: "Hamza Khan",
    role: "Social Media Coordinator",
    image: "images/home/hamza.png",
  },
  {
    name: "Wajid Ullah Ghazi",
    role: "Data Analyst",
    image: "images/home/wajid.png",
  },
  {
    name: "Aizaz Ali",
    role: "Video Editor and Content Creator",
    image: "images/home/aizaz.jpeg",
  },
  {
    name: "Kashif Munir",
    role: "Digital Marketing Strategist",
    image: "images/home/kashif.png",
  },
];

function OurTeam() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
          Our Team
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          AD AIM Marketing is comprised of a team of experienced professionals
          who bring a wealth of industry knowledge and hands-on expertise to
          every project, ensuring top-notch delivery and client satisfaction.
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation, Pagination]}
          className="relative"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img
                  src={member.image}
                  alt={`Team Member-${index + 1}`}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-lg" // Reduced size to 128px
                />
                <h3 className="text-2xl font-semibold text-gray-900 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurTeam;
