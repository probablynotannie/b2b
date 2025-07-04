import { Link } from "react-router-dom";

const AnimatedCruise = ({ error, tipo, enlace }) => {
  const colors = {
    hullGradientStart: tipo === 2 ? "#1E3A8A" : "#7F1D1D",
    hullGradientEnd: tipo === 2 ? "#2563EB" : "#B91C1C",
    hullStroke: tipo === 2 ? "#1E40AF" : "#7F1D1D",
    hullFill: tipo === 2 ? "#3B82F6" : "#B91C1C",
    windowFill: tipo === 2 ? "#BFDBFE" : "#FCA5A5",
    mastFill: tipo === 2 ? "#1E40AF" : "#7F1D1D",
    flagFill: tipo === 2 ? "#3B82F6" : "#EF4444",
    waveStroke: "#3B82F6", // always blue to avoid red lines
    textColor: tipo === 2 ? "tw-text-blue-400" : "tw-text-red-400",
  };

  return (
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-gap-4 tw-items-center tw-space-y-1 tw-p-8">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="tw-relative tw-w-56 tw-h-40 tw-border tw-border-b-0 tw-rounded-t-2xl tw-bg-slate-50 tw-border-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-overflow-hidden dark:tw-border-slate-600/50">
          <svg
            className="tw-w-56 tw-h-36 boat"
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
            <circle cx="26" cy="26" r="2" fill={colors.windowFill} />
            <circle cx="38" cy="26" r="2" fill={colors.windowFill} />
            <path
              d={tipo === 2 ? "M30 28 Q32 30 34 28" : "M30 30 Q32 27 35 30"}
              stroke={colors.windowFill}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x="30"
              y="8"
              width="4"
              height="12"
              fill={colors.mastFill}
              rx="1"
            />
            <polygon points="34,8 42,14 34,20" fill={colors.flagFill} />

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

          <div className="waves">
            <svg
              className="wave wave1"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#002366"
                fillOpacity="1"
                d="M0,64L48,69.3C96,75,192,85,288,117.3C384,149,480,203,576,229.3C672,256,768,256,864,224C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <svg
              className="wave wave2"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#001a4d"
                fillOpacity="0.7"
                d="M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,234.7C672,224,768,192,864,165.3C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <p className="tw-text-md tw-select-none tw-text-center tw-text-slate-400 tw-mt-5">
        {error}
      </p>
      <Link
        to={enlace ? enlace : "/cruceros"}
        className="tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-400 hover:dark:tw-bg-slate-900 hover:tw-bg-slate-300 tw-text-slate-500 hover:tw-text-slate-700 tw-w-fit tw-p-2 tw-px-6 tw-rounded tw-smooth"
      >
        volver
      </Link>

      <style>{`
     .boat {
  margin-top: 27px;
  transform-origin: 50% 90%;
  animation: boatRockWithWave 12s linear infinite;
}

@keyframes boatRockWithWave {
  0%   { transform: rotate(0deg) translateX(0); }
  25%  { transform: rotate(3deg) translateX(4px); }
  50%  { transform: rotate(0deg) translateX(0); }
  75%  { transform: rotate(-3deg) translateX(-4px); }
  100% { transform: rotate(0deg) translateX(0); }
}

        .waves {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          overflow: hidden;
          pointer-events: none;
        }
        .wave {
          position: absolute;
          bottom: 0;
          width: 200%;
          height: 100%;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .wave1 {
          animation-name: waveMove1;
          animation-duration: 12s;
          opacity: 0.6;
          z-index: 1;
          left: 0;
          animation-direction: alternate;

        }
        .wave2 {
          animation-name: waveMove2;
          animation-duration: 18s;
          opacity: 0.4;
          z-index: 0;
          left: 0;
          animation-direction: alternate;

        }
        @keyframes waveMove1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes waveMove2 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCruise;
