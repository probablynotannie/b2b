import { FaNoteSticky } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

function Importante({ destino }) {
  return (
    <section className="tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-py-5">
      <div>
        <div className="tw-flex tw-justify-between tw-items-center">
          <h3 className="tw-text-xl tw-font-bold tw-text-danger">
            Política de cancelación
          </h3>
          <MdCancel className="tw-text-danger tw-text-2xl" />
        </div>
        <div className="tw-text-xs tw-mt-2 dark:tw-text-slate-300">
          45 a 32 días antes de la llegada, 15% sobre el total del viaje 31 a 17
          días antes de la llegada, 50% sobre el total del viaje 16 días antes
          de la llegada, 100% sobre el total del viaje En caso de existir
          tarifas aéreas incluidas, estarán sujetas a posibles cambios en el
          momento de la emisión. Si sufrieran algún cambio informaremos del
          suplemento. Una vez emitidos los billetes no tienen reembolso.En caso
          de incluir tarifas aéreas, estarán sujetas a posibles cambios en el
          momento de la emisión. Informaremos si existe suplemento. Una vez
          emitidos billetes de avión, tren, bus, entradas o similar no tienen
          reembolso. Su coste se sumará a los gastos de cancelación pertinentes.
          Si la cancelación se produce en dias no laborables (en origen o
          destino) que no permita informar al receptivo, la cuenta de dias
          computa desde el siguiente día laborable. IMPORTANTE: La emisión con
          antelación de estos servicios puede implicar que el importe del
          depósito inicial de la reserva sea más alto para evitar que el precio
          varíe por demora. Se corregirá en el momento en el que recibamos la
          reserva.
        </div>
      </div>
      <div className="tw-mt-5">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h3 className="tw-text-xl tw-font-bold tw-text-green-500">
            Observaciones
          </h3>
          <FaNoteSticky className="tw-text-green-500 tw-text-2xl" />
        </div>
        <div className="tw-text-xs tw-mt-2  dark:tw-text-slate-300">
          Traslados regulares, sólo con asistencia en inglés en aeropuerto. En
          hoteles 5* traslados privados (solo asistencia en apto inglés).. NOTAS
          IMPORTANTES COMUNES A TODOS LOS PROGRAMAS: En reservas para 1 solo
          pax, normalmente duplica el precio de la doble (la mayoría de los
          circuitos son mínimo 2 personas), hasta que el receptivo informa si
          hay más pasajeros y aplica el coste correcto de single. Llegadas o
          salidas fuera de horarios laborables o en dias diferentes al programa
          (noches extras, etc...), suelen conllevar suplemento en los traslados.
          El orden de las visitas puede variar respecto al itinerario descrito,
          ocurre sobre todo en programas con salidas diarias. La información
          final la dan los receptivos una vez en destino. Por regla general los
          transportes turísticos que estén incluidos en los programas, admiten
          un máximo de 1 maleta por pasajero pudiendo cobrar una cantidad por
          equipaje extra. Si incluye vuelos domésticos, suelen admitir un máximo
          de 15 kilos. Dado que no existe un estándar, cualquier extra relativo
          a sobrepeso o cantidad de maletas, será pagado en destino directamente
          por el pasajero. Una vez realizada la reserva, si el hotel de programa
          no tuviera disponibilidad se ofrecerá otro de características
          similares. Los operadores pueden reservarse el derecho a cambiar el
          hotel, incluso estando el pasajero en destino, siempre que sea dentro
          de la misma categoría o superior, y la reserva no se haya efectuado
          sobre un hotel en concreto. En general no se recomiendan las
          habitaciones triples. En algunos países la 3ª cama puede ser una turca
          o plegatin (no cómoda); en otros pueden ser dos camas de matrimonio.
          La petición de habitaciones con cama de matrimonio (DOBLE) o dos camas
          (TWIN) es solo informativa y no se garantiza, depende siempre del
          establecimiento en el momento del check in. De la misma manera las
          cortesías de Luna de Miel dependen únicamente del establecimiento y no
          se garantizan. Rogamos tengan en cuenta también que algunos países no
          cumplen los mismos estándares de calidad europeos y la categoría
          indicada, aunque correcta respecto a las categorizaciones del país,
          puede ser mas baja de lo esperado. Las intolerancias alimentarias o
          peticiones especiales deben comunicarse antes de la llegada de los
          pasajeros a destino. Se pedirá al receptivo aunque no podemos
          garantizar dietas, menús o trato especial. No se admiten cambios de
          reservas ya realizadas a programas publicados posteriormente con
          precio de oferta. NOTAS IMPORTANTES RELATIVAS A LAS FECHAS DE VIAJE:
          Los Programas en Privado con guías de habla hispana en cualquier
          destino, pueden tener problemas de disponibilidad para las fechas de
          temporada alta. Se confirmará cuando recibamos la notificación escrita
          del receptivo. Si la fecha del viaje coincide con festividades
          locales, Navidad o Fin de Año, eventos especiales o congresos, puede
          haber suplementos (por fecha/por cenas obligatorias, etc), así como
          monumentos que no se puedan visitar. Una vez recibida la reserva, se
          ajustarán costes y servicios en consecuencia. NOTAS IMPORTANTES
          RELATIVAS AL VIAJE: Recuerde que deberán llevar en regla su
          documentación personal (pasaportes, visados, certificados de
          vacunación, etc.). Caso de ser denegada su entrada en el país por
          carecer de los requisitos o por defecto en la documentación exigida, o
          por no ser portador de la misma, yourttoo.com declina toda
          responsabilidad, siendo por cuenta del viajero cualquier gasto que se
          origine.
        </div>
      </div>
    </section>
  );
}

export default Importante;
