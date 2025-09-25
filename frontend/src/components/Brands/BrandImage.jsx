import React from "react";

export default function BrandImage({ brand, className = "", aspectRatio = "4/3" }) {
  // Generate a consistent color based on brand name for placeholder
  const getPlaceholderColor = (name) => {
    const colors = [
      "from-purple-400 to-purple-600",
      "from-blue-400 to-blue-600", 
      "from-green-400 to-green-600",
      "from-yellow-400 to-yellow-600",
      "from-red-400 to-red-600",
      "from-indigo-400 to-indigo-600",
      "from-pink-400 to-pink-600",
      "from-gray-400 to-gray-600"
    ];
    
    const hash = name.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return colors[Math.abs(hash) % colors.length];
  };

  const placeholderGradient = getPlaceholderColor(brand.name);

  return (
    <div className={`aspect-[${aspectRatio}] overflow-hidden ${className}`}>
      {/* Using gradient placeholder instead of broken image links */}
      <div className={`w-full h-full bg-gradient-to-br ${placeholderGradient} flex items-center justify-center relative`}>
        {/* Brand name overlay */}
        <div className="text-center text-white">
          <div className="text-2xl font-bold mb-2">{brand.name}</div>
          <div className="text-sm opacity-80 capitalize">{brand.category}</div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/30 rounded-full"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </div>
  );
}