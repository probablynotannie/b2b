import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/estructura/Navbar";
import Hoteles from "./componentes/motores/Hoteles";
import Coches from "./componentes/motores/Coches";
import Cruceros from "./componentes/motores/Cruceros";
import Destinos from "./componentes/motores/Destinos";
import Entradas from "./componentes/motores/Entradas";
import Ferris from "./componentes/motores/Ferris";
import Cesta from "./componentes/reservas/cestaFinal/CestaCompleta";
import ReservaFinalizada from "./componentes/reservaFinalizada/ReservaFinalizada";
import Tickets from "./componentes/motores/Tickets";
import Clientes from "./componentes/utilidades/Clientes";
import Presupuestos from "./componentes/utilidades/Presupuestos";
import EnvioPresupuestos from "./componentes/utilidades/EnvioPresupuestos";
import Vuelomashotel from "./componentes/motores/Vuelomashotel";
import Producto from "./componentes/reservas/productos/hotel/Hotel";
import Productos from "./componentes/reservas/productos/hotel/Hoteles";
import Datos from "./componentes/reservas/datos/Contacto";
import ListadoVueloMasHotel from "./componentes/reservas/productos/vuelomashotel/hoteles";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "./componentes/estructura/Footer";

function App() {
  return (
    <MantineProvider>
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* MOTORES */}
            <Route path="/" element={<Hoteles />} />
            <Route path="/coches" element={<Coches />} />
            <Route path="/hoteles" element={<Hoteles />} />
            <Route path="/cruceros" element={<Cruceros />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/entradas" element={<Entradas />} />
            <Route path="/ferris" element={<Ferris />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/vueloHotel" element={<Vuelomashotel />} />
            <Route path="/cesta" element={<Cesta />} />
            {/* LISTADOS */}
            <Route path="/listadoHoteles" element={<Productos />} />
            <Route
              path="/listadoHotelMasVuelo"
              element={<ListadoVueloMasHotel />}
            />
            {/* MOSTRAR PRODUCTO  */}
            <Route path="/hotel" element={<Producto />} />
            <Route path="/hotelMasVuelo" element={<Producto />} />
            <Route path="/destinos" element={<Producto />} />

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
