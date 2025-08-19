import PrecioRange from "../../../../../inputs/PrecioRange";
import FiltradoEstrellas from "../../../../../inputs/FiltroEstrellas";
import Regimenes from "./Filtro_Regimenes";
import { FaEuroSign } from "react-icons/fa";
import { useEffect } from "react";
function Filtrado({
  reembolsable,
  setReembolsable,
  values,
  setValues,
  minMax,
  setMinMax,
  setEstrellas,
  estrellas,
  selectedRegimenes,
  setRegimenes,
  regimenesUnicos,
  hotelName,
  setHotelName,
  setPage,
  setHoteles,
  hoteles,
  isLoading,
  isFetching,
}) {
  useEffect(() => {
    if (isLoading || isFetching) return;

    const grouped = hoteles.reduce((acc, hotel) => {
      const id = hotel.CommonId;
      if (!id) return acc;

      if (!acc[id]) acc[id] = [];
      acc[id].push(hotel);

      return acc;
    }, {});

    const mergedHotels = Object.values(grouped).map((group) => {
      if (group.length === 1) return group[0];

      return {
        ...group[0],
        ListFotos: group.flatMap((h) => h.ListFotos ?? []),
        ListaPrecios: group.flatMap((h) => h.ListaPrecios ?? []),
      };
    });

    const filtered = mergedHotels
      .map((hotel) => {
        const starCount = starsFromCategory(hotel.CategoryCode);

        const filteredPrecios =
          hotel.ListaPrecios?.filter((item) => {
            const price = parseFloat(item.Price);

            const matchesPrice =
              !isNaN(price) && price >= values[0] && price <= values[1];

            const matchesReembolsable =
              !reembolsable ||
              item.NoReembolsable === "0" ||
              item.NoReembolsable === false;

            const matchesRegimen =
              selectedRegimenes.length === 0 ||
              selectedRegimenes.includes(item.BoardNameFiltro?.toLowerCase());

            const matchesEstrellas = estrellas === 0 || starCount === estrellas;

            const matchesName =
              hotelName.trim() === "" ||
              hotel.NombreHotel?.toLowerCase().includes(
                hotelName.toLowerCase()
              );

            return (
              matchesPrice &&
              matchesReembolsable &&
              matchesRegimen &&
              matchesEstrellas &&
              matchesName
            );
          }) ?? [];

        if (filteredPrecios.length > 0) {
          return {
            ...hotel,
            ListaPrecios: filteredPrecios,
          };
        }

        return null;
      })
      .filter(Boolean);

    setHoteles(filtered);
    setPage(1);
  }, [
    values,
    estrellas,
    reembolsable,
    selectedRegimenes,
    hotelName,
    hoteles,
    isFetching,
    isLoading,
    setHoteles,
    setPage,
  ]);

  const starsFromCategory = (categoryCode) =>
    typeof categoryCode === "string" ? categoryCode.split("*").length - 1 : 0;
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-slate-400"
        >
          Nombre de hotel
        </label>
        <input
          type="text"
          id="first_name"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full"
          placeholder="Buscar por nombre"
        />
      </div>

      <div className="tw-mx-3 tw-mt-5">
        <PrecioRange
          minMax={minMax}
          setMinMax={setMinMax}
          values={values}
          setValues={setValues}
        />
      </div>

      <div className="tw-mt-8 tw-border-y-2 tw-border-slate-200/50 dark:tw-border-slate-700 tw-p-5 tw-flex tw-justify-around">
        <FiltradoEstrellas estrellas={estrellas} setEstrellas={setEstrellas} />
      </div>

      <div className="tw-mt-5 tw-flex tw-items-center tw-col-span-1 tw-gap-2">
        <label
          onClick={() => setReembolsable(!reembolsable)}
          className={`tw-select-none tw-flex tw-items-center tw-justify-between tw-gap-2 tw-px-4 tw-py-2 tw-w-full tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all ${
            reembolsable
              ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
              : "tw-bg-slate-200 dark:tw-bg-slate-700 dark:tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500"
          }`}
        >
          Reembolsable
          <FaEuroSign />
        </label>
      </div>

      <div className="tw-mt-5">
        <span className="tw-text-sm tw-font-semibold dark:tw-text-secondaryDark">
          Régimen
        </span>
        {regimenesUnicos.length > 0 ? (
          <Regimenes
            selected={selectedRegimenes}
            onChange={setRegimenes}
            regimenes={regimenesUnicos}
          />
        ) : (
          <p className="tw-text-sm tw-text-gray-400 tw-mt-2">
            No hay regímenes disponibles.
          </p>
        )}
      </div>
    </div>
  );
}

export default Filtrado;
