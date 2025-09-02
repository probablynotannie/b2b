import { Route, Routes } from "react-router-dom";
/* ESTRUCTURA */
import Navbar from "../estructura/nav/Navbar";
import Landing from "../Landing";
import Notificaciones from "../Notificaciones";

/* MENU */
import Clientes from "../utilidades/clientes/Resultado";
import Presupuestos from "../utilidades/presupuestos/Resultado";
import EnvioPresupuestos from "../utilidades/envioPresupuestos/Resultado";
/* MOTORES */
import Busqueda_Hoteles from "../motores/Hoteles";
import Busqueda_Destinos from "../motores/Destinos";
import Busqueda_Cruceros from "../motores/Cruceros";
import Busqueda_Transfers from "../motores/Transfers";
import Busqueda_Vuelomashotel from "../motores/Vuelomashotel";
import Busqueda_hotelmasactividades from "../motores/hotelmasactividades";
import Busqueda_hotelmasferris from "../motores/hotelmasferris";
import Busqueda_Coches from "../motores/Coches";
import Busqueda_Tickets from "../motores/Tickets";
import Busqueda_Entradas from "../motores/Entradas";
import Busqueda_Ferris from "../motores/Ferris";
import Busqueda_Trenes from "../motores/Trenes";
import Busqueda_Seguros from "../motores/Seguros";
import Busqueda_Vuelos from "../motores/Vuelos";
import Busqueda_Circuitos from "../motores/Circuitos";

/* LISTADOS */
import ListadoHoteles from "../reservas/hotel/Resultado";
import ListadoVueloMasHotel from "../reservas/hotelmasvuelo/Resultado";
import ListadoDestinos from "../reservas/destinos/Resultado";
import ListadoCruceros from "../reservas/cruceros/Resultado";
import ListadoCoches from "../reservas/coches/Resultado";
import ListadoTransfers from "../reservas/transfers/Resultado";
import ListadoTickets from "../reservas/tickets/Resultado";
import ListadoEntradas from "../reservas/entradas/Resultado";
import ListadoTrenes from "../reservas/trenes/Resultado";
import ListadoFerris from "../reservas/ferris/Resultado";
import ListadoHotelMasFerry from "../reservas/hotelmasferry/Resultado";
import ListadoHotelMasActividades from "../reservas/hotelmasactividades/Resultado";
import ListadoCircuitos from "../reservas/circuitos/Resultado";
import ListadoVuelos from "../reservas/vuelos/Resultado";

/* PRODUCTO */
import Hotel from "../reservas/hotel/Hotel";
import Ferry from "../reservas/ferris/detalles/Ferry";
import HotelMasFerry from "../reservas/hotelmasferry/seleccion/Seleccion";
import HotelMasVuelo from "../reservas/hotelmasvuelo/seleccion/HotelMasVuelo";
import Destino from "../reservas/destinos/destino/Destino";
import Crucero from "../reservas/cruceros/crucero/Crucero";
import Coche from "../reservas/coches/detalles/Coche";
import Seguro from "../reservas/seguro/Resultado";
import Ticket from "../reservas/tickets/ticket/Ticket";
import Entrada from "../reservas/entradas/entrada/Entrada";
import Tren from "../reservas/trenes/detalles/Tren";
import Circuito from "../reservas/circuitos/detalles/Circuito";
import HotelmAsActividades from "../reservas/hotelmasactividades/seleccion/Seleccion";
import Combinado from "../reservas/combinados/Combinado";
/*Componentes */
import Fecha from "../reservas/destinos/destino/reserva/Destino";
import Condiciones from "../../helpers/visuales/condiciones/Condiciones_reserva";

