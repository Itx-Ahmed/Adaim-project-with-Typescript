import HeroSection from "../../components/banner";

function AboutPage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="About"
      description="Welcome to Ad-Aim Marketing Agency"
      sliderImages={[
        "/images/home/containerpic1.jpg", // Image 1
        "/images/home/containerpic2.jpg", // Image 2
        "/images/home/containerpic3.jpg", // Image 3
      ]}
    />
  );
}

export default AboutPage;
