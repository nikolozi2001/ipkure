import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

export default function BrandFilters({ 
  selectedCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange,
  resultCount 
}) {
  const { language } = useLanguage();

  const filtersTranslations = {
    en: {
      searchPlaceholder: "Search brands...",
      categories: {
        all: "All Brands",
        luxury: "Luxury",
        designer: "Designer", 
        niche: "Niche",
        popular: "Popular"
      },
      sortBy: "Sort by:",
      sortOptions: {
        name: "Name A-Z",
        nameDesc: "Name Z-A", 
        heritage: "Oldest First",
        popular: "Most Popular"
      },
      results: "brands found",
      clearFilters: "Clear Filters"
    },
    ge: {
      searchPlaceholder: "ძებნა ბრენდებში...",
      categories: {
        all: "ყველა ბრენდი",
        luxury: "ლუქსი",
        designer: "დიზაინერული",
        niche: "ნიშური", 
        popular: "პოპულარული"
      },
      sortBy: "დალაგება:",
      sortOptions: {
        name: "სახელით ა-ჰ",
        nameDesc: "სახელით ჰ-ა",
        heritage: "ძველი პირველი",
        popular: "ყველაზე პოპულარული"
      },
      results: "ბრენდი ნაპოვნია",
      clearFilters: "ფილტრების გასუფთავება"
    }
  };

  const t = filtersTranslations[language];

  const hasActiveFilters = selectedCategory !== "all" || searchTerm !== "";

  return (
    <section className="w-full py-8 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        {/* Main Filter Row */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Results Count & Clear Filters */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="font-medium">
              {resultCount} {t.results}
            </span>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  onCategoryChange("all");
                  onSearchChange("");
                }}
                className="text-black hover:underline font-medium"
              >
                {t.clearFilters}
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-3">
            {Object.entries(t.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => onCategoryChange(key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === key
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-500 mr-2">Active filters:</span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 bg-black text-white text-xs px-3 py-1 rounded-full">
                {t.categories[selectedCategory]}
                <button
                  onClick={() => onCategoryChange("all")}
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center gap-1 bg-gray-600 text-white text-xs px-3 py-1 rounded-full">
                "{searchTerm}"
                <button
                  onClick={() => onSearchChange("")}
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}