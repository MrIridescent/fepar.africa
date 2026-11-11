"use client";

import React, { memo } from "react";
import styled from "styled-components";

/**
 * African Motifs Library
 * SVG implementations of traditional African symbols and patterns
 */

// ===========================================
// ADINKRA SYMBOLS (Ghana)
// ===========================================

const SankofaWrapper = styled.svg`
  width: 100%;
  height: 100%;
  transform-origin: center;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  &:hover {
    transform: scale(1.1) rotate(-5deg);
  }
`;

export const SankofaSymbol = memo(({ 
  className, 
  size = 64, 
  color = "#C5A059",
  onClick 
}: { 
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}) => (
  <SankofaWrapper
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="4"
    onClick={onClick}
  >
    {/* Stylized bird representing Sankofa - return to move forward */}
    <path 
      d="M75 30 C 75 30, 70 20, 60 20 C 50 20, 45 30, 45 35 C 45 35, 35 30, 25 35 C 15 40, 10 50, 10 55 C 10 65, 20 75, 30 75 C 38 75, 42 68, 48 68 C 54 68, 58 72, 65 72 C 75 72, 85 65, 85 55 C 85 45, 75 40, 75 30"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="48" r="4" fill={color} />
    <path d="M60 25 L 55 15 L 65 20 Z" fill={color} />
    <text x="50" y="90" textAnchor="middle" fontSize="8" fontFamily="Syne, sans-serif" fill={color}>
      SANKOFA
    </text>
  </SankofaWrapper>
));

SankofaSymbol.displayName = "SankofaSymbol";

const GyeNyameWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const GyeNyameSymbol = memo(({ 
  className, 
  size = 64, 
  color = "#C5A059"
}: { 
  className?: string;
  size?: number;
  color?: string;
}) => (
  <GyeNyameWrapper
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="3"
  >
    {/* Complex symbol representing supremacy of God - spiral with ornamental elements */}
    <g transform="translate(50, 50)">
      <path 
        d="M0,-35 C 10,-45 25,-45 35,-35 C 45,-25 45,-10 35,0 C 25,10 10,10 0,0 C -10,10 -25,10 -35,0 C -45,-10 -45,-25 -35,-35 C -25,-45 -10,-45 0,-35 Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="0" cy="0" r="8" fill={color} />
      <path d="M0,-25 Q 10,-25 15,-15 M 0,-25 Q -10,-25 -15,-15" stroke={color} strokeWidth="3" />
      <path d="M0,25 Q 10,25 15,15 M 0,25 Q -10,25 -15,15" stroke={color} strokeWidth="3" />
      <path d="M25,0 Q 25,-10 15,-15 M 25,0 Q 25,10 15,15" stroke={color} strokeWidth="3" />
      <path d="M-25,0 Q -25,-10 -15,-15 M -25,0 Q -25,10 -15,15" stroke={color} strokeWidth="3" />
    </g>
  </GyeNyameWrapper>
));

GyeNyameSymbol.displayName = "GyeNyameSymbol";

const DwennimmenWrapper = styled.svg`
  width: 100%;
  height: 100%;
  transition: filter 0.3s ease;
  
  &:hover {
    filter: drop-shadow(0 0 8px rgba(197, 160, 89, 0.4));
  }
`;

export const DwennimmenSymbol = memo(({ 
  className, 
  size = 64, 
  color = "#C5A059"
}: { 
  className?: string;
  size?: number;
  color?: string;
}) => (
  <DwennimmenWrapper
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="3"
  >
    {/* Rooster's comb - strength with humility */}
    <g transform="translate(50, 50)">
      {/* Horn-like structures representing rooster's comb */}
      <path d="M-30,-10 Q -40,-30 -35,-45 C -30,-55 -10,-55 0,-40" stroke={color} strokeWidth="4" fill="none" />
      <path d="M30,-10 Q 40,-30 35,-45 C 30,-55 10,-55 0,-40" stroke={color} strokeWidth="4" fill="none" />
      
      {/* Eye representation */}
      <ellipse cx="0" cy="10" rx="15" ry="20" stroke={color} strokeWidth="3" fill="none" />
      <circle cx="0" cy="10" r="6" fill={color} />
      
      {/* Mouth/face structure */}
      <path d="M-10,35 Q 0,45 10,35" stroke={color} strokeWidth="3" fill="none" />
      
      {/* Feather-like elements at base */}
      <path d="M-15,45 L -20,60 L -10,55" stroke={color} strokeWidth="2" />
      <path d="M0,45 L 0,62 L 5,58" stroke={color} strokeWidth="2" />
      <path d="M15,45 L 20,60 L 10,55" stroke={color} strokeWidth="2" />
    </g>
  </DwennimmenWrapper>
));

