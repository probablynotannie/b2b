import { Timeline } from "flowbite-react";

function Itinerario({ producto }) {
  return (
    <Timeline>
      {producto.itinerario.map((itinerario, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>{itinerario.destino}</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            cosas que van a hacer o imagen
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default Itinerario;
