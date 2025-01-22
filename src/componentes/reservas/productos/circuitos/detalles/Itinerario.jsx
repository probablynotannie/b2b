import { Timeline } from "flowbite-react";
function Itinerario({ actividad }) {
  return (
    <>
      <h3 className="font-bold text-lg mt-5 dark:text-white">Itinerario</h3>
      <Timeline>
        {actividad.itinerario.map((itinerario, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time className="dark:text-slate-400">
                Día {itinerario.dia}
              </Timeline.Time>
              <Timeline.Title>{itinerario.titulo}</Timeline.Title>
              <Timeline.Body>
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