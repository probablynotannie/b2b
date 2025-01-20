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
import Busqueda_Vuelos from "../motores/Vuelos";
import Busqueda_Trenes from "../motores/Trenes";
import Busqueda_Circuitos from "../motores/Circuitos";
import Busqueda_Tickets from "../motores/Tickets";
import Busqueda_Vuelomashotel from "../motores/Vuelomashotel";
import Busqueda_hotelmasferris from "../motores/hotelmasferris";
import Busqueda_hotelmasactividades from "../motores/hotelmasactividades";
import Busqueda_Seguros from "../motores/Seguros";
/* LISTADOS */
import ListadoHoteles from "../reservas/productos/hotel/Resultado";
import ListadoVueloMasHotel from "../reservas/productos/hotelmasvuelo/Resultado";
import ListadoDestinos from "../reservas/productos/destinos/Resultado";
import ListadoCruceros from "../reservas/productos/cruceros/Resultado";
import ListadoCoches from "../reservas/productos/coches/Resultado";
import ListadoTickets from "../reservas/productos/tickets/Resultado";
import ListadoEntradas from "../reservas/productos/entradas/Resultado";
import ListadoTrenes from "../reservas/productos/trenes/Resultado";
import ListadoFerris from "../reservas/productos/ferris/Resultado";
import ListadoHotelMasFerry from "../reservas/productos/hotelmasferry/Resultado";
import ListadoHotelMasActividades from "../reservas/productos/hotelmasactividades/Resultado";
import ListadoCircuitos from "../reservas/productos/circuitos/Resultado";
import ListadoVuelos from "../reservas/productos/vuelos/Resultado";

/* PRODUCTO */
import Hotel from "../reservas/productos/hotel/Hotel";
import Vuelo from "../reservas/productos/vuelos/reserva/Vuelo";
import HotelMasFerry from "../reservas/productos/hotelmasferry/seleccion/Seleccion";
import HotelMasVuelo from "../reservas/productos/hotelmasvuelo/seleccion/HotelMasVuelo";
import Destino from "../reservas/productos/destinos/destino/Destino";
import Crucero from "../reservas/productos/cruceros/Crucero";
import Coche from "../reservas/productos/coches/detalles/Coche";
import Seguro from "../reservas/productos/seguro/Resultado";
import Ticket from "../reservas/productos/tickets/Ticket";
import Entrada from "../reservas/productos/entradas/Entrada";
import Tren from "../reservas/productos/trenes/Tren";
import Circuito from "../reservas/productos/circuitos/Circuito";
import HotelmAsActividades from "../reservas/productos/hotelmasactividades/seleccion/Seleccion";

/*Componentes */
import Fecha from "../reservas/productos/destinos/destino/reserva/Fechas";
import Condiciones from "../reservas/estructura/Condiciones_reserva";

/* CESTA */
import ReservaCoche from "../reservas/productos/coches/reserva/ReservaFinal";
import ReservaEntrada from "../reservas/productos/entradas/reserva/ReservaFinal";
import ReservaTickets from "../reservas/productos/tickets/reserva/ReservaFinal";
import ReservaHotel from "../reservas/productos/hotel/reserva/ReservaFinal";
import ReservaCrucero from "../reservas/productos/cruceros/reserva/ReservaFinal";
import ReservaFerry from "../reservas/productos/ferris/reserva/ReservaFinal";
import ReservaDestino from "../reservas/productos/destinos/reserva/ReservaFinal";
import ReservaTren from "../reservas/productos/trenes/reserva/ReservaFinal";
import ReservaCircuito from "../reservas/productos/circuitos/reserva/ReservaFinal";
import ReservaSeguro from "../reservas/productos/seguro/reserva/ReservaFinal";
import ReservaHotelFerry from "../reservas/productos/hotelmasferry/reserva/ReservaFinal";
import ReservaHotelMasActividades from "../reservas/productos/hotelmasactividades/reserva/ReservaFinal";
import ReservaHotelMasVuelo from "../reservas/productos/hotelmasvuelo/reserva/ReservaFinal";

/* Datos */
import DatosVuelo from "../reservas/productos/vuelos/reserva/Datos";
import DatosCoche from "../reservas/productos/coches/reserva/Datos";
import DatosCrucero from "../reservas/productos/cruceros/reserva/Datos";
import DatosEntrada from "../reservas/productos/entradas/reserva/Datos";
import DatosTickets from "../reservas/productos/tickets/reserva/Datos";
import DatosHotel from "../reservas/productos/hotel/reserva/Datos";
import DatosFerry from "../reservas/productos/ferris/reserva/Datos";
import DatosDestino from "../reservas/productos/destinos/reserva/Datos";
import DatosTren from "../reservas/productos/trenes/reserva/Datos";
import DatosCircuito from "../reservas/productos/circuitos/reserva/Datos";
import DatosSeguro from "../reservas/productos/seguro/reserva/Datos";
import DatosHotelFerry from "../reservas/productos/hotelmasferry/reserva/Datos";
import DatosHotelMasActividades from "../reservas/productos/hotelmasactividades/reserva/Datos";
import DatosHotelMasVuelo from "../reservas/productos/hotelmasvuelo/reserva/Datos";

