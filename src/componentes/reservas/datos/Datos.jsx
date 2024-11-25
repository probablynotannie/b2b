import Input_Texto from "../../inputs/Texto";
import Input_Numero from "../../inputs/Numero";
import Input_Email from "../../inputs/Email";
function Datos() {
  return (
    <div className="relative p-5">
      <div className="border-b-2 border-slate-100 dark:border-slate-700 pb-4">
        <h2 className="font-bold text-3xl dark:text-secondaryDark">
          Datos de contacto
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Vamos a recopilar algunso datos para finalizar la reserva. Estos datos
          se usarán para contactar contigo y para cualquier cambio o
          actualización
        </p>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3  text-sm mt-6">
        <Input_Texto tipo="Nombre" />
        <Input_Texto tipo="Apellido/s" />
        <Input_Numero />
        <Input_Email />
      </div>
    </div>
  );
}
export default Datos;
