import HelpSuccessBanner from "../../components/home/helpsuccessbanner";
import HeroSection from "../../components/banner";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaTiktok,
  FaEdit,
  FaShopify,
} from "react-icons/fa";
import OurTeam from "../../components/home/our-Team";
import CEOProfile from "../../components/home/CEO-Profile";
import OurCustomers from "../../components/home/our-customers";
import ReachOut from "../../components/home/reach-out";

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
    icon: FaFacebook,
  },
  {
    id: 2,
    title: "Instagram Marketing",
    description:
      "Amplify your brand's impact and elevate your business with our comprehensive and targeted Instagram marketing solutions.",
    icon: FaInstagram,
  },
  {
    id: 3,
    title: "YouTube Marketing",
    description:
      "Boost your brand's visibility and amplify your business with our strategic and tailored YouTube marketing solutions.",
    icon: FaYoutube,
  },
  {
    id: 4,
    title: "YouTube SEO",
    description:
      "Optimize your YouTube presence and maximize your video visibility with our expert and tailored YouTube SEO services and strategies.",
    icon: FaYoutube,
  },
  {
    id: 5,
    title: "Google Ads",
    description:
      "Enhance your online presence and maximize your digital reach with our targeted and expert Google Ads solutions and strategies.",
    icon: FaGoogle,
  },
  {
    id: 6,
    title: "TikTok Marketing",
    description:
      "Amplify your brand's impact and elevate your business with our specialized and tailored TikTok marketing strategies and solutions.",
    icon: FaTiktok,
  },
  {
    id: 7,
    title: "TikTok SEO",
    description:
      "Optimize your TikTok presence and maximize your video visibility with our expert TikTok SEO services and strategies.",
    icon: FaTiktok,
  },
  {
    id: 8,
    title: "Video Editing",
    description:
      "Enhance your video content and captivate your audience with our professional and tailored video editing services and solutions.",
    icon: FaEdit,
  },
  {
    id: 9,
    title: "Shopify Marketing",
    description:
      "Boost your online store's visibility and elevate your e-commerce business with our specialized and tailored Shopify marketing strategies and solutions.",
    icon: FaShopify,
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
      <HelpSuccessBanner />

      <section className="my-16 px-6 py-12 bg-gradient-to-r from-blue-100 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Social Media Platform Marketing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {marketingData.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center p-6 bg-white shadow-xl rounded-xl transform transition duration-300 hover:scale-105"
            >
              <Icon size={50} className="mb-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-center text-gray-800">
                {title}
              </h3>
              <p className="text-sm text-gray-500 text-center mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <OurTeam />
      <CEOProfile />
      <OurCustomers />
      <ReachOut />
    </>
  );
}

export default HomePage;
