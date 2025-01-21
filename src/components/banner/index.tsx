import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type THeroSectionProps = {
  backgroundimage: string;
  title: string;
  description: string;
  sliderImages: string[];
};

function HeroSection(props: THeroSectionProps) {
  return (
    <div className="relative h-screen bg-[#F3F3F3] mt-[102px]">
      <div className="container mx-auto px-4">
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          {props.sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full  h-auto h-[100vh] object-cover"
                />

                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-black mx-4 px-4 w-full z-10">
                  <div className="flex flex-col items-start justify-center text-left">
                    <h1 className="text-3xl font-bold mb-2 sm:text-4xl md:text-3xl">
                      {props.title}
                    </h1>
                    <p className="text-base font-light sm:text-lg md:text-xl w-[80%] md:w-[40%]">
                      {props.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSection;
