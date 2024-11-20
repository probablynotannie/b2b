import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* ESTRUCTURA */
import Navbar from "./componentes/estructura/Navbar";
import Footer from "./componentes/estructura/Footer";
/* MENU */
import Clientes from "./componentes/utilidades/Clientes";
import Presupuestos from "./componentes/utilidades/Presupuestos";
import EnvioPresupuestos from "./componentes/utilidades/EnvioPresupuestos";
/* MOTORES */
import Busqueda_Hoteles from "./componentes/motores/Hoteles";
import Busqueda_Coches from "./componentes/motores/Coches";
import Busqueda_Cruceros from "./componentes/motores/Cruceros";
import Busqueda_Destinos from "./componentes/motores/Destinos";
import Busqueda_Entradas from "./componentes/motores/Entradas";
import Busqueda_Ferris from "./componentes/motores/Ferris";
import Busqueda_Tickets from "./componentes/motores/Tickets";
import Busqueda_Vuelomashotel from "./componentes/motores/Vuelomashotel";

/* LISTADOS */
import ListadoHoteles from "./componentes/reservas/productos/hotel/Hoteles";
import ListadoVueloMasHotel from "./componentes/reservas/productos/vuelomashotel/Resultado";
import ListadoDestinos from "./componentes/reservas/productos/destinos/Destinos";

/* PRODUCTO */
import Hotel from "./componentes/reservas/productos/hotel/habitacion/Hotel";

/* RESERVA */
import Cesta from "./componentes/reservas/cestaFinal/CestaCompleta";
import ReservaFinalizada from "./componentes/reservaFinalizada/ReservaFinalizada";
import Datos from "./componentes/reservas/datos/Contacto";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* MOTORES */}
            <Route path="/" element={<Busqueda_Hoteles />} />
            <Route path="/coches" element={<Busqueda_Coches />} />
            <Route path="/hoteles" element={<Busqueda_Hoteles />} />
            <Route path="/cruceros" element={<Busqueda_Cruceros />} />
            <Route path="/destinos" element={<Busqueda_Destinos />} />
            <Route path="/entradas" element={<Busqueda_Entradas />} />
            <Route path="/ferris" element={<Busqueda_Ferris />} />
            <Route path="/tickets" element={<Busqueda_Tickets />} />
            <Route path="/vueloHotel" element={<Busqueda_Vuelomashotel />} />
            <Route path="/cesta" element={<Cesta />} />
            {/* LISTADOS */}
            <Route path="/listadoHoteles" element={<ListadoHoteles />} />
            <Route path="/listadoDestinos" element={<ListadoDestinos />} />
            <Route
              path="/listadoHotelMasVuelo"
              element={<ListadoVueloMasHotel />}
            />
            {/* PRODUCTO  */}
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/hotelMasVuelo" element={<Hotel />} />
            <Route path="/destinos" element={<Hotel />} />

            {/*  */}
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/envioPresupuestos" element={<EnvioPresupuestos />} />
            <Route path="/presupuestos" element={<Presupuestos />} />
            <Route path="/datos" element={<Datos />} />
            <Route path="/completada" element={<ReservaFinalizada />} />
          </Routes>
        </Router>
        <Footer />
      </>
    </MantineProvider>
  );
}

export default App;
