import { Link } from "react-router-dom";

const AnimatedTicket = ({ error, tipo, enlace }) => {
  const colors = {
    ticketBg: tipo === 2 ? "#E0F2FE" : tipo === 3 ? "#FDE68A" : "#FECACA",
    ticketBorder: tipo === 2 ? "#38BDF8" : tipo === 3 ? "#FBBF24" : "#F87171",
    perforation: tipo === 2 ? "#0284C7" : tipo === 3 ? "#B45309" : "#B91C1C",
    textColor: tipo === 2 ? "#0369A1" : tipo === 3 ? "#92400E" : "#7F1D1D",
  };

  return (
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-gap-4 tw-items-center tw-p-8">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center ">
        <div className="tw-relative tw-w-64 tw-h-36 tw-rounded-lg">
          <svg
            className="tw-w-full tw-h-full ticket"
            viewBox="0 0 300 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="10"
              width="280"
              height="130"
              rx="20"
              ry="20"
              fill={colors.ticketBg}
              stroke={colors.ticketBorder}
              strokeWidth="3"
            />
            <circle cx="10" cy="75" r="8" fill={colors.perforation} />
            <circle cx="290" cy="75" r="8" fill={colors.perforation} />
            <line
              x1="150"
              y1="20"
              x2="150"
              y2="130"
              stroke={colors.perforation}
              strokeDasharray="6 6"
              strokeWidth="2"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="20"
              fontWeight="bold"
              fill={colors.textColor}
            >
              🎟 Ticket
            </text>
          </svg>
        </div>
      </div>
      <p className="tw-text-md tw-select-none tw-text-center tw-text-slate-400 ">
        {error}
      </p>
      <Link
        to={enlace ? enlace : "/tickets"}
        className="tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-400 hover:dark:tw-bg-slate-900 hover:tw-bg-slate-300 tw-text-slate-500 hover:tw-text-slate-700 tw-w-fit tw-p-2 tw-px-6 tw-rounded tw-smooth"
      >
        volver
      </Link>

      <style>{`
        .ticket {
          transform-origin: center;
          animation: ticketBounce 3s ease-in-out infinite;
        }

        @keyframes ticketBounce {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(2deg) scale(1.02); }
          50% { transform: rotate(0deg) scale(1.03); }
          75% { transform: rotate(-2deg) scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTicket;
