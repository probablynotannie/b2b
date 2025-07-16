import { Timeline } from "flowbite-react";

function Itinerario({ destino }) {
  return (
    <div className="tw-mt-5">
      <Timeline  className="tw-border-l-2 tw-border-slate-100 dark:tw-border-slate-700">
        {destino.itinerarioViaje.map((destino, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>
                <span className="dark:tw-text-secondaryDark tw-font-semibold tw-p-4">
                  Día {destino.dia}
                </span>
              </Timeline.Time>
              <Timeline.Title className="tw-text-secondary dark:tw-text-slate-300">
                {destino.ciudad}, alojamiento en {destino.alojamiento}
              </Timeline.Title>
              <Timeline.Body>
                <p>{destino.descripcion}</p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
export default Itinerario;
