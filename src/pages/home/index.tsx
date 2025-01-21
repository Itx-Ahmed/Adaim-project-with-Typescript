import HeroSection from "../../components/banner";

const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function HomePage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="Ad Aim Marketing Agency"
      description="Where precision meets impact, delivering excellence for your brand’s success"
      sliderImages={sliderImages}
    />
  );
}

export default HomePage;
