import {
  FaDoorOpen,
  FaEye,
  FaHotel,
  FaMapPin,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Imagenes from "./detalles/hoteles/Imgs";
import Estrellas from "../../../../helpers/visuales/Estrellas";
import capitalizeFirstLetterOnly from "../../../../scripts/CapitalizeFirstLetterOnly";
import FormatearFecha from "../../../../scripts/FormatearFecha";
import ModalWindow from "../../../../helpers/visuales/ModalWindow";
import calcularFechaSalida from "../../../../scripts/fechaSalidaConInicioYNoches";
function Resultado({ hoteles, neto, reserva }) {
  const [expandedHotel, setExpandedHotel] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  useEffect(() => {
    if (openModal !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
  function habitacionMasBarata(hotel) {
    if (!hotel?.ListaPrecios) return [];

    const groupedByBoard = {};
    hotel.ListaPrecios.forEach((item) => {
      if (item.NumRoom !== 0) return;
      const boardKey = item.BoardNameFiltro?.toLowerCase();
      if (!boardKey) return;
      const relatedRooms = hotel.ListaPrecios.filter((r) => r.id === item.id);
      const totalPrice = parseFloat(item.Price);
      if (
        !groupedByBoard[boardKey] ||
        totalPrice < parseFloat(groupedByBoard[boardKey].baseRoom.Price)
      ) {
        const info = {
          habitaciones: relatedRooms.length,
          pax: relatedRooms.reduce(
            (total, room) => total + Number(room.NumAdults ?? 0),
            0
          ),
          pax_ninios: relatedRooms.reduce(
            (total, room) => total + Number(room.NumChilds ?? 0),
            0
          ),
          noches: reserva.noc,
          fechaSalida: reserva.fecini,
        };
        groupedByBoard[boardKey] = {
          baseRoom: item,
          relatedRooms,
          info,
        };
      }
    });
    return Object.values(groupedByBoard);
  }
  return (
    <section>
      {hoteles.map((hotel, index) => {
        const estrella = hotel.CategoryCode.split("*").length - 1;
        const habitacion = habitacionMasBarata(hotel);
        const info = habitacion[0].info;
        const preciosAgrupados = hotel.ListaPrecios.reduce((acc, item) => {
          if (item.NumRoom !== 0) return acc;
          const boardKey = item.BoardNameFiltro?.toLowerCase();
          if (!boardKey) return acc;

          const relatedRooms = hotel.ListaPrecios.filter(
            (r) => r.id === item.id
          );
          const combinedName = relatedRooms.map((r) => r.Name).join(" + ");
          const price = parseFloat(item.Price);

          if (!acc[boardKey] || price < parseFloat(acc[boardKey].Price)) {
            acc[boardKey] = {
              ...item,
              relatedRooms,
              combinedName,
            };
          }

          return acc;
        }, {});

        const preciosOrdenados = Object.values(preciosAgrupados).sort(
          (a, b) => parseFloat(a.Price) - parseFloat(b.Price)
        );
        const fotos =
          hotel.ListFotos?.length > 2
            ? hotel.ListFotos.slice(2, 8)
            : hotel.ListFotos?.length > 0
            ? hotel.ListFotos
            : ["/placeholder/hoteles.jpg"];
        const fechaSaslida = calcularFechaSalida(reserva.fecini, reserva.noc);
        console.log(hotel.ListaPrecios.length);
        return (
          <>
            <article
              key={index}
              className="tw-gap-2 md:tw-flex tw-flex-row tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 tw-relative tw-min-h-[15vh]"
            >
              <div className="tw-w-full tw-min-h-[25vh] lg:tw-h-auto lg:tw-w-1/3 lg:tw-rounded-l-lg tw-rounded-t-lg tw-overflow-hidden">
                <Carousel
                  className="tw-h-[25vh] md:tw-h-full"
                  slide={false}
                  indicators={true}
                >
                  {fotos.map((foto, idx) => (
                    <img
                      loading="lazy"
                      key={idx}
                      src={foto}
                      alt={`Imagen ${idx + 1} de ${hotel.NombreHotel}`}
                      className="tw-h-[25vh] md:tw-h-full tw-w-full tw-object-cover"
                    />
                  ))}
                </Carousel>
                <button
                  className="transition tw-absolute tw-top-3 tw-left-2 tw-flex tw-justify-center tw-items-center tw-bg-secondary tw-text-white tw-font-medium tw-p-2 tw-rounded-full hover:tw-bg-slate-700"
                  onClick={() => setOpenModal(index)}
                >
                  <FaEye />
                </button>
              </div>

              <div className="tw-p-5 md:tw-w-2/3 tw-px-2 tw-flex tw-flex-col tw-justify-between">
                <div className="tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-pb-2">
                  <div className="tw-flex tw-justify-between tw-w-full">
                    <h4 className="tw-text-secondary tw-font-semibold">
                      {hotel.NombreHotel} -
                      {habitacion.length > 0 && (
                        <span className="tw-text-sm tw-ml-1 tw-text-slate-400 tw-font-normal">
                          {habitacion[0].baseRoom.BoardName}
                        </span>
                      )}
                    </h4>
                    <Estrellas estrellas={estrella} />
                  </div>
                  <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-text-sm tw-flex tw-items-center tw-mb-2">
                    <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                    {hotel.Dir}
                  </span>
                  <div className="tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-2 tw-text-slate-900 dark:tw-text-slate-400 tw-font-semibold tw-text-sm">
                    <span className="tw-flex tw-items-center tw-gap-1">
                      <FaHotel className="tw-text-lg" />{" "}
                      {habitacion[0].baseRoom.BoardName}
                    </span>
                    <span className="tw-flex tw-items-center">
                      <FaPerson className="tw-text-lg" /> {info.pax} adulto
                    </span>
                    <span className="tw-flex tw-items-center">
                      <FaChild className="tw-text-lg" /> {info.pax_ninios} niño
                    </span>
                    <span className="tw-flex tw-items-center">
                      <FaDoorOpen className="tw-text-lg tw-mr-1" />{" "}
                      {habitacion.length}x Hab
                    </span>
                    <span className="tw-flex tw-items-center">
                      <MdModeNight className="tw-text-lg" />
                      {info.noches} noches
                    </span>
                  </div>
                </div>
                <p className="lg:tw-text-slate-600 tw-mt-2 dark:tw-text-slate-400 tw-text-sm tw-text-slate-500 tw-line-clamp-2">
                  {hotel.ShortDesc ? hotel.ShortDesc : "Sin Descripción"}
                </p>
                <div className="tw-grid tw-grid-cols-2 lg:tw-flex tw-flex-wrap tw-justify-end tw-gap-2 tw-mt-4">
                  <button
                    className="transition tw-flex tw-justify-center tw-bg-slate-200 hover:tw-bg-slate-200/70 dark:tw-bg-slate-700 tw-text-slate-800 dark:tw-text-slate-300 tw-font-medium tw-px-4 tw-py-2 tw-rounded-lg dark:hover:tw-bg-slate-600"
                    onClick={() =>
                      setExpandedHotel(expandedHotel === index ? null : index)
                    }
                  >
                    {expandedHotel === index ? (
                      <span className="tw-flex tw-gap-1 tw-items-center">
                        <FaMinus className="tw-text-xs" /> precios
                      </span>
                    ) : (
                      <span className="tw-flex tw-gap-1 tw-items-center">
                        <FaPlus className="tw-text-xs" /> precios
                      </span>
                    )}
                  </button>
                  <ModalWindow
                    show={openModal === index}
                    onClose={() => setOpenModal(null)}
                    titulo={hotel.NombreHotel}
                    subTitulo={
                      FormatearFecha(reserva.fecini) +
                      " - " +
                      FormatearFecha(fechaSaslida)
                    }
                    body={
                      <div className="tw-space-y-6">
                        <p className="tw-leading-relaxed tw-text-slate-500 dark:tw-text-slate-400">
                          {hotel.ShortDesc}
                        </p>
                        <Imagenes imagenes={hotel.ListFotos} />
                      </div>
                    }
                  />
                  <Link
                    className={`${
                      neto === true
                        ? "tw-bg-sky-200 tw-text-sky-800 hover:tw-bg-sky-200/80 dark:tw-bg-sky-900 dark:tw-text-sky-300 hover:dark:tw-bg-sky-950"
                        : "tw-bg-secondary hover:tw-bg-secondary/90 tw-text-white "
                    } tw-font-semibold tw-px-6 tw-py-2 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-gap-2 tw-smooth`}
                    to="/hotel"
                    state={{ ...hotel, reserva }}
                  >
                    <button className="tw-flex tw-gap-1">
                      desde
                      <span>
                        {neto !== true
                          ? habitacion[0]?.baseRoom?.Price
                          : habitacion[0]?.baseRoom?.Pvp}
                        {habitacion.length > 0 &&
                          (habitacion[0].baseRoom.Currency === "EUR"
                            ? "€"
                            : habitacion[0].baseRoom.Currency)}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </article>
            {expandedHotel === index && (
              <div className="tw-relative tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-p-3 tw-mt-4 tw-mb-6 tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-3">
                {preciosOrdenados.map((precio, idx) => (
                  <div
                    key={idx}
                    className="tw-cursor-pointer tw-flex tw-flex-col tw-justify-between tw-bg-white dark:tw-bg-slate-700 tw-rounded-lg tw-shadow-sm tw-p-3 tw-text-sm tw-border tw-border-slate-200 dark:tw-border-slate-600 hover:tw-shadow-lg tw-smooth dark:hover:tw-bg-slate-800 hover:tw-border-secondary"
                  >
                    <div>
                      <p className="tw-font-medium tw-text-slate-800 dark:tw-text-white tw-flex tw-items-start tw-gap-1">
                        <span>{precio.combinedName}</span>
                      </p>
                      <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">
                        {capitalizeFirstLetterOnly(precio.BoardName)}
                        {precio.NoReembolsable === true ||
                          (precio.NoReembolsable === 1 && (
                            <span className="tw-block tw-font-semibold tw-text-red-600 dark:tw-text-red-400">
                              (No reembolsable)
                            </span>
                          ))}
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-font-semibold dark:tw-text-white">
                            <span className="tw-text-slate-400">
                              {neto === true && "neto "} desde{" "}
                            </span>
                            {neto === true ? precio.Pvp : precio.Price}
                            {precio.Currency === "EUR" ? "€" : precio.Currency}
                          </span>
                          {neto === true && (
                            <span className="tw-font-semibold dark:tw-text-white">
                              <span className="tw-text-slate-400">
                                agencia:
                              </span>
                              {precio.Price}
                              {precio.Currency === "EUR"
                                ? "€"
                                : precio.Currency}
                              <span className="tw-text-sky-800 dark:tw-text-sky-500 tw-font-semibold tw-ml-1">
                                (+
                                {parseFloat(precio.Price - precio.Pvp).toFixed(
                                  2
                                )}
                                )
                              </span>
                            </span>
                          )}
                        </div>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        );
      })}
    </section>
  );
}

export default Resultado;
