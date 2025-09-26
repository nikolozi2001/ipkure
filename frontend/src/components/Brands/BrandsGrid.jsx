import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import BrandImage from "./BrandImage";

export default function BrandsGrid({ brands, onBrandClick }) {
  const { language } = useLanguage();

  const gridTranslations = {
    en: {
      viewMore: "View More",
      exclusive: "Exclusive",
      altTexts: {
        brand: "Brand"
      }
    },
    ge: {
      viewMore: "მეტის ნახვა",
      exclusive: "ექსკლუზივი",
      altTexts: {
        brand: "ბრენდი"
      }
    }
  };

  const t = gridTranslations[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-4 sm:gap-6">
        {brands.slice(0, 6).map((brand, index) => (
        <div 
          key={brand.id} 
          className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 aspect-square flex flex-col relative group cursor-pointer"
          style={{
            borderColor: "var(--golden-brown)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          onClick={() => onBrandClick && onBrandClick(brand)}
        >
          <div className="flex-1">
            <BrandImage 
              brand={brand}
              className="w-full h-full"
            />
          </div>
          
          {/* Exclusive Tag - Show on first brand or featured brands */}
          {(index === 0 || brand.featured) && (
            <span
              className="absolute top-2 right-2 text-xs uppercase px-2 py-1 rounded font-medium"
              style={{
                backgroundColor: "var(--golden-brown)",
                color: "white",
                fontFamily:
                  language === "ge"
                    ? "var(--font-primary-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.exclusive}
            </span>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-wide rounded transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "var(--golden-brown)",
                color: "white",
                fontFamily:
                  language === "ge"
                    ? "var(--font-primary-ge)"
                    : "var(--font-primary-en)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "var(--accent-color)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "var(--golden-brown)";
              }}
            >
              {t.viewMore}
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}