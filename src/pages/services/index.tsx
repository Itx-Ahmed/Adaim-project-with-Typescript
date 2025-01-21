import HeroSection from "../../components/banner";

function ServicesPage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="Services"
      description="We provide a wide range of services tailored to meet your specific needs. With a steadfast commitment to client satisfaction,
      AD AIM Marketing forges enduring partnerships and endeavors to surpass expectations."
      sliderImages={[
        "/images/home/containerpic1.jpg", // Image 1
        "/images/home/containerpic2.jpg", // Image 2
        "/images/home/containerpic3.jpg", // Image 3
      ]}
    />
  );
}

export default ServicesPage;
