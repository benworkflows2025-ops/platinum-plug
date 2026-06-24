// Bespoke cut-gem monogram for Platinum Plug, inline SVG with the same
// brushed-metal gradient as the rest of the brand. Replaces the old blank
// placeholder square. Always paired with the "Platinum Plug" wordmark,
// so it's marked decorative for screen readers.
export default function Logo({ size = 28, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="pa-gem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6f6f8" />
          <stop offset="0.4" stopColor="#a7a8af" />
          <stop offset="0.65" stopColor="#e8e9ec" />
          <stop offset="1" stopColor="#b3b4ba" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#pa-gem)"
        strokeWidth="1.1"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Outline + girdle of a cut diamond */}
        <path d="M11 5 H21 L26 12 L16 28 L6 12 Z" />
        <path d="M6 12 H26" />
        {/* Crown + pavilion facets */}
        <path d="M11 5 L16 12 M21 5 L16 12 M16 12 L16 28" />
      </g>
    </svg>
  )
}
