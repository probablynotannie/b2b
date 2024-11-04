import { useState } from "react";
import DatosPago from "./DatosPago";
import ResumenCompra from "./ResumenCompra";
function CestaCompleta() {
  const reserva = [
    {
      id: 0,
      texto: "Hotel",
      pax: 2,
      nombre: "Luxury appartments",
      localizacion: "Barcelona, calle inventada nº 5",

      fecha: "21 de octubre",
      fechaSalida: "26 de octubre",
      img: "/hotel2.jpg",
      precio: 458,
      importante:
        "Algunos establecimientos pueden considerar reservas de grupos aquellas reservas o bloqueos efectuados por la agencia de 5 habitaciones o más bajo un mismo o varios localizadores con idéntica fecha de creación, o realizadas en fechas diferentes y las fechas de estancia de las reservas coincida en varios de los días o en todos. Por lo que, ante estas situaciones, la mayorista se reserva el derecho de no aceptar dichas reservas, teniéndose que confirmar el precio y la disponibilidad de dichas plazas expresamente por la misma y tras la cotización de las plazas y los precios a través del departamento de grupos.",
      descripcion:
        "Amplio apartamento con vistas al mar, incluye desayuno. Cancelación. Una habitación triple con baño privado equipado con todo lo necesario.",
    },
    {
      id: 1,
      texto: "Entradas",
      pax: 2,
      nombre: "Festival de libros",
      localizacion: "Barcelona, calle inventada nº 5",
      fecha: "21 de octubre",
      img: "/banner_entradas.jpg",
      precio: 36.57,
      importante: "Cositas importantes de las entradas no se",
      descripcion:
        "Entrada para el festival de libros de literatura fantástica.",
    },
    {
      id: 2,
      texto: "Ferri",
      pax: 2,
      nombre: "Ferri",
      localizacion: "Barcelona, calle inventada nº 5",
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
  const [leido, setLeido] = useState({});

  const [selectedPayment, setSelectedPayment] = useState(null);

  //El primero en accordion esta abierto por default al entrar a la cesta
  const [accordionOpen, setAccordionOpen] = useState(
    reserva.map((_, index) => index === 0)
  );

  const toggleAccordion = (index) => {
    setAccordionOpen((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  //para tener el primero en accordion cerrado
  /*   const [accordionOpen, setAccordionOpen] = useState(
    new Array(reserva.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const updatedAccordion = [...accordionOpen];
    updatedAccordion[index] = !updatedAccordion[index];
    setAccordionOpen(updatedAccordion);
  }; */

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-16 container my-10 min-h-[70vh] overflow-visible">
        <ResumenCompra
          leido={leido}
          setLeido={setLeido}
          reserva={reserva}
          toggleAccordion={toggleAccordion}
          accordionOpen={accordionOpen}
        />
        <div>
          <DatosPago
            leido={leido}
            setLeido={setLeido}
            selectedPayment={selectedPayment}
            reserva={reserva}
            opcionesDePago={opcionesDePago}
            setSelectedPayment={setSelectedPayment}
          />
        </div>
      </div>
    </div>
  );
}

export default CestaCompleta;
