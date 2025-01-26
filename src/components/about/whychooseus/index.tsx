function WhyChooseUs() {
  return (
    <>
      <div className="container mx-auto p-6 mt-[8rem]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <img
              src="images/about/why-choose-us.jpg"
              alt="Why Choose Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-700">
              Our team is highly skilled and knowledgeable in various areas of
              marketing. We stay ahead of the curve by adopting new technologies
              and strategies.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Proven results</li>
              <li>Expertise in diverse marketing strategies</li>
              <li>Client-centric approach</li>
              <li>Strategic planning for growth</li>
              <li>CRM Integration</li>
              <li>Seasoned experts dedicated to your success</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
