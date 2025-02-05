import { FaChevronRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import FormatearFecha from "../../estructura/FormatearFecha";
function Resultado({ destinos }) {
  const encontrarPrecioMasBajo = (tarifas) => {
    let precioMasBajo = Infinity;

    tarifas.forEach((tarifa) => {
      const precio = parseFloat(tarifa.precio);
      if (precio < precioMasBajo) precioMasBajo = precio;
    });
    return precioMasBajo === Infinity ? "No disponible" : `${precioMasBajo}€`;
  };
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
  return (
    <section className="tw-pb-12">
      {destinos.map((destino, index) => {
        const precioMasBajo = encontrarPrecioMasBajo(destino.tarifas);
        const proximaSalida = FormatearFecha(
          encontrarProximaSalida(destino.tarifas)
        );
        return (
          <article
            key={index}
            className="dark:tw-bg-slate-800 tw-bg-slate-100 tw-shadow-xl tw-border-2 dark:tw-border-slate-700 tw-rounded-xl tw-transition tw-mt-5 lg:tw-mt-10 tw-relative"
          >
            <div className="tw-min-h-[28vh] tw-border-t-2 tw-border-secondary tw-rounded-tr-xl tw-rounded-tl-xl tw-max-h-[45vh] tw-flex tw-relative">
              <div className="tw-absolute tw-bottom-0 tw-w-full tw-bg-red-700 dark:tw-bg-red-900 tw-bg-opacity-90 tw-text-white tw-font-bold tw-px-5">
                Proxima salida: {proximaSalida}
              </div>
              {destino.barco.img_header_embarcacion &&
              destino.barco.img_header_embarcacion !== "" &&
              destino.barco.img_header_embarcacion !==
                destino.itin_dias[0].puerto.img_puerto_header ? (
                <div
                  className="tw-transition-all tw-rounded-tl-xl tw-duration-300 tw-w-full sm:tw-w-[33.33%] hover:tw-w-[50%] tw-min-h-[20vh] tw-border-lg tw-max-h-[45vh] tw-bg-cover tw-bg-center tw-flex tw-justify-center tw-items-center"
                  style={{
                    backgroundImage: `url('//pic-2.vpackage.net/cruceros_img/${destino.barco.img_header_embarcacion}')`,
                  }}
                >
                  <div className="md:tw-text-xl tw-font-semibold tw-text-white tw-bg-slate-800 tw-bg-opacity-45 tw-rounded-tl-xl tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
                    {destino.barco.nombre.texto}
                  </div>
                </div>
              ) : (
                <></>
              )}

              {destino.itin_dias
                .filter((destination) => destination.puerto.img_puerto_header)
                .filter(
                  (destination, index, self) =>
                    self.findIndex(
                      (d) => d.puerto.id_puerto === destination.puerto.id_puerto
                    ) === index
                )
                .slice(0, 4)
                .map((destination, index, array) => {
                  const imageWidth = 100 / array.length;
                  const hoverWidth = imageWidth + 10;
                  const isLast = index === array.length - 1;
                  console.log(destination);
                  return (
                    <div
                      key={destination.puerto.id_puerto}
                      className={`tw-transition-all tw-duration-300 tw-min-h-[20vh] tw-border-lg dark:tw-border-slate-800 tw-max-h-[45vh] tw-bg-cover tw-bg-center tw-flex tw-justify-center tw-items-center ${
                        isLast ? "tw-rounded-tr-lg" : ""
                      }`}
                      style={{
                        backgroundImage: `url('//pic-2.vpackage.net/cruceros_img/${destination.puerto.img_puerto_header}')`,
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
                      <div className="md:tw-text-xl tw-text-white tw-bg-slate-800 tw-font-bold tw-text-center tw-bg-opacity-45 tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
                        {destination.puerto.name} {destination.puerto.id_puerto}
                      </div>
                    </div>
                  );
                })}
            </div>
            <Link to="/crucero" state={destino}>
              <div className="tw-px-5 tw-py-3 ">
                <h4 className="tw-font-semibold tw-text-lg dark:tw-text-slate-100">
                  {destino.itinerario.name}
                </h4>
                <p className="tw-text-sm tw-text-slate-400 dark:tw-text-slate-300">
                  {destino.itinerario.name}
                </p>
                <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-my-3 tw-line-clamp-3">
                  {destino.barco.descripcion}
                </p>
              </div>
              <div className="tw-px-5 tw-grid xs:tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-3 xl:tw-grid-cols-5 tw-gap-5 md:tw-gap-10">
                {destino.tarifas.slice(0, 8).map((tarifa) => {
                  const proximaSalida = new Date(
                    tarifa.fecha
                  ).toLocaleDateString();
                  return (
                    <div key={tarifa.id}>
                      <h5 className="tw-text-slate-700 tw-font-bold dark:tw-text-slate-300 tw-text-center tw-text-sm">
                        {tarifa.Camarotes.name}
                      </h5>
                      <div className="tw-text-sm tw-bg-slate-200 xs:tw-w-fit tw-px-12 md:tw-px-16 dark:tw-bg-slate-900 dark:tw-border-slate-800 tw-flex tw-justify-center tw-items-center tw-flex-col  tw-border tw-border-slate-200 tw-rounded-lg">
                        <span className="tw-font-bold tw-text-xs">
                          {proximaSalida}
                        </span>
                        <p className="tw-text-center tw-text-green-700 tw-flex-col dark:tw-text-green-500 tw-font-bold">
                          {tarifa.precio}€
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Link>
            <div className="tw-flex tw-justify-end tw-mt-5">
              <Link to="/crucero" state={destino}>
                <button className="tw-bg-slate-700 dark:tw-bg-slate-900 tw-text-white tw-p-2 tw-rounded-br-lg">
                  Desde {precioMasBajo}
                  <span className="tw-text-xs  tw-flex tw-items-center tw-gap-1">
                    + tasas <FaChevronRight />
                  </span>
                </button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Resultado;
