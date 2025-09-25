import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import BrandImage from "./BrandImage";

export default function FeaturedBrand({ brand }) {
  const { language } = useLanguage();

  const featuredTranslations = {
    en: {
      title: "Featured Brand",
      heritage: "Heritage Since",
      explore: "Explore Collection",
      shopNow: "Shop Now",
      bestsellers: "Bestsellers",
      newArrivals: "New Arrivals",
      exclusiveTag: "Exclusive",
      viewCollection: "View Full Collection"
    },
    ge: {
      title: "გამორჩეული ბრენდი",
      heritage: "მემკვიდრეობა",
      explore: "კოლექციის დათვალიერება",
      shopNow: "ყიდვა",
      bestsellers: "ბესტსელერები",
      newArrivals: "ახალი კოლექცია",
      exclusiveTag: "ექსკლუზივი",
      viewCollection: "სრული კოლექციის ნახვა"
    }
  };

  const t = featuredTranslations[language];

  if (!brand) return null;

  return (
    <section className="w-full py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {t.title}
            </div>
            
            {/* Brand Name */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {brand.name}
            </h2>
            
            {/* Heritage */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-white/70 uppercase tracking-wider">{t.heritage}</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/50"></div>
                <span className="text-2xl font-bold text-white">{brand.heritage}</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
              {brand.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">{brand.bestsellers}</div>
                <div className="text-sm text-white/70">{t.bestsellers}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">{brand.newArrivals}</div>
                <div className="text-sm text-white/70">{t.newArrivals}</div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                {t.explore}
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                {t.viewCollection}
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <BrandImage 
                  brand={brand}
                  aspectRatio="1/1"
                  className=""
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                {t.exclusiveTag}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}