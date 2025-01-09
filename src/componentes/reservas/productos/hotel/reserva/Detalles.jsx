import Info from "../../../estructura/hoteles/Info";
import Map from "../../../estructura/hoteles/Map";
import { FaUser } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
function Detalles({ producto, datosContacto }) {
  return (
    <article className="mt-3">
      <section className="col-span-5 mt-10 mb-5 lg:my-5">
        <Info
          titulo={"Descripción del hotel"}
          descripcion={producto.descripcion}
        />
      </section>

      <section>
        <h3 className="font-bold text-center my-5 text-slate-800 text-md">
          Reserva asociado/a a:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-10 ">
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
            <FaUser className="text-2xl text-secondary mb-2 md:mb-0" />
            <span>
              {datosContacto.nombre} {datosContacto.apellido}
            </span>
          </div>
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
            <MdMarkEmailRead className="text-3xl text-secondary" />

            {datosContacto.email}
          </div>
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
            <BsFillTelephoneFill className="text-2xl text-secondary" />

            {datosContacto.tel}
          </div>
        </div>
      </section>
      <section className="h-full mt-5 lg:mt-5">
        <Map location={producto.ubicacion} />
      </section>
    </article>
  );
}

export default Detalles;
