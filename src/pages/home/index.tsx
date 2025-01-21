import HeroSection from "../../components/banner";
import HelpSuccessBanner from "../../components/home/helpsuccessbanner";
const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function HomePage() {
  return (
    <>
      <HeroSection
        backgroundimage="/images/home/containerpic1.jpg"
        title="Ad Aim Marketing Agency"
        description="Where precision meets impact, delivering excellence for your brand’s success"
        sliderImages={sliderImages}
      />
      <HelpSuccessBanner />
    </>
  );
}

export default HomePage;
