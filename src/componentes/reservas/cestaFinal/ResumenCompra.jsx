import Datos from "./Datos";

function ResumenCompra({ reserva, toggleAccordion, accordionOpen }) {
  return (
    <div className="col-span-2 bg-white shadow-xl border-2 border-slate-200 rounded-xl">
      <div className="p-5 border-b-2">
        <h3 className="font-bold text-black text-xl">Tu reserva</h3>
        <p className="text-sm text-slate-400">
          Estas a punto de reservas estos {reserva.length}{" "}
          {reserva.length === 1 ? "producto" : "productos"}. Comprueba y rellena
          los datos para completar el pago.
        </p>
      </div>
      <div className="p-5 space-y-4">
        <Datos />

        {reserva.map((item, index) => (
          <div key={item.id} className="border-b border-slate-200 pb-3 mb-3 ">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <div>
                <h4 className="font-semibold text-md">{item.nombre}</h4>
                <p className="text-gray-500">{item.fecha}</p>
              </div>
              <span className="text-primary text-xl">
                {accordionOpen[index] ? "-" : "+"}
              </span>
            </div>
            {accordionOpen[index] && (
              <div className="mt-3 text-gray-700 space-y-2">
                <img
                  className="w-full h-[30vh] object-cover rounded-lg shadow-lg"
                  src={item.img}
                />

                <p>Tipo: {item.texto}</p>
                <p>Precio: {item.precio} €</p>
                <p>{item.descripcion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumenCompra;
