import { Link } from "react-router-dom";
import { useState } from "react";
import zonas from "./jsons/zonas.json";
import puertos from "./jsons/puertos.json";
import Puertos from "./Puertos";
import Zonas from "./Zonas";
import Cruceros_destacados from "./Cruceros_destacados";
import Meses from "./Meses";
function Cruceros() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
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
  const navieras = [
    {
      id: 0,
      img: "/cruceros/alma.jpg",
    },
    {
      id: 0,
      img: "/cruceros/msc.jpg",
    },
    {
      id: 0,
      img: "/cruceros/costa.jpg",
    },
  ];
  return (
    <div className="px-5">
      <Zonas zonas={zonas} />
      <Puertos puertos={puertos} />
      <div className="rounded-xl p-5 py-10 my-10">
        <Meses />
      </div>
      <div className=" border-y-2 border-slate-100 dark:border-slate-700 dark:bg-slate-800 p-3 mt-5">
        <h2 className="font-bold text-xl mb-5 text-center text-gray-800 mt-5">
          Buscar por Navieras
        </h2>
        <div className="flex justify-center  gap-10 flex-wrap my-5">
          {navieras.map((naviera, index) => (
            <div
              className="hover:scale-105 transition duration-300"
              key={index}
            >
              <img
                src={naviera.img}
                alt={`Naviera ${naviera.name}`}
                className="object-fill h-[150px] rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>

      {/*   <div className="mt-8">
        <Cruceros_destacados cruceros={crucerosDestacados} />
        <Cruceros_destacados cruceros={ofertasUltimoMinuto} />
      </div> */}
    </div>
  );
}

export default Cruceros;
