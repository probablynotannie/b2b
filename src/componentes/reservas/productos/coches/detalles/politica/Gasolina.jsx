import { Component } from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";

export default class Gasolina extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Política sobre gasolina
          </h3>
          <BsFillFuelPumpFill className="text-xl text-secondary" />
        </div>
        <p>
          Igual-Igual: el cliente tiene que devolver el coche con la misma
          cantidad de combustible con la que se lo entregaron. Si se devuelve el
          coche con una cantidad inferior con respecto a la con la que se
          entregó, se le cobrará un suplemento por el servicio de repostaje, más
          el combustible que falta.
        </p>
        <p>
          Es importante que justo antes de devolver el coche, el cliente reposte
          a menos de 10 km aprox de distancia de la oficina de devolución y que
          conserve el ticket de caja de la gasolinera.
        </p>
      </div>
    );
  }
}
