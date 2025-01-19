type THeroSectionProps = {
  backgroundimage: string;
  title: string;
  description: string;
};

function HeroSection(props: THeroSectionProps) {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="h-screen bg-[#F3F3F3] relative mt-[102px]">
        <img
          src={props.backgroundimage}
          alt={props.title}
          className="w-full h-full object-cover"
        />
        {/* Content Section */}
        <div className="absolute w-[36rem] top-[180px] left-8 text-black mx-4 md:top-[250px] lg:top-[300px] md:left-16 lg:left-24">
          <h1 className="text-3xl font-bold mb-2 font-sans sm:text-4xl md:text-5xl">
            {props.title}
          </h1>

          <p className="text-base w-[30rem] font-light sm:text-lg md:text-xl">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
