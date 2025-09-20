import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { Instagram, Heart, MessageCircle, Send } from "lucide-react";

// Import perfume images
import perfume2 from "../../assets/images/perfume2.jpg";
import womanPerfume from "../../assets/images/woman-perfume.jpg";
import manPerfume from "../../assets/images/man-perfume.jpg";
import giftSet from "../../assets/images/giftset-box.jpg";
import men1 from "../../assets/images/men1.jpg";
import women1 from "../../assets/images/women1.png";

const FollowUsSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      followUs: "FOLLOW US ON",
      instagramHandle: "ipkure@112",
      subtitle: "Discover our latest collections & behind-the-scenes moments",
      viewProfile: "View Profile",
      followButton: "Follow Us",
      altTexts: {
        perfume1: "Luxury Perfume Collection",
        perfume2: "Premium Fragrance",
        perfume3: "Designer Perfume",
        womanPerfume: "Women's Perfume",
        manPerfume: "Men's Perfume",
        giftSet: "Gift Set Collection",
      },
    },
    ge: {
      followUs: "გამოგვყევით ჩვენ",
      instagramHandle: "ipkure@112",
      subtitle:
        "აღმოაჩინეთ ჩვენი უახლესი კოლექციები და კულისებს მიღმა მომენტები",
      viewProfile: "პროფილის ნახვა",
      followButton: "გამოგვყევით",
      altTexts: {
        perfume1: "ლუქს პარფიუმის კოლექცია",
        perfume2: "პრემიუმ არომატი",
        perfume3: "დიზაინერული პარფიუმი",
        womanPerfume: "ქალის პარფიუმი",
        manPerfume: "კაცის პარფიუმი",
        giftSet: "საჩუქრების კოლექცია",
      },
    },
  };

  const t = translations[language];

  const productImages = [
    { src: giftSet, alt: t.altTexts.giftSet, likes: "2.1k", comments: "89" },
    {
      src: womanPerfume,
      alt: t.altTexts.womanPerfume,
      likes: "1.8k",
      comments: "56",
    },
    {
      src: manPerfume,
      alt: t.altTexts.manPerfume,
      likes: "3.2k",
      comments: "124",
    },
    { src: men1, alt: t.altTexts.perfume1, likes: "1.5k", comments: "43" },
    { src: perfume2, alt: t.altTexts.perfume2, likes: "2.7k", comments: "78" },
    { src: women1, alt: t.altTexts.perfume3, likes: "1.9k", comments: "67" },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 uppercase tracking-[0.3em] mb-4"
            style={{
              fontFamily:
                language === "ge"
                  ? "var(--font-header-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            {t.followUs}
          </h2>

          {/* Instagram Profile Card */}
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="text-left">
                <h3
                  className="text-2xl font-bold text-gray-800"
                  style={{
                    fontFamily:
                      language === "ge"
                        ? "var(--font-header-ge)"
                        : "var(--font-primary-en)",
                  }}
                >
                  <span className="text-purple-600">ipkure</span>
                  <span className="text-gray-400">@</span>
                  <span className="text-orange-500">112</span>
                </h3>
                <p className="text-gray-500 text-sm">15.2k followers</p>
              </div>
            </div>

            <p
              className="text-gray-600 text-center mb-6 leading-relaxed"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-primary-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.subtitle}
            </p>

            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/ipkure@112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-full font-medium text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                {t.followButton}
              </a>
              <a
                href="https://www.instagram.com/ipkure@112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-medium text-center hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
              >
                {t.viewProfile}
              </a>
            </div>
          </div>
        </div>

        {/* Product Grid with Instagram-style posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onLoad={() => {
                    console.log("Image loaded successfully:", image.src);
                  }}
                  onError={(e) => {
                    console.log("Image failed to load:", image.src);
                    e.target.style.backgroundColor = "#f3f4f6";
                    e.target.style.color = "#6b7280";
                    e.target.style.display = "flex";
                    e.target.style.alignItems = "center";
                    e.target.style.justifyContent = "center";
                    e.target.style.fontSize = "14px";
                    e.target.innerHTML = "Loading...";
                  }}
                />

                {/* Hover overlay with Instagram actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-6 text-white">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-6 h-6" />
                      <span className="font-medium">{image.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-medium">{image.comments}</span>
                    </div>
                    <Send className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Post info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageCircle className="w-5 h-5 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer" />
                    <Send className="w-5 h-5 text-gray-400 hover:text-purple-500 transition-colors cursor-pointer" />
                  </div>
                  <Instagram className="w-5 h-5 text-purple-600" />
                </div>

                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-800">
                    {image.likes} likes
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p
            className="text-lg text-gray-600 mb-6"
            style={{
              fontFamily:
                language === "ge"
                  ? "var(--font-primary-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            {language === "en"
              ? "Join our community of fragrance lovers"
              : "შემოუერთდით ჩვენს არომატების მოყვარულთა საზოგადოებას"}
          </p>
          <a
            href="https://www.instagram.com/ipkure@112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-6 h-6" />
            <span>{t.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
