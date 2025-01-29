import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
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
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-[6rem]">
          Our Team
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          AD AIM Marketing is comprised of a team of experienced professionals
          who bring a wealth of industry knowledge and hands-on expertise to
          every project, ensuring top-notch delivery and client satisfaction.
        </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="pb-10"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto object-cover rounded-full mb-6 border-4 border-gray-200"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurTeam;
