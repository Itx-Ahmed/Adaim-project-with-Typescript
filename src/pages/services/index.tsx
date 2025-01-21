import HeroSection from "../../components/banner";

const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function ServicesPage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="Services"
      description="We provide a wide range of services tailored to meet your specific needs. With a steadfast commitment to client satisfaction, AD AIM Marketing forges enduring partnerships and endeavors to surpass expectations."
      sliderImages={sliderImages}
    />
  );
}

export default ServicesPage;
