import MasFerris from "../ferris/Ferris";
function Vuelos({
  ida,
  setIda,
  vuelta,
  setVuelta,
  ferris,
  ferry,
  setFerry,
  seleccion,
}) {
  return (
    <MasFerris
      seleccion={seleccion}
      ferris={ferris}
      ida={ida}
      ferry={ferry}
      setFerry={setFerry}
      setIda={setIda}
      vuelta={vuelta}
      setVuelta={setVuelta}
    />
  );
}

export default Vuelos;
