import InfoHotel from "../contenidoPrincipal/Info";
import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
function Aside({ producto }) {
  return (
    <section className="tw-hidden lg:tw-block tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
      <Reserva
        img={
          producto.ListFotos[0]
            ? producto.ListFotos[0]
            : "/placeholder/hoteles.jpg"
        }
        txt={producto.NombreHotel}
      />
      <section>
        <InfoHotel aside={true} hotel={producto} />
      </section>
    </section>
  );
}

export default Aside;
