import { FaExclamation } from "react-icons/fa";

function Politica_franquicia() {
  return (
    <div>
      <div className="tw-flex tw-justify-between">
        <h3 className="tw-text-lg tw-font-bold tw-text-slate-900 dark:tw-text-white tw-mb-2">
          Política sobre la franquicia
        </h3>
        <FaExclamation className="tw-text-xl tw-text-secondary" />
      </div>
      <p>
        El importe de la Franquicia por daños y robo es (tasas locales no
        incluidas):
      </p>
      <ul className="tw-flex tw-flex-col tw-gap-4 tw-mt-3">
        <li>
          - A (MBMR), A1 (NBMR), B (EBMR), C (EDMR), MBMR, NBMR, EBMR, EDMR -
          1000.00 EUR C2 (CVMR), CS (EFMR), D (CDMR), DA (CDAR), DS (CFMR), E
          (CWMR), EA (CWAR), SC, SX (MTAR), CVMR, EFMR, CDMR, CDAR, CFMR, CWMR,
          CWAR, MTMR, MTAR -{" "}
          <span className="tw-font-semibold tw-text-secondary"> 1250.00</span>
        </li>
        <li>
          EUR AS (XBMR), AX (XTMR), DF (DFMR), DH (DFAI), FA (IFAR), F (JFMR),
          FH (JFAI), FS (IFMR), FX (ISMR), GA (IVAR), IS (FFAR), S (DDMR), SD
          (DDAR), X9 (XVMD), XBMR, XTMR, DFMR, DFAI, IFAR, JFMR, JFAI, IFMR,
          ISMR, IVAR, FFAR, DDMR, DDAR, XVMD -{" "}
          <span className="tw-font-semibold tw-text-secondary">
            {" "}
            2000.00EUR{" "}
          </span>
        </li>
        <li>
          JS (LFAV), LFAV -{" "}
          <span className="tw-font-semibold tw-text-secondary">
            {" "}
            3000.00 EUR
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Politica_franquicia;
