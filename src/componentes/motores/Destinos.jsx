import Input_Destinos from "../inputs/Pais_Ciudad";
import Input_Mes from "../inputs/Mes";
function Destinos() {
  return (
    <form>
      <h2 className="text-3xl font-bold ">Buscador de destinos</h2>
      <div className="mt-2">
        <Input_Destinos />
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
  );
}

export default Destinos;
