import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { useNavigate } from "react-router-dom";
import Input_Nacionalidad from "../../../../inputs/Nacionalidad";
import { useForm, Controller } from "react-hook-form";

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
    console.log("Form data", data); 
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
    <main className="tw-my-10 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-xl tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h1>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <Input_Texto
              tipo={"Nombre"}
              name="nombre"
              register={register}
              errors={errors}
            />
            <Input_Texto
              tipo={"Apellido"}
              name="apellido"
              register={register}
              errors={errors}
            />
            <Input_Numero
              tipo="numero"
              register={register}
              errors={errors}
              name="numero"
            />
            <Input_Email
              tipo="email"
              register={register}
              errors={errors}
              name="email"
            />
          </div>
          <h2 className="tw-font-semibold tw-mt-5 dark:tw-text-white">
            Datos Pasajeros
          </h2>
          {renderPassengerFields()}
          <Reserva
            img={img}
            position={"center"}
            tipo={"Hotel + vuelo"}
            itinerario={itinerario}
            fechaIda={fechaIda}
            fechaVuelta={fechaVuelta}
          />
          <div className="tw-flex tw-justify-end">
            <button className="tw-btn_primario tw-btn_accesorios">
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Datos;
