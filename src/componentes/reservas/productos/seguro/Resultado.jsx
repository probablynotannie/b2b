import Pdfs from "./Pdfs";
import Precios from "./Precios";
import { BsFillLuggageFill } from "react-icons/bs";
import Aside from "./Aside";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHands } from "react-icons/fa";

function Resultado() {
  const seguro = {
    titulo: "Asistencia y anulación ampliada crucero",
    personas: 1,
    destino: "España",
    cobertura: "Covid 19",
    cancelación: 1500,
    asistenciaMedica: 100000,
    equipake: 1,
    inicio: " 12/12/2024",
    fin: " 12/12/2024",
    importante:
      "Debe contratarse el mismo día de la reserva a la que se refiera, o en su defecto, en los siguientes 7 días a la reserva con 72h de carencia.",
  };
  const preciosEquipajes = [
    {
      id: 0,
      texto: "Perdidas materiales",
      precio: 1000,
    },
    {
      id: 1,
      texto: "Demora en la entrega	",
      precio: 150,
    },
  ];
  const precioDemoraViaje = [
    {
      id: 0,
      texto:
        "Demora de viaje en la salida del medio de transporte (si es superior a 6 horas)",
      precio: 90.0,
    },
    {
      id: 1,
      texto: "Anulación de la salida del medio de transporte debido a huelga",
      precio: 90.0,
    },
    {
      id: 2,
      texto: "Pérdida de enlaces por retraso del medio de transporte",
      precio: 90.0,
    },
    {
      id: 3,
      texto: 'Pérdida del medio de transporte por accidente "IN ITINERE"',
      precio: 90.0,
    },
    {
      id: 4,
      texto: 'Denegación de embarque ("OVER BOOKING")',
      precio: 90.0,
    },
    {
      id: 5,
      texto: "Extensión de viaje",
      precio: 300.0,
    },
  ];
  const precioAsistenciaPersonas = [
    {
      id: 0,
      texto:
        "Gastos médicos, quirúrgicos, farmaceúticos y de hospitalización. Por gastos incurridos en España y derivados de una enfermedad o accidente ocurridos en España",
      precio: 1500.0,
    },
    {
      id: 1,
      texto:
        "Gastos médicos, quirúrgicos, farmaceúticos y de hospitalización. Gastos de odontólogo",
      precio: 150.0,
    },
    {
      id: 2,
      texto:
        "Prolongación de estancia en hotel con 100,00€ por día hasta un límite de",
      precio: 1000.0,
    },
    {
      id: 3,
      texto: "Repatriación o transporte sanitario de heridos o enfermos",
      precio: "Ilimitado",
    },
    {
      id: 4,
      texto: "Repatriación o transporte de fallecidos",
      precio: "Ilimitado",
    },
    {
      id: 5,
      texto: "Desplazamiento de un acompañante en caso de hospitalización",
      precio: "Ilimitado",
    },
    {
      id: 6,
      texto:
        "Estancia del acompañante desplazado con 100,00€ por día hasta un límite de",
      precio: 1000.0,
    },
    {
      id: 7,
      texto: "Repatriación de un acompañante",
      precio: "Ilimitado",
    },
    {
      id: 8,
      texto: "Repatriación o transporte de menores",
      precio: "Ilimitado",
    },
    {
      id: 9,
      texto:
        "Regreso del asegurado por fallecimiento de un familiar no asegurado",
      precio: "Ilimitado",
    },
    {
      id: 10,
      texto:
        "Regreso del asegurado por hospitalización de un familiar no asegurado",
      precio: "Ilimitado",
    },
    {
      id: 11,
      texto:
        "Regreso anticipado por siniestro grave en el hogar o despacho profesional",
      precio: "Ilimitado",
    },
    {
      id: 12,
      texto: "Transmisión de mensajes",
      precio: "Incluido",
    },
    {
      id: 13,
      texto: "Ayuda a la localización y envío de equipajes",
      precio: "Incluido",
    },
    {
      id: 14,
      texto: "Ayuda en viaje",
      precio: "Incluido",
    },
    {
      id: 15,
      texto:
        "Escolta de restos mortales (Gastos de estancia, si el óbito es en el extranjero, con 60,00€ por día hasta un límite de)",
      precio: 300.0,
    },
  ];
  const responsabilidadCivil = [
    {
      id: 0,
      texto: "Responsabilidad civil privada",
      precio: 60,
    },
  ];
  const anulacion = [
    {
      id: 0,
      texto: "Gastos por anulación de viaje",
      precio: 15000,
    },
  ];
  const reembolsoDeVacaciones = [
    {
      id: 0,
      texto: "Responsabilidad civil privada",
      precio: 1000,
    },
    {
      id: 0,
      texto:
        "INCLUIDO SERVICIO DE EMERGENCIAS 24 HORAS TELÉFONO: Desde España 91 344 11 55 Desde el extranjero: +34 91 344 11 55",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-16 container my-10 min-h-[70vh] overflow-visible mt-10">
      <section className="shadow-lg h-fit hover:shadow-xl transition dark:bg-slate-800 rounded-xl border-2 dark:border-slate-700 border-slate-100 col-span-2 p-3">
        <h1 className="text-xl font-semibold mb-5 dark:text-white">
          {seguro.titulo}
        </h1>
        <Pdfs />
        <Precios
          precios={preciosEquipajes}
          icono={<BsFillLuggageFill className="text-slate-700" />}
          titulo={"Equipajes"}
        />
        <Precios
          precios={precioDemoraViaje}
          icono={<FaClock className="text-blue-400" />}
          titulo={"Demora de viaje"}
        />
        <Precios
          precios={precioAsistenciaPersonas}
          icono={<FaBriefcaseMedical className="text-red-400" />}
          titulo={"Asistencia personas"}
        />
        <Precios
          precios={responsabilidadCivil}
          icono={<FaHands className="text-green-400" />}
          titulo={"Responsabilidad civil"}
        />
        <Precios
          precios={anulacion}
          icono={<MdCancel className="text-indigo-400" />}
          titulo={"Anulación"}
        />
        <Precios
          precios={reembolsoDeVacaciones}
          icono={<FaMoneyBillTransfer className="text-cyan-400" />}
          titulo={"Reembolso de vacaciones"}
        />
      </section>
      <aside className="w-full flex flex-col gap-10">
        <section className="p-3 shadow-lg hover:shadow-xl transition rounded-xl border-2 dark:border-slate-700 dark:bg-slate-800 border-slate-100 pb-3">
          <Aside seguro={seguro} />
        </section>
      </aside>
    </div>
  );
}

export default Resultado;
