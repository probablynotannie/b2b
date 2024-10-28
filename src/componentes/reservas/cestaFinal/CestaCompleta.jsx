import { useState } from "react";
import DatosPago from "./DatosPago";
import ResumenCompra from "./ResumenCompra";
function CestaCompleta() {
  const reserva = [
    {
      id: 0,
      texto: "Hotel",
      nombre: "Luxury appartments",
      fecha: "21 de octubre",
      img: "/hotel2.jpg",
      precio: 458,
      descripcion: "Amplio apartamento con vistas al mar, incluye desayuno.",
    },
    {
      id: 1,
      texto: "Entradas",
      nombre: "Festival de libros",
      fecha: "21 de octubre",
      img: "/banner_entradas.jpg",
      precio: 36,
      descripcion:
        "Entrada para el festival de libros de literatura fantástica.",
    },
    {
      id: 2,
      texto: "Ferri",
      nombre: "Ferri",
      fecha: "21 de octubre",
      img: "/banner_trenes.jpeg",
      precio: 142,
      descripcion: "Viaje en ferry de Barcelona a Ibiza, incluye vehículo.",
    },
  ];

  const opcionesDePago = [
    {
      id: 0,
      texto: "Paypal",
      img: "/paypal.png",
      class: "w-[50px] h-[50px]",
    },
    {
      id: 1,
      texto: "Bizum",
      img: "/bizum.png",
      class: "h-[50px]",
    },
    {
      id: 2,
      texto: "Tarjeta de credito",
      img: "/visa.png",
      class: "h-[30px]",
    },
  ];

  const [accordionOpen, setAccordionOpen] = useState(
    new Array(reserva.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const updatedAccordion = [...accordionOpen];
    updatedAccordion[index] = !updatedAccordion[index];
    setAccordionOpen(updatedAccordion);
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-16 container my-10 min-h-[70vh]">
        <ResumenCompra
          reserva={reserva}
          toggleAccordion={toggleAccordion}
          accordionOpen={accordionOpen}
        />
        <DatosPago reserva={reserva} opcionesDePago={opcionesDePago} />
      </div>
    </div>
  );
}

export default CestaCompleta;
