function WhoWeAre() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 mt-[5rem]">
      <div className="container shadow-lg bg-white p-6 rounded-md flex-1">
        <h1 className="text-2xl font-bold mb-4">Who are you</h1>
        <p className="text-gray-700">
          At AD AIM Marketing, we are more than just a marketing agency; we are
          your partners in success. With a relentless passion for creativity and
          innovation, we strive to elevate brands across various industries,
          delivering impactful solutions that drive growth and engagement.
        </p>
      </div>

      <div className="container shadow-lg bg-white p-6 rounded-md flex-1">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission at AD AIM Marketing is to empower businesses of all sizes
          to reach their full potential through strategic marketing solutions.
          We are committed to delivering exceptional results by leveraging our
          expertise, creativity, and dedication to client satisfaction, aiming
          to exceed expectations and build long-lasting partnerships that foster
          mutual success.
        </p>
      </div>

      <div className="container shadow-lg bg-white p-6 rounded-md flex-1">
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Facebook Ads</li>
          <li>Instagram Ads</li>
          <li>YouTube SEO</li>
          <li>TikTok SEO</li>
          <li>Amazon</li>
          <li>Google Ads</li>
          <li>Video Editing</li>
          <li>Content Creation</li>
        </ul>
      </div>
    </div>
  );
}

export default WhoWeAre;
