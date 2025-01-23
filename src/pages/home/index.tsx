import HeroSection from "../../components/banner";
import SocialMediaCard from "../../components/SocialMediaCards";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGoogle,
  faTiktok,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";
import { faFilm as faFilmSolid } from "@fortawesome/free-solid-svg-icons";

const SocialMediaMarketingData = {
  title: "Social Media Platform Marketing Services",
  services: [
    {
      title: "Facebook Marketing",
      description:
        "Enhance your brand's presence and elevate your business with our specialized and tailored Facebook marketing strategies and solutions.",
      icon: faFacebook,
    },
    {
      title: "Instagram Marketing",
      description:
        "Amplify your brand's impact and elevate your business with our comprehensive and targeted Instagram marketing solutions.",
      icon: faInstagram,
    },
    {
      title: "YouTube Marketing",
      description:
        "Boost your brand's visibility and amplify your business with our strategic and tailored YouTube marketing solutions.",
      icon: faYoutube,
    },
    {
      title: "YouTube SEO",
      description:
        "Optimize your YouTube presence and maximize your video visibility with our expert and tailored YouTube SEO services and strategies.",
      icon: faYoutube,
    },
    {
      title: "Google Ads",
      description:
        "Enhance your online presence and maximize your digital reach with our targeted and expert Google Ads solutions and strategies.",
      icon: faGoogle,
    },
    {
      title: "TikTok Marketing",
      description:
        "Amplify your brand's impact and elevate your business with our specialized and tailored TikTok marketing strategies and solutions.",
      icon: faTiktok,
    },
    {
      title: "TikTok SEO",
      description:
        "Optimize your TikTok presence and maximize your video visibility with our expert TikTok SEO services and strategies.",
      icon: faTiktok,
    },
    {
      title: "Video Editing",
      description:
        "Enhance your video content and captivate your audience with our professional and tailored video editing services and solutions.",
      icon: faFilmSolid,
    },
    {
      title: "Shopify Marketing",
      description:
        "Boost your online store's visibility and elevate your e-commerce business with our specialized and tailored Shopify marketing strategies and solutions.",
      icon: faShopify,
    },
  ],
};

const sliderImages = [
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
      <SocialMediaCard
        title={SocialMediaMarketingData.title}
        services={SocialMediaMarketingData.services}
      />
    </div>
  );
}

export default HomePage;
