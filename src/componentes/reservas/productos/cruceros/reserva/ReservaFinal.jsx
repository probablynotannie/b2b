import { useState } from "react";
import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { SiMentorcruise } from "react-icons/si";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import { Link } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import { useQuery } from "@tanstack/react-query";
import Pasajeros from "./Pasajeros";
import random from "./random.json";
import FetchCrucero from "../hook/crucero";
import Error from "../filtros/Error";
import Placeholder from "../../../../../helpers/placeholders/Detalles";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Itinerario from "../crucero/contenidoPrincipal/Itinerario";
import DetallesConIconos from "../crucero/contenidoPrincipal/Detalles";
function ReservaFinal() {
  const { state } = useLocation();
  const idCrucero = state?.producto?.id_crucero;
  const data = state?.data;
  const precioSeleccionado = state?.precioSeleccionado || random;
  const [pagoSeleccionado, setPagoSeleccionado] = useState(null);
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
  if (isLoading) return <Placeholder />;
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

  const handleSelect = (option) => {
    setPagoSeleccionado(option);
  };
  const pagos = [
    {
      id: 0,
      img: "/paypal.png",
      texto: "paypal",
    },
    {
      id: 1,
      img: "/visa.png",
      texto: "visa",
    },
  ];
  return (
    <PaginaDetalles
      titulo={"Reservando crucero"}
      tituloDescripcion={
        producto.num_dias + " días a bordo de " + producto.barco.nombre.texto
      }
      tituloSecundario={
        <img
          className="tw-w-[70px] tw-h-[50px] tw-object-contain tw-rounded-md tw-bordertw-border-slate-100 dark:tw-border-slate-700"
          src={
            "//pic-2.vpackage.net/cruceros_img/" + producto.naviera.img_naviera
          }
          alt="logoNaviera"
        />
      }
      contenidoPrincipal={
        <>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            email={data.email}
            numero={data.numero}
          />
          <Pasajeros pasajeros={data.pasajeros} />
          <section className="tw-mt-5">
            <div className="tw-bg-slate-50 tw-mt-5 dark:tw-bg-slate-900 dark:tw-text-slate-300 tw-p-3 tw-pt-5 tw-pb-5 tw-my-5 tw-rounded">
              <DetallesConIconos producto={producto} />
            </div>
            <Itinerario producto={producto.itin_dias} />
          </section>
        </>
      }
      contenidoSecundario={
        <>
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
                className={`tw-flex tw-text-sm tw-justify-between tw-items-end tw-py-2 ${
                  index !== data.pasajeros.length - 1 &&
                  "tw-border-b tw-border-slate-100 dark:tw-border-slate-700"
                }`}
              >
                <div>
                  <h4 className="dark:tw-text-white tw-font-semibold tw-text-base">
                    Pasajero {index + 1}
                  </h4>
                  <ul className="tw-text-slate-600 dark:tw-text-slate-400">
                    <li>Base: {Number(discountedPrice).toFixed(2)}€</li>
                    <li>
                      Tasas: {Number(precioSeleccionado.datos.tasas).toFixed(2)}
                      €
                    </li>
                  </ul>
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
          <div>
            <ul className="tw-grid tw-grid-cols-2 tw-gap-5">
              {pagos.map((pago) => (
                <li
                  key={pago.id}
                  onClick={() => handleSelect(pago.texto)}
                  className={`tw-flex tw-justify-center hover:tw-scale-105 tw-smooth tw-p-2 tw-rounded tw-pb-2 tw-border ${
                    pagoSeleccionado === pago.texto
                      ? "tw-bg-blue-100 dark:tw-bg-blue-900 tw-border-blue-500"
                      : "tw-bg-slate-50 dark:tw-bg-slate-800 tw-border-slate-100 dark:tw-border-slate-700"
                  }`}
                >
                  <img
                    src={pago.img}
                    className="tw-h-12 tw-w-20 tw-object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={"/resumenCrucero"}
            state={{
              data,
              producto,
              precioSeleccionado,
            }}
          >
            <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
              TOTAL: {precioTotal.toFixed(2)} €
            </button>
          </Link>
          <div className="tw-flex tw-justify-center">
            <button className="tw-w-fit tw-text-slate-500 tw-mt-1">
              descargar PDF
            </button>
          </div>
        </>
      }
    />
  );
}

export default ReservaFinal;
