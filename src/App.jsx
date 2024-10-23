import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/estructura/Navbar";
import Hoteles from "./componentes/motores/Hoteles";
import Sidebar from "./componentes/Sidebar";
import Coches from "./componentes/motores/Coches";
import Cruceros from "./componentes/motores/Cruceros";
import Destinos from "./componentes/motores/Destinos";
import Entradas from "./componentes/motores/Entradas";
import Ferris from "./componentes/motores/Ferris";
import Tickets from "./componentes/motores/Tickets";
import Vuelomashotel from "./componentes/motores/Vuelomashotel";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";

import Footer from "./componentes/estructura/Footer";
function App() {
  return (
    <MantineProvider>
      <div className=" bg-slate-50">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/coches" element={<Coches />} />
            <Route path="/hoteles" element={<Hoteles />} />
            <Route path="/cruceros" element={<Cruceros />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/entradas" element={<Entradas />} />
            <Route path="/ferris" element={<Ferris />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/vueloHotel" element={<Vuelomashotel />} />
          </Routes>
        </Router>

        <div>
          <Footer />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
