import { FaLuggageCart } from "react-icons/fa";
import { FaCalendar, FaClock, FaMapPin } from "react-icons/fa6";
import { MdPersonPinCircle } from "react-icons/md";

function Detalles({ coche }) {
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };
  return (
    <div className="tw-mx-auto tw-p-6 tw-rounded-lg tw-border tw-border-slate-200 tw-mt-5 dark:tw-border-slate-700 tw-bg-white dark:tw-bg-slate-800">
      <div className="tw-mb-3 tw-text-slate-600 dark:tw-text-slate-400">
        {coche.description}
      </div>
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-8">
        <div className="tw-flex-1">
          <div className="tw-mb-3">
            <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white">
              Ruta
            </h3>
            <p className="dark:tw-text-slate-300">
              {coche.route.origin.name} - {coche.route.destination.name}
            </p>
          </div>
          <div className="tw-mb-3">
            <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white">
              Detalles del Transfer
            </h3>
            <div className="tw-flex tw-flex-wrap tw-gap-4 tw-mt-2">
              <div className="tw-flex tw-items-center tw-gap-1 tw-bg-indigo-100 dark:tw-bg-indigo-900 tw-text-indigo-700 dark:tw-text-indigo-300 tw-text-sm tw-font-medium tw-py-1 tw-px-3 tw-rounded-lg">
                <FaClock className="tw-text-indigo-700" /> Duración:{" "}
                {formatDuration(coche.route.duration)}
              </div>
              <div className="tw-flex tw-items-center tw-gap-1 tw-bg-green-100 dark:tw-bg-green-900 tw-text-green-700 dark:tw-text-green-300 tw-text-sm tw-font-medium tw-py-1 tw-px-3 tw-rounded-lg">
                <FaMapPin className="tw-text-green-600 tw-text-lg" /> Distancia:{" "}
                {coche.route.distance} km
              </div>
            </div>
          </div>
          <div className="tw-mb-3">
            <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white">
              Capacidad
            </h3>
            <div className="tw-flex tw-gap-4 tw-mt-2">
              <span className="tw-flex tw-items-center tw-gap-1 tw-bg-yellow-100 dark:tw-bg-yellow-900 tw-text-yellow-700 dark:tw-text-yellow-300 tw-text-sm tw-font-medium tw-py-1 tw-px-3 tw-rounded-lg">
                <MdPersonPinCircle className="tw-text-xl tw-text-yellow-800" />{" "}
                Máx Pasajeros: {coche.maxPaxes}
              </span>
              <span className="tw-flex tw-items-center tw-gap-1 tw-bg-red-100 dark:tw-bg-red-900 tw-text-red-700 dark:tw-text-red-300 tw-text-sm tw-font-medium tw-py-1 tw-px-3 tw-rounded-lg">
                <FaLuggageCart className="tw-text-red-800 tw-text-lg" /> Máx
                Maletas: {coche.maxLuggage}
              </span>
            </div>
          </div>
        </div>
        <div className="tw-flex-1">
          <div className="tw-mb-1">
            <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white">
              Precio
            </h3>
            <p className="tw-text-3xl dark:tw-text-green-400">
              {coche.price} {coche.currency}
            </p>
          </div>
          <div className="tw-mb-3">
            <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white">
              Cancelaciones
            </h3>
            {coche.cancelations.length > 0 && (
              <div className="tw-bg-slate-100 dark:tw-bg-slate-700 tw-rounded-lg tw-p-3 tw-mt-2 tw-shadow-sm">
                {(() => {
                  const date = coche.cancelations[0];
                  const datePart =
                    date.split("-")[0] +
                    "-" +
                    date.split("-")[1] +
                    "-" +
                    date.split("-")[2];
                  const penalty = date.split("|")[1];
                  const formattedDate = new Date(datePart).toLocaleDateString();
                  return (
                    <div className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-300">
                      <p className="tw-font-semibold tw-flex tw-items-center tw-gap-1">
                        <FaCalendar className="tw-text-slate-600 dark:tw-text-slate-200" />{" "}
                        Gratis hasta {formattedDate}
                      </p>{" "}
                      Después penalización: <strong>{penalty}%</strong>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
          <div className="tw-mb-3">
            <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white">
              Tipo de Transfer
            </h3>
            <p className="tw-text-sm tw-bg-indigo-100 dark:tw-bg-indigo-900 tw-text-indigo-700 dark:tw-text-indigo-300 tw-font-medium tw-inline-block tw-py-1 tw-px-3 tw-rounded-lg tw-mt-2">
              {coche.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
