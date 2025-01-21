import HeroSection from "../../components/banner";

function AnnouncementPage() {
  return (
    <HeroSection
      backgroundimage="/images/home/containerpic1.jpg"
      title="Our Announcements"
      description="At Ad-Aim Agency, we specialize in crafting captivating campaigns that speak directly to your audience's hearts. With our strategic approach and creative finesse, we aim to elevate your brand to new heights and drive meaningful engagement.
       Our Announcement
       No Announcement available"
      sliderImages={[
        "/images/home/containerpic1.jpg",
        "/images/home/containerpic2.jpg",
        "/images/home/containerpic3.jpg",
      ]}
    />
  );
}

export default AnnouncementPage;
