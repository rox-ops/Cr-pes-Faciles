import React from 'react';

export const CrepeStackIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 600 400"
    className={`w-full h-auto drop-shadow-md rounded-2xl ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="plateGrad" x1="100" y1="280" x2="500" y2="380" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F5F4" />
        <stop offset="1" stopColor="#E7E5E4" />
      </linearGradient>
      <linearGradient id="crepeGrad1" x1="150" y1="200" x2="450" y2="280" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="0.5" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="crepeGrad2" x1="160" y1="180" x2="440" y2="260" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A" />
        <stop offset="0.6" stopColor="#FBBF24" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="butterGrad" x1="270" y1="150" x2="330" y2="190" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEF08A" />
        <stop offset="1" stopColor="#FACC15" />
      </linearGradient>
      <radialGradient id="berryGrad" cx="0.4" cy="0.4" r="0.6">
        <stop stopColor="#FB7185" />
        <stop offset="1" stopColor="#BE123C" />
      </radialGradient>
      <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#78350F" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Warm background tint */}
    <rect width="600" height="400" rx="24" fill="#FFFBEB" />

    {/* Decorative Kitchen Table Board */}
    <rect x="40" y="320" width="520" height="20" rx="10" fill="#E7E5E4" opacity="0.6" />

    {/* Artisanal Ceramic Plate */}
    <g filter="url(#softGlow)">
      <ellipse cx="300" cy="300" rx="200" ry="48" fill="url(#plateGrad)" stroke="#D6D3D1" strokeWidth="3" />
      <ellipse cx="300" cy="296" rx="170" ry="38" fill="#FAFAF9" stroke="#E7E5E4" strokeWidth="1.5" />
    </g>

    {/* Stack of Crepes */}
    {/* Crepe Base 1 */}
    <ellipse cx="300" cy="275" rx="145" ry="32" fill="url(#crepeGrad1)" stroke="#B45309" strokeWidth="1.5" />
    <ellipse cx="260" cy="270" rx="12" ry="4" fill="#92400E" opacity="0.25" />
    <ellipse cx="340" cy="278" rx="18" ry="5" fill="#92400E" opacity="0.2" />

    {/* Crepe Base 2 */}
    <ellipse cx="298" cy="263" rx="142" ry="30" fill="url(#crepeGrad2)" stroke="#B45309" strokeWidth="1.2" />
    <ellipse cx="320" cy="260" rx="10" ry="3" fill="#78350F" opacity="0.2" />

    {/* Crepe Base 3 */}
    <ellipse cx="302" cy="251" rx="140" ry="29" fill="url(#crepeGrad1)" stroke="#B45309" strokeWidth="1.2" />

    {/* Crepe Base 4 */}
    <ellipse cx="299" cy="239" rx="138" ry="28" fill="url(#crepeGrad2)" stroke="#B45309" strokeWidth="1.2" />

    {/* Top Folded / Wavy Crepe */}
    <path
      d="M170 225 C 220 210, 380 210, 430 225 C 440 240, 360 255, 300 252 C 240 249, 160 240, 170 225 Z"
      fill="url(#crepeGrad2)"
      stroke="#B45309"
      strokeWidth="1.5"
    />

    {/* Golden Browning spots (Les petites rousseurs traditionnelles) */}
    <circle cx="240" cy="228" r="5" fill="#92400E" opacity="0.4" />
    <circle cx="280" cy="225" r="7" fill="#78350F" opacity="0.35" />
    <circle cx="350" cy="232" r="6" fill="#92400E" opacity="0.3" />
    <circle cx="320" cy="238" r="4" fill="#78350F" opacity="0.4" />
    <circle cx="210" cy="232" r="4" fill="#92400E" opacity="0.3" />

    {/* Melting Butter Pat */}
    <g filter="url(#softGlow)">
      {/* Butter pool */}
      <ellipse cx="300" cy="224" rx="26" ry="10" fill="#FACC15" opacity="0.75" />
      {/* Butter Cube */}
      <path d="M285 205 L315 205 L325 215 L295 215 Z" fill="#FEF08A" />
      <path d="M285 205 L295 215 L295 224 L285 214 Z" fill="#FACC15" />
      <path d="M295 215 L325 215 L325 224 L295 224 Z" fill="#EAB308" />
    </g>

    {/* Fresh Berries on side */}
    <circle cx="365" cy="225" r="11" fill="url(#berryGrad)" stroke="#9F1239" strokeWidth="1" />
    <circle cx="380" cy="232" r="9" fill="url(#berryGrad)" stroke="#9F1239" strokeWidth="1" />
    <circle cx="355" cy="236" r="8" fill="url(#berryGrad)" stroke="#9F1239" strokeWidth="1" />
    {/* Mint Leaf */}
    <path d="M375 220 Q390 210 395 216 Q388 226 375 220 Z" fill="#15803D" />

    {/* Powdered Sugar Dusting Effect */}
    <g fill="#FFFFFF" opacity="0.8">
      <circle cx="230" cy="220" r="1.5" />
      <circle cx="255" cy="215" r="2" />
      <circle cx="270" cy="228" r="1.5" />
      <circle cx="310" cy="210" r="1.8" />
      <circle cx="335" cy="222" r="1.5" />
      <circle cx="345" cy="218" r="2" />
      <circle cx="290" cy="240" r="1.5" />
      <circle cx="220" cy="235" r="1.2" />
    </g>

    {/* Steam lines */}
    <path d="M270 180 Q265 160 275 145" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    <path d="M300 175 Q308 155 300 135" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <path d="M330 180 Q325 160 335 145" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
  </svg>
);

export const StepBowlIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 280" className={`w-full h-auto rounded-xl ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="280" rx="16" fill="#FEF3C7" opacity="0.4" />
    {/* Ceramic Mixing Bowl */}
    <ellipse cx="200" cy="220" rx="110" ry="24" fill="#E2E8F0" opacity="0.7" />
    <path d="M90 120 C 90 220, 310 220, 310 120 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
    {/* Batter inside bowl */}
    <path d="M105 135 C 105 205, 295 205, 295 135 Z" fill="#FDE68A" />
    <ellipse cx="200" cy="135" rx="95" ry="18" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
    {/* Whisk */}
    <g transform="rotate(35 200 140)">
      <line x1="200" y1="20" x2="200" y2="120" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />
      <path d="M185 120 C 185 170, 215 170, 215 120 Z" stroke="#94A3B8" strokeWidth="3" fill="none" />
      <path d="M192 120 C 192 175, 208 175, 208 120 Z" stroke="#94A3B8" strokeWidth="3" fill="none" />
    </g>
    {/* Egg Yolk floating in batter */}
    <circle cx="160" cy="138" r="14" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
    <circle cx="230" cy="142" r="14" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
  </svg>
);
