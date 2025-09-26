// frontend/src/components/Brands/BrandFilters.jsx
import React from "react";
import { X, Filter } from "lucide-react"; // install lucide-react if not installed: npm i lucide-react
import { useLanguage } from "../../hooks/useLanguage";

export default function BrandFilters({
  selectedCategory,
  onCategoryChange,
  onClearFilters,
  resultCount,
  sortBy,
  onSortChange,
}) {
  const { language } = useLanguage();

  const filtersTranslations = {
    en: {
      all: "All",
      new: "New",
      exclusive: "Exclusive",
      limited: "Limited Edition",
      popular: "Popular",
      filters: "Filters",
      sortBy: "Sort by:",
      nameAsc: "Name (A-Z)",
      nameDesc: "Name (Z-A)",
      category: "Category",
      heritageOldest: "Heritage (Oldest First)",
      heritageNewest: "Heritage (Newest First)",
      bestsellers: "Most Popular",
      brands: "brands",
      ascending: "Ascending",
      descending: "Descending",
    },
    ge: {
      all: "ყველა",
      new: "ახალი",
      exclusive: "ექსკლუზიური",
      limited: "შეზღუდული გამოშვება",
      popular: "პოპულარული",
      filters: "ფილტრები",
      sortBy: "დალაგება:",
      nameAsc: "სახელი (ა-ჰ)",
      nameDesc: "სახელი (ჰ-ა)",
      category: "კატეგორია",
      heritageOldest: "მემკვიდრეობა (ძველი პირველი)",
      heritageNewest: "მემკვიდრეობა (ახალი პირველი)",
      bestsellers: "ყველაზე პოპულარული",
      brands: "ბრენდი",
      ascending: "ზრდადი",
      descending: "კლებადი",
    },
  };

  const t = filtersTranslations[language];

  const categories = [
    { key: "all", label: t.all },
    { key: "new", label: t.new },
    { key: "exclusive", label: t.exclusive },
    { key: "limited", label: t.limited },
    { key: "popular", label: t.popular },
  ];

  return (
    <section className="w-full border-b border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center gap-2 text-gray-800 font-medium text-sm">
              <Filter className="w-4 h-4" />
              {t.filters}
            </div>
            <button
              onClick={onClearFilters}
              className="text-gray-600 hover:text-black p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Categories - Horizontal Scroll */}
          <div className="py-3 border-b border-gray-300">
            <div 
              className="flex gap-3 overflow-x-auto pb-2"
              style={{ 
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {categories.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => onCategoryChange(key)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 touch-manipulation ${
                    selectedCategory === key
                      ? "bg-golden-brown text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-300 hover:border-golden-brown"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Sorting */}
          <div className="py-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {t.sortBy}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-golden-brown rounded-full"></div>
                <span>{resultCount} {t.brands}</span>
              </div>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-golden-brown focus:border-transparent touch-manipulation"
            >
              <option value="name-asc">{t.nameAsc}</option>
              <option value="name-desc">{t.nameDesc}</option>
              <option value="category-asc">{t.category}</option>
              <option value="heritage-oldest">{t.heritageOldest}</option>
              <option value="heritage-newest">{t.heritageNewest}</option>
              <option value="bestsellers-desc">{t.bestsellers}</option>
            </select>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* First Row: Filters */}
          <div className="flex items-center justify-between py-3 text-sm border-b border-gray-300">
            {/* Left: Filters label */}
            <div className="flex items-center gap-2 text-gray-800 font-medium">
              <Filter className="w-4 h-4" />
              {t.filters}
            </div>

            {/* Middle: checkboxes */}
            <div className="flex items-center gap-6">
              {categories.map(({ key, label }) => (
                <label
                  key={key}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategory === key}
                    onChange={() => onCategoryChange(key)}
                    className="w-4 h-4 border-gray-300 text-black focus:ring-black"
                  />
                  <span
                    className={`${
                      selectedCategory === key
                        ? "text-black font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {label}
                  </span>
                </label>
              ))}
            </div>

            {/* Right: Close */}
            <button
              onClick={onClearFilters}
              className="text-gray-600 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Second Row: Sorting Options */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {t.sortBy}
                </span>
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-golden-brown focus:border-transparent cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <option value="name-asc">{t.nameAsc}</option>
                  <option value="name-desc">{t.nameDesc}</option>
                  <option value="category-asc">{t.category}</option>
                  <option value="heritage-oldest">{t.heritageOldest}</option>
                  <option value="heritage-newest">{t.heritageNewest}</option>
                  <option value="bestsellers-desc">{t.bestsellers}</option>
                </select>
                <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sort direction indicator */}
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                {sortBy.includes('asc') || sortBy.includes('oldest') ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span>
                  {sortBy.includes('asc') || sortBy.includes('oldest') 
                    ? t.ascending
                    : t.descending
                  }
                </span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-golden-brown rounded-full"></div>
                <span>
                  {resultCount} {t.brands}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
