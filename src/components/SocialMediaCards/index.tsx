import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TSocialMediaServiceCardProps = {
  title: string;
  services: {
    title: string;
    description: string;
    icon: any;
  }[];
};

function SocialMediaCard(props: TSocialMediaServiceCardProps) {
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
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-2xl font-semibold text-center mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-center mt-4">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-blue-500" // Responsive size
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaCard;
