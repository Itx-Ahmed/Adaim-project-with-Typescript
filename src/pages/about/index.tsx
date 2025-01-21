import HeroSection from "../../components/banner";

function AboutPage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="About"
      description="Welcome to Ad-Aim Marketing Agency"
      sliderImages={[
        "/images/home/containerpic1.jpg",
        "/images/home/containerpic2.jpg",
        "/images/home/containerpic3.jpg",
      ]}
    />
  );
}

export default AboutPage;
