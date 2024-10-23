import Sidebar from "../Sidebar";
import Input_Personas from "../inputs/Hab_Adulto_Ninio";
import Input_Buscador from "../inputs/Buscador";
import Input_Buscador2 from "../inputs/Buscador2";
import Input_DateRange from "../inputs/DateRange";
function Hoteles() {
  return (
    <form>
      <h2 className="text-3xl font-bold ">Buscador de hoteles</h2>
      <div className="grid grid-cols-2 gap-2  mt-2">
        <div className="col-span-2">
          <Input_Buscador />
        </div>
        <div className="col-span-2">
          <Input_Buscador2 />
        </div>
        <div className="col-span-2">
          <Input_DateRange />
        </div>

        <div className="col-span-2">
          <Input_Personas />
        </div>
      </div>
      <div className="absolute -bottom-5 right-5">
        <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default Hoteles;
