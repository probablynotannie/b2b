import { useLocation, useNavigate } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Nacionalidad from "../../../../inputs/Nacionalidad";
import FormatearFecha from "../../../../../scripts/FormatearFecha";
import { useForm } from "react-hook-form";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
function Vuelo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ida, vuelta, pax } = location.state || {};

  const pasajeros = Array.from({ length: pax }, () => ({
    nombre: "",
    apellido: "",
    pasaporte: "",
    nacionalidad: "",
  }));

  const img = "/banners/banner_avion.webp";
  const itinerario = ida.flight.salida + " - " + ida.flight.llegada;
  const fechaIda = FormatearFecha(ida.flight.outboundDate);
  const fechaVuelta = vuelta?.flight?.returnDate
    ? FormatearFecha(vuelta.flight.returnDate)
    : null;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { pasajeros },
  });

  const renderPassengerFields = () => {
    return pasajeros.map((_, index) => (
      <div
        key={index}
        className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-3"
      >
        <Input_Texto
          /* required={true} */
          name={`pasajeros.${index}.nombre`}
          register={register}
          errors={errors}
          tipo={"Nombre"}
        />
        <Input_Texto
          /* required={true} */
          name={`pasajeros.${index}.apellido`}
          register={register}
          errors={errors}
          tipo={"Apellido/s"}
        />
        <Input_Texto
          /* required={true} */
          name={`pasajeros.${index}.pasaporte`}
          register={register}
          errors={errors}
          tipo={"Pasaporte"}
        />
        <Input_Nacionalidad
          setValue={setValue}
          /* required={true} */
          name={`pasajeros.${index}.nacionalidad`}
          register={register}
          errors={errors}
          tipo={"Nacionalidad"}
        />
      </div>
    ));
  };

  const onSubmit = (data) => {
    navigate("/reservavuelo", {
      state: { ida, vuelta, data },
    });
  };

  return (
    <>
      <ComponenteDatos
        submit={handleSubmit(onSubmit)}
        tipo={"Vuelo de ida " + (fechaVuelta ? " y vuelta" : "")}
        register={register}
        errors={errors}
        img={img}
        itinerario={itinerario}
        fecha={fechaIda}
        fechaVuelta={fechaVuelta}
        datosAdicionales={
          <div className="tw-my-5">
            <h2 className="tw-font-semibold tw-mt-5 dark:tw-text-white">
              Datos Pasajeros
            </h2>
            {renderPassengerFields()}
          </div>
        }
      />
    </>
  );
}

export default Vuelo;
