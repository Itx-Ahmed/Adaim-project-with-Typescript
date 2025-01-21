import HeroSection from "../../components/banner";

const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function ContactPage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="Contact Us"
      description="Reach out to our team for expert assistance. AD AIM Marketing seamlessly integrates customer relationship management solutions to ensure personalized and targeted marketing strategies for enhanced client engagement."
      sliderImages={sliderImages}
    />
  );
}

export default ContactPage;
