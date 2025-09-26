import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import BrandImage from "./BrandImage";

export default function BrandsGrid({ brands, onBrandClick }) {
  const { language } = useLanguage();

  const gridTranslations = {
    en: {
      detail: "Detail",
      altTexts: {
        brand: "Brand",
      },
    },
    ge: {
      detail: "დეტალურად",
      altTexts: {
        brand: "ბრენდი",
      },
    },
  };

  const t = gridTranslations[language];

  return (
    <div className="w-full">
      {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {brands.slice(0, 6).map((brand) => (
          <div key={brand.id} className="text-center flex flex-col">
            {/* Image container with hover effects - only affects the image */}
            <div
              className="hover:shadow-xl transition-all duration-300 aspect-square relative group cursor-pointer touch-manipulation"
              onClick={() => onBrandClick && onBrandClick(brand)}
            >
              <BrandImage brand={brand} className="w-full h-full" />

              {/* Overlay - Mobile friendly */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 z-0 pointer-events-none">
                <button
                  className="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium uppercase tracking-wide bg-white/20 backdrop-blur-md border-2 border-white text-white transition-all duration-200 touch-manipulation hover:bg-white/30 pointer-events-auto"
                  style={{
                    fontFamily:
                      language === "ge"
                        ? "var(--font-primary-ge)"
                        : "var(--font-primary-en)",
                  }}
                >
                  {t.detail}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
