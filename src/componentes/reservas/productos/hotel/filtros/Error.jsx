import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Error = ({ error, tipo, enlace }) => {
  const colors = {
    building: tipo === 2 ? "#1E3A8A" : tipo === 3 ? "#6B4226" : "#7F1D1D",
    roof: tipo === 2 ? "#2563EB" : tipo === 3 ? "#8B5E3C" : "#B91C1C",
    window: tipo === 2 ? "#BFDBFE" : tipo === 3 ? "#D2B48C" : "#FCA5A5",
    windowLit: "#FACC15",
  };

  const windowPositions = [
    [18, 18],
    [26, 18],
    [34, 18],
    [42, 18],
    [18, 26],
    [26, 26],
    [34, 26],
    [42, 26],
    [18, 34],
    [26, 34],
    [34, 34],
    [42, 34],
    [18, 42],
    [26, 42],
    [34, 42],
    [42, 42],
  ];
  const [litWindows, setLitWindows] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const newLit = windowPositions
        .map((_, i) => i)
        .filter(() => Math.random() > 0.6);
      setLitWindows(newLit);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center ">
      <div className="tw-relative">
        <svg
          className="tw-w-56 tw-h-40 hotel"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12"
            y="12"
            width="40"
            height="38"
            fill={colors.building}
            rx="0"
            ry="0"
          />

          <rect
            x="12"
            y="8"
            width="40"
            height="8"
            fill={colors.roof}
            rx="0"
            ry="0"
          />
          <text
            x="32"
            y="14"
            textAnchor="middle"
            fill="#fff"
            fontSize="5"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            HOTEL
          </text>
          {windowPositions.map(([x, y], i) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="4"
              height="4"
              rx="0.5"
              fill={litWindows.includes(i) ? colors.windowLit : colors.window}
            />
          ))}
        </svg>
      </div>
      <p className="tw-text-md tw-select-none tw-text-center tw-text-slate-400 tw-mb-2 -tw-mt-5">
        {error}
      </p>
      <Link
        to={enlace ? enlace : "/hoteles"}
        className=" tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-400 hover:dark:tw-bg-slate-900 hover:tw-bg-slate-300 tw-text-slate-500 hover:tw-text-slate-700 tw-w-fit tw-p-2 tw-px-6 tw-rounded tw-smooth"
      >
        volver
      </Link>
      <style>{`
        .hotel {
          margin-top: 27px;
          transform-origin: 50% 90%;
          animation: hotelBounce 10s ease-in-out infinite;
        }

        @keyframes hotelBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default Error;
