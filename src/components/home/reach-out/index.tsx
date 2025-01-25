function ReachOut() {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center ">
        Would you like to start a project with us?
      </h1>

      <div className="w-full max-w-3xl h-auto bg-white shadow-md p-6 md:p-12 rounded-md relative">
        <p className="text-lg mb-4 font-medium">
          You can visit us at the following address:
        </p>

        <address className="text-sm space-y-3 font-semibold">
          <p>FF04, 1st Floor, Awan Tower,</p>
          <p>Near Mercy Teaching Hospital,</p>
          <p>Tehkal Payyan, University Road,</p>
          <p>Peshawar</p>
        </address>

        <p className="text-lg font-medium">
          Email:{" "}
          <a
            href="mailto:adaimmarketingagency@gmail.com"
            className="text-blue-500 hover:underline"
          >
            adaimmarketingagency@gmail.com
          </a>
        </p>

        <div className="absolute top-8 right-5 space-x-4 flex flex-col md:flex-row items-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none mt-4 md:mt-0">
            Call Now
          </button>
          <button className="px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none mt-4 md:mt-0">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReachOut;
