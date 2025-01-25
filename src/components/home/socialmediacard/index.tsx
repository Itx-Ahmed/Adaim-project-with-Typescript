import { IconType } from "react-icons";

type TSocialMediaServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
};

function SocialMediaCard(props: TSocialMediaServiceCardProps) {
  return (
    <div className="flex items-start space-x-4 bg-white p-6 border border-gray-200 rounded-lg shadow-xl hover:scale-105 transition-transform">
      <div className="text-4xl text-blue-600"></div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{props.title}</h3>
        <p className="mt-2 text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

export default SocialMediaCard;
