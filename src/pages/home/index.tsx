import HeroSection from "../../components/banner";
import CEOProfile from "../../components/home";

const sliderImages: string[] = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function HomePage() {
  return (
    <div>
      <HeroSection
        backgroundimage="/images/home/containerpic1.jpg"
        title="Ad Aim Marketing Agency"
        description="Where precision meets impact, delivering excellence for your brand’s success"
        sliderImages={sliderImages}
      />

      <CEOProfile />
    </div>
  );
}

export default HomePage;
