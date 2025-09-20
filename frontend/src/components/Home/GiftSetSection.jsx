import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { ArrowRight } from "lucide-react";
import giftBox from "../../assets/images/bottle.png";
import miniGiftSet from "../../assets/images/perfume1.webp";

export default function GiftSetSection() {
  const { language } = useLanguage();

  const giftTranslations = {
    en: {
      limitedEdition: "LIMITED EDITION",
      giftSet: "GIFT SET",
      description:
        "A FRAGRANCE COFFRET, also known as a perfume gift set, is the perfect way to introduce someone to a new signature scent.",
      discoverNow: "Discover Now",
      altTexts: {
        giftBox: "Luxury Gift Box",
        miniGiftSet: "Mini Gift Set Preview",
      },
    },
    ge: {
      limitedEdition: "შეზღუდული გამოცემა",
      giftSet: "საჩუქრების ნაკრები",
      description:
        "არომატული კოფრეტი, რომელიც ასევე ცნობილია როგორც პარფიუმის საჩუქრების ნაკრები, შესანიშნავი გზაა რომ ვინმეს გააცნოთ ახალი ხელმოწერის არომატი.",
      discoverNow: "აღმოაჩინე ახლავე",
      altTexts: {
        giftBox: "ლუქს საჩუქრების ყუთი",
        miniGiftSet: "მინი საჩუქრების ნაკრების გადახედვა",
      },
    },
  };

  const t = giftTranslations[language];

  return (
    <section className="bg-[#fdfaf7] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[500px]">
      {/* Decorative Golden Ribbons */}
      <div className="absolute top-8 left-8 w-16 h-16 text-[#c69a5d] opacity-30 text-4xl transform rotate-12">
        🎀
      </div>
      <div className="absolute bottom-8 right-8 w-16 h-16 text-[#c69a5d] opacity-30 text-4xl transform -rotate-12">
        🎀
      </div>

      {/* Subtle Floral Decoration */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#8B4513] opacity-20 text-6xl hidden lg:block">
        🌸
      </div>

      {/* Left Side - Product Showcase */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Limited Edition Label */}
        <div className="mb-8">
          <p
            className="text-gray-500 uppercase tracking-[0.3em] text-sm font-medium"
            style={{
              fontFamily:
                language === "ge"
                  ? "var(--font-primary-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            {t.limitedEdition}
          </p>
        </div>

        {/* Gift Box Container */}
        <div className="relative">
          {/* Gift Box with slight tilt */}
          <div className="transform rotate-3 bg-white rounded-lg shadow-2xl p-8 border border-gray-200">
            <div className="bg-gradient-to-br from-[#8B1538] to-[#CD5C5C] rounded-md p-6 relative">
              {/* Perfume Bottles */}
              <div className="flex justify-center items-center space-x-4">
                <img
                  src={giftBox}
                  alt={t.altTexts.giftBox}
                  className="w-20 h-32 object-contain"
                />
                <img
                  src={miniGiftSet}
                  alt={t.altTexts.giftBox}
                  className="w-20 h-32 object-contain"
                />
              </div>
              {/* Luxury fabric texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Promotional Content */}
      <div className="flex-1 mt-10 md:mt-0 md:pl-12 text-center md:text-left max-w-lg">
        {/* Main Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide"
          style={{
            fontFamily:
              language === "ge"
                ? "var(--font-header-ge)"
                : "var(--font-primary-en)",
          }}
        >
          {t.giftSet}
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 leading-relaxed mb-8 text-base"
          style={{
            fontFamily:
              language === "ge"
                ? "var(--font-primary-ge)"
                : "var(--font-primary-en)",
          }}
        >
          {t.description}
        </p>

        {/* Mini Preview and CTA Section */}
        <div className="flex items-center justify-center md:justify-start space-x-6">
          {/* Mini Gift Set Preview */}
          <div className="bg-black rounded-lg p-3 shadow-lg">
            <div className="bg-[#FFD700] w-16 h-16 rounded flex items-center justify-center">
              <img
                src={miniGiftSet}
                alt={t.altTexts.miniGiftSet}
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Discover Now Button */}
          <button className="group flex items-center space-x-3 bg-[#c69a5d] hover:bg-[#b8925a] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            <span
              className="font-medium text-sm uppercase tracking-wide"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-primary-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.discoverNow}
            </span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-[#c69a5d] group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
