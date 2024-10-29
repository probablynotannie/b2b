function DatosPago({ reserva, selectedPayment }) {
  const opcionesDePago = [
    {
      id: 0,
      texto: "Paypal",
      img: "/paypal.png",
      class: " w-[50px] h-[50px] ",
    },
    {
      id: 0,
      texto: "Bizum",
      img: "/bizum.png",
      class: "  h-[50px] ",
    },
    {
      id: 0,
      texto: "Tarjeta de credito",
      img: "/visa.png",
      class: " h-[30px] ",
    },
  ];
  const totalPrice = reserva.reduce((total, item) => total + item.precio, 0);

  return (
    <div className="col-span-1 ">
      <div className=" shadow-xl  border-2 border-slate-200 rounded-xl">
        <div className="p-5 border-b-2 bg-slate-700 rounded-t-xl">
          <h3 className="font-bold text-white text-xl">Resumen</h3>
          <p className="text-sm text-slate-300">Resumen corto de tu reserva</p>
        </div>
        <div className="p-5 text-sm">
          <div>
            {reserva.map((reserva) => (
              <div
                key={reserva.id}
                className="py-3 border-b-2 border-slate-100 flex justify-between"
              >
                <div>
                  <h6 className="font-semibold">{reserva.nombre}</h6>
                  <span className="text-slate-400">
                    {reserva.fecha}{" "}
                    {reserva.fechaSalida && (
                      <span> - {reserva.fechaSalida}</span>
                    )}
                  </span>
                </div>
                <div className="text-secondary font-semibold flex items-center">
                  {reserva.precio} €
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-5">
            <button className="bg-secondary hover:bg-red-500 transition rounded w-full p-3 text-white font-bold">
              Pagar con {selectedPayment} {totalPrice}€
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatosPago;
