function CEOProfile() {
  return (
    <div className="container mx-auto px-4 py-12 mt-[4rem]">
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/images/home/ceo.png"
            alt="Meer Asad Iqbal"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left md:pl-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Meer Asad Iqbal
          </h2>
          <p className="text-xl font-medium text-gray-600 mb-4">
            (CEO, AD-AIM)
          </p>
          <p className="text-lg text-black font-semibold mb-4">
            {" "}
            "CEO Leadership: Vision, Passion, Determination"
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Leading with vision, inspiring with passion, and achieving with
            determination - that's the CEO way. Embrace the journey, empower
            your team, and make every moment count. Success is not just a
            destination, but a reflection of your leadership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CEOProfile;
