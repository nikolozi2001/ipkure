// src/pages/BrandPage.jsx
import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useBrands } from "../hooks/useBrands";
import FeaturedBrand from "../components/Brands/FeaturedBrand";
import BrandFilters from "../components/Brands/BrandFilters";
import BrandsGrid from "../components/Brands/BrandsGrid";
import BrandModal from "../components/Brands/BrandModal";

export default function BrandPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use brands hook
  const { loading, error, filterBrands, getFeaturedBrand, getBrandStats } = useBrands();

  // Set dynamic title for brands page
  useDocumentTitle("brands");

  // Filter brands based on category and search
  const filteredBrands = filterBrands(searchTerm, selectedCategory);
  const featuredBrand = getFeaturedBrand();
  const stats = getBrandStats();

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
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Brands</h2>
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

  // Brands page translations
  const brandsTranslations = {
    en: {
      title: "Premium Brands",
      subtitle: "Discover our curated collection of luxury fragrance houses",
      searchPlaceholder: "Search brands...",
      categories: {
        all: "All Brands",
        luxury: "Luxury",
        designer: "Designer",
        niche: "Niche",
        popular: "Popular"
      },
      featuredBrand: {
        title: "Featured Brand",
        heritage: "Heritage Since",
        explore: "Explore Collection"
      },
      brandCard: {
        explore: "Explore",
        newArrivals: "New Arrivals",
        bestsellers: "Bestsellers"
      },
      stats: {
        brandsCount: `${stats.totalBrands}+ Premium Brands`,
        fragrances: `${stats.totalBestsellers}+ Bestsellers`,
        countries: `From ${stats.countries}+ Countries`
      }
    },
    ge: {
      title: "პრემიუმ ბრენდები",
      subtitle: "აღმოაჩინეთ ჩვენი შერჩეული ლუქს სუნამოების კოლექცია",
      searchPlaceholder: "ძებნა ბრენდებში...",
      categories: {
        all: "ყველა ბრენდი",
        luxury: "ლუქსი",
        designer: "დიზაინერული",
        niche: "ნიშური",
        popular: "პოპულარული"
      },
      featuredBrand: {
        title: "გამორჩეული ბრენდი",
        heritage: "მემკვიდრეობა",
        explore: "კოლექციის დათვალიერება"
      },
      brandCard: {
        explore: "დათვალიერება",
        newArrivals: "ახალი კოლექცია",
        bestsellers: "ბესტსელერები"
      },
      stats: {
        brandsCount: `${stats.totalBrands}+ პრემიუმ ბრენდი`,
        fragrances: `${stats.totalBestsellers}+ ბესტსელერი`,
        countries: `${stats.countries}+ ქვეყნიდან`
      }
    }
  };

  const t = brandsTranslations[language];

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
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-16 lg:py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-gray-900 mb-1">{t.stats.brandsCount}</div>
              <div className="text-sm text-gray-600">Premium Collections</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-gray-900 mb-1">{t.stats.fragrances}</div>
              <div className="text-sm text-gray-600">Top Selections</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-gray-900 mb-1">{t.stats.countries}</div>
              <div className="text-sm text-gray-600">Global Heritage</div>
            </div>
          </div>
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
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No brands found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <BrandsGrid brands={filteredBrands} onBrandClick={handleBrandClick} />
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