import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const clients = [
  { src: "images/home/DrNasir.png", alt: "Client-1" },
  { src: "images/home/cosmetic.png", alt: "Client-2" },
  { src: "images/home/Dr Zafar Ali khan.jpeg", alt: "Client-3" },
  { src: "images/home/Evoulation.jpeg", alt: "Client-4" },
  { src: "images/home/Friends.png", alt: "Client-5" },
  { src: "images/home/Dot.png", alt: "Client-6" },
  { src: "images/home/GreenPine.png", alt: "Client-7" },
  { src: "images/home/NaturalZafran.png", alt: "Client-8" },
  { src: "images/home/peg.png", alt: "Client-9" },
  { src: "images/home/Zameen.png", alt: "Client-10" },
  { src: "images/home/Warsak Model.jpeg", alt: "Client-11" },
  {
    src: "images/home/TheKnowledge School peshawar campus.jpeg",
    alt: "Client-12",
  },
];

const OurCustomers = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-5">
          Our Customers
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Our customers are at the heart of everything we do. We are dedicated
          to providing exceptional service and exceeding their expectations at
          every opportunity. The following are our esteemed clients, with whom
          we have had the privilege of working closely to achieve their goals.
        </p>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="px-4"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-32 h-32 object-contain "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurCustomers;
