import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import Ferrys from "./FerrySeleccionado";
import Error from "../hotel/filtros/Error";
function Cesta({ hotel, setHotel, ferry, habitacion, neto }) {
  const reservaFinal = {
    habitacion: habitacion || null,
    hotel: hotel || null,
    ferry: ferry || null,
  };
  const removeHotel = () => {
    setHotel(null);
  };
  const totalFerry = ferry.vuelta?.Pvp
    ? ferry.ida.Pvp + ferry.vuelta.Pvp
    : ferry.ida.Pvpƒ;
  const totalPrice =
    hotel &&
    (hotel && habitacion ? parseFloat(habitacion.Pvp) : 0) +
      parseFloat(totalFerry);

  const fotos =
    hotel?.ListFotos?.length > 2
      ? hotel?.ListFotos
      : ["/placeholder/hoteles.jpg"];
  return (
    <>
      {!hotel && !ferry !== "" && (
        <div className="tw-text-slate-400 tw-flex tw-justify-center">
          Agrega productos para ver un resumen
        </div>
      )}
      <div className="tw-mt-5 tw-w-full tw-col-span-9">
        <div className="tw-min-h-[30vh] tw-grid lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
          {hotel && habitacion ? (
            <section className="tw-border-2 tw-pb-20 tw-bg-white hover:tw-scale-[102%] tw-duration-300 dark:tw-bg-slate-800 tw-relative tw-overflow-hidden tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl tw-transition">
              <div className="tw-absolute tw-bottom-0 tw-grid tw-grid-cols-2 tw-justify-between tw-items-center tw-w-full tw-p-2">
                <div className="tw-col-span-2 tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-2 tw-text-slate-900 dark:tw-text-slate-400 tw-font-semibold tw-text-sm tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-2">
                  <span className="tw-flex tw-items-center">
                    <FaPerson className="tw-text-lg" />{" "}
                    {habitacion.adultosTotal} adulto
                    {habitacion.adultosTotal > 1 && "s"}
                  </span>
                  <span className="tw-flex tw-items-center">
                    <FaChild className="tw-text-lg" /> {habitacion.niniosTotal}{" "}
                    niño
                    {habitacion.niniosTotal > 1 && "s"}
                  </span>
                  <span className="tw-flex tw-items-center">
                    <FaDoorOpen className="tw-text-lg tw-mr-1" />{" "}
                    {habitacion.relatedRooms.length} Habitación
                    {habitacion.relatedRooms.length > 1 && "es"}
                  </span>
                </div>
                <div className="tw-col-span-2 tw-flex tw-justify-between">
                  <span
                    className={`tw-mt-2 tw-text-lg tw-text-slate-500 dark:tw-text-green-400 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold`}
                  >
                    {neto === true ? habitacion.Pvp : habitacion.Price}
                    {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
                  </span>
                  <button
                    onClick={removeHotel}
                    className="tw-mt-1 tw-text-sm tw-rounded-lg tw-shadow tw-bg-red-500 dark:tw-bg-red-800 tw-text-white tw-h-fit tw-p-2"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
              <span
                className={`tw-absolute tw-bg-red-500/70 tw-text-white tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-sm tw-top-5 tw-rotate-45 tw-w-[140px] tw-text-center -tw-right-9 tw-z-10 tw-shadow-lg`}
              >
                Hotel
              </span>

              <div className="tw-relative tw-group">
                <Carousel
                  className="tw-h-[25vh] hide-arrows"
                  slide={false}
                  indicators={true}
                  controls={false}
                >
                  {fotos.map((foto, idx) => (
                    <div
                      key={idx}
                      className="tw-h-[25vh] tw-w-full tw-relative"
                    >
                      <img
                        loading="lazy"
                        src={foto}
                        alt={`Imagen ${idx + 1} de ${hotel.NombreHotel}`}
                        className="tw-h-[25vh] tw-w-full tw-object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          const placeholder = document.createElement("div");
                          placeholder.className =
                            "tw-h-[25vh] tw-w-full tw-flex tw-items-center tw-justify-center tw-bg-slate-300 tw-text-lg";
                          placeholder.innerText = "Imagen no disponible";
                          e.target.parentNode.appendChild(placeholder);
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="tw-p-5">
                <h4 className="tw-text-secondary tw-font-semibold">
                  {hotel.NombreHotel}
                  <span className="tw-text-sm tw-ml-1 tw-text-slate-400 tw-font-normal">
                    - {habitacion.BoardCode}
                  </span>
                </h4>
                <div className="tw-pb-2">
                  <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-text-sm tw-flex tw-items-center tw-mb-2">
                    <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                    {hotel.Dir}
                  </span>
                </div>
              </div>
            </section>
          ) : (
            <div className="tw-flex tw-justify-center">
              <Error
                ocultarBoton={true}
                error={"No has seleccionado ningun hotel"}
                tipo={1}
              />
            </div>
          )}
          <Ferrys ferry={ferry} />
        </div>
        {hotel && ferry && (
          <Link state={reservaFinal} to={"/hotelmasferry"}>
            <button className=" tw-btn_accesorios tw-btn_primario tw-mt-10">
              Total: {totalPrice}€
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Cesta;
