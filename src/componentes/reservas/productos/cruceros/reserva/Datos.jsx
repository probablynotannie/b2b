import { FaMars, FaVenus, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Reserva from "../../../datos/Reserva";
import Input_Texto from "../../../../inputs/Texto";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import Fecha from "../../../../inputs/Fecha";
import DatosContacto from "../../../../../helpers/visuales/datos/DatosContacto";
import { slugify } from "../../../../../helpers/slugify";
import Error from "../filtros/Error";
import FetchCrucero from "../hook/crucero";
import Placeholder from "../../../../../helpers/placeholders/Datos";
import random from "./random.json";
const Datos = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const idCrucero = state?.producto.id_crucero;
  const pasajeros = state?.pasajeros || [];
  const precioSeleccionado = state?.precioSeleccionado;

  const { data: productoRaw, isLoading } = useQuery({
    refetchInterval: 10_000,
    refetchIntervalInBackground: true,
    queryKey: ["crucero", idCrucero],
    queryFn: () => FetchCrucero(idCrucero),
    enabled: Boolean(idCrucero),
    retry: (failureCount, err) => {
      if (err?.response?.status === 404) return false;
      return failureCount < 3;
    },
    refetchOnWindowFocus: false,
  });

  const producto =
    Array.isArray(productoRaw) && productoRaw.length === 0 ? null : productoRaw;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    setError,
    control,
    clearErrors,
    reset,
  } = useForm({ defaultValues: { pasajeros: [] } });

  useEffect(() => {
    if (pasajeros.length) reset({ pasajeros });
  }, [pasajeros, reset]);

  const paises = [
    "España",
    "Argentina",
    "México",
    "Estados Unidos",
    "Francia",
    "Alemania",
    "Italia",
    "Reino Unido",
    "Brasil",
    "Colombia",
  ].map((pais, id) => ({ id, pais }));

  const handleGenderChange = (idx, genero) =>
    setValue(`pasajeros[${idx}].genero`, genero, { shouldValidate: true });

  const formatDate = (d) => new Date(d).toLocaleDateString("es-ES");

  const calcularEdad = (f) => {
    const hoy = new Date(),
      nac = new Date(f);
    let edad = hoy.getFullYear() - nac.getFullYear();
    const m = hoy.getMonth() - nac.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nac.getDate())) edad--;
    return edad;
  };

  if (isLoading) return <Placeholder />;

  const tarifaSigueDisponible = producto?.tarifas?.some(
    (t) => t.id_tarifa === precioSeleccionado?.datos?.id_tarifa
  );

  if (!tarifaSigueDisponible) {
    return (
      <Error
        tipo={2}
        enlace={`/crucero/${idCrucero}/`}
        error="La tarifa seleccionada ya no está disponible. Vuelve a la pantalla anterior y elige otra opción."
      />
    );
  }

  if (!precioSeleccionado || pasajeros.length === 0) {
    return (
      <Error
        tipo={2}
        error="Se necesitan más datos para acceder a esta página."
      />
    );
  }

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

  const onSubmit = (data) =>
    navigate(
      `/crucero/reserva/${producto.id_crucero}/${slugify(
        producto.itinerario.name
      )}`,
      { state: { data, producto, precioSeleccionado } }
    );

  const infoPasajeros = (
    <div className="tw-flex tw-flex-wrap tw-justify-center">
      {pasajeros.map((p, i) => (
        <div
          key={i}
          className="tw-bg-secondary tw-font-semibold tw-p-1 tw-rounded-md tw-text-sm tw-m-2"
        >
          Pasajero {i + 1} - {p.age} años
        </div>
      ))}
    </div>
  );

  const img = "/banners/banner_cruise.webp";
  return (
    <main className="tw-my-16 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-smooth tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <DatosContacto register={register} errors={errors} />
          </div>

          <Reserva
            img={img}
            position="center"
            tipo="Crucero"
            itinerario={producto.recorrido}
            fechaIda={`Salida: ${FormatearFecha(precioSeleccionado.date)}`}
            extras={infoPasajeros}
          />

          <h2 className="tw-font-semibold tw-text-xl tw-mt-8 dark:tw-text-white">
            Datos Pasajeros
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-10">
            {pasajeros.map((pasajero, index) => (
              <div
                key={index}
                className="tw-border dark:tw-border-slate-700 tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded-lg tw-p-4 tw-mt-4 tw-shadow hover:tw-shadow-md tw-smooth"
              >
                <div>
                  <h2 className="tw-font-semibold tw-text-lg dark:tw-text-slate-200">
                    Pasajero {index + 1}
                  </h2>
                  <div className="tw-text-slate-800 dark:tw-text-slate-200 tw-border-b tw-border-slate-200 dark:tw-border-slate-700">
                    <span className="tw-text-sm">Edad:</span>{" "}
                    <span className="tw-font-semibold">{pasajero.age}</span>
                  </div>
                </div>

                <div className="tw-space-y-3 tw-text-sm tw-mt-4">
                  <div className="tw-grid md:tw-grid-cols-2 tw-gap-3">
                    <Input_Texto
                      required
                      tipo="Nombre"
                      name={`pasajeros[${index}].nombre`}
                      register={register}
                      errors={errors}
                    />
                    <Input_Texto
                      required
                      tipo="Apellido/s"
                      name={`pasajeros[${index}].apellido`}
                      register={register}
                      errors={errors}
                    />
                  </div>

                  <Fecha
                    control={control}
                    edadSelector
                    fecha={pasajero.fechaNacimiento}
                    name={`pasajeros[${index}].fechaNacimiento`}
                    setValue={(name, value) => handleDateChange(value, index)}
                  />

                  <div className="tw-relative">
                    <select
                      className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                      {...register(`pasajeros[${index}].pais`)}
                    >
                      <option value="">País</option>
                      {paises.map(({ id, pais }) => (
                        <option key={id} value={pais}>
                          {pais}
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

          <div className="tw-flex tw-justify-end tw-border-t tw-border-slate-100 dark:tw-border-slate-700 tw-pt-5 tw-mt-10">
            <button type="submit" className="tw-btn_primario tw-btn_accesorios">
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
};

export default Datos;
