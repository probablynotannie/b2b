import React from "react";
import { MdCarRental } from "react-icons/md";

function Condiciones_alquiler() {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Condiciones de alquiler
        </h3>
        <MdCarRental className="text-2xl text-slate-700 dark:text-slate-300 " />
      </div>
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-300  mb-6">
          Drivalia España - Documentación Necesaria
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 ">
            Documentación necesaria
          </h2>
          <p className="mt-2">
            Al retirar el vehículo, tanto el conductor principal como los
            conductores adicionales deberán presentar el documento nacional de
            identidad o el pasaporte (según destino) además del permiso de
            conducir en vigor. Ambos documentos tienen que ser los originales y
            físicos (no virtuales) a menos que se indique lo contrario y ambos
            tienen que haber sido expedidos en el mismo país.
          </p>
          <p className="mt-2">
            El permiso de conducir debe estar en caracteres latinos.
          </p>
          <p className="mt-2">
            Normalmente el permiso de conducir internacional es necesario si el
            permiso nacional está escrito con caracteres distintos a los del
            país donde se recoge el vehículo.
          </p>
          <p className="mt-2 text-red-600 dark:text-red-700 font-semibold">
            IMPORTANTE: Es responsabilidad del conductor asegurarse de que
            dispone del permiso de conducir adecuado para el país en el que va a
            conducir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 ">
            Requisitos del permiso de conducir
          </h2>
          <p className="mt-2">
            El permiso de conducir tiene que tener una antigüedad mínima de 1
            año.
          </p>
          <p className="mt-2">
            Este proveedor acepta el permiso de conducir virtual que ofrece la
            DGT en su app, pero solo para conducir en territorio español. Si el
            cliente va a cruzar alguna frontera, deberá presentar también el
            permiso de conducir físico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 ">
            Depósito
          </h2>
          <p className="mt-2">
            El depósito mínimo requerido varía según el tipo de vehículo:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              A (MBMR), A1 (NBMR), B (EBMR), C (EDMR):{" "}
              <span className="font-bold">1000.00 EUR</span>
            </li>
            <li>
              C2 (CVMR), CS (EFMR), D (CDMR), DA (CDAR):{" "}
              <span className="font-bold">1250.00 EUR</span>
            </li>
            <li>
              P (PFAC), P0 (FLAC), AS (XBMR), AX (XTMR):{" "}
              <span className="font-bold">2000.00 EUR</span>
            </li>
            <li>
              JS (LFAV): <span className="font-bold">3000.00 EUR</span>
            </li>
          </ul>
          <p className="mt-2 text-red-600 dark:text-red-700 font-semibold">
            Para conductores menores de 25 años, el depósito será siempre entre
            1000 EUR y 2000 EUR dependiendo del grupo de coches.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 ">
            Formas de pago
          </h2>
          <p className="mt-2">Se aceptan las siguientes formas de pago:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Tarjeta de crédito Mastercard</li>
            <li>Tarjeta de crédito Visa</li>
          </ul>
          <p className="mt-2">No se aceptan:</p>
          <ul className="list-disc pl-6 mt-2 text-red-600 dark:text-red-700">
            <li>Cheques</li>
            <li>Efectivo</li>
            <li>Tarjetas de crédito American Express</li>
            <li>Tarjetas de débito</li>
            <li>Tarjetas virtuales</li>
          </ul>
          <p className="mt-2">
            La tarjeta debe mostrar el nombre completo del conductor principal.
            No se aceptarán tarjetas con iniciales en lugar del nombre completo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 ">
            Restricciones de edad
          </h2>
          <p className="mt-2">
            La edad mínima del conductor es 21 años. Conductores entre 21 y 24
            años tendrán un suplemento de:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <span className="font-bold">9.00 EUR por día</span> (Máximo:
              135.00 EUR por alquiler)
            </li>
          </ul>
          <p className="mt-2">
            La edad máxima del conductor es 99 años. Conductores entre 75 y 99
            años tendrán un suplemento de:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <span className="font-bold">8.00 EUR por día</span> (Máximo:
              120.00 EUR por alquiler)
            </li>
          </ul>
        </section>

        <footer className="mt-10 text-center text-gray-600 dark:text-slate-500 text-sm">
          <p>
            Lea atentamente los términos y condiciones antes de firmar el
            contrato.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Condiciones_alquiler;
