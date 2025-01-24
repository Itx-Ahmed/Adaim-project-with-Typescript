import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TSocialMediaServiceCardProps = {
  title: string;
  description: string;
  icon: any;
};

function SocialMediaCard(props: TSocialMediaServiceCardProps) {
  return (
    <div className="max-w-xs mx-auto bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-95 mt-3">
      <div className="p-3 text-center">
        <div className="text-4xl text-blue-600 mb-4">
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{props.title}</h2>
        <p className="mt-1 text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

export default SocialMediaCard;
