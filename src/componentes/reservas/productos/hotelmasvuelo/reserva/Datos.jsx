import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import { useState } from "react";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { useNavigate } from "react-router-dom";
import Input_Nacionalidad from "../../../../inputs/Nacionalidad";
import { useForm, Controller } from "react-hook-form";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
function Datos() {
  const location = useLocation();
  const { selectedHotel, ida, vuelta, habitacion } = location.state || {};
  const img = "/banners/banner_avion.webp";
  const itinerario = ida.flight.salida + " - " + ida.flight.llegada;
  const fechaIda = FormatearFecha(ida.flight.outboundDate);
  const fechaVuelta = vuelta ? FormatearFecha(vuelta.flight.returnDate) : "";

  const [pasajeros, setPasajeros] = useState(
    Array.from({ length: 2 }, () => ({
      nombre: "",
      apellido: "",
      pasaporte: "",
      nacionalidad: "",
    }))
  );
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pasajeros: pasajeros,
    },
  });

  const onSubmit = (data) => {
    navigate("/reservahotelmasvuelo", {
      state: { data, selectedHotel, ida, vuelta, habitacion },
    });
  };

  const renderPassengerFields = () => {
    return pasajeros.map((passenger, index) => (
      <div
        key={index}
        className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-3"
      >
        <Controller
          control={control}
          name={`pasajeros[${index}].nombre`}
          render={({ field }) => (
            <Input_Texto
              required={true}
              register={register}
              errors={errors}
              tipo="nombre"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={`pasajeros[${index}].apellido`}
          render={({ field }) => (
            <Input_Texto
              required={true}
              register={register}
              errors={errors}
              tipo="apellidos"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={`pasajeros[${index}].pasaporte`}
          render={({ field }) => (
            <Input_Texto
              required={true}
              register={register}
              errors={errors}
              tipo="pasaporte"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={`pasajeros[${index}].nacionalidad`}
          render={({ field }) => (
            <Input_Nacionalidad
              setValue={setValue}
              errors={errors}
              required={true}
              register={register}
              tipo="nacionalidad"
              {...field}
            />
          )}
        />
      </div>
    ));
  };

  const navigate = useNavigate();

  return (
    <ComponenteDatos
      img={img}
      register={register}
      errors={errors}
      submit={handleSubmit(onSubmit)}
      tipo={"Reservando Hotel + Vuelo"}
      itinerario={itinerario}
      fecha={fechaIda}
      fechaVuelta={fechaVuelta}
      datosAdicionales={
        <>
          <h2 className="tw-font-semibold tw-mt-5 dark:tw-text-white">
            Datos Pasajeros
          </h2>
          {renderPassengerFields()}
        </>
      }
    />
  );
}

export default Datos;
