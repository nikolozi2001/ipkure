// src/pages/HomePage.jsx
import { useLanguage } from "../hooks/useLanguage";
import perfume1 from "../assets/images/perfume1.webp"; // replace with your image
import perfume2 from "../assets/images/perfume2.jpg"; // replace with your image
import perfume3 from "../assets/images/perfume3.avif"; // replace with your image
import bottle from "../assets/images/bottle.png"; // round bottle image

export default function HomePage() {
  const { language } = useLanguage();

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-120px)]">
        {/* LEFT SIDE IMAGE */}
        <div className="relative h-full">
          <img
            src={perfume1}
            alt={t.altTexts.perfumeBanner}
            className="w-full h-full object-cover shadow-lg"
          />
          {/* Badge */}
          <div
            className="absolute bottom-0 right-0 text-white font-medium shadow-md px-6 py-3"
            style={{
              backgroundColor: "var(--golden-brown)",
              fontFamily:
                language === "ge"
                  ? "var(--font-header-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            <span className="font-bold text-xl">{t.badge.discount}</span>
            <br />
            <span className="uppercase text-lg tracking-wide">
              {t.badge.text}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-8">
              <div
                className="text-5xl font-bold tracking-wide"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-header-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {/* First line - Title 70% left */}
                <div className="w-full text-left">
                  <span className="inline-block" style={{ width: "70%" }}>
                    {t.hero.title}
                  </span>
                </div>
                {/* Second line - Subtitle 30% right */}
                <div className="w-full flex justify-end">
                  <span
                    className="text-3xl font-light inline-block z-0"
                    style={{ width: "30%" }}
                  >
                    {t.hero.subtitle}
                  </span>
                </div>
              </div>
              <img
                src={bottle}
                alt={t.altTexts.cocoBottle}
                className="w-50 h-50 rounded-full object-contain shadow-md"
                style={{
                  backgroundColor: "var(--secondary-color)",
                }}
              />
            </div>
          </div>

          <p
            className="text-gray-600 leading-relaxed mb-8 max-w-lg text-center mx-auto"
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
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {/* Product 1 */}
            <div
              className="rounded-lg p-4 text-center hover:shadow-lg transition aspect-square flex flex-col relative"
              style={{
                borderColor: "var(--accent-color)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume2}
                  alt={t.altTexts.tomFord}
                  className="w-42 h-42 object-contain"
                />
              </div>
              <button
                className="absolute bottom-0 left-0 right-0 text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-1 py-2 cursor-pointer transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                  backgroundColor: "var(--accent-color)",
                  color: "white",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--golden-brown)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--accent-color)";
                }}
              >
                {t.shopNow} <span>↗</span>
              </button>
            </div>

            {/* Product 2 */}
            <div
              className="rounded-lg p-4 text-center hover:shadow-lg transition aspect-square flex flex-col relative"
              style={{
                borderColor: "var(--accent-color)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={perfume3}
                  alt={t.altTexts.cocoChanel}
                  className="w-42 h-42 object-contain"
                />
              </div>
              <button
                className="absolute bottom-0 left-0 right-0 text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-1 py-2 cursor-pointer transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                  backgroundColor: "var(--accent-color)",
                  color: "white",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--golden-brown)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--accent-color)";
                }}
              >
                {t.shopNow} <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
