import { Timeline } from "flowbite-react";

function Itinerario({ actividad }) {
  return (
    <>
      <h3 className="tw-font-bold tw-text-lg dark:tw-text-white">Itinerario</h3>
      <Timeline
      
      className="tw-border-l tw-border-slate-200 dark:tw-border-slate-700">
        {actividad.itinerario.map((itinerario, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time className="dark:tw-text-slate-400 tw-pl-4">
                Día {itinerario.dia}
              </Timeline.Time>
              <Timeline.Title className="dark:tw-text-slate-500">
                {itinerario.titulo}
              </Timeline.Title>
              <Timeline.Body>
                <p className="tw-text-slate-600 dark:tw-text-slate-200 tw-mt-4">
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
