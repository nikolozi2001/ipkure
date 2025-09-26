import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import manImg from "../../assets/images/man-perfume.webp";
import menPerfume1 from "../../assets/images/men1.jpg";
import menPerfume2 from "../../assets/images/men2.avif";
import menPerfume3 from "../../assets/images/men3.avif";
import menPerfume4 from "../../assets/images/men4.png";

export default function MenSection() {
  const { language } = useLanguage();

  const menTranslations = {
    en: {
      forMen: "FOR MEN",
      brandName: "PLATINUM ÉGOÏSTE",
      description:
        "A scent for the outgoing extrovert who isn’t scared to stand out is PLATINUM ÉGOÏSTE. The energetic fougère–green accord’s crisp and fragrant notes symbolise the man’s strength and dominating presence.",
      viewMore: "View More",
      exclusive: "Exclusive",
      altTexts: {
        manPerfume: "Man Perfume",
        perfume: "Perfume",
      },
    },
    ge: {
      forMen: "მამაკაცებისთვის",
      brandName: "პლატინუმ ეგოისტე",
      description:
        "სურნელი გარე ექსტრავერტისთვის, რომელიც არ ეშინია გამორჩევის, არის PLATINUM ÉGOÏSTE. ენერგიული ფუჟერ-მწვანე აკორდის მკვეთრი და სურნელოვანი ნოტები სიმბოლურად გამოხატავს კაცის ძლიერებასა და დომინანტურობას.",
      viewMore: "მეტის ნახვა",
      exclusive: "ექსკლუზივი",
      altTexts: {
        manPerfume: "კაცის პარფიუმი",
        perfume: "პარფიუმი",
      },
    },
  };

  const t = menTranslations[language];

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:items-stretch">
        {/* Left: Content */}
        <div className="flex flex-col justify-start px-4 sm:px-6 lg:px-8 order-2 lg:order-none">
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
            {/* Product 1 - With Exclusive Tag */}
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
                  src={menPerfume1}
                  alt={t.altTexts.perfume}
                  className="w-full h-auto object-contain"
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

            {/* Product 2 - With View More Overlay */}
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
                  src={menPerfume2}
                  alt={t.altTexts.perfume}
                  className="w-full h-auto object-contain"
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
                  src={menPerfume3}
                  alt={t.altTexts.perfume}
                  className="w-full h-auto object-contain"
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
                  src={menPerfume4}
                  alt={t.altTexts.perfume}
                  className="w-full h-auto object-contain"
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

        {/* Right: Image with title */}
        <div className="order-1 lg:order-none flex flex-col">
          {/* Title Badge - Above the image */}
          <div
            className="font-medium px-3 py-2 sm:px-6 sm:py-3 mb-4 inline-block"
            style={{
              color: "var(--text-dark)",
              fontFamily:
                language === "ge"
                  ? "var(--font-header-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            <span
              className="text-lg sm:text-xl lg:text-3xl font-light tracking-widest uppercase"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-header-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.forMen}
            </span>
          </div>

          {/* Image container */}
          <div
            className="relative flex-1 min-h-64 sm:min-h-80 lg:min-h-96"
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            <img
              src={manImg}
              alt={t.altTexts.manPerfume}
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