/* CESTA */
import ReservaCoche from "../reservas/coches/reserva/ReservaFinal";
import ReservaTransfer from "../reservas/transfers/reserva/ReservaFinal";
import ReservaVuelo from "../reservas/vuelos/reserva/ReservaFinal";
import ReservaEntrada from "../reservas/entradas/reserva/ReservaFinal";
import ReservaTickets from "../reservas/tickets/reserva/ReservaFinal";
import ReservaHotel from "../reservas/hotel/reserva/ReservaFinal";
import ReservaCrucero from "../reservas/cruceros/reserva/ReservaFinal";
import ReservaFerry from "../reservas/ferris/reserva/ReservaFinal";
import ReservaDestino from "../reservas/destinos/reserva/ReservaFinal";
import ReservaTren from "../reservas/trenes/reserva/ReservaFinal";
import ReservaCircuito from "../reservas/circuitos/reserva/ReservaFinal";
import ReservaSeguro from "../reservas/seguro/reserva/ReservaFinal";
import ReservaHotelFerry from "../reservas/hotelmasferry/reserva/ReservaFinal";
import ReservaHotelMasActividades from "../reservas/hotelmasactividades/reserva/ReservaFinal";
import ReservaHotelMasVuelo from "../reservas/hotelmasvuelo/reserva/ReservaFinal";

/* Datos */
import DatosVuelo from "../reservas/vuelos/reserva/Datos";
import DatosCoche from "../reservas/coches/reserva/Datos";
import DatosTransfer from "../reservas/transfers/reserva/Datos";
import DatosCrucero from "../reservas/cruceros/reserva/Datos";
import DatosEntrada from "../reservas/entradas/reserva/Datos";
import DatosTickets from "../reservas/tickets/reserva/Datos";
import DatosHotel from "../reservas/hotel/reserva/Datos";
import DatosFerry from "../reservas/ferris/reserva/Datos";
import DatosDestino from "../reservas/destinos/reserva/Datos";
import DatosTren from "../reservas/trenes/reserva/Datos";
import DatosCircuito from "../reservas/circuitos/reserva/Datos";
import DatosSeguro from "../reservas/seguro/reserva/Datos";
import DatosHotelFerry from "../reservas/hotelmasferry/reserva/Datos";
import DatosHotelMasActividades from "../reservas/hotelmasactividades/reserva/Datos";
import DatosHotelMasVuelo from "../reservas/hotelmasvuelo/reserva/Datos";
import DatosCombinado from "../reservas/combinados/reserva/Datos";

/* RESUMEN FINAL */
import ResumenCircuitos from "../reservas/circuitos/final/ResumenFinal";
import ResumenCoches from "../reservas/coches/final/ResumenFinal";
import ResumenTransfer from "../reservas/transfers/final/ResumenFinal";
import ResumenCrucero from "../reservas/cruceros/final/ResumenFinal";
import ResumenDestino from "../reservas/destinos/final/ResumenFinal";
import ResumenEntradas from "../reservas/entradas/final/ResumenFinal";
import ResumenFerry from "../reservas/ferris/final/ResumenFinal";
import ResumenHotel from "../reservas/hotel/final/ResumenFinal";
import ResumenHotelMasActividades from "../reservas/hotelmasactividades/final/ResumenFinal";
import ResumenHotelMasFerry from "../reservas/hotelmasferry/final/ResumenFinal";
import ResumenHotelMasVuelo from "../reservas/hotelmasvuelo/final/ResumenFinal";
import ResumenSeguro from "../reservas/seguro/final/ResumenFinal";
import ResumenTickets from "../reservas/tickets/final/ResumenFinal";
import ResumenTren from "../reservas/trenes/final/ResumenFinal";
import ResumenVuelo from "../reservas/vuelos/final/ResumenFinal";
import ResumenCombinado from "../reservas/combinados/reserva/ReservaFinal";
/* Consultar las reservas */
import Listado_reservas_hoteles from "../consultaReservas/hoteles/Resultado";
import Listado_reservas_coches from "../consultaReservas/coches/Resultado";
import Listado_reservas_destinos from "../consultaReservas/destinos/Resultado";
import Listado_reservas_ferris from "../consultaReservas/ferris/Resultado";
import Listado_reservas_seguros from "../consultaReservas/seguros/Resultado";
import Listado_reservas_tickets from "../consultaReservas/tickets/Resultado";
import Listado_reservas_trenes from "../consultaReservas/trenes/Resultado";
import Listado_reservas_vuelomashotel from "../consultaReservas/vuelomashotel/Resultado";
/* Detalles reserva */
import Detalles_Reserva_Coche from "../consultaReservas/coches/detalles/Coche";
import Detalles_Reserva_Destino from "../consultaReservas/destinos/detalles/Destino";
import Detalles_Reserva_Ferry from "../consultaReservas/ferris/detalles/Ferry";
import Detalles_Reserva_Hotel from "../consultaReservas/hoteles/detalles/Hotel";
import Detalles_Reserva_Ticket from "../consultaReservas/tickets/detalles/Ticket";
import Detalles_Reserva_Tren from "../consultaReservas/trenes/detalles/Tren";
import Detalles_Reserva_Seguro from "../consultaReservas/seguros/detalles/Seguro";
import Detalles_Reserva_VueloMasHotel from "../consultaReservas/vuelomashotel/detalles/VueloMasHotel";
/* MANTINE */
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

