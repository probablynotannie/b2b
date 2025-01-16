import Foto from "../../../estructura/reserva/Resumen";
import { FaPerson, FaChild, FaDoorOpen } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import Info from "../../../estructura/hoteles/Info";
import FormatearFecha from "../../../estructura/FormatearFecha";

function Detalles({ hotel, ferry }) {
  return (
    <div>
      <h1 className="text-xl font-bold pb-1 border-b-2 border-slate-100 dark:border-slate-700 dark:text-white mb-2">
        Reservando Hotel + Ferry
      </h1>
      <section>
        <Foto
          img={hotel.img}
          txt={
            <p>
              {hotel.nombre} <span>({hotel.precio.toFixed(2)}€)</span>{" "}
            </p>
          }
        />
        <div className="flex flex-wrap gap-2 justify-between mt-2 text-slate-900 dark:text-slate-400 font-semibold text-sm">
          {
            <span className="flex items-center">
              <FaPerson className="text-lg" /> {hotel.pax} adulto
              {hotel.pax !== 1 && "s"}
            </span>
          }
          <span className="flex items-center">
            <FaChild className="text-lg" /> {hotel.pax_ninios} niño
          </span>
          <span className="flex items-center">
            <FaDoorOpen className="text-lg mr-1" /> {hotel.habitacion}{" "}
            Habitación/es
          </span>
          <span className="flex items-center">
            <MdModeNight className="text-lg" />
            {hotel.noches} noches
          </span>
        </div>
        <div className="my-8">
          <Info
            titulo={"Descripción de hotel"}
            descripcion={hotel.descripcion}
          />
        </div>
      </section>
      <section>
        <h2 className="font-bold">
          Ferry de ida {ferry.vuelta && " y vuelta"}
        </h2>
        <div className="grid grid-cols-2 gap-16">
          <div className="border-2 rounded-lg flex justify-center items-center flex-col shadow-lg p-3 bg-white dark:bg-slate-800 dark:text-slate-100">
            <div className="dark:bg-white rounded-xl">
              <img
                src={ferry.ida.compania}
                alt="logo compania"
                className="w-[150px] object-cover"
              />
            </div>
            <h3 className="flex items-center gap-2 font-bold text-lg">
              {ferry.ida.tipo}
            </h3>
            <span>{FormatearFecha(ferry.ida.fecha)}</span>
            <p>
              {ferry.ida.hora_salida} - {ferry.ida.hora_llegada}
            </p>
            <p>
              {ferry.ida.puerto_origen} - {ferry.ida.puerto_origen}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Cambios:{" "}
              <span className="font-medium">
                {ferry.cambios ? "Permitidos" : "No Permitidos"}
              </span>{" "}
              | Cancelaciones:{" "}
              <span className="font-medium">
                {ferry.cancelaciones ? "Permitidas" : "No Permitidas"}
              </span>
            </p>
          </div>
          {ferry.vuelta && (
            <div className="border-2 rounded-lg flex justify-center items-center flex-col shadow-lg p-3 bg-white dark:bg-slate-800 dark:text-slate-100">
              <div className="dark:bg-white rounded-xl">
                <img
                  src={ferry.vuelta.compania}
                  alt="logo compania"
                  className="w-[150px] object-cover"
                />
              </div>
              <h3 className="flex items-center gap-2 font-bold text-lg">
                {ferry.vuelta.tipo}
              </h3>
              <span>{FormatearFecha(ferry.vuelta.fecha)}</span>
              <p>
                {ferry.vuelta.hora_salida} - {ferry.vuelta.hora_llegada}
              </p>
              <p>
                {ferry.vuelta.puerto_origen} - {ferry.vuelta.puerto_origen}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Cambios:{" "}
                <span className="font-medium">
                  {ferry.cambios ? "Permitidos" : "No Permitidos"}
                </span>{" "}
                | Cancelaciones:{" "}
                <span className="font-medium">
                  {ferry.cancelaciones ? "Permitidos" : "No Permitidas"}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="mb-10"></div>
        {JSON.stringify(ferry.ida, null, 2)}
      </section>
    </div>
  );
}

export default Detalles;
