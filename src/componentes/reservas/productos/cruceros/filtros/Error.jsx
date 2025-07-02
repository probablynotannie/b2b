const AnimatedCruise = ({ error, tipo }) => {
  const colors = {
    hullGradientStart: tipo === 2 ? "#1E3A8A" : "#7F1D1D",
    hullGradientEnd: tipo === 2 ? "#2563EB" : "#B91C1C",
    hullStroke: tipo === 2 ? "#1E40AF" : "#7F1D1D",
    hullFill: tipo === 2 ? "#3B82F6" : "#B91C1C",
    windowFill: tipo === 2 ? "#BFDBFE" : "#FCA5A5",
    mastFill: tipo === 2 ? "#1E40AF" : "#7F1D1D",
    flagFill: tipo === 2 ? "#3B82F6" : "#EF4444",
    waveStroke: tipo === 2 ? "#3B82F6" : "#EF4444",
    textColor: tipo === 2 ? "tw-text-blue-400" : "tw-text-red-400",
  };

  return (
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-space-y-6 tw-p-8">
      <svg
        className="tw-w-36 tw-h-36 boat"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 40 L56 40 L50 52 L14 52 Z"
          fill="url(#hullGradient)"
          stroke={colors.hullStroke}
          strokeWidth="2"
        />
        <rect
          x="20"
          y="20"
          width="24"
          height="12"
          fill={colors.hullFill}
          stroke={colors.hullStroke}
          strokeWidth="1.5"
          rx="2"
        />
        <circle cx="28" cy="28" r="2" fill={colors.windowFill} />
        <circle cx="36" cy="28" r="2" fill={colors.windowFill} />
        <rect
          x="30"
          y="8"
          width="4"
          height="12"
          fill={colors.mastFill}
          rx="1"
        />
        <polygon points="34,8 42,14 34,20" fill={colors.flagFill} />
        <g className="waves">
          <path
            d="M0 56 C8 52 16 60 24 56 S40 52 48 56 S64 52 72 56"
            stroke={colors.waveStroke}
            strokeWidth="3"
            fill="none"
          />
        </g>
        <defs>
          <linearGradient
            id="hullGradient"
            x1="0"
            y1="40"
            x2="0"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={colors.hullGradientStart} offset="0%" />
            <stop stopColor={colors.hullGradientEnd} offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      <p
        className={`tw-text-xl tw-font-semibold tw-select-none tw-text-center tw-text-slate-300 dark:tw-text-slate-400`}
      >
        {error}
      </p>

      <style>{`
        .waves path {
          animation: waveMotion 5s ease-in-out infinite;
          transform-origin: center center;
        }
        @keyframes waveMotion {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-12px); }
        }
        .boat {
          transform-origin: 50% 90%; /* pivot near bottom center */
          animation: boatRock 5s ease-in-out infinite;
        }
        @keyframes boatRock {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }  
          50% { transform: rotate(0deg); }
          75% { transform: rotate(3deg); }  
        }
      `}</style>
    </div>
  );
};

export default AnimatedCruise;
