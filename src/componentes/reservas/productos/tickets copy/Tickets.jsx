import tickets from "./Tickets.json";

function Resultado() {
  return (
    <section className="pb-12 md:mt-5 grid">
      {tickets.map((actividad, index) => (
        <div key={index}>{actividad.titulo}</div>
      ))}
    </section>
  );
}

export default Resultado;
