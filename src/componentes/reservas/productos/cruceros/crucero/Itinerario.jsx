import { Timeline } from "flowbite-react";

function Itinerario({ producto }) {
  return (
    <>
      <h3 className="font-bold text-lg mt-5 dark:text-white">Itinerario</h3>
      <Timeline>
        {producto.itinerario.map((itinerario, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{itinerario.dias}</Timeline.Time>
              <Timeline.Title>{itinerario.destino}</Timeline.Title>
              <Timeline.Body>
                <img
                  src={itinerario.img}
                  alt={itinerario.destino}
                  className="w-[350px] h-[20vh] object-cover rounded-lg shadow "
                />
                <p className="text-slate-600 dark:text-slate-200 mt-4">
                  {itinerario.descripcion}
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}
export default Itinerario;
