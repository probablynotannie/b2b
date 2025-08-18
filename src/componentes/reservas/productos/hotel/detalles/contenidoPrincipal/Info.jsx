import { FaCalendarAlt, FaMoon } from "react-icons/fa";
import DatoTituloIcono from "../../../../../../helpers/visuales/DatoTituloIcono";
import { FaGlobe, FaHotel, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import formatearFecha from "../../../../../../scripts/FormatearFecha";
import calcularFechaSalida from "../../../../../../scripts/fechaSalidaConInicioYNoches";
import React from "react";
function Info({ hotel, aside }) {
  const fechaSalida = calcularFechaSalida(
    hotel.reserva.fecini,
    hotel.reserva.noc
  );
  return (
    <section
      className={`tw-grid ${
        !aside && "lg:tw-grid-cols-2 xl:tw-grid-cols-3"
      } tw-flex-wrap tw-gap-5 tw-bg-slate-50 dark:tw-bg-slate-900 tw-p-5 tw-rounded-lg`}
    >
      <DatoTituloIcono
        icon={<FaCalendarAlt className="tw-text-blue-500" />}
        title={"Fecha Entrada"}
        value={
          <span>
            {formatearFecha(hotel.reserva.fecini)} ({hotel.reserva.noc} noches)
          </span>
        }
      />
      <DatoTituloIcono
        icon={<FaCalendarAlt className="tw-text-green-500" />}
        title={"Fecha Salida"}
        value={<span>{formatearFecha(fechaSalida)}</span>}
      />
      <DatoTituloIcono
        icon={<FaMoon className="tw-text-red-500" />}
        title={"Noches"}
        value={hotel.reserva.noc + " noches"}
      />
      <DatoTituloIcono
        icon={<FaHotel className="tw-text-pink-500" />}
        title={"Hotel"}
        value={
          <React.Fragment>
            <span className="tw-font-semibold tw-text-secondary dark:tw-text-secondaryDark ">
              {hotel.NombreHotel}
            </span>
            , {hotel.City}, {hotel.Dir}
          </React.Fragment>
        }
      />

      {hotel.ZipCode && (
        <DatoTituloIcono
          icon={<FaGlobe className="tw-text-green-500" />}
          title={"Codigo Postal"}
          value={hotel.ZipCode}
        />
      )}
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
    </section>
  );
}

export default Info;
