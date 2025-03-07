import { FaInfoCircle } from "react-icons/fa";
import { Card } from "flowbite-react";
import { useState } from "react";
function Info() {
  const condiciones = [
    {
      id: 0,
      titulo: "Condiciones Relativas a la reserva",
      texto:
        "De acuerdo a su nacionalidad, previamente a efectuar la reserva consulte sus requisitos sobre su pasaporte, visado y trámites sanitarios exigidos por los países de destino",
    },
    {
      id: 0,
      titulo: "Contratación del seguro",
      texto:
        "Consulte con la agencia de viajes previamente a hacer la reserva la información respecto a la suscripción de un seguro que cubra los gastos en que pueda incurrir por asistencia, repatriación, accidente, enfermedad o fallecimiento",
    },
  ];
  const cancelacion = {
    titulo: "Condiciones de cancelación",
    texto:
      "Cancelaciones entre 20 y 15 días, 10% sobre el total del viaje. Entre 14 y 6 días, 50% del total. 5 días antes de la llegada, 100%. IMPORTANTE: Si la cancelación se produce en días no laborables (en origen o destino) o en horarios de cierre en destino que no permita informar al receptivo, la cuenta de días computa desde el siguiente día/hora laborable. En caso de incluir tarifas aéreas, de tren, barcos, etc., podrán estar sujetas a posibles cambios en el momento de la emisión. Una vez emitidos billetes de avión, tren, bus, barco, entradas especiales o similares no tienen reembolso. Su coste se sumará a los gastos de cancelación pertinentes.",
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div>
      <h3 className="tw-text-xl tw-font-bold dark:tw-text-secondary tw-flex tw-items-center">
        Información complementaria de la reserva
        <FaInfoCircle className="tw-text-xl tw-ml-2" />
      </h3>
      <div className="tw-flex tw-flex-row tw-flex-wrap tw-justify-around tw-mt-5">
        {condiciones.map((condicion, index) => (
          <Card
            key={index}
            className={`tw-max-w-sm hover:tw-shadow-xl tw-transition dark:tw-bg-slate-700 dark:hover:tw-bg-slate-900 ${
              index === 0 ? "bg-green-100" : "bg-orange-100"
            } `}
          >
            <h5 className="tw-text-2xl tw-font-bold tw-tracking-tight tw-text-slate-900 dark:tw-text-white">
              {condicion.titulo}
            </h5>
            <p className="tw-font-normal tw-text-slate-700 dark:tw-text-slate-400">
              {condicion.texto}
            </p>
          </Card>
        ))}
      </div>
      <Card className="tw-my-10 tw-mx-10 hover:tw-shadow-xl tw-transition tw-bg-red-100 dark:tw-bg-slate-700 dark:hover:tw-bg-slate-900 tw-p-6">
        <h5 className="tw-text-2xl tw-font-bold tw-tracking-tight tw-text-slate-900 dark:tw-text-white tw-mb-4">
          {cancelacion.titulo}
        </h5>
        <p
          className={`tw-font-normal tw-text-slate-700 dark:tw-text-slate-400 ${
            !isExpanded ? "tw-line-clamp-3" : ""
          }`}
        >
          {cancelacion.texto}
        </p>
        <button
          onClick={toggleReadMore}
          className="tw-text-slate-500 dark:tw-text-slate-300 tw-mt-2 tw-font-semibold"
        >
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
      </Card>
    </div>
  );
}

export default Info;
