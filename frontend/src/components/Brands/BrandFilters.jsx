// frontend/src/components/Brands/BrandFilters.jsx
import React from "react";
import { X, Filter } from "lucide-react"; // install lucide-react if not installed: npm i lucide-react
import { useLanguage } from "../../hooks/useLanguage";

export default function BrandFilters({
  selectedCategory,
  onCategoryChange,
  onClearFilters,
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
    },
    ge: {
      all: "ყველა",
      new: "ახალი",
      exclusive: "ექსკლუზიური",
      limited: "შეზღუდული გამოშვება",
      popular: "პოპულარული",
      filters: "ფილტრები",
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
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3 text-sm">
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
      </div>
    </section>
  );
}
