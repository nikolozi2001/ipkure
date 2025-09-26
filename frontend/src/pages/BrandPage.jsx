// src/pages/BrandPage.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useBrands } from "../hooks/useBrands";
import BrandFilters from "../components/Brands/BrandFilters";
import BrandsGrid from "../components/Brands/BrandsGrid";
import BrandModal from "../components/Brands/BrandModal";

import bgChanel from "../assets/images/brand/bg-chanel.webp";

export default function BrandPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState("name-asc");
  
  // Mobile-specific state
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const scrollRef = useRef(null);

  // Use brands hook
  const { loading, error, filterBrands, refreshBrands } = useBrands();

  // Set dynamic title for brands page
  useDocumentTitle("brands");

  // Get favorites from localStorage (matching BrandImage component)
  const getFavorites = () => {
    try {
      const favorites = localStorage.getItem('favoriteBrands');
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error parsing favorites:', error);
      return [];
    }
  };

  // Filter brands based on category and search
  const allFilteredBrands = filterBrands(searchTerm, selectedCategory);
  
  // Further filter by favorites if toggled
  const favoritesFilteredBrands = showOnlyFavorites
    ? allFilteredBrands.filter(brand => {
        const favoriteIds = getFavorites().map(fav => fav.id);
        return favoriteIds.includes(brand.id);
      })
    : allFilteredBrands;

  // Sort brands based on selected option
  const sortBrands = (brands, sortOption) => {
    const sortedBrands = [...brands];
    
    switch (sortOption) {
      case "name-asc":
        return sortedBrands.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sortedBrands.sort((a, b) => b.name.localeCompare(a.name));
      case "category-asc":
        return sortedBrands.sort((a, b) => a.category.localeCompare(b.category));
      case "heritage-oldest":
        return sortedBrands.sort((a, b) => parseInt(a.heritage) - parseInt(b.heritage));
      case "heritage-newest":
        return sortedBrands.sort((a, b) => parseInt(b.heritage) - parseInt(a.heritage));
      case "bestsellers-desc":
        return sortedBrands.sort((a, b) => (b.bestsellers || 0) - (a.bestsellers || 0));
      default:
        return sortedBrands;
    }
  };

  // Apply sorting to filtered brands
  const filteredBrands = sortBrands(favoritesFilteredBrands, sortBy);

  // Pull-to-refresh functionality
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // Simulate refresh (in real app, this would refetch data)
      if (refreshBrands) {
        await refreshBrands();
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error('Error refreshing brands:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, [refreshBrands]);

  // Touch handlers for pull-to-refresh
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isDownSwipe = distance < -100;
    const scrollTop = scrollRef.current?.scrollTop || 0;
    
    // Trigger refresh if user pulls down at the top of the page
    if (isDownSwipe && scrollTop === 0 && !isRefreshing) {
      handleRefresh();
    }
  }, [touchStart, touchEnd, isRefreshing, handleRefresh]);

  // Mobile filter handlers
  const openFilters = () => setIsFiltersOpen(true);
  const closeFilters = () => setIsFiltersOpen(false);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setSortBy("name-asc");
    setShowOnlyFavorites(false);
    closeFilters();
  };

  // Use effect for mobile detection and touch event setup
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: false });
      element.addEventListener('touchmove', handleTouchMove, { passive: false });
      element.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [touchStart, touchEnd, isRefreshing, handleTouchEnd]);

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

  // Skeleton loading component
  const SkeletonCard = () => (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white animate-pulse">
      <div className="aspect-[4/3] bg-gray-200"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  // Show loading state with skeleton cards
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        {/* Hero Section Skeleton */}
        <div className="relative h-64 bg-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <div className="h-8 bg-gray-300 rounded w-48 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-96 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-80"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Filters Skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-200 rounded w-full max-w-md animate-pulse"></div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
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
    <div className="w-full" ref={scrollRef}>
      {/* Pull-to-refresh indicator */}
      {isRefreshing && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-golden-brown text-white py-2 px-4 text-center text-sm">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>{language === 'en' ? 'Refreshing...' : 'განახლება...'}</span>
          </div>
        </div>
      )}

      {/* Mobile Filter Button - Fixed position */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={openFilters}
          className="bg-golden-brown text-white p-4 rounded-full shadow-lg hover:bg-golden-brown/90 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {isFiltersOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeFilters}>
          <div 
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {language === 'en' ? 'Filters & Sort' : 'ფილტრები და დალაგება'}
              </h3>
              <button 
                onClick={closeFilters}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Filters Content */}
            <div className="p-4 space-y-6">
              {/* Categories */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  {language === 'en' ? 'Categories' : 'კატეგორიები'}
                </h4>
                <div className="space-y-3">
                  {['all', 'new', 'exclusive', 'limited', 'popular'].map((category) => (
                    <label key={category} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="text-golden-brown focus:ring-golden-brown"
                      />
                      <span className="text-sm text-gray-700 capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sorting */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  {language === 'en' ? 'Sort By' : 'დალაგება'}
                </h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-brown focus:border-transparent"
                >
                  <option value="name-asc">{language === 'en' ? 'Name (A-Z)' : 'სახელი (ა-ჰ)'}</option>
                  <option value="name-desc">{language === 'en' ? 'Name (Z-A)' : 'სახელი (ჰ-ა)'}</option>
                  <option value="category-asc">{language === 'en' ? 'Category' : 'კატეგორია'}</option>
                  <option value="heritage-oldest">{language === 'en' ? 'Heritage (Oldest First)' : 'მემკვიდრეობა (ძველი პირველი)'}</option>
                  <option value="heritage-newest">{language === 'en' ? 'Heritage (Newest First)' : 'მემკვიდრეობა (ახალი პირველი)'}</option>
                  <option value="bestsellers-desc">{language === 'en' ? 'Most Popular' : 'ყველაზე პოპულარული'}</option>
                </select>
              </div>

              {/* Favorites Toggle */}
              <div>
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    {language === 'en' ? 'Show Favorites Only' : 'მხოლოდ რჩეულები'}
                  </span>
                  <button
                    onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      showOnlyFavorites 
                        ? 'bg-golden-brown' 
                        : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        showOnlyFavorites ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-gray-200 space-y-3">
              <button
                onClick={clearAllFilters}
                className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {language === 'en' ? 'Clear All Filters' : 'ყველა ფილტრის გასუფთავება'}
              </button>
              <button
                onClick={closeFilters}
                className="w-full py-2 px-4 bg-golden-brown text-white rounded-lg hover:bg-golden-brown/90 transition-colors"
              >
                {language === 'en' ? 'Apply Filters' : 'ფილტრების გამოყენება'} ({filteredBrands.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Brand Hero Section - Mobile Responsive */}
      <section
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${bgChanel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex flex-col space-y-6">
            {/* Title and description - Mobile optimized */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4">
                {tIntro.title}
              </h2>
              <p className="text-white/90 max-w-2xl leading-relaxed text-base sm:text-lg mb-4 sm:mb-6 mx-auto lg:mx-0">
                {tIntro.subtitle}
              </p>
            </div>

            {/* Brand Statistics - Mobile responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {allFilteredBrands.length}
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">
                    {language === 'en' ? 'Total Brands' : 'ჯამური ბრენდები'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {allFilteredBrands.filter(b => b.category === 'luxury').length}
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">
                    {language === 'en' ? 'Luxury' : 'ლუქსური'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {allFilteredBrands.filter(b => b.category === 'niche').length}
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">
                    {language === 'en' ? 'Niche' : 'ნიშური'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {allFilteredBrands.filter(b => b.category === 'designer').length}
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">
                    {language === 'en' ? 'Designer' : 'დიზაინერი'}
                  </div>
                </div>
              </div>
            
            {/* Favorites toggle - Mobile centered, desktop right */}
            <div className="flex justify-center lg:justify-end">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
                <span className="text-white font-medium text-sm sm:text-base">
                  {language === 'en' ? 'Favorites Only' : 'მხოლოდ რჩეულები'}
                </span>
                <button
                  onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                  className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                    showOnlyFavorites 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <span
                    className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                      showOnlyFavorites ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                {showOnlyFavorites && (
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-white text-xs sm:text-sm">
                      {filteredBrands.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Filters - Hidden on mobile */}
      <div className="hidden md:block">
        <BrandFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onClearFilters={() => {
            setSelectedCategory("all");
            setSearchTerm("");
            setSortBy("name-asc");
          }}
          resultCount={filteredBrands.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {/* Mobile Filter Summary Bar */}
      <div className="md:hidden bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{filteredBrands.length} {language === 'en' ? 'brands' : 'ბრენდი'}</span>
              {showOnlyFavorites && (
                <div className="flex items-center space-x-1">
                  <span>•</span>
                  <svg className="w-3 h-3 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>{language === 'en' ? 'Favorites' : 'რჩეულები'}</span>
                </div>
              )}
              {selectedCategory !== 'all' && (
                <div className="flex items-center space-x-1">
                  <span>•</span>
                  <span className="capitalize">{selectedCategory}</span>
                </div>
              )}
            </div>
            <button
              onClick={openFilters}
              className="text-golden-brown font-medium text-sm flex items-center space-x-1"
            >
              <span>{language === 'en' ? 'Filter' : 'ფილტრი'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Brands Grid - Mobile Responsive */}
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredBrands.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400"
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {language === 'en' ? 'No brands found' : 'ბრენდი ვერ მოიძებნა'}
              </h3>
              <p className="text-gray-500 text-sm sm:text-lg px-4">
                {language === 'en' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'სცადეთ ძიების ან ფილტრის კრიტერიუმების შეცვლა.'
                }
              </p>
              <button
                onClick={openFilters}
                className="mt-4 px-6 py-2 bg-golden-brown text-white rounded-lg hover:bg-golden-brown/90 transition-colors md:hidden"
              >
                {language === 'en' ? 'Adjust Filters' : 'ფილტრების შეცვლა'}
              </button>
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
