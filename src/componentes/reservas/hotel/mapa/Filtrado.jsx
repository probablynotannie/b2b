import { useState, useEffect } from "react";
import PrecioRange from "../../../inputs/PrecioRange";
import FiltradoEstrellas from "../../../inputs/FiltroEstrellas";

function Filtrado({
  values,
  setValues,
  minMax,
  setMinMax,
  hoteles,
  setHoteles,
  allHoteles,
}) {
  const [estrellas, setEstrellas] = useState(0);
  const [nombreHotel, setNombreHotel] = useState("");
  const [selectedRegimen, setSelectedRegimen] = useState("");
  const [reembolsable, setReembolsable] = useState("");
  const [regimenesUnicos, setRegimenesUnicos] = useState([]);
  useEffect(() => {
    const regimenesSet = new Set();
    allHoteles.forEach((hotel) => {
      hotel.ListaPrecios?.forEach((precio) => {
        if (precio?.BoardNameFiltro)
          regimenesSet.add(precio.BoardNameFiltro.toLowerCase());
      });
    });
    setRegimenesUnicos(Array.from(regimenesSet).sort());
  }, [allHoteles]);
  useEffect(() => {
    const filtered = allHoteles.filter((hotel) => {
      if (!hotel?.Lat || !hotel?.Long) return false;
      const matchesName =
        nombreHotel.trim() === "" ||
        hotel.NombreHotel?.toLowerCase().includes(nombreHotel.toLowerCase());
      const matchesEstrellas =
        estrellas === 0 ||
        estrellas ===
          (hotel.Estrellas || starsFromCategory(hotel.CategoryCode));
      const matchesListaPrecios = hotel.ListaPrecios?.some((item) => {
        const price = parseFloat(item.Price);
        const matchesPrice =
          !isNaN(price) && price >= values[0] && price <= values[1];

        const matchesReembolsable =
          reembolsable === ""
            ? true
            : reembolsable === "true"
            ? item?.NoReembolsable === "0" || item?.NoReembolsable === false
            : item?.NoReembolsable === "1" || item?.NoReembolsable === true;

        const matchesRegimen =
          selectedRegimen === ""
            ? true
            : item?.BoardNameFiltro?.toLowerCase() ===
              selectedRegimen.toLowerCase();

        return matchesPrice && matchesReembolsable && matchesRegimen;
      });

      return matchesName && matchesEstrellas && matchesListaPrecios;
    });

    setHoteles(filtered);
  }, [
    values,
    estrellas,
    reembolsable,
    selectedRegimen,
    nombreHotel,
    allHoteles,
    setHoteles,
  ]);

  const starsFromCategory = (categoryCode) =>
    typeof categoryCode === "string" ? categoryCode.split("*").length - 1 : 0;
  return (
    <section className="tw-w-full tw-my-5 tw-bg-slate-100 tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-rounded-2xl tw-p-6 tw-shadow hover:tw-shadow-md tw-smooth tw-space-y-6">
      <div className="tw-flex tw-justify-between">
        <h2 className="tw-text-2xl tw-font-semibold tw-text-gray-800 dark:tw-text-white">
          Filtrar hoteles
        </h2>
        <div className="tw-flex">
          <FiltradoEstrellas
            estrellas={estrellas}
            setEstrellas={setEstrellas}
          />
        </div>
      </div>

      <div className="tw-grid md:tw-grid-cols-3 tw-gap-5">
        {/* Nombre */}
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Nombre del hotel
          </label>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={nombreHotel}
            onChange={(e) => setNombreHotel(e.target.value)}
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
            onChange={(e) => setSelectedRegimen(e.target.value)}
            className="tw-w-full tw-border dark:tw-bg-slate-700 tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          >
            <option value="">Todos los regímenes</option>
            {regimenesUnicos.map((r) => (
              <option key={r} value={r}>
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-1">
          <label className="tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-200">
            Reembolsable
          </label>
          <select
            value={reembolsable}
            onChange={(e) => setReembolsable(e.target.value)}
            className="tw-w-full tw-border dark:tw-bg-slate-700 tw-border-slate-300 dark:tw-border-slate-600 tw-rounded-md tw-px-3 tw-py-2 tw-text-gray-900 dark:tw-text-gray-100"
          >
            <option value="">Todos</option>
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </div>
      </div>

      <div className="tw-mt-4 tw-flex tw-items-end">
        <div className="tw-flex-1 tw-min-w-[250px] ">
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
