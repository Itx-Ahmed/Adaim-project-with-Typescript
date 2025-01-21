import HeroSection from "../../components/banner";

function AboutPage() {
  const sliderImages = [
    "/images/home/containerpic1.jpg",
    "/images/home/containerpic2.jpg",
    "/images/home/containerpic3.jpg",
  ];

  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="About"
      description="Welcome to Ad-Aim Marketing Agency"
      sliderImages={sliderImages}
    />
  );
}

export default AboutPage;
