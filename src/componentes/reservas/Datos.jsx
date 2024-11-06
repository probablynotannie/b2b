import Input_Texto from "../inputs/Texto";
import Input_Numero from "../inputs/Numero";
import Input_Email from "../inputs/Email";
function Datos() {
  return (
    <div>
      <div className="relative mt-2 p-5 ">
        <div className="border-b-2 border-slate-100 pb-4">
          <h2 className="font-bold text-3xl">Datos de contacto</h2>
          <p className="text-slate-500">
            Vamos a recopilar algunso datos para finalizar la reserva. Estos
            datos se usarán para contactar contigo y para cualquier cambio o
            actualización
          </p>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3  text-sm mt-12">
          <Input_Texto tipo="Nombre" />
          <Input_Texto tipo="Apellido/s" />
          <Input_Numero />
          <Input_Email />
        </div>
      </div>
    </div>
  );
}
export default Datos;