/* RESUMEN FINAL */
import ResumenCircuitos from "../reservas/productos/circuitos/final/ResumenFinal";
import ResumenCoches from "../reservas/productos/coches/final/ResumenFinal";
import ResumenCruceros from "../reservas/productos/cruceros/final/ResumenFinal";
import ResumenDestinos from "../reservas/productos/destinos/final/ResumenFinal";
import ResumenEntradas from "../reservas/productos/entradas/final/ResumenFinal";
import ResumenFerris from "../reservas/productos/Ferris/final/ResumenFinal";
import ResumenHotel from "../reservas/productos/hotel/final/ResumenFinal";
import ResumenHotelMasActividades from "../reservas/productos/hotelmasactividades/final/ResumenFinal";
import ResumenHotelMasFerry from "../reservas/productos/hotelmasferry/final/ResumenFinal";
import ResumenHotelMasVuelo from "../reservas/productos/hotelmasvuelo/final/ResumenFinal";
import ResumenSeguro from "../reservas/productos/seguro/final/ResumenFinal";
import ResumenTickets from "../reservas/productos/tickets/final/ResumenFinal";
import ResumenTrenes from "../reservas/productos/trenes/final/ResumenFinal";
import ResumenVuelos from "../reservas/productos/vuelos/final/ResumenFinal";

import Cesta from "../reservas/cestaFinal/CestaCompleta";
import ReservaFinalizada from "../reservaFinalizada/ReservaFinalizada";
import Datos from "../reservas/datos/Contacto";

/* MANTINE */
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
        <Route path="/vuelos" element={<Busqueda_Vuelos />} />
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
        <Route
          path="/listadohotelmasferry"
          element={<ListadoHotelMasFerry />}
        />
        <Route path="/listadoDestinos" element={<ListadoDestinos />} />
        <Route path="/listadoTickets" element={<ListadoTickets />} />
        <Route path="/listadoFerris" element={<ListadoFerris />} />
        <Route
          path="/listadoHotelMasActividades"
          element={<ListadoHotelMasActividades />}
        />
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
        <Route path="/hotelMasFerry" element={<HotelMasFerry />} />
        <Route path="/tren" element={<Tren />} />
        <Route path="/seguro" element={<Seguro />} />
        <Route path="/hotelMasVuelo" element={<HotelMasVuelo />} />
        <Route path="/destino" element={<Destino />} />
        <Route path="/crucero" element={<Crucero />} />
        <Route path="/coche" element={<Coche />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/entrada" element={<Entrada />} />
        <Route path="/circuito" element={<Circuito />} />
        <Route path="/hotel+actividades" element={<HotelmAsActividades />} />
        {/* Reserva */}
        <Route path="/reservaCoche" element={<ReservaCoche />} />
        <Route path="/reservavuelo" element={<Vuelo />} />
        <Route path="/reservaentrada" element={<ReservaEntrada />} />
        <Route path="/reservatickets" element={<ReservaTickets />} />
        <Route path="/reservaHotel" element={<ReservaHotel />} />
        <Route path="/reservaCrucero" element={<ReservaCrucero />} />
        <Route path="/reservaFerry" element={<ReservaFerry />} />
        <Route path="/reservaDestino" element={<ReservaDestino />} />
        <Route path="/reservaTren" element={<ReservaTren />} />
        <Route path="/reservaCircuito" element={<ReservaCircuito />} />
        <Route path="/reservaSeguro" element={<ReservaSeguro />} />
        <Route path="/reservaHotelFerry" element={<ReservaHotelFerry />} />
        <Route
          path="/reservaHotelMasVuelo"
          element={<ReservaHotelMasVuelo />}
        />
        <Route
          path="/reservaHotelMasActividades"
          element={<ReservaHotelMasActividades />}
        />

        {/* DATOS */}
        <Route path="/datosVuelo" element={<DatosVuelo />} />
        <Route path="/datosCoche" element={<DatosCoche />} />
        <Route path="/datosCrucero" element={<DatosCrucero />} />
        <Route path="/datosEntrada" element={<DatosEntrada />} />
        <Route path="/datostickets" element={<DatosTickets />} />
        <Route path="/datoshotel" element={<DatosHotel />} />
        <Route path="/datosferry" element={<DatosFerry />} />
        <Route path="/datosDestino" element={<DatosDestino />} />
        <Route path="/datosTren" element={<DatosTren />} />
        <Route path="/datosCircuito" element={<DatosCircuito />} />
        <Route path="/datosSeguro" element={<DatosSeguro />} />
        <Route path="/datosHotelFerry" element={<DatosHotelFerry />} />
        <Route path="/datosHotelMasVuelo" element={<DatosHotelMasVuelo />} />
        <Route
          path="/datosHotelMasActividades"
          element={<DatosHotelMasActividades />}
        />

        {/* RESUMEN FINAL */}
        <Route path="/resumenHotel" element={<ResumenHotel />} />
        <Route path="/resumenCircuitos" element={<ResumenCircuitos />} />
        <Route path="/resumenCoches" element={<ResumenCoches />} />
        <Route path="/resumenCruceros" element={<ResumenCruceros />} />
        <Route path="/resumenDestinos" element={<ResumenDestinos />} />
        <Route path="/resumenEntradas" element={<ResumenEntradas />} />
        <Route path="/resumenFerris" element={<ResumenFerris />} />
        <Route
          path="/resumenHotelMasActividades"
          element={<ResumenHotelMasActividades />}
        />
        <Route
          path="/resumenHotelMasFerry"
          element={<ResumenHotelMasFerry />}
        />
        <Route
          path="/resumenHotelMasVuelo"
          element={<ResumenHotelMasVuelo />}
        />
        <Route path="/resumenSeguro" element={<ResumenSeguro />} />
        <Route path="/resumenTickets" element={<ResumenTickets />} />
        <Route path="/resumenTrenes" element={<ResumenTrenes />} />
        <Route path="/resumenVuelos" element={<ResumenVuelos />} />

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
