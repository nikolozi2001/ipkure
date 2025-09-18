// src/components/Header.jsx
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/images/svg/Ipkure";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-1">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="text-black font-semibold">
            HOME
          </a>
          <span className="h-4 border-r border-gray-300"></span>
          <a href="#">SHOP</a>
          <span className="h-4 border-r border-gray-300"></span>
          <a href="#">BRAND</a>
          <span className="h-4 border-r border-gray-300"></span>
          <a href="#">MEN</a>
          <span className="h-4 border-r border-gray-300"></span>
          <a href="#">WOMEN</a>
          <span className="h-4 border-r border-gray-300"></span>
          <a href="#">ABOUT US</a>
        </nav>

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
    </header>
  );
}
