import React, { useState, useEffect } from "react";
import perfume2 from "../../assets/images/perfume2.jpg";
import perfume3 from "../../assets/images/perfume3.avif";
import men1 from "../../assets/images/men1.jpg";
import men2 from "../../assets/images/men2.avif";
import men3 from "../../assets/images/men3.avif";
import women1 from "../../assets/images/women1.png";
import women2 from "../../assets/images/women2.png";

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
    const images = [women2, perfume3, men1, men2, men3, women1, perfume2];

    const hash = name.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    return images[Math.abs(hash) % images.length];
  };

  const placeholderImage = getPlaceholderImage(brand.name);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {/* Perfume image filling the entire container */}
      <img
        src={placeholderImage}
        alt={brand.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Heart icon in top right corner - Only show in grid, not in modal */}
      {!className.includes("modal-context") && (
        <div
          className="absolute top-2 right-2 z-10"
          onClick={handleFavoriteClick}
        >
          <svg
            className={`w-6 h-6 transition-all duration-200 cursor-pointer ${
              isFavorited
                ? "text-red-500 fill-red-500 scale-110"
                : "text-white hover:text-red-500 hover:scale-105"
            }`}
            fill={isFavorited ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
