import Input_Texto from "../inputs/Texto";
import Input_Numero from "../inputs/Numero";
import Input_Email from "../inputs/Email";
function Datos() {
  return (
    <div>
      <div className="relative mt-2 p-5 ">
        <h5 className="font-bold">Datos de contacto</h5>
        <p className="text-slate-500">
          Vamos a recopilar algunso datos para finalizar la reserva. Estos datos
          se usarán para contactar contigo y para cualquier cambio o
          actualización
        </p>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-5">
          <Input_Texto tipo="Nombre" />
          <Input_Texto tipo="Apellido" />
          <Input_Numero />
          <Input_Email />
        </div>
      </div>
    </div>
  );
}
export default Datos;
