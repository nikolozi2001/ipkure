// src/pages/BrandPage.jsx
import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useBrands } from "../hooks/useBrands";
import FeaturedBrand from "../components/Brands/FeaturedBrand";
import BrandFilters from "../components/Brands/BrandFilters";
import BrandsGrid from "../components/Brands/BrandsGrid";
import BrandModal from "../components/Brands/BrandModal";

import bgChanel from "../assets/images/brand/bg-chanel.webp"; // ✅ background image

export default function BrandPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use brands hook
  const { loading, error, filterBrands, getFeaturedBrand } = useBrands();

  // Set dynamic title for brands page
  useDocumentTitle("brands");

  // Filter brands based on category and search
  const filteredBrands = filterBrands(searchTerm, selectedCategory);
  const featuredBrand = getFeaturedBrand();

  const brandIntroText = {
    en: {
      title: "PERFUMES",
      subtitle:
        "Exclusive fragrance and beauty must-haves you won’t find anywhere else, including limited runs, special editions, previews, and products available only online and in shops.",
    },
    ge: {
      title: "სუნამოები",
      subtitle:
        "ექსკლუზიური სურნელები და სილამაზის აუცილებელი ნივთები, რომლებიც სხვაგან ვერ იპოვით — შეზღუდული გამოშვებები, სპეციალური გამოცემები, პრევიუები და მხოლოდ ონლაინ და მაღაზიებში ხელმისაწვდომი პროდუქტები.",
    },
  };

  const tIntro = brandIntroText[language];

  // Show loading state
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading brands...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Error Loading Brands
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrand(null);
  };

  return (
    <div className="w-full">
      {/* ✅ New Brand Hero Section */}
      <section
        className="relative w-full h-[300px] flex items-center"
        style={{
          backgroundImage: `url(${bgChanel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {tIntro.title}
          </h2>
          <p className="text-gray-700 max-w-xl leading-relaxed">
            {tIntro.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Brand Section */}
      <FeaturedBrand brand={featuredBrand} />

      {/* Filters and Search */}
      <BrandFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        resultCount={filteredBrands.length}
      />

      {/* Brands Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-6">
          {filteredBrands.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No brands found
              </h3>
              <p className="text-gray-500 text-lg">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <BrandsGrid
              brands={filteredBrands}
              onBrandClick={handleBrandClick}
            />
          )}
        </div>
      </section>

      {/* Brand Modal */}
      <BrandModal
        brand={selectedBrand}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
