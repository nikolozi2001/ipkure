import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import womanImg from "../../assets/images/woman-perfume.jpg";
import perfume1 from "../../assets/images/perfume1.webp";
import perfume2 from "../../assets/images/perfume2.jpg";
import perfume3 from "../../assets/images/perfume3.avif";
import perfume4 from "../../assets/images/perfume2.jpg";

export default function WomenSection() {
  const { language } = useLanguage();

  // Translations for WomenSection
  const womenTranslations = {
    en: {
      forWomen: "FOR WOMEN",
      brandName: "GABRIELLE CHANEL",
      description:
        "A silky Grasse tuberose at its best is caught in a rich, enveloping heart of powerful jasmine that shimmers with ylang-juicy ylang's green notes. Fresh and sparkling orange blossom also makes an appearance.",
      shopNow: "Shop Now",
      viewMore: "View More",
      exclusive: "Exclusive",
      altTexts: {
        womanPerfume: "Woman Perfume",
        perfume: "Perfume",
      },
    },
    ge: {
      forWomen: "ქალებისთვის",
      brandName: "გაბრიელ შანელი",
      description:
        "მდიდარი, გრასის ტუბეროზა თავის საუკეთესო ფორმაში ტყუპდება ძლიერი იასამნის მდიდარ, გარემომცველ გულში, რომელიც ბრწყინავს ილანგ-ყვითელი ილანგის მწვანე ნოტებით. ახალი და ბრჭყვიალა ნარინჯისფერი ყვავილიც ასევე ჩნდება.",
      shopNow: "ყიდვა",
      viewMore: "მეტის ნახვა",
      exclusive: "ექსკლუზივი",
      altTexts: {
        womanPerfume: "ქალის პარფიუმი",
        perfume: "პარფიუმი",
      },
    },
  };

  const t = womenTranslations[language];

  return (
    <section
      className="w-full py-12 lg:py-16"
      style={{ backgroundColor: "var(--background-light)" }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
        {/* Left: Image with title */}
        <div className="relative h-64 sm:h-80 lg:h-full order-1 lg:order-none">
          <img
            src={womanImg}
            alt={t.altTexts.womanPerfume}
            className="w-full h-full object-cover shadow-lg rounded-lg lg:rounded-none"
          />
          {/* Title Badge */}
          <div
            className="absolute top-4 left-4 lg:top-6 lg:left-6 text-white font-medium shadow-md px-3 py-2 sm:px-6 sm:py-3 rounded-md"
            style={{
              backgroundColor: "var(--golden-brown)",
              fontFamily:
                language === "ge"
                  ? "var(--font-header-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            <span className="text-lg sm:text-xl lg:text-3xl font-light tracking-widest uppercase">
              {t.forWomen}
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center h-full px-4 sm:px-6 lg:px-0 order-2 lg:order-none">
          <div className="mb-4 sm:mb-6">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide mb-4"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-header-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.brandName}
            </h3>
            <p
              className="text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-full sm:max-w-lg text-sm sm:text-base"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-primary-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.description}
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
            {/* Product 1 - With View More Overlay */}
            <div
              className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 aspect-square flex flex-col relative group"
              style={{
                borderColor: "var(--golden-brown)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume1}
                  alt={t.altTexts.perfume}
                  className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 object-contain"
                />
              </div>
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

            {/* Product 2 - With Exclusive Tag */}
            <div
              className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 aspect-square flex flex-col relative group"
              style={{
                borderColor: "var(--golden-brown)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume2}
                  alt={t.altTexts.perfume}
                  className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 object-contain"
                />
              </div>
              {/* Exclusive Tag */}
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

            {/* Product 3 */}
            <div
              className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 aspect-square flex flex-col relative group"
              style={{
                borderColor: "var(--golden-brown)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume3}
                  alt={t.altTexts.perfume}
                  className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 object-contain"
                />
              </div>
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

            {/* Product 4 */}
            <div
              className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 aspect-square flex flex-col relative group"
              style={{
                borderColor: "var(--golden-brown)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume4}
                  alt={t.altTexts.perfume}
                  className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 object-contain"
                />
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
