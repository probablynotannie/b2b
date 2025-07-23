import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import fetchCrucerosDestacados from "./hook/fetchCrucerosDestacados";
import formatearFecha from "../../../../../helpers/FormatearFecha";
import Placeholder from "./placeholders/Cruceros";
import { Link } from "react-router-dom";
import { slugify } from "../../../../../helpers/slugify";
function Cruceros_destacados() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cruceros_destacados"],
    queryFn: fetchCrucerosDestacados,
    refetchInterval: 10_000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
  });

  /* 
  https://devxml-2.vpackage.net/FrontCruceros/api/crucerosDestacados?json=1&debug=0&idv=207
  */
  console.log(!isLoading && data.cruceros[3]);
  return (
    <div className="tw-mb-6">
      {!isLoading && !isError ? (
        <div className="tw-columns-1 md:tw-columns-2 lg:tw-columns-4 tw-gap-6">
          {data.cruceros.slice(0, 10).map((crucero, index) => {
            const tarifas = crucero.tarifas || [];
            if (tarifas.length === 0) return null;
            const fechaInicio = formatearFecha(
              new Date(tarifas[0].fecha).toLocaleDateString()
            );
            const fechaFin = formatearFecha(
              new Date(tarifas[tarifas.length - 1].fecha).toLocaleDateString()
            );

            return (
              <div
                key={index}
                className="tw-mb-6 tw-break-inside-avoid tw-overflow-hidden tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-sm hover:tw-shadow-lg tw-transition tw-duration-300"
              >
                <Link
                  to={`/crucero/${crucero.id_crucero}/${slugify(
                    crucero.itinerario.name
                  )}`}
                >
                  {(crucero.barco.img_header_embarcacion ||
                    crucero.puerto.img_puerto_header) && (
                    <img
                      src={
                        crucero.puerto.img_puerto_header
                          ? `//pic-2.vpackage.net/cruceros_img/${crucero.puerto.img_puerto_header}`
                          : `//pic-2.vpackage.net/cruceros_img/${crucero.barco.img_header_embarcacion}`
                      }
                      alt="imagen crucero"
                      className="tw-h-[25vh] tw-w-full tw-object-cover"
                    />
                  )}

                  <div className="tw-p-5 tw-flex tw-flex-col tw-justify-between tw-h-full">
                    <div>
                      <h5 className="tw-text-xl tw-font-bold tw-text-slate-900 dark:tw-text-white">
                        {crucero.itinerario.name.replace(/,\s*/g, ", ")}
                      </h5>
                      <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-300">
                        {crucero.num_dias} días / {crucero.num_noches} noches
                        desde {crucero.puerto.name}
                      </p>

                      <p className="tw-mt-2 tw-text-slate-600 dark:tw-text-slate-400">
                        {fechaInicio === fechaFin
                          ? `Fecha: ${fechaInicio}`
                          : `Fechas: ${fechaInicio} – ${fechaFin}`}
                      </p>
                    </div>

                    <div className="tw-mt-4 tw-flex tw-items-center tw-justify-between">
                      <span className="tw-text-lg tw-font-semibold tw-text-secondary dark:tw-text-secondarydark">
                        Desde {crucero.minPrice}€
                      </span>
                      <button className="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-secondary dark:tw-text-secondarydark hover:tw-underline">
                        Ver más <FaLongArrowAltRight className="tw-ml-2" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}

export default Cruceros_destacados;
