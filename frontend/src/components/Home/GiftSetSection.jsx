import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { ArrowRight } from "lucide-react";
import giftsetBox from "../../assets/images/giftset-box.jpg";
import giftBoxSetImage from "../../assets/images/giftboxsetimage.webp";

export default function GiftSetSection() {
  const { language } = useLanguage();

  const giftTranslations = {
    en: {
      forGifts: "LIMITED EDITION",
      brandName: "GIFT SETS",
      description:
        "A fragrance coffret, also known as a perfume gift set, is the perfect way to introduce someone to a new signature scent. These carefully curated collections make exceptional gifts for any occasion.",
      discoverNow: "Discover Now",
      viewMore: "View More",
      exclusive: "Limited Edition",
      altTexts: {
        giftSet: "Gift Set Collection",
        giftBoxSet: "Gift Box Set",
        perfume: "Perfume",
      },
    },
    ge: {
      forGifts: "შეზღუდული გამოცემა",
      brandName: "საჩუქრების ნაკრებები",
      description:
        "არომატული კოფრეტი, რომელიც ასევე ცნობილია როგორც პარფიუმის საჩუქრების ნაკრები, შესანიშნავი გზაა რომ ვინმეს გააცნოთ ახალი ხელმოწერის არომატი. ეს ყურადღებით შერჩეული კოლექციები შესანიშნავ საჩუქარს წარმოადგენს ნებისმიერი შემთხვევისთვის.",
      discoverNow: "აღმოაჩინე ახლავე",
      viewMore: "მეტის ნახვა",
      exclusive: "შეზღუდული გამოცემა",
      altTexts: {
        giftSet: "საჩუქრების კოლექცია",
        giftBoxSet: "საჩუქრების ყუთის ნაკრები",
        perfume: "პარფიუმი",
      },
    },
  };

  const t = giftTranslations[language];

  return (
    <section
      className="w-full py-12 lg:py-16"
      style={{ backgroundColor: "var(--gift-set-bg)" }}
    >
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:items-stretch">
        {/* Left: Image with title */}
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
              {t.forGifts}
            </span>
          </div>

          {/* Image container */}
          <div
            className="relative flex-1 min-h-64 sm:min-h-80 lg:min-h-96"
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            <img
              src={giftsetBox}
              alt={t.altTexts.giftSet}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0 order-2 lg:order-none text-center">
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

          {/* Gift Box Set Image */}
          <div className="mb-6">
            <img
              src={giftBoxSetImage}
              alt={t.altTexts.giftBoxSet}
              className="max-w-xs w-full h-auto object-contain"
            />
          </div>

          {/* Discover Now Text */}
          <div className="mb-4">
            <span
              className="text-lg font-medium text-gray-800"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-primary-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.discoverNow}
            </span>
          </div>

          {/* Discover Icon */}
          <div>
            <div className="w-12 h-12 bg-[#c69a5d] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b8925a] transition-colors duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
