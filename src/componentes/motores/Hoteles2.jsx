import Input_Buscador from "../inputs/Buscador";
import Input_Mes from "../inputs/Mes";
import Input_DateRange2 from "../inputs/DateRange2";
import Buscador from "../inputs/Buscador";
import Aeropuertos from "../inputs/Aeropuertos";
import Destinos from "../inputs/Destinos";
import Navieras from "../inputs/Navieras";
import Puertos from "../inputs/Puertos";
import SelectorHora from "../inputs/Hora";
import SelectorDias from "../inputs/SelectorDias";
import SelectorPersonas from "../inputs/Hab_Adulto_Ninio";
import SelectorAdultosNinios from "../inputs/Adulto_Ninio";
import SelectorPaisCiudad from "../inputs/Pais_Ciudad";
function Hoteles2() {
  return (
    <div className="min-h-[80vh]">
      <div className="relative col-span-4 h-[20vh] bg-[url(../../banner_hoteles.jpg)] bg-cover bg-center border-b-2 border--secondary">
        <div className="bg-indigo-800 w-full h-full bg-opacity-35"></div>
        <div className="absolute -bottom-16 left-96 bg-CajaForms bg-opacity-70 text-white w-2/3 h-fit px-10 py-2 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de hoteles</h2>
            <div className="grid grid-cols-12 gap-5 mt-2 relative">
              <div className="col-span-2">
                <Buscador />
              </div>
              <div className="col-span-2">
                <Input_DateRange2 />
              </div>
              <div className="col-span-2">
                <Input_DateRange2 />
              </div>
              <div className="col-span-3">
                <SelectorPersonas />
              </div>
              <div>
                <button className="bg--secondary rounded-lg p-3 font-bold w-full">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-24 mx-24 border-t-2 border-slate-100 pt-5">
          <div className="grid grid-cols-6 gap-5">
            <div className="mt-2">
              <Input_Buscador />
            </div>
            <div className="mt-2">
              <Input_Mes />
            </div>
            <div className="mt-2">
              <Input_DateRange2 />
            </div>
            <div className="mt-2">
              <SelectorPersonas />
            </div>
            <div className="mt-2">
              <SelectorPaisCiudad />
            </div>
            <div className="mt-2">
              <Destinos />
            </div>
            <div className="mt-2">
              <Navieras />
            </div>
            <div className="mt-2">
              <Puertos />
            </div>
            <div className="mt-2">
              <SelectorDias />
            </div>
            <div className="mt-2">
              <Aeropuertos />
            </div>
            <div className="mt-2">
              <SelectorHora />
            </div>
            <div className="mt-2">
              <SelectorAdultosNinios />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hoteles2;