DwennimmenSymbol.displayName = "DwennimmenSymbol";

// ===========================================
// BOGOLANFINI PATTERNS (Mali)
// ===========================================

const BogolanfiniPattern = styled.svg`
  width: 100%;
  height: 100%;
`;

export const BogolanZigzag = memo(({ 
  className, 
  size = 64, 
  color = "#F4F1DE",
  backgroundColor = "#3D2817"
}: { 
  className?: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
}) => (
  <BogolanfiniPattern
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    <rect width="100" height="100" fill={backgroundColor} />
    <path
      d={`M 0 ${size / 2} 
          L ${size * 0.2} ${size * 0.3} 
          L ${size * 0.4} ${size * 0.2} 
          L ${size * 0.6} ${size * 0.3} 
          L ${size * 0.8} ${size * 0.2} 
          L ${size} ${size * 0.3}
          L ${size} ${size * 0.7}
          L ${size * 0.8} ${size * 0.8} 
          L ${size * 0.6} ${size * 0.9} 
          L ${size * 0.4} ${size * 0.8} 
          L ${size * 0.2} ${size * 0.9} 
          L 0 ${size * 0.8} Z`}
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </BogolanfiniPattern>
));

BogolanZigzag.displayName = "BogolanZigzag";

export const BogolanCross = memo(({ 
  className, 
  size = 64, 
  color = "#F4F1DE",
  backgroundColor = "#3D2817"
}: { 
  className?: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
}) => (
  <BogolanfiniPattern
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    <rect width="100" height="100" fill={backgroundColor} />
    {/* Cross pattern representing balance and harmony */}
    <line x1="50" y1="10" x2="50" y2="90" stroke={color} strokeWidth="6" />
    <line x1="10" y1="50" x2="90" y2="50" stroke={color} strokeWidth="6" />
    
    {/* Decorative end caps */}
    <circle cx="50" cy="10" r="8" fill={color} />
    <circle cx="50" cy="90" r="8" fill={color} />
    <circle cx="10" cy="50" r="8" fill={color} />
    <circle cx="90" cy="50" r="8" fill={color} />
    
    {/* Center diamond */}
    <polygon points="50,30 70,50 50,70 30,50" fill="none" stroke={color} strokeWidth="2" />
  </BogolanfiniPattern>
));

BogolanCross.displayName = "BogolanCross";

// ===========================================
// KENTE STRIPES PATTERN
// ===========================================

const KenteStripes = styled.svg`
  width: 100%;
  height: 100%;
`;

export const KenteGoldStripes = memo(({ 
  className, 
  size = 64, 
  primaryColor = "#C5A059",
  secondaryColor = "#E9A83B"
}: { 
  className?: string;
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
}) => (
  <KenteStripes
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    {/* Horizontal stripes inspired by Kente cloth weaving */}
    <rect y="0" width="100" height="20" fill={primaryColor} />
    <rect y="20" width="100" height="15" fill="#1A1410" />
    <rect y="35" width="100" height="10" fill={secondaryColor} />
    <rect y="45" width="100" height="10" fill="#BD563D" />
    <rect y="55" width="100" height="10" fill="#1A1410" />
    <rect y="65" width="100" height="15" fill={secondaryColor} />
    <rect y="80" width="100" height="20" fill={primaryColor} />
    
    {/* Ornamental borders */}
    <line x1="0" y1="20" x2="100" y2="20" stroke="#F4F1DE" strokeWidth="1" opacity="0.5" />
    <line x1="0" y1="80" x2="100" y2="80" stroke="#F4F1DE" strokeWidth="1" opacity="0.5" />
  </KenteStripes>
));

