type TSocialMediaMarketingService = {
  title: string;
  services: {
    title: string;
    description: string;
  }[];
};

function SocialMediaMarketing(props: TSocialMediaMarketingService) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 mt-[7rem]">
        {props.title}
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {props.services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaMarketing;
