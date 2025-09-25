import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import BrandImage from "./BrandImage";

export default function BrandsGrid({ brands, onBrandClick }) {
  const { language } = useLanguage();

  const gridTranslations = {
    en: {
      heritage: "Heritage Since",
      bestsellers: "Bestsellers",
      newArrivals: "New Arrivals",
      explore: "Explore",
      fragrances: "Fragrances"
    },
    ge: {
      heritage: "მემკვიდრეობა",
      bestsellers: "ბესტსელერები", 
      newArrivals: "ახალი კოლექცია",
      explore: "დათვალიერება",
      fragrances: "სუნამოები"
    }
  };

  const t = gridTranslations[language];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {brands.map((brand) => (
        <div 
          key={brand.id} 
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
          onClick={() => onBrandClick && onBrandClick(brand)}
        >
          {/* Brand Image */}
          <div className="relative">
            <BrandImage 
              brand={brand}
              className="group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
            />
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                {brand.category.charAt(0).toUpperCase() + brand.category.slice(1)}
              </span>
            </div>
            {/* Featured Badge */}
            {brand.featured && (
              <div className="absolute top-3 right-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Featured
                </div>
              </div>
            )}
          </div>
          
          {/* Brand Info */}
          <div className="p-6">
            {/* Brand Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{brand.name}</h3>
                <span className="text-xs text-gray-500">
                  {t.heritage} {brand.heritage}
                </span>
              </div>
              {brand.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
                  ★ Featured
                </div>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
              {brand.description}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center bg-gray-50 rounded-lg py-2">
                <div className="text-lg font-bold text-gray-900">{brand.bestsellers}</div>
                <div className="text-xs text-gray-500">{t.bestsellers}</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg py-2">
                <div className="text-lg font-bold text-gray-900">{brand.newArrivals}</div>
                <div className="text-xs text-gray-500">{t.newArrivals}</div>
              </div>
            </div>
            
            {/* Explore Button */}
            <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors group-hover:bg-gray-800">
              {t.explore}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}