KenteGoldStripes.displayName = "KenteGoldStripes";

export const KenteRedGreen = memo(({ 
  className, 
  size = 64,
  redColor = "#E63946",
  greenColor = "#2A9D8F",
  goldAccent = "#C5A059"
}: { 
  className?: string;
  size?: number;
  redColor?: string;
  greenColor?: string;
  goldAccent?: string;
}) => (
  <KenteStripes
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    {/* Red and green Kente-inspired pattern */}
    <rect y="0" width="100" height="25" fill={redColor} />
    <rect y="25" width="100" height="10" fill={goldAccent} />
    <rect y="35" width="100" height="30" fill={greenColor} />
    <rect y="65" width="100" height="10" fill={goldAccent} />
    <rect y="75" width="100" height="25" fill={redColor} />
    
    {/* Geometric motifs */}
    <path d="M0,25 L 10,35 L 0,35 Z" fill="#F4F1DE" />
    <path d="M100,35 L 90,25 L 100,35 Z" fill="#F4F1DE" />
    <path d="M0,65 L 10,55 L 0,55 Z" fill="#F4F1DE" />
    <path d="M100,55 L 90,65 L 100,65 Z" fill="#F4F1DE" />
  </KenteStripes>
));

KenteRedGreen.displayName = "KenteRedGreen";

// ===========================================
// NDEBELE GEOMETRIC PATTERNS
// ===========================================

const NdebelePattern = styled.svg`
  width: 100%;
  height: 100%;
`;

export const NdebeleAngular = memo(({ 
  className, 
  size = 64,
  colors = ["#F4F1DE", "#E63946", "#E9A83B", "#1A1410"]
}: { 
  className?: string;
  size?: number;
  colors?: string[];
}) => (
  <NdebelePattern
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    {/* Bold angular shapes typical of Ndebele house painting */}
    <polygon points="50,5 90,25 50,45 10,25" fill={colors[0]} />
    <polygon points="50,35 80,50 50,65 20,50" fill={colors[1]} />
    <polygon points="50,60 70,70 50,80 30,70" fill={colors[2]} />
    <circle cx="50" cy="50" r="12" fill={colors[3]} />
    
    {/* Additional accent triangles */}
    <polygon points="0,90 30,90 15,100" fill={colors[0]} />
    <polygon points="100,90 70,90 85,100" fill={colors[1]} />
    <polygon points="0,10 30,10 15,0" fill={colors[2]} />
    <polygon points="100,10 70,10 85,0" fill={colors[0]} />
  </NdebelePattern>
));

NdebeleAngular.displayName = "NdebeleAngular";

// ===========================================
// ETHIOPIAN CROSS DESIGN
// ===========================================

const EthiopianCrossWrapper = styled.svg`
  width: 100%;
  height: 100%;
  animation: ethiopian-pulse 3s infinite;
  
  @keyframes ethiopian-pulse {
    0%, 100% { filter: drop-shadow(0 0 2px rgba(197, 160, 89, 0.3)); }
    50% { filter: drop-shadow(0 0 8px rgba(197, 160, 89, 0.6)); }
  }
`;

export const EthiopianCross = memo(({ 
  className, 
  size = 64, 
  color = "#C5A059"
}: { 
  className?: string;
  size?: number;
  color?: string;
}) => (
  <EthiopianCrossWrapper
    className={className}
    viewBox="0 0 100 100"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="3"
  >
    {/* Interlocking geometric cross design */}
    <g transform="translate(50, 50)">
      {/* Vertical element */}
      <rect x="-4" y="-30" width="8" height="60" rx="2" />
      {/* Horizontal element */}
      <rect x="-30" y="-4" width="60" height="8" rx="2" />
      {/* Interconnected loops */}
      <circle cx="-12" cy="-12" r="6" />
      <circle cx="12" cy="-12" r="6" />
      <circle cx="-12" cy="12" r="6" />
      <circle cx="12" cy="12" r="6" />
      {/* Center square */}
      <rect x="-6" y="-6" width="12" height="12" fill={color} />
      {/* Radiating decorative elements */}
      <line x1="-15" y1="-25" x2="-20" y2="-35" />
      <line x1="15" y1="-25" x2="20" y2="-35" />
      <line x1="-15" y1="25" x2="-20" y2="35" />
      <line x1="15" y1="25" x2="20" y2="35" />
    </g>
  </EthiopianCrossWrapper>
));

