import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const translations = {
    en: {
      brandName: "IPKURE",
      description:
        "The most popular perfumes are a blend of timeless scents and those that have recently won our hearts, ranging from summer in a bottle to intensely sensual notes of love.",
      followUs: "Follow Us",
      quickLinks: "Quick Links",
      help: "Help",
      socialMedia: {
        facebook: "Facebook",
        instagram: "Instagram",
        twitter: "Twitter",
      },
      links: {
        home: "Home",
        shop: "Shop",
        brand: "Brand",
        aboutUs: "About Us",
      },
      helpLinks: {
        payments: "Payments",
        cancellation: "Cancellation & Return",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        faqs: "FAQs",
      },
      copyright: `© ${currentYear} Copyright Ipkure | All Rights Reserved.`,
    },
    ge: {
      brandName: "იპკურე",
      description:
        "ყველაზე პოპულარული პარფიუმები არის უდროო არომატების და ახლახან ჩვენს გულებს მოპოვებული სურნელების ნაზავი, დაწყებული ზაფხულისგან ბოთლში ძლიერ სენსუალურ სიყვარულის ნოტებამდე.",
      followUs: "გამოგვყევით ჩვენ",
      quickLinks: "სწრაფი ბმულები",
      help: "დახმარება",
      socialMedia: {
        facebook: "ფეისბუქი",
        instagram: "ინსტაგრამი",
        twitter: "ტვიტერი",
      },
      links: {
        home: "მთავარი",
        shop: "მაღაზია",
        brand: "ბრენდი",
        aboutUs: "ჩვენ შესახებ",
      },
      helpLinks: {
        payments: "გადახდები",
        cancellation: "გაუქმება და დაბრუნება",
        terms: "წესები და პირობები",
        privacy: "კონფიდენციალურობის პოლიტიკა",
        faqs: "ხშირად დასმული კითხვები",
      },
      copyright: `© ${currentYear} საავტორო უფლება იპკიურე | ყველა უფლება დაცულია.`,
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-4 sm:w-4 sm:h-6 bg-gray-900 rounded-sm relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full -translate-y-1"></div>
                </div>
              </div>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-wider"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-header-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.brandName}
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-gray-300 leading-relaxed text-xs sm:text-sm"
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

          {/* Follow Us Section */}
          <div>
            <h3
              className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-header-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.followUs}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    fontFamily:
                      language === "ge"
                        ? "var(--font-primary-ge)"
                        : "var(--font-primary-en)",
                  }}
                >
                  {t.socialMedia.facebook}
                </span>
              </a>

              <a
                href="https://instagram.com/ipkure@112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300 group"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    fontFamily:
                      language === "ge"
                        ? "var(--font-primary-ge)"
                        : "var(--font-primary-en)",
                  }}
                >
                  {t.socialMedia.instagram}
                </span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-blue-300 transition-colors duration-300 group"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300">
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    fontFamily:
                      language === "ge"
                        ? "var(--font-primary-ge)"
                        : "var(--font-primary-en)",
                  }}
                >
                  {t.socialMedia.twitter}
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3
              className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-header-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.quickLinks}
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="/"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.links.home}
              </a>
              <a
                href="/shop"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.links.shop}
              </a>
              <a
                href="/brand"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.links.brand}
              </a>
              <a
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.links.aboutUs}
              </a>
            </div>
          </div>

          {/* Help Section */}
          <div>
            <h3
              className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
              style={{
                fontFamily:
                  language === "ge"
                    ? "var(--font-header-ge)"
                    : "var(--font-primary-en)",
              }}
            >
              {t.help}
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="/payments"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.helpLinks.payments}
              </a>
              <a
                href="/cancellation"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.helpLinks.cancellation}
              </a>
              <a
                href="/terms"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.helpLinks.terms}
              </a>
              <a
                href="/privacy"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.helpLinks.privacy}
              </a>
              <a
                href="/faqs"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                style={{
                  fontFamily:
                    language === "ge"
                      ? "var(--font-primary-ge)"
                      : "var(--font-primary-en)",
                }}
              >
                {t.helpLinks.faqs}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p
            className="text-gray-400 text-xs sm:text-sm"
            style={{
              fontFamily:
                language === "ge"
                  ? "var(--font-primary-ge)"
                  : "var(--font-primary-en)",
            }}
          >
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
