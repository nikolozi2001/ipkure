// src/pages/HomePage.jsx
import { useLanguage } from "../hooks/useLanguage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import perfume1 from "../assets/images/perfume1.webp"; // replace with your image
import perfume2 from "../assets/images/women4.png"; // replace with your image
import perfume3 from "../assets/images/women3.png"; // replace with your image
import bottle from "../assets/images/bottle.png"; // round bottle image
import WomenSection from "../components/Home/WomenSection";
import MenSection from "../components/Home/MenSection";
import GiftSets from "../components/Home/GiftSetSection";

export default function HomePage() {
  const { language } = useLanguage();

  // Set dynamic title for homepage
  useDocumentTitle("home");

  // Homepage translations
  const homeTranslations = {
    en: {
      badge: {
        discount: "25% Off",
        text: "On New Arrivals",
      },
      hero: {
        title: "FRAGRANCE",
        subtitle: "EXCLUSIVES",
      },
      description:
        "The most popular perfumes are a blend of timeless scents and those that have recently won our hearts, ranging from summer in a bottle to intensely sensual notes of love.",
      shopNow: "Shop Now",
      altTexts: {
        perfumeBanner: "Perfume Banner",
        cocoBottle: "Coco Bottle",
        tomFord: "Tom Ford",
        cocoChanel: "Coco Chanel",
      },
    },
    ge: {
      badge: {
        discount: "25% ფასდაკლება",
        text: "ახალ კოლექციაზე",
      },
      hero: {
        title: "სუნამოების",
        subtitle: "ექსკლუზივები",
      },
      description:
        "ყველაზე პოპულარული პარფიუმები არის უდროო სუნებისა და მათთვის, ვინც ახლახან მოიპოვა ჩვენი გულები, ზაფხულიდან ბოთლში ინტენსიური სენსუალურ სიყვარულის ნოტებამდე.",
      shopNow: "ყიდვა",
      altTexts: {
        perfumeBanner: "პარფიუმის ბანერი",
        cocoBottle: "კოკოს ბოთლი",
        tomFord: "ტომ ფორდი",
        cocoChanel: "კოკო შანელი",
      },
    },
  };

  const t = homeTranslations[language];
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "var(--background-light)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-[calc(100vh-120px)]">
        {/* LEFT SIDE IMAGE */}
        <div className="relative h-64 sm:h-80 lg:h-full order-1 lg:order-none">
          <img
            src={perfume1}
            alt={t.altTexts.perfumeBanner}
            className="w-full h-full object-cover shadow-lg"
          />
          {/* Badge */}
          <div
            className="absolute bottom-0 right-0 text-white font-medium shadow-md px-3 py-2 sm:px-6 sm:py-3"
            style={{
              backgroundColor: "var(--golden-brown)",
              fontFamily:
                language === "ge"
                  ? "var(--font-header-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            <span className="font-bold text-base sm:text-xl">
              {t.badge.discount}
            </span>
            <br />
            <span className="uppercase text-xs sm:text-lg tracking-wide">
              {t.badge.text}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col justify-center h-full px-4 sm:px-6 lg:px-0 order-2 lg:order-none">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-4 lg:mr-8">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-header-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {/* First line - Title */}
                <div className="w-full">
                  <span className="block sm:inline-block">{t.hero.title}</span>
                </div>
                {/* Second line - Subtitle */}
                <div className="w-full text-center sm:text-right">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-light block sm:inline-block">
                    {t.hero.subtitle}
                  </span>
                </div>
              </div>
            </div>
            <img
              src={bottle}
              alt={t.altTexts.cocoBottle}
              className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-contain shadow-md flex-shrink-0"
              style={{
                backgroundColor: "var(--bottle-bg)",
                padding: "8px sm:10px",
              }}
            />
          </div>

          <p
            className="text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-full sm:max-w-lg text-center mx-auto text-sm sm:text-base"
            style={{
              fontFamily:
                language === "ge"
                  ? "var(--font-primary-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            {t.description}
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg sm:max-w-xl mx-auto">
            {/* Product 1 */}
            <div
              className="p-4 sm:p-6 text-center hover:shadow-lg transition aspect-square flex flex-col relative"
              style={{
                borderColor: "var(--golden-brown)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume2}
                  alt={t.altTexts.tomFord}
                  className="w-full h-auto object-contain"
                />
              </div>
              <button
                className="absolute bottom-0 left-0 right-0 text-sm font-medium uppercase tracking-wide flex items-center justify-center gap-1 py-3 cursor-pointer"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                  backgroundColor: "var(--golden-brown)",
                  color: "white",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--accent-color)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--golden-brown)";
                }}
              >
                {t.shopNow} <span>↗</span>
              </button>
            </div>

            {/* Product 2 */}
            <div
              className="p-4 sm:p-6 text-center hover:shadow-lg transition aspect-square flex flex-col relative"
              style={{
                borderColor: "var(--golden-brown)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume3}
                  alt={t.altTexts.cocoChanel}
                  className="w-full h-auto object-contain"
                />
              </div>
              <button
                className="absolute bottom-0 left-0 right-0 text-sm font-medium uppercase tracking-wide flex items-center justify-center gap-1 py-3 cursor-pointer"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                  backgroundColor: "var(--golden-brown)",
                  color: "white",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--accent-color)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--golden-brown)";
                }}
              >
                {t.shopNow} <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* WOMEN SECTION */}
      <WomenSection />
      <MenSection />
      <GiftSets />
    </div>
  );
}
