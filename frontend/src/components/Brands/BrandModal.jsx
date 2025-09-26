import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import BrandImage from "./BrandImage";

export default function BrandModal({ brand, isOpen, onClose }) {
  const { language } = useLanguage();

  const modalTranslations = {
    en: {
      heritage: "Heritage Since",
      foundedBy: "Founded By",
      country: "Country",
      bestsellers: "Bestsellers",
      newArrivals: "New Arrivals",
      explore: "Explore Collection",
      shopNow: "Shop Now",
      close: "Close",
      about: "About",
      collection: "Collection Highlights"
    },
    ge: {
      heritage: "მემკვიდრეობა",
      foundedBy: "დაფუძნებულია",
      country: "ქვეყანა",
      bestsellers: "ბესტსელერები",
      newArrivals: "ახალი კოლექცია",
      explore: "კოლექციის დათვალიერება",
      shopNow: "ყიდვა",
      close: "დახურვა",
      about: "შესახებ",
      collection: "კოლექციის ძირითადი ნაწერები"
    }
  };

  const t = modalTranslations[language];

  if (!isOpen || !brand) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div className="relative bg-white rounded-t-2xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all touch-manipulation active:scale-95"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Hero Section */}
          <div className="relative">
            <div className="aspect-[4/3] sm:aspect-[21/9] overflow-hidden relative">
              <BrandImage 
                brand={brand}
                className="modal-context"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            {/* Brand Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2">{brand.name}</h1>
                  <p className="text-sm sm:text-lg text-white/90 mb-4 max-w-2xl line-clamp-2 sm:line-clamp-none">{brand.description}</p>
                  <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <span className="text-white/70 block">{t.heritage}</span>
                      <span className="font-semibold">{brand.heritage}</span>
                    </div>
                    <div>
                      <span className="text-white/70 block">{t.country}</span>
                      <span className="font-semibold">{brand.country}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-white/70 block">{t.foundedBy}</span>
                      <span className="font-semibold">{brand.foundedBy}</span>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full self-start sm:self-auto">
                  <span className="text-xs sm:text-sm font-medium capitalize">{brand.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-6">
                <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{brand.bestsellers}</div>
                <div className="text-xs sm:text-sm text-gray-500">{t.bestsellers}</div>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-6">
                <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{brand.newArrivals}</div>
                <div className="text-xs sm:text-sm text-gray-500">{t.newArrivals}</div>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-6">
                <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{brand.heritage}</div>
                <div className="text-xs sm:text-sm text-gray-500">{t.heritage}</div>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-6">
                <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{brand.category}</div>
                <div className="text-xs sm:text-sm text-gray-500">Category</div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{t.about} {brand.name}</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {brand.description} {/* Extended description would go here */}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-safe">
              <button className="flex-1 bg-black text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-medium hover:bg-gray-800 active:bg-gray-900 transition-colors touch-manipulation">
                {t.explore}
              </button>
              <button className="flex-1 border-2 border-gray-300 text-gray-900 py-3 sm:py-4 px-6 sm:px-8 rounded-full font-medium hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation">
                {t.shopNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}