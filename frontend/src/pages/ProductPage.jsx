// src/pages/ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useBrands } from "../hooks/useBrands";

// Import brand images (same as BrandImage component)
import chance from "../assets/images/brand/chance.jpg";
import chanelChance from "../assets/images/brand/chanel-chance.jpg";
import cocoChanel from "../assets/images/brand/coco-chanel.jpg";
import daisy from "../assets/images/brand/daisy.jpg";
import dolceGabbana from "../assets/images/brand/dolce-gabbana.jpg";
import versaceEros from "../assets/images/brand/versace_eros.webp";

export default function ProductPage() {
  const { language } = useLanguage();
  const { brandSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { filterBrands } = useBrands();
  
  const [selectedSize, setSelectedSize] = useState("100 ml");
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set dynamic title
  useDocumentTitle(brand?.name || "Product");

  // Get brand image mapping
  const getBrandImage = (name) => {
    const imageMap = {
      "Chance": chance,
      "Chanel Chance": chanelChance,
      "Coco Chanel": cocoChanel,
      "Daisy": daisy,
      "Dolce & Gabbana": dolceGabbana,
      "Versace Eros": versaceEros,
    };
    return imageMap[name] || chance;
  };

  // Load brand data
  useEffect(() => {
    const loadBrandData = () => {
      // First try to get brand from navigation state
      if (location.state?.brand) {
        setBrand(location.state.brand);
        setLoading(false);
        return;
      }

      // Otherwise, find brand by slug from useBrands data
      const allBrands = filterBrands("", "all");
      const foundBrand = allBrands.find(b => {
        const slug = b.name.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[&]/g, 'and')
          .replace(/[^a-z0-9-]/g, '');
        return slug === brandSlug;
      });

      if (foundBrand) {
        setBrand(foundBrand);
      } else {
        // Redirect to brands page if product not found
        navigate(`/${language}/brand`);
      }
      setLoading(false);
    };

    loadBrandData();
  }, [brandSlug, location.state, filterBrands, navigate, language]);

  // Check if favorited
  useEffect(() => {
    if (brand) {
      const favorites = JSON.parse(localStorage.getItem("favoriteBrands") || "[]");
      setIsFavorited(favorites.some(fav => fav.id === brand.id));
    }
  }, [brand]);

  // Handle favorite toggle
  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteBrands") || "[]");
    
    if (isFavorited) {
      const updatedFavorites = favorites.filter(fav => fav.id !== brand.id);
      localStorage.setItem("favoriteBrands", JSON.stringify(updatedFavorites));
      setIsFavorited(false);
    } else {
      const updatedFavorites = [...favorites, brand];
      localStorage.setItem("favoriteBrands", JSON.stringify(updatedFavorites));
      setIsFavorited(true);
    }
  };

  // Product page translations
  const productTranslations = {
    en: {
      backToBrands: "Back to Brands",
      addToWishlist: "Add to Wishlist",
      removeFromWishlist: "Remove from Wishlist",
      perfumeType: "Eau de Parfum Intense Spray",
      moreDetails: "More Details",
      size: "Size",
      qty: "Qty",
      addToCart: "ADD TO CART",
      price: "$156.00",
      reference: "Ref.",
      foundedBy: "Founded by",
      heritage: "Heritage",
      country: "Country"
    },
    ge: {
      backToBrands: "ბრენდებზე დაბრუნება",
      addToWishlist: "სურვილების სიაში დამატება",
      removeFromWishlist: "სურვილების სიიდან ამოშლა",
      perfumeType: "პარფიუმერული წყლის ინტენსიური სპრეი",
      moreDetails: "მეტი დეტალი",
      size: "ზომა",
      qty: "რაოდენობა",
      addToCart: "კალათში დამატება",
      price: "$156.00",
      reference: "რეფ.",
      foundedBy: "დაარსებულია",
      heritage: "მემკვიდრეობა",
      country: "ქვეყანა"
    }
  };

  const t = productTranslations[language];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <button
            onClick={() => navigate(`/${language}/brand`)}
            className="text-blue-600 hover:text-blue-800"
          >
            {t.backToBrands}
          </button>
        </div>
      </div>
    );
  }

  const brandImage = getBrandImage(brand.name);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate(`/${language}/brand`)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.backToBrands}
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Product Image */}
            <div className="aspect-square lg:aspect-auto">
              <img
                src={brandImage}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-6 lg:p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                    {brand.name}
                  </h1>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{t.price}</p>
                </div>
                <button
                  onClick={handleFavoriteToggle}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <svg
                    className={`w-6 h-6 ${isFavorited ? 'text-red-500 fill-current' : ''}`}
                    fill={isFavorited ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-sm">
                    {isFavorited ? t.removeFromWishlist : t.addToWishlist}
                  </span>
                </button>
              </div>

              {/* Product Type */}
              <p className="text-lg text-gray-700 mb-4">{t.perfumeType}</p>
              <p className="text-right text-sm text-gray-500 mb-6">{t.reference} {brand.id}16660</p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {brand.description}
              </p>

              {/* More Details Button */}
              <button className="text-gray-900 font-medium mb-6 hover:underline">
                {t.moreDetails}
              </button>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedSize("50 ml")}
                    className={`px-4 py-2 border transition-colors ${
                      selectedSize === "50 ml"
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    50 ml
                  </button>
                  <button
                    onClick={() => setSelectedSize("100 ml")}
                    className={`px-4 py-2 border transition-colors ${
                      selectedSize === "100 ml"
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    100 ml
                  </button>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.qty}
                </label>
                <div className="flex space-x-4">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300 min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-gray-900 text-white py-3 px-6 font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors">
                    {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Brand Information */}
              <div className="border-t pt-6 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>{t.foundedBy}:</span>
                  <span>{brand.foundedBy}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.heritage}:</span>
                  <span>{brand.heritage}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.country}:</span>
                  <span>{brand.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}