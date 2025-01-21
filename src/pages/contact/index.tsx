import HeroSection from "../../components/banner";

function ContactPage() {
  return (
    <HeroSection
      backgroundimage="images/home/containerpic1.jpg"
      title="Contact Us"
      description="Reach out to our team for expert assistance AD AIM Marketing seamlessly integrates customer relationship management solutions to ensure personalized and targeted marketing strategies for enhanced client engagement."
      sliderImages={[
        "/images/home/containerpic1.jpg", // Image 1
        "/images/home/containerpic2.jpg", // Image 2
        "/images/home/containerpic3.jpg", // Image 3
      ]}
    />
  );
}

export default ContactPage;
