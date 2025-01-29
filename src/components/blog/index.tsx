function OurBlog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full lg:w-1/2 text-center lg:text-left mx-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-[5rem]">
          Our Blog
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src="images/blog/blog.jpeg"
            alt="Blog"
            className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
