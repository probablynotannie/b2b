import { FaCalendar, FaMoon, FaPhone, FaUser } from "react-icons/fa";
import Estrellas from "../../../../helpers/visuales/Estrellas";
import {
  MdEmail,
  MdMeetingRoom,
  MdOutlineEmojiFoodBeverage,
} from "react-icons/md";
import DatosHotel from "../../../../helpers/visuales/DatoTituloIcono";
import Importante from "./Importante";
function Servicio({ hotel }) {
  return (
    <div>
      <div className="tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-flex tw-justify-between tw-items-center">
        <h2 className="tw-font-bold tw-text-xl dark:tw-text-slate-100 tw-pb-2">
          {hotel.reserva.nombreHotel}
        </h2>
        <Estrellas estrellas={hotel.reserva.estrellasHotel} />
      </div>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-p-4">
        <DatosHotel
          icon={
            <FaCalendar className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Entrada"}
          value={hotel.reserva.entrada}
        />
        <DatosHotel
          icon={
            <FaCalendar className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Salida"}
          value={hotel.reserva.entrada}
        />
        <DatosHotel
          icon={<FaMoon className="tw-text-slate-400 dark:tw-text-slate-500" />}
          title={"Noches"}
          value={hotel.reserva.dias}
        />
        <DatosHotel
          icon={
            <MdMeetingRoom className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Habitación"}
          value={hotel.reserva.habitacion}
        />
        <DatosHotel
          icon={
            <MdOutlineEmojiFoodBeverage className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Regimen"}
          value={hotel.reserva.regimen}
        />
        <DatosHotel
          icon={<FaUser className="tw-text-slate-400 dark:tw-text-slate-500" />}
          title={"Titular reserva"}
          value={
            hotel.reserva.titularReserva.nombre +
            " " +
            hotel.reserva.titularReserva.apellidos
          }
        />
        <DatosHotel
          icon={
            <FaPhone className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Téf. titular"}
          value={hotel.reserva.titularReserva.telefono}
        />
        <DatosHotel
          icon={
            <MdEmail className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Email titular"}
          value={hotel.reserva.titularReserva.email}
        />
      </div>
      <div className="tw-py-4 tw-mt-4 tw-pb-4 tw-space-y-2 tw-text-sm tw-text-slate-700">
        <h2 className="dark:tw-text-slate-300 tw-font-bold tw-text-lg">
          Importante
        </h2>
        <Importante hotel={hotel} />
      </div>
    </div>
  );
}

export default Servicio;
