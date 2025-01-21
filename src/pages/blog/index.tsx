import HeroSection from "../../components/banner";

function BlogPage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="Our Blogs"
      description="At Ad-Aim Agency, we specialize in crafting captivating campaigns that speak directly to your audience's hearts. With our strategic approach and creative finesse, we aim to elevate your brand to new heights and drive meaningful engagement."
      sliderImages={[
        "/images/home/containerpic1.jpg", // Image 1
        "/images/home/containerpic2.jpg", // Image 2
        "/images/home/containerpic3.jpg", // Image 3
      ]}
    />
  );
}

export default BlogPage;
