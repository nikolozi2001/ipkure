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
        text: "On New Arrivals"
      },
      hero: {
        title: "FRAGRANCE",
        subtitle: "EXCLUSIVES"
      },
      description: "The most popular perfumes are a blend of timeless scents and those that have recently won our hearts, ranging from summer in a bottle to intensely sensual notes of love.",
      shopNow: "Shop Now",
      altTexts: {
        perfumeBanner: "Perfume Banner",
        cocoBottle: "Coco Bottle",
        tomFord: "Tom Ford",
        cocoChanel: "Coco Chanel"
      }
    },
    ge: {
      badge: {
        discount: "25% ფასდაკლება",
        text: "ახალ კოლექციაზე"
      },
      hero: {
        title: "სუნამოების",
        subtitle: "ექსკლუზივები"
      },
      description: "ყველაზე პოპულარული პარფიუმები არის უდროო სუნებისა და მათთვის, ვინც ახლახან მოიპოვა ჩვენი გულები, ზაფხულიდან ბოთლში ინტენსიური სენსუალურ სიყვარულის ნოტებამდე.",
      shopNow: "ყიდვა",
      altTexts: {
        perfumeBanner: "პარფიუმის ბანერი",
        cocoBottle: "კოკოს ბოთლი",
        tomFord: "ტომ ფორდი",
        cocoChanel: "კოკო შანელი"
      }
    }
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
              fontFamily: language === 'ge' ? "var(--font-header-ge)" : "var(--font-primary-en)"
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
          <div className="flex items-center justify-between mb-6">
            <h2 
              className="text-5xl font-bold tracking-wide"
              style={{ fontFamily: language === 'ge' ? "var(--font-header-ge)" : "var(--font-primary-en)" }}
            >
              {t.hero.title}
              <br />
              <span className="text-3xl font-light">{t.hero.subtitle}</span>
            </h2>
            <img
              src={bottle}
              alt={t.altTexts.cocoBottle}
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
          </div>

          <p 
            className="text-gray-600 leading-relaxed mb-8 max-w-lg"
            style={{ fontFamily: language === 'ge' ? "var(--font-primary-ge)" : "var(--font-primary-en)" }}
          >
            {t.description}
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Product 1 */}
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
              <img
                src={perfume2}
                alt={t.altTexts.tomFord}
                className="w-24 h-36 object-contain mx-auto mb-4"
              />
              <button 
                className="text-sm font-medium uppercase tracking-wide text-gray-800 hover:underline flex items-center justify-center gap-1"
                style={{ fontFamily: language === 'ge' ? "var(--font-primary-ge)" : "var(--font-primary-en)" }}
              >
                {t.shopNow} <span>↗</span>
              </button>
            </div>

            {/* Product 2 */}
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
              <img
                src={perfume3}
                alt={t.altTexts.cocoChanel}
                className="w-24 h-36 object-contain mx-auto mb-4"
              />
              <button 
                className="text-sm font-medium uppercase tracking-wide text-gray-800 hover:underline flex items-center justify-center gap-1"
                style={{ fontFamily: language === 'ge' ? "var(--font-primary-ge)" : "var(--font-primary-en)" }}
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
