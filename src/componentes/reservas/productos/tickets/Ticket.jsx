import Buscador from "./filtros/Buscador";
import { GiCruiser } from "react-icons/gi";
import Tarifas from "./Tarifa_lista";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Producto() {
  const location = useLocation();
  const producto = location.state;

 /*  const reserva = {
    type: "crucero",
    nombre: producto.titulo,
    fechaIda: selectedDate,
    fechaVuelta: endDate || "Fecha no seleccionada", // Fallback for no selected date
    precio: precio,
  };
 */
  return (
    <main className="flex justify-center flex-col my-10 px-5 md:px-0">
      
    </main>
  );
}

export default Producto;
