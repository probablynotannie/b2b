import { useRef } from "react";

import Cruceros_destacados from "./Cruceros_destacados";
import Meses from "./Meses";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Cruceros({ setRequestData }) {
  const contentRef = useRef(null);
  const handleScroll = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const crucerosDestacados = [
    {
      id: 0,
      logo: "/cruceros/msc.jpg",
      titulo: "Miami, Ocean Cay, Puerto Plata, San Juan, Nassau, Miami",
      descripcion: "8 días a bordo del MSC Seaside",
      salidas: ["23 Feb", "09 Mar", "23 Mar"],
      precio: "669€",
    },
    {
      id: 1,
      logo: "/cruceros/msc.jpg",
      titulo: "Venecia, Dubrovnik, Santorini, Mykonos, Atenas, Venecia",
      descripcion: "10 días a bordo del MSC Lirica",
      salidas: ["15 Mar", "10 Apr", "20 May"],
      precio: "799€",
    },
    {
      id: 2,
      logo: "/cruceros/msc.jpg",
      titulo: "Barcelona, Palma de Mallorca, Génova, Marsella, Barcelona",
      descripcion: "7 días a bordo del MSC Grandiosa",
      salidas: ["01 Apr", "15 Apr", "25 May"],
      precio: "549€",
    },
    {
      id: 3,
      logo: "/cruceros/msc.jpg",
      titulo: "Civitavecchia, Palermo, Malta, Barcelona, Civitavecchia",
      descripcion: "9 días a bordo del MSC Meraviglia",
      salidas: ["10 Feb", "20 Mar", "12 Apr"],
      precio: "699€",
    },
    {
      id: 4,
      logo: "/cruceros/msc.jpg",
      titulo: "Cancún, Cozumel, Grand Caymán, Jamaica, Cancún",
      descripcion: "7 días a bordo del MSC Magnifica",
      salidas: ["05 Mar", "22 Mar", "15 Apr"],
      precio: "799€",
    },
  ];

  const ofertasUltimoMinuto = [
    {
      id: 0,
      logo: "/cruceros/msc.jpg",
      titulo: "Cancún, Cozumel, Grand Caymán, Jamaica, Cancún",
      descripcion: "7 días a bordo del MSC Magnifica",
      salidas: ["10 Feb", "22 Feb", "28 Feb"],
      precio: "599€",
    },
    {
      id: 1,
      logo: "/cruceros/msc.jpg",
      titulo: "Miami, Ocean Cay, Puerto Plata, San Juan, Nassau, Miami",
      descripcion: "8 días a bordo del MSC Seaside",
      salidas: ["13 Feb", "01 Mar", "28 Mar"],
      precio: "669€",
    },
    {
      id: 2,
      logo: "/cruceros/msc.jpg",
      titulo: "Venecia, Dubrovnik, Santorini, Mykonos, Atenas, Venecia",
      descripcion: "10 días a bordo del MSC Lirica",
      salidas: ["15 Feb", "05 Mar", "20 Apr"],
      precio: "750€",
    },
  ];
  const navierasDest = [
    {
      id: 0,
      txt: "alma",
      img: "/cruceros/alma.jpg",
    },
    {
      id: 1,
      txt: "msc",
      img: "/cruceros/msc.jpg",
    },
    {
      id: 2,
      txt: "costa",
      img: "/cruceros/costa.jpg",
    },
  ];

  const handleNavieraClick = (navieraName) => {
    const newRequestData = {
      puerto: "",
      destino: "",
      mes: "",
      duracion: "",
      naviera: navieraName,
    };
    setRequestData(newRequestData);
    navigate("/listadoCruceros", { state: newRequestData });
  };
  const navigate = useNavigate();

  return (
    <div className="tw-px-5">
      <div className="tw-text-4xl tw-text-center tw-font-bold tw-p-3 tw-border-b-2 dark:tw-text-white tw-border-slate-100 dark:tw-border-slate-700 tw-mb-5 tw-flex tw-items-center tw-justify-between">
        Más
        <button
          onClick={handleScroll}
          className="tw-border-2 dark:tw-border-slate-700 tw-rounded-full tw-bg-secondary tw-text-white tw-p-2 tw-animate-bounce"
        >
          <FaArrowDownLong />
        </button>
      </div>

      <div ref={contentRef}>
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-20 tw-mt-10 tw-bg-slate-50 tw-shadow-sm hover:tw-shadow-md tw-transition tw-duration-300 tw-rounded-lg dark:tw-bg-slate-900">
          <Meses setRequestData={setRequestData} />
          <section className="dark:tw-text-white tw-flex-col tw-py-5">
            <h2 className="tw-font-bold tw-text-xl tw-mb-5 tw-text-center tw-text-gray-800 dark:tw-text-slate-100">
              Buscar por Navieras
            </h2>
            <div className="tw-flex tw-justify-center tw-gap-10 tw-flex-wrap tw-my-5">
              {navierasDest.map((nav, index) => (
                <div
                  className="hover:tw-scale-105 tw-transition tw-duration-300 tw-cursor-pointer"
                  key={index}
                  onClick={() => handleNavieraClick(nav.txt)}
                >
                  <img
                    src={nav.img}
                    alt={`Naviera ${nav.txt}`}
                    className="tw-object-fill tw-h-[100px] tw-rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="tw-mt-8">
          <div className="tw-bg-slate-50 tw-shadow-sm hover:tw-shadow-md tw-transition tw-duration-300 tw-rounded-lg dark:tw-bg-slate-900 tw-p-5">
            <h2 className="tw-font-bold tw-text-2xl tw-mb-5 tw-text-slate-800 dark:tw-text-slate-100 tw-mt-5">
              Cruceros destacados
            </h2>
            <Cruceros_destacados cruceros={crucerosDestacados} />
          </div>
          <div className="tw-bg-slate-50 tw-shadow-sm hover:tw-shadow-md tw-transition tw-duration-300 tw-rounded-lg dark:tw-bg-slate-900 tw-p-5 tw-mt-5">
            <h2 className="tw-font-bold tw-text-2xl tw-mb-5 tw-text-slate-800 dark:tw-text-slate-100 tw-mt-5">
              Crucero de selección
            </h2>
            <Cruceros_destacados cruceros={ofertasUltimoMinuto} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cruceros;
