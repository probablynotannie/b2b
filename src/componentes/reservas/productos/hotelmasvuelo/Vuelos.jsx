import MasVuelos from "../vuelos/Vuelos";
function Vuelos({ ida, setIda, vuelta, setVuelta, vuelos }) {
  return (
    <MasVuelos
      vuelos={vuelos}
      ida={ida}
      setIda={setIda}
      vuelta={vuelta}
      setVuelta={setVuelta}
    />
  );
}

export default Vuelos;
