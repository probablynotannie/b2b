import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/estructura/Navbar";
import Hoteles from "./componentes/motores/Hoteles";
import Hoteles2 from "./componentes/motores/Hoteles2";
import Hoteles3 from "./componentes/motores/Hoteles3";
import Hoteles4 from "./componentes/motores/Hoteles4";
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
            <Route path="/" element={<Hoteles />} />
            <Route path="/hoteles" element={<Hoteles2 />} />
            <Route path="/hoteles2" element={<Hoteles3 />} />
            <Route path="/hoteles3" element={<Hoteles4 />} />
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
