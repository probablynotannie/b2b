import { Link } from "react-router-dom";
import FormatearFecha from "../../../assets/scripts/formatearFecha" ;
import { slugify } from "../../../assets/scripts/slugify";

function Listado({ destinos }) {
  const encontrarProximaSalida = (tarifas) => {
    const tarifasValidas = tarifas.filter((tarifa) => tarifa.fecha);
    if (tarifasValidas.length === 0) return "No disponible";
    const proximaTarifa = tarifasValidas
      .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
      .shift();
    return proximaTarifa
      ? new Date(proximaTarifa.fecha).toLocaleDateString()
      : "No disponible";
  };

  function obtenerTarifasMinimasPorFecha(tarifas) {
    const tarifasMinimas = {};
    tarifas.forEach((tarifa) => {
      const fecha = tarifa.fecha;
      const precioActual = parseFloat(tarifa.precio);

      if (
        !tarifasMinimas[fecha] ||
        precioActual < parseFloat(tarifasMinimas[fecha].precio)
      ) {
        tarifasMinimas[fecha] = tarifa;
      }
    });
    const resultado = Object.values(tarifasMinimas).sort(
      (a, b) => new Date(a.fecha) - new Date(b.fecha)
    );
    return resultado;
  }

  return (
    <section className="tw-pb-12">
      {destinos.map((destino, index) => {
        const tarifasAMostrar = Array.isArray(destino.tarifas)
          ? obtenerTarifasMinimasPorFecha(destino.tarifas)
          : [];
        const proximaSalida = FormatearFecha(
          encontrarProximaSalida(destino.tarifas)
        );
        const firstItinDiaWithImg = destino.itin_dias.find(
          (d) => d.puerto?.img_puerto_header?.trim() !== ""
        );

        const backgroundImg = firstItinDiaWithImg
          ? firstItinDiaWithImg.puerto.img_puerto_header
          : "/cruceros/mediterraneo.jpg";
        const puertoName = firstItinDiaWithImg
          ? firstItinDiaWithImg.puerto.name
          : "Destino";

        return (
          <article
            key={index}
            className="tw-overflow-hidden dark:tw-bg-slate-800 tw-bg-slate-100 tw-shadow hover:tw-shadow-lg tw-duration-300 tw-border-2 dark:tw-border-slate-700 tw-rounded-xl tw-transition tw-relative tw-mb-10"
          >
            <div className="tw-min-h-[28vh] tw-border-t-2 tw-border-secondary tw-rounded-tl-xl tw-max-h-[45vh] tw-flex tw-relative">
              <div className="tw-absolute tw-z-10 tw-bottom-0 tw-w-full tw-bg-red-700 dark:tw-bg-red-900 tw-bg-opacity-90 tw-text-white tw-font-bold tw-px-5">
                Próxima salida: {proximaSalida}
              </div>
              <div
                className="tw-w-full tw-min-h-[20vh] tw-bg-cover tw-bg-center tw-flex tw-justify-center tw-items-center sm:tw-hidden"
                style={{
                  backgroundImage: `url('//pic-2.vpackage.net/cruceros_img/${backgroundImg}')`,
                }}
              >
                <div className="tw-text-white tw-bg-slate-800 tw-bg-opacity-45 tw-font-bold tw-text-center tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
                  {puertoName}
                </div>
              </div>
              <div className="tw-hidden sm:tw-flex tw-w-full">
                {/* Barco */}
                {destino.barco.img_header_embarcacion &&
                destino.barco.img_header_embarcacion.trim() !== "" &&
                destino.barco.img_header_embarcacion !==
                  destino.itin_dias[0]?.puerto?.img_puerto_header ? (
                  <div className="tw-relative tw-transition-all tw-rounded-tl-xl tw-duration-300 tw-w-full sm:tw-w-[33.33%] hover:tw-w-[50%] tw-min-h-[20vh] tw-max-h-[45vh] tw-overflow-hidden">
                    <img
                      src={`//pic-2.vpackage.net/cruceros_img/${destino.barco.img_header_embarcacion}`}
                      alt={destino.barco.nombre.texto}
                      loading="lazy"
                      className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                    />
                    <div className="md:tw-text-xl tw-font-semibold tw-text-white tw-bg-slate-800 tw-bg-opacity-45 tw-rounded-tl-xl tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col tw-relative">
                      {destino.barco.nombre.tfexto}
                    </div>
                  </div>
                ) : null}

                {/* Puerto */}
                {destino.itin_dias
                  .filter(
                    (destination) =>
                      destination.puerto?.img_puerto_header &&
                      destination.puerto.name?.toLowerCase() !== "navegacion"
                  )
                  .filter(
                    (destination, i, self) =>
                      self.findIndex(
                        (d) =>
                          d.puerto.id_puerto === destination.puerto.id_puerto
                      ) === i
                  )
                  .slice(0, 4)
                  .map((destination, i, arr) => {
                    const imageWidth = 100 / arr.length;
                    const hoverWidth = imageWidth + 10;
                    const isLast = i === arr.length - 1;

                    return (
                      <div
                        key={destination.puerto.id_puerto}
                        className={`tw-relative tw-transition-all tw-duration-300 tw-min-h-[20vh] tw-max-h-[45vh] tw-overflow-hidden ${
                          isLast ? "tw-rounded-tr-lg" : ""
                        }`}
                        style={{
                          width: `${imageWidth}%`,
                          transition: "width 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.width = `${hoverWidth}%`)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.width = `${imageWidth}%`)
                        }
                      >
                        <img
                          src={`//pic-2.vpackage.net/cruceros_img/${destination.puerto.img_puerto_header}`}
                          alt={destination.puerto.name}
                          loading="lazy"
                          className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                        />
                        <div className="md:tw-text-xl tw-text-white tw-bg-slate-800 tw-font-bold tw-text-center tw-bg-opacity-45 tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col tw-relative">
                          {destination.puerto.name}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <Link
              to={`/crucero/${destino.id_crucero}/${slugify(
                destino.itinerario.name
              )}`}
            >
              <div className="tw-px-5 tw-py-3">
                <div className="tw-flex tw-justify-between tw-items-center">
                  <div>
                    <h4 className="tw-font-semibold tw-text-lg dark:tw-text-slate-100">
                      {destino.itinerario.name} ({destino.num_dias} días y{" "}
                      {destino.num_noches} noches)
                    </h4>
                    <p className="tw-text-sm tw-text-slate-400 dark:tw-text-slate-300">
                      {destino.itinerario.name}
                    </p>
                  </div>
                  <img
                    className="tw-w-[70px] tw-h-[50px] tw-object-contain tw-rounded-md tw-shadow hover:tw-shadow-md tw-smooth hover:tw-scale-105"
                    src={
                      "//pic-2.vpackage.net/cruceros_img/" +
                      destino.naviera.img_naviera
                    }
                    alt="logoNaviera"
                  />
                </div>

                <div className="tw-flex tw-gap-3">
                  {destino.pax2ADRestrin === 1 && (
                    <div className="tw-p-1 tw-text-white tw-rounded-sm tw-shadow tw-mb-3 tw-w-fit tw-bg-blue-400 tw-text-xs tw-font-semibold">
                      Restringida a dos personas
                    </div>
                  )}
                  <div>
                    {destino.tarifas[0].fecha ===
                    destino.tarifas[destino.tarifas.length - 1].fecha ? (
                      <span className="tw-p-1 tw-text-white tw-rounded-sm tw-shadow tw-mb-3 tw-w-fit tw-bg-pink-400 tw-text-xs tw-font-semibold">
                        Fecha disponible:{" "}
                        {FormatearFecha(
                          new Date(
                            destino.tarifas[0].fecha
                          ).toLocaleDateString()
                        )}{" "}
                      </span>
                    ) : (
                      <span className="tw-p-1 tw-text-white tw-rounded-sm tw-shadow tw-mb-3 tw-w-fit tw-bg-blue-400 tw-text-xs tw-font-semibold">
                        Fechas disponibles de{" "}
                        {FormatearFecha(
                          new Date(
                            destino.tarifas[0].fecha
                          ).toLocaleDateString()
                        )}{" "}
                        a{" "}
                        {FormatearFecha(
                          new Date(
                            destino.tarifas[destino.tarifas.length - 1].fecha
                          ).toLocaleDateString()
                        )}
                      </span>
                    )}
                  </div>
                </div>
                <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-my-3 tw-line-clamp-3">
                  {destino.barco.descripcion}
                </p>
                <div className="tw-flex tw-flex-wrap tw-justify-center sm:tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 xl:tw-grid-cols-8 tw-gap-3 tw-py-2">
                  {tarifasAMostrar.slice(0, 7).map((tarifa) => (
                    <div
                      key={tarifa.id_camarote}
                      className="tw-bg-white dark:tw-bg-slate-700 dark:hover:tw-bg-slate-900 tw-smooth tw-border dark:tw-border-slate-700 tw-border-slate-200 dark:tw-text-slate-300 tw-p-3 tw-rounded-lg tw-shadow-sm"
                    >
                      <p className="tw-font-semibold">{tarifa.precio}€</p>
                      <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                        {FormatearFecha(tarifa.fecha)}
                      </p>
                    </div>
                  ))}
                  {tarifasAMostrar.length > 7 && (
                    <div className="tw-px-8 tw-bg-white dark:tw-bg-slate-700 dark:hover:tw-bg-slate-900 tw-smooth tw-border dark:tw-border-slate-700 tw-border-slate-200 dark:tw-text-slate-300 tw-p-3 tw-rounded-lg tw-shadow-sm tw-flex tw-justify-center tw-items-center">
                      y más ...
                    </div>
                  )}
                </div>
              </div>
            </Link>
            <div className="tw-flex tw-justify-end tw-mt-5">
              <Link
                to={`/crucero/${destino.id_crucero}/${slugify(
                  destino.itinerario.name
                )}`}
              >
                <button className="tw-bg-slate-700 dark:tw-bg-slate-900 tw-text-white tw-p-2 tw-py-3 tw-rounded-br-lg tw-rounded-tl-lg">
                  Desde {destino.minPrice}€
                </button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Listado;
