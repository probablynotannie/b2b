import React from "react";
import Puertos from "./Puertos3";
import Zonas from "./Zonas2";
import Cruceros_destacados from "./Cruceros_destacados";
import Meses from "./Meses2";

function Cruceros() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navierasDest = [
    { id: 0, img: "/cruceros/alma.jpg" },
    { id: 1, img: "/cruceros/msc.jpg" },
    { id: 2, img: "/cruceros/costa.jpg" },
  ];

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

  return (
    <div className="tw-px-5 tw-container">
      {/* Header with Tabs */}
      <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-bg-white dark:tw-bg-slate-800 tw-shadow-sm tw-rounded-lg tw-py-5 tw-px-6 tw-border-slate-100 dark:tw-border-slate-700">
        <h1 className="tw-font-bold tw-text-3xl dark:tw-text-white">
          Destacados
        </h1>
        <ul className="tw-flex tw-gap-4 tw-text-slate-500 dark:tw-text-slate-300">
          <li
            className="hover:tw-scale-105 tw-font-medium tw-bg-pink-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-pink-700 tw-transition tw-duration-300 tw-cursor-pointer"
            onClick={() => scrollToSection("zonas")}
          >
            Zonas
          </li>
          <li
            className="hover:tw-scale-105 tw-font-medium tw-bg-cyan-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-cyan-700 tw-transition tw-duration-300 tw-cursor-pointer"
            onClick={() => scrollToSection("puertos")}
          >
            Puertos
          </li>
          <li
            className="hover:tw-scale-105 tw-font-medium tw-bg-blue-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-blue-700 tw-transition tw-duration-300 tw-cursor-pointer"
            onClick={() => scrollToSection("meses")}
          >
            Navieras
          </li>
          <li
            className="hover:tw-scale-105 tw-font-medium tw-bg-green-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-green-700 tw-transition tw-duration-300 tw-cursor-pointer"
            onClick={() => scrollToSection("meses")}
          >
            Meses
          </li>
          <li
            className="hover:tw-scale-105 tw-font-medium tw-bg-indigo-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-indigo-700 tw-transition tw-duration-300 tw-cursor-pointer"
            onClick={() => scrollToSection("destacados")}
          >
            Destacados
          </li>
          <li
            className="hover:tw-scale-105 tw-font-medium tw-bg-red-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-red-700 tw-transition tw-duration-300 tw-cursor-pointer"
            onClick={() => scrollToSection("seleccion")}
          >
            Selección
          </li>
        </ul>
      </div>

      {/* Sections */}
      <div className="tw-space-y-20">
        {/* Zonas Section */}
        <section id="zonas" className="tw-scroll-mt-28 tw-mt-5">
          <h2 className="tw-text-2xl tw-font-bold tw-text-end tw-bg-pink-100 tw-text-pink-700 tw-p-[3px] tw-px-5 tw-rounded-lg tw-w-fit tw-mb-5">
            Buscar por zonas
          </h2>
          <Zonas />
        </section>

        {/* Puertos Section */}
        <section
          id="puertos"
          className="tw-scroll-mt-28 dark:tw-bg-slate-900 tw-rounded-lg tw-border-t-2 tw-pt-10 tw-border-slate-100"
        >
          <h2 className="tw-text-2xl tw-font-bold tw-text-end tw-bg-cyan-100 tw-text-cyan-700 tw-p-[3px] tw-px-5 tw-rounded-lg tw-w-fit tw-mb-5">
            Buscar por puertos
          </h2>
          <Puertos titulo={true} />
        </section>

        {/* Navieras & Meses Section */}
        <section id="meses" className="tw-scroll-mt-28 tw-border-t-2 tw-pt-5">
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-20 tw-pt-10">
            <div>
              <div className="tw-flex tw-justify-center">
                <h2 className="tw-text-2xl tw-font-bold tw-text-end tw-bg-blue-100 tw-text-blue-700 tw-p-[3px] tw-px-5 tw-rounded-lg tw-w-fit tw-mb-5">
                  Meses
                </h2>
              </div>
              <Meses titulo={true} />
            </div>
            <div className="tw-text-center">
              <div className="tw-flex tw-justify-center">
                <h2 className="tw-text-2xl tw-font-bold tw-text-end tw-bg-green-100 tw-text-green-700 tw-p-[3px] tw-px-5 tw-rounded-lg tw-w-fit tw-mb-5">
                  Navieras
                </h2>
              </div>
              <div className="tw-flex tw-justify-center tw-gap-10 tw-flex-wrap">
                {navierasDest.map((nav, index) => (
                  <div
                    className="hover:tw-scale-110 tw-transition tw-duration-300 tw-cursor-pointer"
                    key={index}
                  >
                    <img
                      src={nav.img}
                      alt={`Naviera ${nav.id}`}
                      className="tw-object-cover tw-h-[100px] tw-w-[100px] tw-rounded-lg tw-shadow"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Cruceros Destacados */}
        <section
          id="destacados"
          className="tw-scroll-mt-28 tw-pt-10 tw-border-t-2 tw-border-slate-100"
        >
          <h2 className="tw-text-2xl tw-font-bold tw-text-end tw-bg-indigo-100 tw-text-indigo-700 tw-p-[3px] tw-px-5 tw-rounded-lg tw-w-fit tw-mb-5">
            Cruceros destacados
          </h2>
          <Cruceros_destacados cruceros={crucerosDestacados} />
        </section>
        {/* Especial */}
        <section
          id="seleccion"
          className="tw-scroll-mt-28 tw-pt-10 tw-border-t-2 tw-border-slate-100"
        >
          <h2 className="tw-text-2xl tw-font-bold tw-text-end tw-bg-red-100 tw-text-red-700 tw-p-[3px] tw-px-5 tw-rounded-lg tw-w-fit tw-mb-5">
            Cruceros de selección
          </h2>
          <Cruceros_destacados cruceros={ofertasUltimoMinuto} />
        </section>
      </div>
    </div>
  );
}

export default Cruceros;
