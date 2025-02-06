import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-[#0EB0AA]">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="images/home/logo.png" alt="logo" className="w-24" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link to="/announcement" className="hover:text-gray-400">
            Announcement
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => (window.location.href = "tel:+1234567890")}
          >
            Call Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="bg-gray-800 bg-opacity-90 px-6 py-4 fixed top-0 left-0 right-0 z-50 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/announcement"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Announcement
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 w-full rounded"
              onClick={() => {
                setIsOpen(false);
                window.location.href = "tel:+1234567890";
              }}
            >
              Call Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
