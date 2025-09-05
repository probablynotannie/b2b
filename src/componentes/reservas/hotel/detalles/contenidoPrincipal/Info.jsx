import { FaCalendarAlt, FaMoon, FaWallet } from "react-icons/fa";
import DatoTituloIcono from "../../../../../helpers/visuales/DatoTituloIcono";
import { FaGlobe, FaHotel, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import formatearFecha from "../../../../../assets/scripts/formatearFecha";
import calcularFechaSalida from "../../../../../assets/scripts/fechaSalidaConInicioYNoches";
import React from "react";
function Info({ hotel, aside, habitacion }) {
  const fechaSalida = calcularFechaSalida(
    hotel.reserva.fecini,
    hotel.reserva.noc
  );

  return (
    <section
      className={`tw-grid ${
        !aside && "lg:tw-grid-cols-2 xl:tw-grid-cols-3"
      } tw-gap-5 tw-bg-slate-50 dark:tw-bg-slate-800 tw-p-5 tw-rounded-lg`}
    >
      <DatoTituloIcono
        icon={<FaHotel className="tw-text-pink-500" />}
        title={"Hotel"}
        value={<span>{hotel.NombreHotel}</span>}
      />
      <DatoTituloIcono
        icon={<FaGlobe className="tw-text-cyan-500" />}
        title={"Dirección"}
        value={
          <React.Fragment>
            <span>
              {hotel.City}, {hotel.Dir}, {hotel.ZipCode}
            </span>
          </React.Fragment>
        }
      />

      <DatoTituloIcono
        icon={<FaCalendarAlt className="tw-text-blue-500" />}
        title={"Fecha Entrada"}
        value={formatearFecha(hotel.reserva.fecini)}
      />
      <DatoTituloIcono
        icon={<FaCalendarAlt className="tw-text-green-500" />}
        title={"Fecha Salida"}
        value={formatearFecha(fechaSalida)}
      />
      <DatoTituloIcono
        icon={<FaMoon className="tw-text-red-500" />}
        title={"Noches"}
        value={hotel.reserva.noc + " noches"}
      />

      {hotel.Tfno && (
        <DatoTituloIcono
          icon={<FaPhone className="tw-text-orange-500" />}
          title={"Teléfono"}
          value={hotel.Tfno}
        />
      )}
      {hotel.Email && (
        <DatoTituloIcono
          icon={<MdEmail className="tw-text-blue-500" />}
          title={"Email"}
          value={hotel.Email}
        />
      )}
      {habitacion && (
        <DatoTituloIcono
          icon={<FaWallet className="tw-text-yellow-400" />}
          title={"Reembolsable"}
          value={
            <>
              {habitacion?.NoReembolsable === true ||
              habitacion?.NoReembolsable === 1 ? (
                <div>
                  <span className="tw-bg-red-500 tw-text-xs tw-p-1 tw-rounded tw-text-white tw-font-semibold">
                    No reembolsable
                  </span>
                  <div
                    className="tw-text-sm"
                    dangerouslySetInnerHTML={{
                      __html: habitacion?.Cancelation,
                    }}
                  />
                </div>
              ) : (
                <div>
                  <span className="tw-bg-green-500 tw-text-xs tw-p-1 tw-rounded tw-text-white tw-font-semibold">
                    Reembolsable
                  </span>
                  <div
                    className="tw-text-s"
                    dangerouslySetInnerHTML={{
                      __html: habitacion?.Cancelation,
                    }}
                  />
                </div>
              )}
            </>
          }
        />
      )}
    </section>
  );
}

export default Info;
