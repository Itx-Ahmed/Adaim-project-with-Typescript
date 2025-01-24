import HeroSection from "../../components/banner";
import SocialMediaCard from "../../components/SocialMediaCards";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

const marketingData = [
  {
    id: 1,
    title: "Facebook Marketing",
    description:
      "Enhance your brand's presence and elevate your business with our specialized and tailored Facebook marketing strategies and solutions.",
    icon: faFacebook,
  },
  {
    id: 2,
    title: "Instagram Marketing",
    description:
      "Amplify your brand's impact and elevate your business with our comprehensive and targeted Instagram marketing solutions.",
    icon: faInstagram,
  },
  {
    id: 3,
    title: "YouTube Marketing",
    description:
      "Boost your brand's visibility and amplify your business with our strategic and tailored YouTube marketing solutions.",
    icon: faYoutube,
  },
  {
    id: 4,
    title: "YouTube SEO",
    description:
      "Optimize your YouTube presence and maximize your video visibility with our expert and tailored YouTube SEO services and strategies.",
    icon: faYoutube,
  },
  {
    id: 5,
    title: "Google Ads",
    description:
      "Enhance your online presence and maximize your digital reach with our targeted and expert Google Ads solutions and strategies.",
    icon: faFacebook,
  },
  {
    id: 6,
    title: "TikTok Marketing",
    description:
      "Amplify your brand's impact and elevate your business with our specialized and tailored TikTok marketing strategies and solutions.",
    icon: faTiktok,
  },
  {
    id: 7,
    title: "TikTok SEO",
    description:
      "Optimize your TikTok presence and maximize your video visibility with our expert TikTok SEO services and strategies.",
    icon: faTiktok,
  },
  {
    id: 8,
    title: "Video Editing",
    description:
      "Enhance your video content and captivate your audience with our professional and tailored video editing services and solutions.",
    icon: faYoutube,
  },
  {
    id: 9,
    title: "Shopify Marketing",
    description:
      "Boost your online store's visibility and elevate your e-commerce business with our specialized and tailored Shopify marketing strategies and solutions.",
    icon: faFacebook,
  },
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

      <div className="mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Social Media Platform Marketing Services
        </h2>
      </div>

      {/* First row with Facebook Marketing, Instagram Marketing, and YouTube Marketing */}
      <div className="flex flex-wrap justify-center gap-1 mt-3">
        {marketingData.slice(0, 3).map((card) => (
          <SocialMediaCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>

      {/* Second row with YouTube SEO, Google Ads, and TikTok Marketing */}
      <div className="flex flex-wrap justify-center gap-1 mt-3">
        {marketingData.slice(3, 6).map((card) => (
          <SocialMediaCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>

      {/* Third row with TikTok SEO, Video Editing, and Shopify Marketing */}
      <div className="flex flex-wrap justify-center gap-1 mt-3">
        {marketingData.slice(6).map((card) => (
          <SocialMediaCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
