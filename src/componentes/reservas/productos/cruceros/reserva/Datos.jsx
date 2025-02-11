import { FaMars, FaVenus, FaUser } from "react-icons/fa";
import Reserva from "../../../datos/Reserva";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import FormatearFecha from "../../../estructura/FormatearFecha";
import Fecha from "../../../../inputs/Fecha";

const Vuelo = () => {
  const location = useLocation();
  const { producto, pasajeros, precioSeleccionado } = location.state || {};
  const navigate = useNavigate();
  const img = "/banner_cruise.jfif";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      pasajeros: pasajeros,
    },
  });

  const paises = [
    { id: 0, pais: "España" },
    { id: 1, pais: "Argentina" },
    { id: 2, pais: "México" },
    { id: 3, pais: "Estados Unidos" },
    { id: 4, pais: "Francia" },
    { id: 5, pais: "Alemania" },
    { id: 6, pais: "Italia" },
    { id: 7, pais: "Reino Unido" },
    { id: 8, pais: "Brasil" },
    { id: 9, pais: "Colombia" },
  ];

  const handleGenderChange = (index, selectedGender) => {
    setValue(`pasajeros[${index}].genero`, selectedGender, {
      shouldValidate: true,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    navigate("/reservaCrucero", {
      state: { data, producto, precioSeleccionado, pasajeros },
    });
  };
  console.log(producto);
  const infoPasajeros = (
    <div className="tw-flex tw-flex-wrap tw-justify-center">
      {pasajeros.map((pasajero, index) => (
        <div
          className="tw-bg-secondary tw-font-semibold tw-p-1 tw-rounded-md tw-text-sm tw-m-2"
          key={index}
        >
          Pasajero {index + 1} - {pasajero.age} años
        </div>
      ))}
    </div>
  );
  return (
    <main className="tw-my-10 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
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
          <Reserva
            img={img}
            position={"center"}
            tipo={"Crucero"}
            itinerario={producto.recorrido}
            fechaIda={"Salida: " + FormatearFecha(precioSeleccionado.date)}
            extras={infoPasajeros}
          />
          <h2 className="tw-font-semibold tw-text-xl tw-mt-8 dark:tw-text-white">
            Datos Pasajeros
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-10">
            {pasajeros.map((pasajero, index) => (
              <div
                key={index}
                className="tw-border dark:tw-border-slate-700 tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded-lg tw-p-4 tw-mt-4 tw-shadow hover:tw-shadow-md tw-transition tw-duration-300"
              >
                <h2 className="tw-font-semibold tw-text-lg dark:tw-text-slate-200">
                  Pasajero {index + 1}
                </h2>
                <div className="tw-space-y-3 tw-text-sm tw-mt-4">
                  <div className="tw-grid md:tw-grid-cols-2 tw-gap-3">
                    <Input_Texto
                      name={`pasajeros[${index}].nombre`}
                      register={register}
                      errors={errors}
                    />
                    <Input_Texto
                      name={`pasajeros[${index}].apellido`}
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <Fecha
                    fecha={pasajero.fechaNacimiento}
                    name={`pasajeros[${index}].fechaNacimiento`}
                    setValue={setValue}
                  />
                  <div className="tw-relative">
                    <select
                      className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                      {...register(`pasajeros[${index}].pais`)}
                    >
                      <option value="">País</option>
                      {paises.map((pais) => (
                        <option key={pais.id} value={pais.pais}>
                          {pais.pais}
                        </option>
                      ))}
                    </select>
                    <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                      <FaUser />
                    </div>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-end tw-space-x-3 tw-mt-3">
                  <button
                    type="button"
                    className={`tw-p-2 tw-rounded-md tw-text-lg ${
                      getValues(`pasajeros[${index}].genero`) === "Hombre"
                        ? "tw-bg-blue-500 dark:tw-bg-blue-600 tw-text-white"
                        : "tw-bg-slate-200 dark:tw-bg-slate-500 tw-text-black"
                    }`}
                    onClick={() => handleGenderChange(index, "Hombre")}
                  >
                    <FaMars />
                  </button>
                  <button
                    type="button"
                    className={`tw-p-2 tw-rounded-md tw-text-lg ${
                      getValues(`pasajeros[${index}].genero`) === "Mujer"
                        ? "tw-bg-pink-400 dark:tw-bg-pink-600 tw-text-white"
                        : "tw-bg-slate-200 dark:tw-bg-slate-500 tw-text-black"
                    }`}
                    onClick={() => handleGenderChange(index, "Mujer")}
                  >
                    <FaVenus />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="tw-flex tw-justify-end">
            <button
              type="submit"
              className="tw-bg-secondary tw-p-3 tw-text-white tw-font-semibold tw-rounded-lg tw-mt-3"
            >
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
};

export default Vuelo;
