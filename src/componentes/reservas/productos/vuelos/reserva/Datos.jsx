import { useLocation, useNavigate } from "react-router-dom";
import Reserva from "../../../datos/Reserva";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import Input_Nacionalidad from "../../../../inputs/Nacionalidad";
import { useState } from "react";
import FormatearFecha from "../../../../../helpers/FormatearFecha";


import { useForm } from "react-hook-form";

function Vuelo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ida, vuelta } = location.state || {};

  const [pasajeros, setPasajeros] = useState(
    Array.from({ length: 2 }, () => ({
      nombre: "",
      apellido: "",
      pasaporte: "",
      nacionalidad: "",
    }))
  );

  const img = "/banner_avion.jpg";
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
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-3"
      >
        <Input_Texto
          required={true}
          name={`pasajeros.${index}.nombre`}
          register={register}
          errors={errors}
          tipo={"Nombre"}
        />
        <Input_Texto
          required={true}
          name={`pasajeros.${index}.apellido`}
          register={register}
          errors={errors}
          tipo={"Apellido/s"}
        />
        <Input_Texto
          required={true}
          name={`pasajeros.${index}.pasaporte`}
          register={register}
          errors={errors}
          tipo={"Pasaporte"}
        />
        <Input_Nacionalidad
          setValue={setValue}
          required={true}
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
    <main className="my-10 flex justify-center tw-container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:tw-border-slate-800 rounded-xl shadow-xl bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-semibold text-xl dark:tw-text-white">
            Datos Contacto
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-6">
            <Input_Texto
              required={true}
              tipo={"Nombre"}
              name="nombre"
              register={register}
              errors={errors}
            />
            <Input_Texto
              required={true}
              tipo={"Apellido"}
              name="apellido"
              register={register}
              errors={errors}
            />
            <Input_Numero
              required={true}
              tipo="numero"
              register={register}
              errors={errors}
              name="numero"
            />
            <Input_Email
              required={true}
              tipo="email"
              register={register}
              errors={errors}
              name="email"
            />
          </div>

          <Reserva
            img={img}
            position={"center"}
            tipo={"vuelo"}
            itinerario={itinerario}
            fechaIda={fechaIda}
            fechaVuelta={fechaVuelta}
          />
          <div className="my-5">
            <h2 className="font-semibold mt-5 dark:tw-text-white">
              Datos Pasajeros
            </h2>
            {renderPassengerFields()}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="tw-bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Vuelo;
