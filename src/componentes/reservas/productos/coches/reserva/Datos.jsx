import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
function Vuelo() {
  const location = useLocation();
  const { producto, selectedExtras, conductor, reembolso, precio } =
    location.state || {};

  const img = "/banners/banner_coches.webp";
  const itinerario =
    producto.recogida.lugar + " - " + producto.devolucion.lugar;
  const fechaIda = FormatearFecha(producto.recogida.fecha);
  const fechaVuelta = FormatearFecha(producto.devolucion.fecha);
  const extras = (
    <div className="tw-mt-4">
      {selectedExtras !== 0 &&
        selectedExtras.map((extra) => (
          <span
            key={extra.id}
            className="tw-text-white dark:tw-text-slate-200 tw-bg-secondary dark:tw-bg-secondaryDark tw-p-1 tw-rounded tw-mr-2"
          >
            {extra.id === "GPS" && "GPS"}
            {extra.id === "sillitabebe" && "Sillita bebé"}
            {extra.id === "sillitaninio" && "Sillita niño"}
            {extra.id === "elevador" && "Elevador"}: {extra.quantity}x
          </span>
        ))}
      {reembolso && <span> + Reembolso franquicia total </span>}
    </div>
  );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/reservaCoche", {
      state: { data, producto, selectedExtras, conductor, reembolso, precio },
    });
  };
  return (
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      img={img}
      register={register}
      errors={errors}
      tipo={"Coche"}
      itinerario={itinerario}
      fecha={fechaIda}
      fechaVuelta={fechaVuelta}
      extras={extras}
      datosAdicionales={""}
    />
  );
}
export default Vuelo;
