'use client'

export default function OrbitalOverlay() {
  return (
    <div className="orbital-bg" aria-hidden="true">
      <div className="orbital-stage">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ display: 'block' }}>
          <defs>
            <radialGradient id="orbital-glow" cx="70%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.24" />
              <stop offset="42%" stopColor="#22d3ee" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#orbital-glow)" />
          <ellipse className="orbital-core" cx="73" cy="52" rx="15" ry="28" />
          <ellipse
            cx="73"
            cy="52"
            rx="7.5"
            ry="14"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(34,211,238,0.18)"
            strokeWidth="0.035"
          />
          <ellipse className="orbital-line" cx="74" cy="52" rx="28" ry="47" />
          <ellipse className="orbital-line thin" cx="76" cy="52" rx="38" ry="66" />
          <path className="orbital-line" d="M48,79 C63,53 78,44 100,34" />
          <path className="orbital-line thin" d="M55,92 C72,75 88,70 100,66" />
          <circle cx="72" cy="52" r="0.35" fill="#22d3ee" opacity="0.8">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="85" cy="37" r="0.2" fill="#22d3ee" opacity="0.65">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="91" cy="68" r="0.25" fill="#22d3ee" opacity="0.75">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  )
}