function Header() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Otros componentes */}
        <Route path="/" element={<Landing />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/cesta" element={<Combinado />} />
        {/* MOTORES */}
        <Route path="/hoteles" element={<Busqueda_Hoteles />} />
        <Route path="/coches" element={<Busqueda_Coches />} />
        <Route path="/transfers" element={<Busqueda_Transfers />} />
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
        {/* CONSULTAR RESERVAS */}
        <Route
          path="/hoteles/reservas"
          element={<Listado_reservas_hoteles />}
        />
        <Route path="/coches/reservas" element={<Listado_reservas_coches />} />
        <Route
          path="/destinos/reservas"
          element={<Listado_reservas_destinos />}
        />
        <Route path="/ferris/reservas" element={<Listado_reservas_ferris />} />
        <Route
          path="/seguros/reservas"
          element={<Listado_reservas_seguros />}
        />
        <Route
          path="/tickets/reservas"
          element={<Listado_reservas_tickets />}
        />
        <Route path="/trenes/reservas" element={<Listado_reservas_trenes />} />
        <Route
          path="/vuelomashotel/reservas"
          element={<Listado_reservas_vuelomashotel />}
        />
        {/* Detalles de la reserva */}
        <Route path="coche/detalles" element={<Detalles_Reserva_Coche />} />
        <Route path="destino/detalles" element={<Detalles_Reserva_Destino />} />
        <Route path="ferry/detalles" element={<Detalles_Reserva_Ferry />} />
        <Route path="hotel/detalles" element={<Detalles_Reserva_Hotel />} />
        <Route path="ticket/detalles" element={<Detalles_Reserva_Ticket />} />
        <Route path="tren/detalles" element={<Detalles_Reserva_Tren />} />
        <Route path="seguro/detalles" element={<Detalles_Reserva_Seguro />} />
        <Route
          path="vuelo+hotel/detalles"
          element={<Detalles_Reserva_VueloMasHotel />}
        />
        {/* LISTADOS */}
        <Route
          path="/listadoHoteles/:codearea?/:codcity?/:fecini?/:noc?/:numper?"
          element={<ListadoHoteles />}
        />
        <Route path="/listadoTrenes" element={<ListadoTrenes />} />
        <Route path="/listadoCoches" element={<ListadoCoches />} />
        <Route path="/listadoTransfers" element={<ListadoTransfers />} />
        <Route
          path="/listadohotelmasferry"
          element={<ListadoHotelMasFerry />}
        />
        <Route path="/listadoDestinos" element={<ListadoDestinos />} />
        <Route
          path="/listadoTickets/:codearea?/:codcity?/:fecini?/:noc?/:numper?"
          element={<ListadoTickets />}
        />
        <Route path="/listadoFerris" element={<ListadoFerris />} />
        <Route
          path="/listadoHotelMasActividades/:codearea?/:codcity?/:fecini?/:noc?/:numper?"
          element={<ListadoHotelMasActividades />}
        />
        <Route path="/listadoCircuitos" element={<ListadoCircuitos />} />
        <Route
          path="/listadoCruceros/:idZona?/:idZonaVal?/:idPuerto?/:idPuertoVal?/:idNav?/:idNavVal?/:fechSal?/:fechSalVal?/:duracion?/:duracionVal?"
          element={<ListadoCruceros />}
        />
        <Route
          path="/listadoEntradas/:codearea?/:codcity?/:fecini?/:noc?/:numper?"
          element={<ListadoEntradas />}
        />
        <Route path="/listadoVuelos" element={<ListadoVuelos />} />
        <Route
          path="/listadoHotelMasVuelo"
          element={<ListadoVueloMasHotel />}
        />
        {/* PRODUCTO  */}
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotelMasFerry" element={<HotelMasFerry />} />
        <Route path="/tren" element={<Tren />} />
        <Route path="/ferry" element={<Ferry />} />
        <Route path="/seguro" element={<Seguro />} />
        <Route path="/hotelMasVuelo" element={<HotelMasVuelo />} />
        <Route path="/destino" element={<Destino />} />
        <Route path="/crucero/:idCrucero/:itinerario?" element={<Crucero />} />
        <Route path="/coche" element={<Coche />} />
        <Route path="/ticket/:idTicket/:idOp" element={<Ticket />} />
        <Route path="/entrada" element={<Entrada />} />
        <Route path="/circuito" element={<Circuito />} />
        <Route path="/hotel+actividades" element={<HotelmAsActividades />} />
        {/* Reserva */}
        <Route path="/reservaCoche" element={<ReservaCoche />} />
        <Route path="/reservaTransfer" element={<ReservaTransfer />} />
        <Route path="/reservavuelo" element={<ReservaVuelo />} />
        <Route path="/reservaentrada" element={<ReservaEntrada />} />
        <Route path="/reservatickets" element={<ReservaTickets />} />
        <Route path="/reservaHotel" element={<ReservaHotel />} />
        <Route
          path="/crucero/reserva/:id/:itinerario"
          element={<ReservaCrucero />}
        />
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
        <Route path="/datosTransfer" element={<DatosTransfer />} />
        <Route
          path="/crucero/datos/:idCrucero/:itinerario"
          element={<DatosCrucero />}
        />
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
        <Route path="/datosCombinado" element={<DatosCombinado />} />
        <Route
          path="/datosHotelMasActividades"
          element={<DatosHotelMasActividades />}
        />
        {/* RESUMEN FINAL */}
        <Route path="/resumenHotel" element={<ResumenHotel />} />
        <Route path="/resumenCircuito" element={<ResumenCircuitos />} />
        <Route path="/resumenCoche" element={<ResumenCoches />} />
        <Route path="/resumenTransfer" element={<ResumenTransfer />} />
        <Route path="/resumenCrucero" element={<ResumenCrucero />} />
        <Route path="/resumenDestino" element={<ResumenDestino />} />
        <Route path="/resumenEntradas" element={<ResumenEntradas />} />
        <Route path="/resumenFerry" element={<ResumenFerry />} />
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
        <Route path="/resumenTren" element={<ResumenTren />} />
        <Route path="/resumenVuelo" element={<ResumenVuelo />} />
        <Route path="/resumenCombinados" element={<ResumenCombinado />} />
        {/*otros*/}
        <Route path="/fecha" element={<Fecha />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/envioPresupuestos" element={<EnvioPresupuestos />} />
        <Route path="/presupuestos" element={<Presupuestos />} />
        <Route path="/condiciones_de_reserva" element={<Condiciones />} />
      </Routes>
    </>
  );
}

export default Header;
