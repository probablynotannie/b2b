import React, { useRef } from "react";
import zonas from "./jsons/zonas.json";
import puertos from "./jsons/puertos.json";
import Puertos from "./Puertos";
import Zonas from "./Zonas";
import Cruceros_destacados from "./Cruceros_destacados";
import Meses from "./Meses";
import { FaArrowDownLong } from "react-icons/fa6";

function Cruceros() {
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
      img: "/cruceros/alma.jpg",
    },
    {
      id: 1,
      img: "/cruceros/msc.jpg",
    },
    {
      id: 2,
      img: "/cruceros/costa.jpg",
    },
  ];

  return (
    <div className="px-5 mt-5">
      <div className="text-4xl text-center font-bold p-3 border-b-2 dark:text-white border-slate-100 dark:border-slate-700 mb-5 flex items-center justify-between">
        Destacados
        <button
          onClick={handleScroll}
          className="border-2 dark:border-slate-700 rounded-full bg-secondary text-white p-2 animate-bounce"
        >
          <FaArrowDownLong />
        </button>
      </div>

      <div ref={contentRef}>
        <Zonas zonas={zonas} />
        <Puertos puertos={puertos} />
        <div className="grid lg:grid-cols-2 gap-20 mt-10 bg-slate-50 shadow-sm hover:shadow-md transition duration-300 rounded-lg dark:bg-slate-900">
          <Meses />
          <section className=" dark:text-white flex-col py-5">
            <h2 className="font-bold text-xl mb-5 text-center text-gray-800 dark:text-slate-100">
              Buscar por Navieras
            </h2>
            <div className="flex justify-center gap-10 flex-wrap my-5 ">
              {navierasDest.map((nav, index) => (
                <div
                  className="hover:scale-105 transition duration-300 cursor-pointer"
                  key={index}
                >
                  <img
                    src={nav.img}
                    alt={`Naviera ${nav.name}`}
                    className="object-fill h-[100px] rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="mt-8">
          <div className="bg-slate-50 shadow-sm hover:shadow-md transition duration-300 rounded-lg dark:bg-slate-900 p-5">
            <h2 className="font-bold text-2xl mb-5 text-slate-800 dark:text-slate-100 mt-5">
              Cruceros destacados
            </h2>
            <Cruceros_destacados cruceros={crucerosDestacados} />
          </div>
          <div className="bg-slate-50 shadow-sm hover:shadow-md transition duration-300 rounded-lg dark:bg-slate-900 p-5 mt-5">
            <h2 className="font-bold text-2xl mb-5 text-slate-800 dark:text-slate-100 mt-5">
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
