import Sidebar from "../Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_Aeropuertos from "../inputs/Aeropuertos";
import Input_HabAdNin from "../inputs/Hab_Adulto_Ninio2";
import Input_DateRange from "../inputs/DateRange";

function Vuelomashotel() {
  return (
    <div className="grid grid-cols-7 gap-10  md:px-20 md:min-h-[78vh] min-h-[90vh] md:py-10">
      <Sidebar />
      <div
        className="relative flex items-center justify-center col-span-7 lg:col-span-5 xl:col-span-6 min-h-[68vh] bg-center md:rounded-lg md:shadow-lg"
        style={{
          backgroundImage: `url(/banner_avion.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10`}
        ></div>
        <div className="absolute md:top-32 md:left-20 bg-CajaForms  bg-opacity-80 text-white px-4 md:px-10 w-11/12 md:w-2/3 xl:w-1/3 h-fit py-5 pb-16 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de vuelo + hotel</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="col-span-2">
                <Input_Buscador />
              </div>

              <div>
                <Input_Aeropuertos />
              </div>
              <div>
                <Input_DateRange />
              </div>
              <div className="col-span-2">
                <Input_HabAdNin />
              </div>
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

export default Vuelomashotel;
