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
      ...Array(fullStars).fill(<IoIosStar className="text-orange-400" />),
      ...Array(halfStar).fill(<IoIosStarHalf className="text-orange-400" />),
      ...Array(emptyStars).fill(
        <IoIosStarOutline className="text-slate-400" />
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
    <div className="mt-10">
      <h3 className="text-lg font-bold dark:tw-text-slate-300">Hotel</h3>
      <article className="grid md:grid-cols-7 grid-cols-5 gap-5 mt-2">
        <section className="p-3 md:order-first order-last col-span-5 border-y-2 border-slate-100 shadow-lg border-2 rounded-xl dark:tw-border-slate-700 dark:bg-slate-800">
          <div className="grid grid-cols-3 gap-10">
            <img
              src={hotel.src}
              alt="Imagen hotel"
              className="col-span-3 md:col-span-1 rounded-lg shadow"
            />
            <div className="col-span-3 md:col-span-2">
              <div className="flex justify-between">
                <h4 className="font-semibold flex items-center gap-2 dark:tw-text-slate-200">
                  {hotel.nombre}
                </h4>
                <div className="flex gap-1 mt-2">
                  {renderStars(hotel.estrellas)}
                </div>
              </div>
              <p className="flex mt-1 text-sm items-center dark:tw-text-slate-400">
                <FaMapPin className="text-slate-700 dark:tw-text-secondaryDark text-lg" />
                {hotel.direccion}
              </p>
              <div className="grid grid-cols-3 mt-5">
                {hotel.habitacion !== 0 && (
                  <div className="flex flex-col items-center justify-center">
                    <MdMeetingRoom className="text-4xl tw-text-secondary" />
                    <span className="text-slate-600 dark:tw-text-slate-300 text-sm">
                      {" "}
                      {hotel.habitacion}
                      {hotel.habitacion === 1 ? " habitación" : " habitaciones"}
                    </span>
                  </div>
                )}

                {hotel.adultos !== 0 && (
                  <div className="flex flex-col items-center justify-center">
                    <FaPerson className="text-4xl tw-text-secondary" />
                    <span className="text-slate-600 dark:tw-text-slate-300 text-sm">
                      {" "}
                      {hotel.adultos}
                      {hotel.adultos === 1 ? " adulto" : " adultos"}
                    </span>
                  </div>
                )}

                {hotel.ninios !== 0 && (
                  <div className="flex flex-col items-center justify-center">
                    <FaChild className="text-4xl tw-text-secondary" />
                    <span className="text-slate-600 dark:tw-text-slate-300 text-sm">
                      {" "}
                      {hotel.ninios}
                      {hotel.ninios === 1 ? " niño" : " niños"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="col-span-2 text-sm text-slate-400 mt-3">
            {formatDescription(hotel.descripcion)}
          </p>
        </section>
        <aside className="col-span-5 md:col-span-2 ">
          <div className="border-2 border-slate-100 dark:tw-border-slate-700 dark:bg-slate-800 shadow-lg rounded-lg flex flex-col justify-around p-3">
            <div className="flex justify-between ">
              <h4 className="font-semibold flex items-center gap-2 dark:tw-text-slate-200">
                <span className="tw-bg-secondary text-white rounded-full w-fit p-1">
                  <FaHotel />
                </span>
                {hotel.nombre}
              </h4>
              <div className="flex gap-1 items-center">
                {renderStars(hotel.estrellas)}
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-1">{hotel.direccion}</p>
            <div className="border-t mt-2 pt-2">
              <span className="text-sm dark:tw-text-white">
                {formatShortDate(hotel.entrada)} -{" "}
                {formatShortDate(hotel.salida)}
              </span>
              <p className="flex gap-1 text-xs tw-text-secondary font-bold">
                {hotel.habitacion !== 0 && (
                  <>
                    <MdMeetingRoom className="text-lg" />
                    <span className="text-slate-600 dark:tw-text-slate-300">
                      {" "}
                      {hotel.habitacion}
                      {hotel.habitacion === 1 ? " habitación" : " habitaciones"}
                    </span>
                  </>
                )}
                {hotel.adultos !== 0 && (
                  <>
                    <FaPerson className="text-lg" />
                    <span className="text-slate-600 dark:tw-text-slate-300">
                      {" "}
                      {hotel.adultos}
                      {hotel.adultos === 1 ? " adulto" : " adultos"}
                    </span>
                  </>
                )}
                {hotel.ninios !== 0 && (
                  <>
                    <FaChild className="text-lg" />
                    <span className="text-slate-600 dark:tw-text-slate-300">
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
