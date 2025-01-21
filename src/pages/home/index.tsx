import HeroSection from "../../components/banner"; // Ensure correct import path

function HomePage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg" // Ensure image path is correct
      title="Ad Aim Marketing Agency"
      description="Where precision meets impact, delivering excellence for your brand’s success"
      sliderImages={[
        "/images/home/containerpic1.jpg", // Image 1
        "/images/home/containerpic2.jpg", // Image 2
        "/images/home/containerpic3.jpg", // Image 3
      ]}
    />
  );
}

export default HomePage;
