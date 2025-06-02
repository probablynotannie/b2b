import { useState } from "react";
import { FaStar } from "react-icons/fa";

const regimenOptions = [
  "Solo alojamiento",
  "Alojamiento y desayuno",
  "Pensión completa",
];

const cityOptions = [
  "Alicante",
  "Almería",
  "Badajoz",
  "Barcelona",
  "Bilbao",
  "Cádiz",
  "Córdoba",
  "Granada",
  "Gijón",
  "Huelva",
  "La Coruña",
  "León",
  "Madrid",
  "Málaga",
  "Murcia",
  "Palma de Mallorca",
  "Salamanca",
  "San Sebastián",
  "Santiago de Compostela",
  "Sevilla",
  "Tarragona",
  "Toledo",
  "Valencia",
  "Vigo",
  "Zaragoza",
];

function Filtrado({ onFilterChange }) {
  const [estrellas, setEstrellas] = useState(0);
  const [nombreHotel, setNombreHotel] = useState("");
  const [selectedRegimen, setSelectedRegimen] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [reembolsable, setReembolsable] = useState(false);

  const updateFilters = (newFields = {}) => {
    onFilterChange?.({
      stars: estrellas,
      name: nombreHotel,
      regimen: selectedRegimen,
      city: ciudad,
      reembolsable,
      ...newFields,
    });
  };

  return (
    <section className="tw-w-full tw-my-5 tw-mb-10 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-bg-white dark:tw-bg-slate-800 tw-rounded-lg tw-p-6 tw-shadow-md">
      <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800 dark:tw-text-white tw-mb-4">
        Filtrado
      </h2>
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-flex-wrap tw-gap-5">
        <div className="tw-flex-1 min-w-[200px]">
          <label className="tw-block tw-mb-1 tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Nombre del hotel
          </label>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={nombreHotel}
            onChange={(e) => {
              const name = e.target.value;
              setNombreHotel(name);
              updateFilters({ name });
            }}
            className="tw-w-full tw-border dark:tw-bg-slate-700 dark:tw-placeholder-slate-400 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          />
        </div>

        <div className="tw-flex-1 min-w-[200px]">
          <label className="tw-block tw-mb-1 tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Régimen
          </label>
          <select
            value={selectedRegimen}
            onChange={(e) => {
              const regimen = e.target.value;
              setSelectedRegimen(regimen);
              updateFilters({ regimen });
            }}
            className="tw-w-full tw-border dark:tw-bg-slate-700 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          >
            <option value="">Todos los regímenes</option>
            {regimenOptions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="tw-flex-1 min-w-[200px]">
          <label className="tw-block tw-mb-1 tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Ciudad
          </label>
          <select
            value={ciudad}
            onChange={(e) => {
              const city = e.target.value;
              setCiudad(city);
              updateFilters({ city });
            }}
            className="tw-w-full tw-border dark:tw-bg-slate-700 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          >
            <option value="">Todas las ciudades</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="tw-flex tw-justify-between">
          <div className="tw-flex tw-flex-col tw-gap-2 tw-mt-1">
            <label className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
              Estrellas
            </label>
            <div className="tw-flex tw-items-center tw-gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={20}
                  onClick={() => {
                    const newStars = star === estrellas ? 0 : star;
                    setEstrellas(newStars);
                    updateFilters({ stars: newStars });
                  }}
                  className={`tw-cursor-pointer ${
                    star <= estrellas
                      ? "tw-text-orange-400"
                      : "tw-text-gray-300 dark:tw-text-gray-600"
                  }`}
                  title={`${star} estrella${star > 1 ? "s" : ""} o más`}
                />
              ))}
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-items-end tw-gap-3 ">
            <span className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
              Reembolsable
            </span>
            <button
              aria-label="Reembolsable"
              onClick={() => {
                const newValue = !reembolsable;
                setReembolsable(newValue);
                updateFilters({ reembolsable: newValue });
              }}
              className={`tw-relative tw-ml-2 tw-inline-flex tw-items-center tw-h-6 tw-rounded-full tw-w-11 tw-transition-colors ${
                reembolsable
                  ? "tw-bg-secondary dark:tw-bg-secondaryDark"
                  : "tw-bg-gray-300 dark:tw-bg-gray-600"
              }`}
            >
              <span
                className={`tw-inline-block tw-w-4 tw-h-4 tw-transform tw-bg-white tw-rounded-full tw-transition-transform ${
                  reembolsable ? "tw-translate-x-6" : "tw-translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filtrado;
