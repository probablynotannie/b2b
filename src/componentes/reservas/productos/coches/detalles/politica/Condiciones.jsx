import { MdCarRental } from "react-icons/md";

function Condiciones_alquiler() {
  return (
    <div>
      <div className="tw-flex tw-justify-between">
        <h3 className="tw-text-lg tw-font-bold tw-text-slate-900 dark:tw-text-white tw-mb-2">
          Condiciones de alquiler
        </h3>
        <MdCarRental className="tw-text-2xl tw-text-secondary" />
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-bg-white dark:tw-bg-slate-900 tw-shadow-md tw-rounded-lg tw-p-8">
        <h1 className="tw-text-2xl tw-font-bold tw-text-slate-700 dark:tw-text-slate-300 tw-mb-6">
          Drivalia España - Documentación Necesaria
        </h1>

        <section className="tw-mb-8">
          <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-slate-300">
            Documentación necesaria
          </h2>
          <p className="tw-mt-2">
            Al retirar el vehículo, tanto el conductor principal como los
            conductores adicionales deberán presentar el documento nacional de
            identidad o el pasaporte (según destino) además del permiso de
            conducir en vigor. Ambos documentos tienen que ser los originales y
            físicos (no virtuales) a menos que se indique lo contrario y ambos
            tienen que haber sido expedidos en el mismo país.
          </p>
          <p className="tw-mt-2">
            El permiso de conducir debe estar en caracteres latinos.
          </p>
          <p className="tw-mt-2">
            Normalmente el permiso de conducir internacional es necesario si el
            permiso nacional está escrito con caracteres distintos a los del
            país donde se recoge el vehículo.
          </p>
          <p className="tw-mt-2 tw-text-red-600 dark:tw-text-red-700 tw-font-semibold">
            IMPORTANTE: Es responsabilidad del conductor asegurarse de que
            dispone del permiso de conducir adecuado para el país en el que va a
            conducir.
          </p>
        </section>

        <section className="tw-mb-8">
          <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-slate-300">
            Requisitos del permiso de conducir
          </h2>
          <p className="tw-mt-2">
            El permiso de conducir tiene que tener una antigüedad mínima de 1
            año.
          </p>
          <p className="tw-mt-2">
            Este proveedor acepta el permiso de conducir virtual que ofrece la
            DGT en su app, pero solo para conducir en territorio español. Si el
            cliente va a cruzar alguna frontera, deberá presentar también el
            permiso de conducir físico.
          </p>
        </section>

        <section className="tw-mb-8">
          <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-slate-300">
            Depósito
          </h2>
          <p className="tw-mt-2">
            El depósito mínimo requerido varía según el tipo de vehículo:
          </p>
          <ul className="tw-list-disc tw-pl-6 tw-mt-2">
            <li>
              A (MBMR), A1 (NBMR), B (EBMR), C (EDMR):{" "}
              <span className="tw-font-bold">1000.00 EUR</span>
            </li>
            <li>
              C2 (CVMR), CS (EFMR), D (CDMR), DA (CDAR):{" "}
              <span className="tw-font-bold">1250.00 EUR</span>
            </li>
            <li>
              P (PFAC), P0 (FLAC), AS (XBMR), AX (XTMR):{" "}
              <span className="tw-font-bold">2000.00 EUR</span>
            </li>
            <li>
              JS (LFAV): <span className="tw-font-bold">3000.00 EUR</span>
            </li>
          </ul>
          <p className="tw-mt-2 tw-text-red-600 dark:tw-text-red-700 tw-font-semibold">
            Para conductores menores de 25 años, el depósito será siempre entre
            1000 EUR y 2000 EUR dependiendo del grupo de coches.
          </p>
        </section>
        <section className="tw-mb-8">
          <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-slate-300">
            Formas de pago
          </h2>
          <p className="tw-mt-2">Se aceptan las siguientes formas de pago:</p>
          <ul className="tw-list-disc tw-pl-6 tw-mt-2">
            <li>Tarjeta de crédito Mastercard</li>
            <li>Tarjeta de crédito Visa</li>
          </ul>
          <p className="tw-mt-2">No se aceptan:</p>
          <ul className="tw-list-disc tw-pl-6 tw-mt-2 tw-text-red-600 dark:tw-text-red-700">
            <li>Cheques</li>
            <li>Efectivo</li>
            <li>Tarjetas de crédito American Express</li>
            <li>Tarjetas de débito</li>
            <li>Tarjetas virtuales</li>
          </ul>
          <p className="tw-mt-2">
            La tarjeta debe mostrar el nombre completo del conductor principal.
            No se aceptarán tarjetas con iniciales en lugar del nombre completo.
          </p>
        </section>

        <section className="tw-mb-8">
          <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-slate-300">
            Restricciones de edad
          </h2>
          <p className="tw-mt-2">
            La edad mínima del conductor es 21 años. Conductores entre 21 y 24
            años tendrán un suplemento de:
          </p>
          <ul className="tw-list-disc tw-pl-6 tw-mt-2">
            <li>
              <span className="tw-font-bold">9.00 EUR por día</span> (Máximo:
              135.00 EUR por alquiler)
            </li>
          </ul>
          <p className="tw-mt-2">
            La edad máxima del conductor es 99 años. Conductores entre 75 y 99
            años tendrán un suplemento de:
          </p>
          <ul className="tw-list-disc tw-pl-6 tw-mt-2">
            <li>
              <span className="tw-font-bold">8.00 EUR por día</span> (Máximo:
              120.00 EUR por alquiler)
            </li>
          </ul>
        </section>

        <footer className="tw-mt-10 tw-text-center tw-text-gray-600 dark:tw-text-slate-500 tw-text-sm">
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
