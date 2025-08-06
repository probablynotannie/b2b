import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
import formatearFecha from "../../../../../scripts/FormatearFecha";
import useNetoStore from "../zustand/useNetoStore";
function Datos() {
  const location = useLocation();
  const { producto, habitacion } = location.state;
  const { neto, setNeto } = useNetoStore();

  const img = "/banners/banner_hoteles.webp";
  const navigate = useNavigate();
  const extras = (
    <div className="tw-mt-2">
      {producto.pax !== 0 && (
        <span className="tw-mr-2 tw-bg-pink-400 tw-rounded-xl  tw-font-semibold tw-text-sm tw-p-1">
          {" "}
          Adultos: {habitacion.adultosTotal}x
        </span>
      )}
      {habitacion.niniosTotal !== 0 && (
        <span className="tw-bg-pink-400 tw-rounded-xl  tw-font-semibold tw-text-sm tw-p-1">
          {" "}
          Niños: {habitacion.niniosTotal}x
        </span>
      )}
    </div>
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/reservaHotel", {
      state: { data, producto, habitacion, neto, setNeto },
    });
  };
  const fechaEntrada = "05/09/2025";
  const fechaSalida = "10/09/2025";
  return (
    <ComponenteDatos
      register={register}
      errors={errors}
      submit={handleSubmit(onSubmit)}
      tipo={"Hotel"}
      itinerario={
        habitacion.combinedName ? habitacion.combinedName : habitacion.Name
      }
      fecha={formatearFecha(fechaEntrada)}
      fechaVuelta={formatearFecha(fechaSalida)}
      img={img}
      extras={extras}
    />
  );
}

export default Datos;
