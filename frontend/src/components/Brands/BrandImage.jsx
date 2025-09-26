import React, { useState, useEffect } from "react";
import chance from "../../assets/images/brand/chance.jpg";
import chanelChance from "../../assets/images/brand/chanel-chance.jpg";
import cocoChanel from "../../assets/images/brand/coco-chanel.jpg";
import daisy from "../../assets/images/brand/daisy.jpg";
import dolceGabbana from "../../assets/images/brand/dolce-gabbana.jpg";
import versaceEros from "../../assets/images/brand/versace_eros.webp";

export default function BrandImage({ brand, className = "" }) {
  const [isFavorited, setIsFavorited] = useState(false);

  // Check if this brand is already in favorites on component mount
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteBrands") || "[]"
    );
    setIsFavorited(favorites.some((fav) => fav.id === brand.id));
  }, [brand.id]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent triggering parent click events

    const favorites = JSON.parse(
      localStorage.getItem("favoriteBrands") || "[]"
    );

    if (isFavorited) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.id !== brand.id);
      localStorage.setItem("favoriteBrands", JSON.stringify(updatedFavorites));
      setIsFavorited(false);
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, brand];
      localStorage.setItem("favoriteBrands", JSON.stringify(updatedFavorites));
      setIsFavorited(true);
    }
  };
  // Generate a consistent image based on brand name for placeholder
  const getPlaceholderImage = (name) => {
    const images = [
      chance,
      chanelChance,
      cocoChanel,
      daisy,
      dolceGabbana,
      versaceEros,
    ];

    const hash = name.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    return images[Math.abs(hash) % images.length];
  };

  const placeholderImage = getPlaceholderImage(brand.name);

  return (
    <div className={`w-full ${className}`}>
      {/* Image container */}
      <div className="w-full relative overflow-hidden aspect-square hover:scale-105 transition-transform duration-300 active:scale-100">
        {/* Perfume image filling the container */}
        <img
          src={placeholderImage}
          alt={brand.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Heart icon in top right corner - Only show in grid, not in modal */}
        {!className.includes("modal-context") && (
          <button
            className="absolute top-1 right-1 sm:top-2 sm:right-2 z-10 p-1 sm:p-1.5  transition-all duration-200 touch-manipulation"
            onClick={handleFavoriteClick}
            aria-label={
              isFavorited ? "Remove from favorites" : "Add to favorites"
            }
          >
            <svg
              className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-200 ${
                isFavorited
                  ? "text-red-500 fill-red-500 scale-120 hover:scale-150 bg-white/70 backdrop-blur-md rounded-full p-1"
                  : "text-gray-500 scale-120 hover:text-red-500 hover:scale-150 active:scale-150 bg-white/70 backdrop-blur-md rounded-full p-1"
              }`}
              fill="currentColor"
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
          </button>
        )}
      </div>

      {/* Brand information below the image */}
      <div className="mt-2 p-2 text-center">
        <h3 className="text-gray-900 font-semibold text-sm sm:text-base mb-1 truncate">
          {brand.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm truncate">
          by {brand.foundedBy}
        </p>
      </div>
    </div>
  );
}
