import React from "react";
import perfume2 from "../../assets/images/perfume2.jpg";
import perfume3 from "../../assets/images/perfume3.avif";
import men1 from "../../assets/images/men1.jpg";
import men2 from "../../assets/images/men2.avif";
import men3 from "../../assets/images/men3.avif";
import women1 from "../../assets/images/women1.png";
import women2 from "../../assets/images/women2.png";

export default function BrandImage({ brand, className = "" }) {
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
    </div>
  );
}
