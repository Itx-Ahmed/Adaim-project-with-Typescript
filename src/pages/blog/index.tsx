<<<<<<< HEAD
function Blog() {
  return <div></div>;
=======
import HeroSection from "../../components/banner";
import OurBlog from "../../components/blog";
const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function BlogPage() {
  return (
    <>
      <HeroSection
        backgroundimage="/images/home/containerpic1.jpg"
        title="Our Blogs"
        description="At Ad-Aim Agency, we specialize in crafting captivating campaigns that speak directly to your audience's hearts. With our strategic approach and creative finesse, we aim to elevate your brand to new heights and drive meaningful engagement."
        sliderImages={sliderImages}
      />
      <OurBlog />
    </>
  );
>>>>>>> main
}

export default BlogPage;
