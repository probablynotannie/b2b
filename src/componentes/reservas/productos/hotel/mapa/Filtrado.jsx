import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PrecioRange from "../../../../inputs/PrecioRange";

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

function Filtrado({ onFilterChange, values, setValues, minMax, setMinMax }) {
  const [hoveredStar, setHoveredStar] = useState(0);
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
    <section className="tw-w-full tw-my-5 tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-rounded-2xl tw-p-6 tw-shadow-md tw-space-y-6">
      <div className="tw-flex tw-justify-between">
        <h2 className="tw-text-2xl tw-font-semibold tw-text-gray-800 dark:tw-text-white">
          Filtrar hoteles
        </h2>
        <div className="tw-flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={20}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => {
                const newStars = star === estrellas ? 0 : star;
                setEstrellas(newStars);
                updateFilters({ stars: newStars });
              }}
              className={`tw-cursor-pointer tw-transition-colors ${
                hoveredStar >= star
                  ? "tw-text-orange-400"
                  : estrellas >= star
                  ? "tw-text-orange-400"
                  : "tw-text-gray-300 dark:tw-text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Text & Select Inputs */}
      <div className="tw-grid md:tw-grid-cols-4 tw-gap-5">
        {/* Nombre */}
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
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
            className="tw-w-full tw-border dark:tw-bg-slate-700 dark:tw-placeholder-slate-400 tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          />
        </div>

        {/* Régimen */}
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Régimen
          </label>
          <select
            value={selectedRegimen}
            onChange={(e) => {
              const regimen = e.target.value;
              setSelectedRegimen(regimen);
              updateFilters({ regimen });
            }}
            className="tw-w-full tw-border dark:tw-bg-slate-700 tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          >
            <option value="">Todos los regímenes</option>
            {regimenOptions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Ciudad */}
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Ciudad
          </label>
          <select
            value={ciudad}
            onChange={(e) => {
              const city = e.target.value;
              setCiudad(city);
              updateFilters({ city });
            }}
            className="tw-w-full tw-border dark:tw-bg-slate-700 tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          >
            <option value="">Todas las ciudades</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Reembolsable
          </label>
          <select
            value={
              reembolsable ? "true" : reembolsable === false ? "false" : ""
            }
            onChange={(e) => {
              const val = e.target.value;
              const parsed =
                val === "true" ? true : val === "false" ? false : "";
              setReembolsable(parsed);
              updateFilters({ reembolsable: parsed });
            }}
            className="tw-w-full tw-border dark:tw-bg-slate-700 tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          >
            <option value="">Todos</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <div className="tw-mt-4 tw-flex tw-items-end">
        <div className="tw-flex-1 tw-min-w-[250px] tw-max-w-[400px]">
          <PrecioRange
            minMax={minMax}
            setMinMax={setMinMax}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </section>
  );
}

export default Filtrado;
