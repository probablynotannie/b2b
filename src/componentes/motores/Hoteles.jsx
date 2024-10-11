import { FaHotel } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiMentorcruise } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { FaTicketAlt } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";
import Input_DateRange from "../inputs/DateRange";
import Input_DateRange2 from "../inputs/DateRange2";
import Input_Buscador from "../inputs/Buscador";
import Input_Mes from "../inputs/Mes";
function Hoteles() {
  const otros = [
    /*  {
      id: 0,
      icono: <FaHotel className="text-2xl text-white" />,
      texto: "Hoteles",
    }, */
    {
      id: 1,
      icono: <FaMapMarkedAlt className="text-2xl text-white" />,
      texto: "Destinos",
    },
    {
      id: 2,
      icono: <SiMentorcruise className="text-2xl text-white" />,
      texto: "Cruceros",
    },
    {
      id: 3,
      icono: <IoAirplane className="text-2xl text-white" />,
      texto: "Vuelo+Hotel",
    },
    {
      id: 4,
      icono: <FaCarOn className="text-2xl text-white" />,
      texto: "Coches",
    },
    {
      id: 5,
      icono: <IoTicket className="text-2xl text-white" />,
      texto: "Tickets",
    },
    {
      id: 6,
      icono: <FaTicketAlt className="text-2xl text-white" />,
      texto: "Entradas",
    },
    {
      id: 7,
      icono: <FaTrain className="text-2xl text-white" />,
      texto: "Ferris",
    },
  ];
  return (
    <div className="grid grid-cols-7 gap-10 px-10 md:px-20 min-h-[78vh] py-10">
      <div className="col-span-7 md:col-span-1 flex flex-row flex-wrap md:flex-col justify-around  border-2 border-slate-100 px-5 rounded-xl shadow-lg mb-2">
        <div className="flex gap-3 items-center ">
          <div className="border-2 bg-primary p-3 rounded-full">
            <FaHotel className="text-2xl text-white" />
          </div>
          <span className="font-semibold"> Hoteles</span>
          <div className="w-2 h-2 rounded-full bg--secondary animate-ping"></div>
        </div>
        {otros.map((otro, index) => (
          <div className="flex gap-3 items-center " key={index}>
            <div className="border-2 bg-primary p-3 rounded-full">
              {otro.icono}
            </div>
            <span className="font-semibold">{otro.texto}</span>
          </div>
        ))}
      </div>
      <div className="relative col-span-7 md:col-span-6 h-[68vh] bg-[url(../../banner_hoteles.jpg)] bg-cover bg-center rounded-lg shadow-lg">
        <div className="bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10"></div>
        <div className="absolute top-32 md:left-20  bg-primary bg-opacity-80 text-white md:w-1/3 h-fit px-10 py-5 pb-16 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de hoteles</h2>
            <div className="mt-2">
              <Input_Buscador />
            </div>
            <div className="mt-2">
              <Input_DateRange />
            </div>
            <div className="mt-2">
              <Input_DateRange2 />
            </div>
            <div className="mt-2">
              <Input_Mes />
            </div>

            <div className="absolute -bottom-5 right-5">
              <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hoteles;
