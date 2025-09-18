export default function FragranceLogoGeo() {
  return (
    <svg
      width="100"
      height="70"
      viewBox="0 0 100 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* perfume bottle group rotated */}
      <g transform="rotate(45 25 25)">
        {/* bottle body */}
        <rect
          x="6"
          y="8"
          width="32"
          height="28"
          rx="6"
          ry="6"
          fill="#c99c50" // Golden Brown
        />

        {/* inner glass highlight */}
        <rect
          x="10.5"
          y="11"
          width="23"
          height="22"
          rx="4"
          ry="4"
          fill="#ccb195" // Beige highlight
          opacity="0.8"
        />

        {/* bottle neck */}
        <rect
          x="18.5"
          y="3.5"
          width="8"
          height="8.5"
          rx="1.5"
          ry="1.5"
          fill="#582d0e" // Dark brown
        />

        {/* cap */}
        <rect
          x="17"
          y="0.5"
          width="10"
          height="3"
          rx="0.6"
          ry="0.6"
          fill="#391800" // Deep coffee
        />
      </g>

      {/* bigger fragrance sparkles */}
      <circle cx="72" cy="10" r="3" fill="#c99c50" />
      <circle cx="76" cy="14" r="2.4" fill="#ccb195" />
      <circle cx="80" cy="8" r="2.4" fill="#391800" />
      <circle cx="88" cy="14" r="2.8" fill="#582d0e" />
      <circle cx="92" cy="6" r="2" fill="#c99c50" />
      <circle cx="68" cy="14" r="2.6" fill="#ccb195" />
      <circle cx="84" cy="4" r="2.2" fill="#391800" />
      <circle cx="78" cy="20" r="2.5" fill="#582d0e" />

      {/* little stars distributed along bottle path */}
      <g fill="#c99c50">
        {/* top-left near bottle cap */}
        <circle cx="30" cy="5" r="1.2" />
        <circle cx="38" cy="8" r="0.9" />

        {/* upper-right around main sparkles */}
        <circle cx="65" cy="6" r="1.5" />
        <circle cx="72" cy="22" r="1.1" />

        {/* right side farther */}
        <circle cx="85" cy="10" r="1.3" />
        <circle cx="90" cy="20" r="0.8" />

        {/* bottom-right, trailing */}
        <circle cx="70" cy="32" r="1.2" />
        <circle cx="80" cy="28" r="1" />

        {/* bottom-left under bottle */}
        <circle cx="40" cy="35" r="0.9" />
        <circle cx="28" cy="30" r="1.4" />
      </g>

      {/* thin baseline */}
      <path d="M0 45H100" stroke="#ccb195" strokeWidth="1" />

      {/* small signature dot */}
      <circle cx="50" cy="45" r="1.2" fill="#582d0e" />
    </svg>
  );
}