EthiopianCross.displayName = "EthiopianCross";

// ===========================================
// MOTIF COMBINATIONS & FRAMES
// ===========================================

export const MotifFrame = memo(({ 
  children,
  motif = "adinkra",
  className
}: { 
  children: React.ReactNode;
  motif?: "adinkra" | "bogolan" | "kente" | "ndebele";
  className?: string;
}) => {
  const frameStyles = {
    adinkra: {
      border: `2px solid #${motif === 'adinkra' ? 'C5A059' : 'BD563D'}`,
      borderRadius: '50%',
      padding: '4px',
      position: 'relative' as const,
    },
    bogolan: {
      border: `4px double #${motif === 'bogolan' ? 'F4F1DE' : 'BD563D'}`,
      borderRadius: '0',
      padding: '8px',
      background: '#1A1410',
    },
    kente: {
      borderLeft: `8px solid #C5A059`,
      borderRight: `8px solid #E63946`,
      borderTop: `4px solid #2A9D8F`,
      borderBottom: `4px solid #E9A83B`,
      padding: '8px',
    },
    ndebele: {
      border: `3px solid #E63946`,
      boxShadow: 'inset 0 0 20px rgba(230, 57, 70, 0.2)',
    },
  };

  return (
    <div style={frameStyles[motif]} className={className}>
      {children}
    </div>
  );
});

MotifFrame.displayName = "MotifFrame";

// ===========================================
// PATTERN SEAMLESS REPEATS
// ===========================================

export const PatternAdinkraBackground = memo(({ 
  className,
  color = "#C5A059",
  opacity = 0.05
}: { 
  className?: string;
  color?: string;
  opacity?: number;
}) => (
  <svg 
    className={className} 
    width="0" 
    height="0" 
    viewBox="0 0 100 100"
  >
    <defs>
      <pattern id="adinkra-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="25" cy="25" r="8" fill={color} fillOpacity={opacity} />
        <circle cx="75" cy="75" r="6" fill={color} fillOpacity={opacity} />
        <circle cx="75" cy="25" r="10" fill={color} fillOpacity={opacity} />
        <circle cx="25" cy="75" r="7" fill={color} fillOpacity={opacity} />
      </pattern>
    </defs>
  </svg>
));

PatternAdinkraBackground.displayName = "PatternAdinkraBackground";

export const PatternBogolanBackground = memo(({ 
  className,
  color = "#F4F1DE",
  backgroundColor = "#3D2817",
  opacity = 0.08
}: { 
  className?: string;
  color?: string;
  backgroundColor?: string;
  opacity?: number;
}) => (
  <svg 
    className={className} 
    width="0" 
    height="0" 
    viewBox="0 0 100 100"
  >
    <defs>
      <pattern id="bogolan-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <rect width="100" height="100" fill={backgroundColor} />
        <path
          d={`M 0 25 L 20 30 L 40 20 L 60 30 L 80 20 L 100 30
              M 0 75 L 20 70 L 40 80 L 60 70 L 80 80 L 100 70`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          fillOpacity={opacity}
        />
      </pattern>
    </defs>
  </svg>
));

PatternBogolanBackground.displayName = "PatternBogolanBackground";

export default {
  // Individual symbols
  SankofaSymbol,
  GyeNyameSymbol,
  DwennimmenSymbol,
  BogolanZigzag,
  BogolanCross,
  KenteGoldStripes,
  KenteRedGreen,
  NdebeleAngular,
  EthiopianCross,
  
  // Components
  MotifFrame,
  
  // Patterns
  PatternAdinkraBackground,
  PatternBogolanBackground,
};
