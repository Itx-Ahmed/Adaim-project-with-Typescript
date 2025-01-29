function OurPackages() {
  return (
    <div className="p-6 bg-gray-100">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center mt-[6rem]">
          Our Packages
        </h2>
        <div className="flex justify-between gap-6">
          <div className="flex flex-col shadow-lg bg-white p-6 rounded-md w-full sm:w-80 md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-center">Basic</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>2 Campaigns</li>
              <li>Page Management</li>
              <li>Video Editing</li>
              <li>Copy Writing</li>
              <li>Graphic Designing</li>
              <li>TikTok SEO</li>
            </ul>
          </div>

          <div className="flex flex-col shadow-lg bg-white p-6 rounded-md w-full sm:w-80 md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-center">Standard</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>3 Campaigns</li>
              <li>Page Management</li>
              <li>Video Editing</li>
              <li>Copy Writing</li>
              <li>Graphic Designing</li>
              <li>Daily 1 Post</li>
              <li>TikTok SEO</li>
            </ul>
          </div>

          <div className="flex flex-col shadow-lg bg-white p-6 rounded-md w-full sm:w-80 md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-center">Premium</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>4 Campaigns</li>
              <li>Page Management</li>
              <li>Video Editing</li>
              <li>Copy Writing</li>
              <li>Graphic Designing</li>
              <li>Daily 1 Post</li>
              <li>YouTube Monetization</li>
              <li>TikTok SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPackages;
