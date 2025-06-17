import { FaHotel } from "react-icons/fa";
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

function Hotel({ hotel }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return [
      ...Array(fullStars).fill(<IoIosStar className="tw-text-orange-400" />),
      ...Array(halfStar).fill(<IoIosStarHalf className="tw-text-orange-400" />),
      ...Array(emptyStars).fill(
        <IoIosStarOutline className="tw-text-slate-400" />
      ),
    ];
  };
  const formatShortDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };
  const formatDescription = (text) => {
    const sentences = text.split(". ");
    return sentences.map((sentence, index) => (
      <span key={index}>
        {sentence}.
        <br />
      </span>
    ));
  };

  return (
    <div className="tw-mt-10">
      <h3 className="tw-text-lg tw-font-bold dark:tw-text-slate-300">Hotel</h3>
      <article className="tw-grid md:tw-grid-cols-7 tw-grid-cols-5 tw-gap-5 tw-mt-2">
        <section className="tw-p-3 md:tw-order-first tw-order-last tw-col-span-5 tw-border-y-2 tw-border-slate-100 tw-shadow-lg tw-border-2 tw-rounded-xl dark:tw-border-slate-700 dark:tw-bg-slate-800">
          <div className="tw-grid tw-grid-cols-3 tw-gap-10">
            <img
              src={hotel.src}
              alt="Imagen hotel"
              className="tw-col-span-3 md:tw-col-span-1 tw-rounded-lg tw-shadow"
            />
            <div className="tw-col-span-3 md:tw-col-span-2">
              <div className="tw-flex tw-justify-between">
                <h4 className="tw-font-semibold tw-flex tw-items-center tw-gap-2 dark:tw-text-slate-200">
                  {hotel.nombre}
                </h4>
                <div className="tw-flex tw-gap-1 tw-mt-2">
                  {renderStars(hotel.estrellas)}
                </div>
              </div>
              <p className="tw-flex tw-mt-1 tw-text-sm tw-items-center dark:tw-text-slate-400">
                <FaMapPin className="tw-text-slate-700 dark:tw-text-secondaryDark tw-text-lg" />
                {hotel.direccion}
              </p>
              <div className="tw-grid tw-grid-cols-3 tw-mt-5">
                {hotel.habitacion !== 0 && (
                  <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <MdMeetingRoom className="tw-text-4xl tw-text-secondary" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300 tw-text-sm">
                      {" "}
                      {hotel.habitacion}
                      {hotel.habitacion === 1 ? " habitación" : " habitaciones"}
                    </span>
                  </div>
                )}

                {hotel.adultos !== 0 && (
                  <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <FaPerson className="tw-text-4xl tw-text-secondary" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300 tw-text-sm">
                      {" "}
                      {hotel.adultos}
                      {hotel.adultos === 1 ? " adulto" : " adultos"}
                    </span>
                  </div>
                )}

                {hotel.ninios !== 0 && (
                  <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <FaChild className="tw-text-4xl tw-text-secondary" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300 tw-text-sm">
                      {" "}
                      {hotel.ninios}
                      {hotel.ninios === 1 ? " niño" : " niños"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="tw-col-span-2 tw-text-sm tw-text-slate-400 tw-mt-3">
            {formatDescription(hotel.descripcion)}
          </p>
        </section>
        <aside className="tw-col-span-5 md:tw-col-span-2">
          <div className="tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-flex tw-flex-col tw-justify-around tw-p-3">
            <div className="tw-flex tw-justify-between">
              <h4 className="tw-font-semibold tw-flex tw-items-center tw-gap-2 dark:tw-text-slate-200">
                <span className="tw-bg-secondary tw-text-white tw-rounded-full tw-w-fit tw-p-1">
                  <FaHotel />
                </span>
                {hotel.nombre}
              </h4>
              <div className="tw-flex tw-gap-1 tw-items-center">
                {renderStars(hotel.estrellas)}
              </div>
            </div>
            <p className="tw-text-sm tw-text-slate-500 tw-mt-1">{hotel.direccion}</p>
            <div className="tw-border-t tw-mt-2 tw-pt-2">
              <span className="tw-text-sm dark:tw-text-white">
                {formatShortDate(hotel.entrada)} -{" "}
                {formatShortDate(hotel.salida)}
              </span>
              <p className="tw-flex tw-gap-1 tw-text-xs tw-text-secondary tw-font-bold">
                {hotel.habitacion !== 0 && (
                  <>
                    <MdMeetingRoom className="tw-text-lg" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300">
                      {" "}
                      {hotel.habitacion}
                      {hotel.habitacion === 1 ? " habitación" : " habitaciones"}
                    </span>
                  </>
                )}
                {hotel.adultos !== 0 && (
                  <>
                    <FaPerson className="tw-text-lg" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300">
                      {" "}
                      {hotel.adultos}
                      {hotel.adultos === 1 ? " adulto" : " adultos"}
                    </span>
                  </>
                )}
                {hotel.ninios !== 0 && (
                  <>
                    <FaChild className="tw-text-lg" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300">
                      {" "}
                      {hotel.ninios}
                      {hotel.ninios === 1 ? " niño" : " niños"}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </aside>
      </article>
    </div>
  );
}

export default Hotel;
