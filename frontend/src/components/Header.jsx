// src/components/Header.jsx
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import Logo from "../assets/images/svg/Ipkure";

export default function Header() {
  const { language, switchLanguage } = useLanguage();

  // Helper function to create language-aware links
  const createLink = (path) => `/${language}${path}`;

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to={createLink("/")}
          className="text-2xl font-bold flex items-center space-x-1"
        >
          <Logo />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link to={createLink("/")} className="text-black font-semibold">
            HOME
          </Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/brand")}>BRAND</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/men")}>MEN</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/women")}>WOMEN</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/gift_sets")}>GIFT SETS</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/contacts")}>CONTACT US</Link>
        </nav>

        {/* Right side: Language switcher and Icons */}
        <div className="flex items-center space-x-5">
          {/* Language switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => switchLanguage("en")}
              className={`px-2 py-1 text-sm font-medium cursor-pointer ${
                language === "en" ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => switchLanguage("ge")}
              className={`px-2 py-1 text-sm font-medium cursor-pointer ${
                language === "ge" ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              GE
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-gray-700 text-lg">
            <button aria-label="Search">
              <FaSearch />
            </button>
            <button aria-label="Wishlist">
              <FaHeart />
            </button>
            <button aria-label="Account">
              <FaUser />
            </button>
            <button aria-label="Cart">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
