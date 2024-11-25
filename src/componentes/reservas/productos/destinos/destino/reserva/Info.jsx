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
      <h3 className="text-xl font-bold dark:text-secondaryDark flex items-center">
        Información complementaria de la reserva
        <FaInfoCircle className="text-xl ml-2" />
      </h3>
      <div className="flex flex-row flex-wrap justify-around mt-5">
        {condiciones.map((condicion, index) => (
          <Card
            key={index}
            className={`max-w-sm hover:shadow-xl  transition dark:bg-slate-700 ${
              index === 0 ? "bg-green-100" : "bg-orange-100"
            } `}
          >
            <h5 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {condicion.titulo}
            </h5>
            <p className="font-normal text-slate-700 dark:text-slate-400">
              {condicion.texto}
            </p>
          </Card>
        ))}
      </div>
      <Card className="my-10 mx-10 hover:shadow-xl transition bg-red-100 dark:bg-slate-700 p-6">
        <h5 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          {cancelacion.titulo}
        </h5>
        <p
          className={`font-normal text-slate-700 dark:text-slate-400 ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
        >
          {cancelacion.texto}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-slate-500 dark:text-slate-300 mt-2 font-semibold"
        >
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
      </Card>
    </div>
  );
}

export default Info;
