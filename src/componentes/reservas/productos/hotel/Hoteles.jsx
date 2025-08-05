import { FaDoorOpen, FaHotel, FaMapPin } from "react-icons/fa";
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

function Resultado({ hoteles }) {
  console.log(hoteles);
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

    const groupedById = {};
    hotel.ListaPrecios.forEach((item) => {
      if (!groupedById[item.id]) {
        groupedById[item.id] = {
          id: item.id,
          relatedRooms: [],
          baseRoom: null,
        };
      }
      if (item.NumRoom === 0) {
        groupedById[item.id].baseRoom = item;
      }
      groupedById[item.id].relatedRooms.push(item);
    });

    const regimenMap = new Map();

    Object.values(groupedById).forEach(({ baseRoom, relatedRooms }) => {
      if (!baseRoom) return;

      const regimenKey = baseRoom.BoardNameFiltro?.toLowerCase();
      if (!regimenKey) return;

      const current = regimenMap.get(regimenKey);

      if (
        !current ||
        parseFloat(baseRoom.Price) < parseFloat(current.baseRoom.Price)
      ) {
        const reserva = {
          habitaciones: relatedRooms.length,
          pax: relatedRooms.reduce(
            (total, room) =>
              total + (room.NumAdults ?? 0) + (room.NumChilds ?? 0),
            0
          ),
          pax_ninios: relatedRooms.reduce(
            (total, room) => total + (room.NumChilds ?? 0),
            0
          ),
          noches: 7,
          fecha: "10/12/2025",
          fechaSalida: "19/12/2025",
        };

        regimenMap.set(regimenKey, { baseRoom, relatedRooms, reserva });
      }
    });

    return Array.from(regimenMap.values());
  }

  return (
    <section>
      {hoteles.map((hotel, index) => {
        const estrella = hotel.CategoryCode.split("*").length - 1;
        const habitacion = habitacionMasBarata(hotel);
        const reserva =
          habitacion.length > 0
            ? habitacion[0].reserva
            : {
                pax: 2,
                pax_ninios: 1,
                habitaciones: 2,
                noches: 7,
                fecha: "10/12/2025",
                fechaSalida: "19/12/2025",
              };

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
                  {(hotel.ListFotos?.length > 2
                    ? hotel.ListFotos.slice(2, 8)
                    : hotel.ListFotos || []
                  ).map((foto, idx) => (
                    <img
                      loading="lazy"
                      key={idx}
                      src={foto}
                      alt={`Imagen ${idx + 1} de ${hotel.NombreHotel}`}
                      className="tw-h-[25vh] md:tw-h-full tww-full object-cover"
                    />
                  ))}
                </Carousel>
              </div>

              <div className="tw-p-5 md:tw-w-2/3 tw-px-2">
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
                      <FaPerson className="tw-text-lg" /> {reserva.pax} adulto
                    </span>
                    <span className="tw-flex tw-items-center">
                      <FaChild className="tw-text-lg" /> {reserva.pax_ninios}{" "}
                      niño
                    </span>
                    <span className="tw-flex tw-items-center">
                      <FaDoorOpen className="tw-text-lg tw-mr-1" />{" "}
                      {habitacion.length}x Hab
                    </span>
                    <span className="tw-flex tw-items-center">
                      <MdModeNight className="tw-text-lg" />
                      {reserva.noches} noches
                    </span>
                  </div>
                </div>

                <p className="lg:tw-text-slate-600 tw-mt-2 dark:tw-text-slate-400 tw-text-sm tw-text-slate-500 tw-line-clamp-2">
                  {hotel.ShortDesc}
                </p>

                <div className="tw-grid tw-grid-cols-2 md:tw-flex tw-justify-end tw-mt-3 tw-gap-3">
                  <button
                    className="tw-bg-slate-400 dark:tw-bg-slate-700 tw-btn_accesorios"
                    onClick={() =>
                      setExpandedHotel(expandedHotel === index ? null : index)
                    }
                  >
                    {expandedHotel === index
                      ? "Ocultar precios"
                      : "Más precios"}
                  </button>

                  <button
                    className="tw-w-full lg:tw-w-fit tw-btn_oscuro tw-btn_accesorios"
                    onClick={() => setOpenModal(index)}
                  >
                    Detalles
                  </button>

                  <ModalWindow
                    show={openModal === index}
                    onClose={() => setOpenModal(null)}
                    titulo={hotel.NombreHotel}
                    subTitulo={
                      FormatearFecha(reserva.fecha) +
                      " - " +
                      FormatearFecha(reserva.fechaSalida)
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

                  <Link className="tw-col-span-2" to="/hotel" state={hotel}>
                    <button className="tw-w-full lg:tw-w-fit tw-p-3 tw-px-8 tw-btn_primario tw-btn_accesorios">
                      desde {habitacion[0]?.baseRoom?.Price}
                      {habitacion.length > 0 &&
                        (habitacion[0].baseRoom.Currency === "EUR"
                          ? "€"
                          : habitacion[0].baseRoom.Currency)}
                    </button>
                  </Link>
                </div>
              </div>
            </article>
            {expandedHotel === index && (
              <div className="tw-relative tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-p-3 tw-mt-4 tw-mb-6 tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-3">
                {Object.values(
                  hotel.ListaPrecios.reduce((groupedByBoardName, item) => {
                    const boardKey = item.BoardNameFiltro?.toLowerCase();
                    if (!boardKey || item.NumRoom !== 0)
                      return groupedByBoardName;
                    const relatedRooms = hotel.ListaPrecios.filter(
                      (r) => r.id === item.id
                    );
                    const merged = {
                      ...item,
                      relatedRooms,
                      combinedName: relatedRooms.map((r) => r.Name).join(" + "),
                    };
                    if (
                      !groupedByBoardName[boardKey] ||
                      parseFloat(merged.Price) <
                        parseFloat(groupedByBoardName[boardKey].Price)
                    ) {
                      groupedByBoardName[boardKey] = merged;
                    }
                    return groupedByBoardName;
                  }, {})
                )
                  .sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price))
                  .map((precio, idx) => (
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
                          {precio.NoReembolsable && (
                            <span className="tw-block tw-font-semibold tw-text-red-600 dark:tw-text-red-400">
                              (No reembolsable)
                            </span>
                          )}
                          <span className="tw-font-semibold dark:tw-text-white">
                            <span className="tw-text-slate-400"> desde </span>
                            {precio.Price}
                            {precio.Currency === "EUR" ? "€" : precio.Currency}
                          </span>
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
