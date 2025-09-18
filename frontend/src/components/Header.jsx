// src/components/Header.jsx
import { FaSearch, FaHeart, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Logo from "../assets/images/svg/Ipkure";

export default function Header() {
  const { language, switchLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to create language-aware links
  const createLink = (path) => `/${language}${path}`;

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation translations
  const navTranslations = {
    en: {
      home: "HOME",
      brand: "BRAND", 
      men: "MEN",
      women: "WOMEN",
      giftSets: "GIFT SETS",
      contact: "CONTACT US"
    },
    ge: {
      home: "მთავარი",
      brand: "ბრენდი",
      men: "მამაკაცი", 
      women: "ქალი",
      giftSets: "სასაჩუქრე ნაკრები",
      contact: "კონტაქტი"
    }
  };

  const nav = navTranslations[language];

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:py-4 lg:px-6">
        {/* Logo */}
        <Link
          to={createLink("/")}
          className="text-xl lg:text-2xl font-bold flex items-center space-x-1"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link to={createLink("/")} className="text-black font-semibold">
            {nav.home}
          </Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/brand")}>{nav.brand}</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/men")}>{nav.men}</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/women")}>{nav.women}</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/gift_sets")}>{nav.giftSets}</Link>
          <span className="h-4 border-r border-gray-300"></span>
          <Link to={createLink("/contacts")}>{nav.contact}</Link>
        </nav>

        {/* Right side: Language switcher and Icons */}
        <div className="flex items-center space-x-3 lg:space-x-5">
          {/* Language switcher */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => switchLanguage("en")}
              className={`px-1 lg:px-2 py-1 text-xs lg:text-sm font-medium cursor-pointer ${
                language === "en" ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => switchLanguage("ge")}
              className={`px-1 lg:px-2 py-1 text-xs lg:text-sm font-medium cursor-pointer ${
                language === "ge" ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              GE
            </button>
          </div>

          {/* Desktop Icons */}
          <div className="hidden sm:flex items-center space-x-3 lg:space-x-5 text-gray-700 text-base lg:text-lg">
            <button aria-label="Search" className="hover:text-black transition-colors">
              <FaSearch />
            </button>
            <button aria-label="Wishlist" className="hover:text-black transition-colors">
              <FaHeart />
            </button>
            <button aria-label="Account" className="hover:text-black transition-colors">
              <FaUser />
            </button>
            <button aria-label="Cart" className="hover:text-black transition-colors">
              <FaShoppingCart />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 text-xl hover:text-black transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
          <div className="px-4 py-6">
            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-6">
              <Link 
                to={createLink("/")} 
                className="block text-base font-semibold text-black py-2 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                {nav.home}
              </Link>
              <Link 
                to={createLink("/brand")} 
                className="block text-base text-gray-700 py-2 border-b border-gray-100 hover:text-black transition-colors"
                onClick={closeMobileMenu}
              >
                {nav.brand}
              </Link>
              <Link 
                to={createLink("/men")} 
                className="block text-base text-gray-700 py-2 border-b border-gray-100 hover:text-black transition-colors"
                onClick={closeMobileMenu}
              >
                {nav.men}
              </Link>
              <Link 
                to={createLink("/women")} 
                className="block text-base text-gray-700 py-2 border-b border-gray-100 hover:text-black transition-colors"
                onClick={closeMobileMenu}
              >
                {nav.women}
              </Link>
              <Link 
                to={createLink("/gift_sets")} 
                className="block text-base text-gray-700 py-2 border-b border-gray-100 hover:text-black transition-colors"
                onClick={closeMobileMenu}
              >
                {nav.giftSets}
              </Link>
              <Link 
                to={createLink("/contacts")} 
                className="block text-base text-gray-700 py-2 border-b border-gray-100 hover:text-black transition-colors"
                onClick={closeMobileMenu}
              >
                {nav.contact}
              </Link>
            </nav>

            {/* Mobile Icons */}
            <div className="flex items-center justify-center space-x-8 pt-4 border-t border-gray-200">
              <button aria-label="Search" className="text-gray-700 text-xl hover:text-black transition-colors">
                <FaSearch />
              </button>
              <button aria-label="Wishlist" className="text-gray-700 text-xl hover:text-black transition-colors">
                <FaHeart />
              </button>
              <button aria-label="Account" className="text-gray-700 text-xl hover:text-black transition-colors">
                <FaUser />
              </button>
              <button aria-label="Cart" className="text-gray-700 text-xl hover:text-black transition-colors">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
