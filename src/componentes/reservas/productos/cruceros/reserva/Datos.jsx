/* CRUCEROS */
import { FaMars, FaVenus, FaUser } from "react-icons/fa";
import Reserva from "../../../datos/Reserva";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import FormatearFecha from "../../../../../helpers/FormatearFecha";

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
    setError,
    clearErrors,
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
    navigate("/reservaCrucero", {
      state: { data, producto, precioSeleccionado },
    });
  };

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

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const calcularEdad = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const hasBirthdayOccurred =
      today.getMonth() > birthDateObj.getMonth() ||
      (today.getMonth() === birthDateObj.getMonth() &&
        today.getDate() >= birthDateObj.getDate());

    if (!hasBirthdayOccurred) {
      age--;
    }
    return age;
  };

  const handleDateChange = (date, index) => {
    if (!date) return;
    const formattedDate = formatDate(date);
    setValue(`pasajeros[${index}].fechaNacimiento`, formattedDate);
    const edadCalculada = calcularEdad(date);
    const expectedAge = pasajeros[index].age;
    if (edadCalculada !== expectedAge) {
      setError(`pasajeros[${index}].fechaNacimiento`, {
        type: "manual",
        message: `No coincide con la edad del pasajero (${expectedAge} años). Calculado: ${edadCalculada} años`,
      });
    } else {
      clearErrors(`pasajeros[${index}].fechaNacimiento`);
    }
  };

  return (
    <main className="tw-my-10 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
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
            tipo={"Crucero"}
            itinerario={producto.recorrido}
            fechaIda={"Salida: " + formatearFecha(precioSeleccionado.date)}
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
                <div>
                  <h2 className="tw-font-semibold tw-text-lg dark:tw-text-slate-200">
                    Pasajero {index + 1}
                  </h2>
                  <div className="tw-text-slate-800 dark:tw-text-slate-200 tw-border-b tw-border-slate-200 dark:tw-border-slate-700">
                    <span className="tw-text-sm">Edad: </span>
                    <span className="tw-font-semibold">{pasajero.age}</span>
                  </div>
                </div>
                <div className="tw-space-y-3 tw-text-sm tw-mt-4">
                  <div className="tw-grid md:tw-grid-cols-2 tw-gap-3">
                    <Input_Texto
                      required={true}
                      tipo={"Nombre"}
                      name={`pasajeros[${index}].nombre`}
                      register={register}
                      errors={errors}
                    />

                    <Input_Texto
                      required={true}
                      tipo={"Apellido/s"}
                      name={`pasajeros[${index}].apellido`}
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <Fecha
                    edadSelector={true}
                    fecha={pasajero.fechaNacimiento}
                    name={`pasajeros[${index}].fechaNacimiento`}
                    setValue={(name, value) => handleDateChange(value, index)}
                  />
                  {errors.pasajeros?.[index]?.fechaNacimiento && (
                    <p className="tw-text-red-500 tw-text-sm">
                      {errors.pasajeros[index].fechaNacimiento.message}
                    </p>
                  )}
                  <div className="tw-relative">
                    <select
                      className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
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
                <div className="tw-flex tw-items-center tw-justify-end tw-gap-1 tw-space-x-3 tw-mt-3 dark:tw-text-slate-100">
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
                  H
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
                  M
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
