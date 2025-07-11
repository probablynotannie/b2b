import { BrowserRouter } from "react-router-dom";
import Footer from "./componentes/estructura/Footer";
import Header from "./componentes/estructura/Header";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
