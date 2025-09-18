// src/pages/HomePage.jsx
import perfume1 from "../assets/images/perfume1.webp"; // replace with your image
import perfume2 from "../assets/images/perfume2.jpg"; // replace with your image
import perfume3 from "../assets/images/perfume3.avif"; // replace with your image
import bottle from "../assets/images/bottle.png"; // round bottle image

export default function HomePage() {
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
            alt="Perfume Banner"
            className="w-full h-full object-cover shadow-lg"
          />
          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md">
            <span className="font-bold text-lg">25% Off</span>
            <br />
            <span className="uppercase text-xs tracking-wide">
              On New Arrivals
            </span>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-5xl font-bold tracking-wide">
              FRAGRANCE
              <br />
              <span className="text-3xl font-light">EXCLUSIVES</span>
            </h2>
            <img
              src={bottle}
              alt="Coco Bottle"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
            The most popular perfumes are a blend of timeless scents and those
            that have recently won our hearts, ranging from summer in a bottle
            to intensely sensual notes of love.
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Product 1 */}
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
              <img
                src={perfume2}
                alt="Tom Ford"
                className="w-24 h-36 object-contain mx-auto mb-4"
              />
              <button className="text-sm font-medium uppercase tracking-wide text-gray-800 hover:underline flex items-center justify-center gap-1">
                Shop Now <span>↗</span>
              </button>
            </div>

            {/* Product 2 */}
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
              <img
                src={perfume3}
                alt="Coco Chanel"
                className="w-24 h-36 object-contain mx-auto mb-4"
              />
              <button className="text-sm font-medium uppercase tracking-wide text-gray-800 hover:underline flex items-center justify-center gap-1">
                Shop Now <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
