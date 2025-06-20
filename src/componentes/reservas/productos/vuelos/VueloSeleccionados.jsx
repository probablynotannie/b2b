import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import cestaZustand from "../../../estructura/cesta/Zustand";
import AnadirMasProductos from "../../../../helpers/visuales/masProductos/AnadirMasProductos";
import formatearFecha from "../../../../helpers/FormatearFecha";
import { useNavigate } from "react-router-dom";
function Vuelos({ ida, vuelta, cesta }) {
  const navigate = useNavigate();
  const [modalMasProductos, setModalMasProductos] = useState(false);
  const confirmacion = () => {
    setModalMasProductos(true);
  };
  const sinProductosAdicionales = () => {
    navigate("/datosVuelo", {
      state: {
        ida,
        vuelta,
        pax,
      },
    });
  };

  const anadirProducto = cestaZustand((state) => state.anadirProducto);
  const pax = 2;
  const aniadirMas = () => {
    anadirProducto({
      ida,
      vuelta,
      fecha: vueloIda + (vueloVuelta ? ` - ${vueloVuelta}` : ""),
      titulo: "ida" + (vuelta ? " y vuelta" : ""),
      ubicacion: ida.flight.departure + " - " + ida.flight.arrival,
      img: "/banners/banner_avion.webp",
      precio: ida.flight.precio + (vuelta ? vuelta.flight.precio : 0),
      pax: pax,
      type: 11,
    });
    setModalMasProductos(false);
  };
  if (!ida) {
    return (
      <div className="flex justify-center items-center h-[10vh]">
        <p className="text-lg text-gray-500">Cargando...</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("es-ES", options);
  };

  const duracion = (horaSalida, horaLlegada) => {
    const fechaReferencia = new Date("2024-11-01");
    const [salidaHours, salidaMinutes] = horaSalida.split(":").map(Number);
    const [llegadaHours, llegadaMinutes] = horaLlegada.split(":").map(Number);
    const salidaDate = new Date(
      fechaReferencia.setHours(salidaHours, salidaMinutes, 0, 0)
    );
    const llegadaDate = new Date(
      fechaReferencia.setHours(llegadaHours, llegadaMinutes, 0, 0)
    );
    if (llegadaDate < salidaDate) {
      llegadaDate.setDate(llegadaDate.getDate() + 1);
    }
    const duration = llegadaDate - salidaDate;
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const vueloIda = formatDate(ida.flight.outboundDate);
  const vueloVuelta = vuelta ? formatDate(vuelta.flight.returnDate) : null;

  return (
    <div className="tw-mb-5">
      {cesta !== true && (
        <div className="tw-flex tw-justify-between">
          <h3 className="tw-text-secondary tw-font-semibold tw-text-lg tw-mb-3">
            Vuelo seleccionado
            <span>
              ({ida.flight.precio + (vuelta ? vuelta.flight.precio : 0)}€)
            </span>
          </h3>

          <button
            onClick={confirmacion}
            className="tw-bg-slate-500 tw-font-bold tw-text-white tw-px-2 tw-p-1 tw-rounded-lg"
          >
            Reservar
          </button>
        </div>
      )}
      <div className="tw-mt-10 sm:tw-block tw-grid tw-grid-cols-2 tw-shadow tw-rounded-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-700">
        <div className="tw-border-slate-100 tw-rounded-t-xl dark:tw-bg-slate-800">
          <div
            className={`tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-5 tw-p-2 md:tw-p-5 tw-bg-white dark:tw-bg-slate-800 hover:tw-bg-slate-100 sm:tw-rounded-t-xl dark:hover:tw-bg-slate-900 tw-transition tw-relative tw-border-r-2 sm:tw-border-r-0 sm:tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-600`}
          >
            <span className="tw-absolute -tw-top-5 tw-left-3 tw-p-2 tw-text-2xl tw-bg-white dark:tw-bg-slate-800 tw-border-2 tw-border-slate-700 dark:tw-border-slate-500 tw-text-slate-700 dark:tw-text-slate-500 tw-rounded-full">
              <FaPlaneDeparture />
            </span>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center dark:tw-text-slate-400">
              <img
                src={ida.flight.logo}
                alt="logo aerolinea"
                className="tw-w-[50px] tw-h-[30px]"
              />
              <span className="tw-text-sm">{ida.flight.aerolinea}</span>
              <span className="tw-text-green-700 dark:tw-text-green-400 tw-font-bold">
                {ida.flight.precio} €
              </span>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center dark:tw-text-slate-200">
              <h4 className="tw-font-semibold">
                {ida.flight.departure} - {ida.flight.arrival}
              </h4>
              <span className="tw-text-xs sm:tw-text-sm tw-text-center">
                {vueloIda}
              </span>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center dark:tw-text-slate-200">
              <h4 className="tw-font-semibold">Duración</h4>
              <span className="tw-text-sm">
                {duracion(ida.flight.departure, ida.flight.arrival)}
              </span>
            </div>
            <div className="tw-text-sm tw-flex tw-flex-row tw-justify-between tw-items-center">
              <div className="tw-text-center tw-flex tw-flex-col tw-items-center tw-w-full">
                <span className="tw-font-bold tw-text-green-700 dark:tw-text-green-400">
                  {ida.flight.escalas > 0
                    ? `${ida.flight.escalas} ${
                        ida.flight.escalas > 1 ? "Escalas" : "Escala"
                      }`
                    : "Directo"}
                </span>
              </div>
            </div>
          </div>
        </div>
        {vuelta && (
          <div className="tw-rounded-b-xl dark:tw-bg-slate-800">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-5 tw-p-2 md:tw-p-5 tw-bg-white dark:tw-bg-slate-800 hover:tw-bg-slate-100 sm:tw-rounded-b-xl dark:hover:tw-bg-slate-900 tw-transition tw-relative">
              <span className="tw-absolute -tw-bottom-5 tw-right-3 tw-p-2 tw-text-2xl tw-bg-white dark:tw-bg-slate-800 tw-border-2 tw-border-slate-700 dark:tw-border-slate-500 tw-text-slate-700 dark:tw-text-slate-500 tw-rounded-full">
                <FaPlaneArrival />
              </span>
              <div className="tw-flex tw-flex-col tw-items-center tw-justify-center dark:tw-text-slate-400">
                <img
                  src={vuelta.flight.logo}
                  alt="logo aerolinea"
                  className="tw-w-[50px] tw-h-[30px]"
                />
                <span className="tw-text-sm">{vuelta.flight.aerolinea}</span>
                <span className="tw-text-green-700 dark:tw-text-green-400 tw-font-bold">
                  {vuelta.flight.precio} €
                </span>
              </div>
              <div className="tw-flex tw-flex-col tw-items-center dark:tw-text-slate-200">
                <h4 className="tw-font-semibold">
                  {vuelta.flight.departure} - {vuelta.flight.arrival}
                </h4>
                <span className="tw-text-xs sm:tw-text-sm tw-text-center">
                  {vueloVuelta}
                </span>
              </div>
              <div className="tw-flex tw-flex-col tw-items-center dark:tw-text-slate-200">
                <h4 className="tw-font-semibold">Duración</h4>
                <span className="tw-text-sm">
                  {duracion(vuelta.flight.departure, vuelta.flight.arrival)}
                </span>
              </div>
              <div className="tw-text-sm tw-flex tw-flex-row tw-justify-between tw-items-center">
                <div className="tw-text-center tw-flex tw-flex-col tw-items-center tw-w-full">
                  <span className="tw-font-bold tw-text-green-700 dark:tw-text-green-400">
                    {vuelta.flight.escalas > 0
                      ? `${vuelta.flight.escalas} ${
                          vuelta.flight.escalas > 1 ? "Escalas" : "Escala"
                        }`
                      : "Directo"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <AnadirMasProductos
        isOpen={modalMasProductos}
        setModalMasProductos={setModalMasProductos}
        masProductos={aniadirMas}
        onConfirm={sinProductosAdicionales}
      />
    </div>
  );
}

export default Vuelos;
