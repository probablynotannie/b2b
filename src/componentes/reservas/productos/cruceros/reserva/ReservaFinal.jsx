import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { SiMentorcruise } from "react-icons/si";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
import Detalles from "./Detalles";
import DatosContacto from "../../../estructura/DatosContacto";
import { useQuery } from "@tanstack/react-query";
import Pasajeros from "./Pasajeros";
import random from "./random.json";
import FetchCrucero from "../hook/crucero";
import Error from "../filtros/Error";
import Placeholder from "../../../../../helpers/placeholders/Detalles";

function ReservaFinal() {
  const { state } = useLocation();
  const idCrucero = state?.producto?.id_crucero;
  const data = state?.data;
  const precioSeleccionado = state?.precioSeleccionado2 || random;
  const getImagenCrucero = (producto) => {
    if (producto.barco?.img_header_embarcacion) {
      return producto.barco.img_header_embarcacion;
    }
    const firstAvailablePortImage = producto.itin_dias
      .map((dia) => dia.puerto?.img_puerto_header)
      .find((img) => img && img.trim() !== "");
    return firstAvailablePortImage;
  };
  const { data: producto, isLoading } = useQuery({
    refetchInterval: 10_000,
    refetchIntervalInBackground: true,
    queryKey: ["crucero", idCrucero],
    queryFn: () => FetchCrucero(idCrucero),
    enabled: Boolean(idCrucero),
    refetchOnWindowFocus: false,
  });
  const tarifaSigueDisponible = producto?.tarifas?.some(
    (t) => t.id_tarifa === precioSeleccionado?.datos?.id_tarifa
  );
  if (isLoading)
    return (
      <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
        <Placeholder />
      </main>
    );
  if (!producto || !precioSeleccionado) {
    return (
      <Error
        tipo={2}
        error="Se necesitan más datos para acceder a esta página"
      />
    );
  }
  if (!precioSeleccionado || !tarifaSigueDisponible) {
    return (
      <Error
        enlace={`/crucero/${idCrucero}/`}
        error="La tarifa seleccionada ya no está disponible. Vuelve a la pantalla anterior y elige otra opción."
      />
    );
  }

  const imagenCrucero = getImagenCrucero(producto);
  const precioBase = Number(precioSeleccionado.price);
  const tasasPorPasajero = Number(precioSeleccionado.datos.tasas);
  const precioTotalPassajero = precioBase + tasasPorPasajero;
  const precioTotal = precioTotalPassajero * data.pasajeros.length;

  return (
    <main className=" tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-md hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          <div>
            <h1 className="tw-font-bold tw-text-md">Reservando Crucero</h1>
            <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm">
              {producto.num_dias +
                " días a bordo de " +
                producto.barco.nombre.texto}
            </p>
          </div>
          <img
            className="tw-w-[70px] tw-h-[50px] tw-object-contain tw-rounded-md tw-bordertw-border-slate-100 dark:tw-border-slate-700"
            src={
              "//pic-2.vpackage.net/cruceros_img/" +
              producto.naviera.img_naviera
            }
            alt="logoNaviera"
          />
        </div>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <Pasajeros pasajeros={data.pasajeros} />
        <Detalles producto={producto} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-md hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <div className="w-border-b-2  tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-mb-4">
          <h2 className="tw-font-bold tw-text-md ">Resumen</h2>
        </div>
        <Reserva
          img={"//pic-2.vpackage.net/cruceros_img/" + imagenCrucero}
          txt={producto.barco.nombre.texto}
        />
        <ul className="tw-mt-3 tw-text-sm dark:tw-text-white">
          <li className="tw-text-start tw-flex tw-items-center tw-gap-1">
            <SiMentorcruise className="tw-text-secondary tw-text-lg" />
            {FormatearFecha(precioSeleccionado.date)}
          </li>
        </ul>
        {data.pasajeros.map((pasajero, index) => {
          const discountedPrice = precioSeleccionado.price.toFixed(2);
          return (
            <div
              key={index}
              className="tw-border-b tw-flex tw-text-sm tw-justify-between tw-items-end dark:tw-border-slate-700 tw-py-2 tw-my-2"
            >
              <div>
                <h4 className="dark:tw-text-white tw-font-semibold tw-text-base">
                  Pasajero {index + 1}
                </h4>
                <span className="dark:tw-text-slate-300 tw-block">
                  Base: {Number(discountedPrice).toFixed(2)}€
                </span>
                <span className="dark:tw-text-slate-300 tw-block">
                  Tasas: {Number(precioSeleccionado.datos.tasas).toFixed(2)}€
                </span>
              </div>
              <span className="dark:tw-text-white tw-font-semibold">
                Total:{" "}
                {(
                  Number(discountedPrice) +
                  Number(precioSeleccionado.datos.tasas)
                ).toFixed(2)}
                €
              </span>
            </div>
          );
        })}

        <Link
          to={"/resumenCrucero"}
          state={{
            data,
            producto,
            precioSeleccionado,
          }}
        >
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            TOTAL: {precioTotal.toFixed(2)} €
          </button>
        </Link>
        <div className="tw-flex tw-justify-center">
          <button className="tw-w-fit tw-text-slate-500 tw-mt-1">
            descargar PDF
          </button>
        </div>
      </article>
    </main>
  );
}

export default ReservaFinal;
