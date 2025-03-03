import { Modal } from "flowbite-react";
import { useState } from "react";
import Mapa from "./Mapa";
import formatearMinutos from "../../../../helpers/FormatearMinutos";
import {
  FaClock,
  FaEuroSign,
  FaSignInAlt,
  FaSignOutAlt,
  FaTrain,
  FaUsers,
} from "react-icons/fa";
import Seleccion from "./Seleccion";
function Resultado({ trenes, setTren, tipo }) {
  const [openModal, setOpenModal] = useState(null);

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(/([\s-])/g)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  return (
    <section className="tw-pb-12 tw-px-4 lg:tw-px-0">
      <h3 className="tw-text-secondary tw-font-semibold tw-text-xl">
        Resultado {tipo} ({trenes.length})
      </h3>
      {trenes.map((tren, index) => (
        <>
          <Seleccion tren={tren} setTren={setTren} reservar={true} />
        </>
      ))}
    </section>
  );
}

export default Resultado;
