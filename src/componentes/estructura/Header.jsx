import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* ESTRUCTURA */
import Navbar from "../estructura/Navbar";
/* MENU */
import Clientes from "../utilidades/Clientes";
import Presupuestos from "../utilidades/Presupuestos";
import EnvioPresupuestos from "../utilidades/EnvioPresupuestos";
/* MOTORES */
import Busqueda_Hoteles from "../motores/Hoteles";
import Busqueda_Coches from "../motores/Coches";
import Busqueda_Cruceros from "../motores/Cruceros";
import Busqueda_Destinos from "../motores/Destinos";
import Busqueda_Entradas from "../motores/Entradas";
import Busqueda_Ferris from "../motores/Ferris";
import Busqueda_Trenes from "../motores/Trenes";
import Busqueda_Circuitos from "../motores/Circuitos";
import Busqueda_Tickets from "../motores/Tickets";
import Busqueda_Vuelomashotel from "../motores/Vuelomashotel";
import Busqueda_hotelmasferris from "../motores/hotelmasferris";
import Busqueda_hotelmasactividades from "../motores/hotelmasactividades";
import Busqueda_Seguros from "../motores/Seguros";

/* LISTADOS */
import ListadoHoteles from "../reservas/productos/hotel/Resultado";
import ListadoVueloMasHotel from "../reservas/productos/vuelomashotel/Resultado";
import ListadoDestinos from "../reservas/productos/destinos/Resultado";
import ListadoCruceros from "../reservas/productos/cruceros/Resultado";
import ListadoCoches from "../reservas/productos/coches/Resultado";
import ListadoTickets from "../reservas/productos/tickets/Resultado";
import ListadoEntradas from "../reservas/productos/entradas/Resultado";
import ListadoTrenes from "../reservas/productos/trenes/Resultado";
import ListadoFerris from "../reservas/productos/ferris/Resultado";
import ListadoCircuitos from "../reservas/productos/circuitos/Resultado";
import ListadoVuelos from "../reservas/productos/vuelos/Resultado";

/* PRODUCTO */
import Hotel from "../reservas/productos/hotel/Hotel";
import HotelMasVuelo from "../reservas/productos/vuelomashotel/seleccion/Hotel";
import Destino from "../reservas/productos/destinos/destino/Destino";
import Crucero from "../reservas/productos/cruceros/Crucero";
import Coche from "../reservas/productos/coches/detalles/Coche";
import Seguro from "../reservas/productos/seguro/Resultado";
import Actividad from "../reservas/productos/tickets/Ticket";
import Tren from "../reservas/productos/trenes/Tren";

/*Componentes */
import Fecha from "../reservas/productos/destinos/destino/reserva/Fechas";
import Condiciones from "../reservas/estructura/Condiciones_reserva";

/* RESERVA */
import Cesta from "../reservas/cestaFinal/CestaCompleta";
import ReservaFinalizada from "../reservaFinalizada/ReservaFinalizada";
import Datos from "../reservas/datos/Contacto";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

function Header() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* MOTORES */}
        <Route path="/" element={<Busqueda_Hoteles />} />
        <Route path="/coches" element={<Busqueda_Coches />} />
        <Route path="/hoteles" element={<Busqueda_Hoteles />} />
        <Route path="/cruceros" element={<Busqueda_Cruceros />} />
        <Route path="/destinos" element={<Busqueda_Destinos />} />
        <Route path="/circuitos" element={<Busqueda_Circuitos />} />
        <Route path="/entradas" element={<Busqueda_Entradas />} />
        <Route path="/seguros" element={<Busqueda_Seguros />} />
        <Route path="/hotelmasferris" element={<Busqueda_hotelmasferris />} />
        <Route
          path="/hotelmasactividades"
          element={<Busqueda_hotelmasactividades />}
        />
        <Route path="/ferris" element={<Busqueda_Ferris />} />
        <Route path="/trenes" element={<Busqueda_Trenes />} />
        <Route path="/tickets" element={<Busqueda_Tickets />} />
        <Route path="/vueloHotel" element={<Busqueda_Vuelomashotel />} />
        <Route path="/cesta" element={<Cesta />} />
        {/* LISTADOS */}
        <Route path="/listadoHoteles" element={<ListadoHoteles />} />
        <Route path="/listadoTrenes" element={<ListadoTrenes />} />
        <Route path="/listadoCoches" element={<ListadoCoches />} />
        <Route path="/listadoDestinos" element={<ListadoDestinos />} />
        <Route path="/listadoTickets" element={<ListadoTickets />} />
        <Route path="/listadoFerris" element={<ListadoFerris />} />
        <Route path="/listadoCircuitos" element={<ListadoCircuitos />} />
        <Route path="/listadoCruceros" element={<ListadoCruceros />} />
        <Route path="/listadoEntradas" element={<ListadoEntradas />} />
        <Route path="/listadoVuelos" element={<ListadoVuelos />} />
        <Route
          path="/listadoHotelMasVuelo"
          element={<ListadoVueloMasHotel />}
        />
        {/* PRODUCTO  */}
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/tren" element={<Tren />} />
        <Route path="/seguro" element={<Seguro />} />
        <Route path="/hotelMasVuelo" element={<HotelMasVuelo />} />
        <Route path="/destino" element={<Destino />} />
        <Route path="/crucero" element={<Crucero />} />
        <Route path="/coche" element={<Coche />} />
        <Route path="/actividad" element={<Actividad />} />
        {/*otros*/}
        <Route path="/fecha" element={<Fecha />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/envioPresupuestos" element={<EnvioPresupuestos />} />
        <Route path="/presupuestos" element={<Presupuestos />} />
        <Route path="/datos" element={<Datos />} />
        <Route path="/condiciones_de_reserva" element={<Condiciones />} />
        <Route path="/completada" element={<ReservaFinalizada />} />
      </Routes>
    </>
  );
}

export default Header;
