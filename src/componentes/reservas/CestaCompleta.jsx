import React from "react";

function CestaCompleta() {
  const reserva = [
    {
      id: 0,
      texto: "Hotel",
      nombre: "Luxury appartments",
      fecha: "21 de octubre",
      img: "",
      precio: 458,
      descripcion: "",
    },
    {
      id: 1,
      texto: "Entradas",
      nombre: "Festival de libros",
      fecha: "21 de octubre",
      img: "",
      precio: 36,
      descripcion: "",
    },
    {
      id: 2,
      texto: "Ferri",
      nombre: "Ferri",
      fecha: "21 de octubre",
      img: "",
      precio: 142,
      descripcion: "",
    },
  ];

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
      class: "  h-[30px] ",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-16 container my-10 min-h-[70vh]">
        <div className="col-span-2 bg-white shadow-xl  border-2 border-slate-200 rounded-lg">
          <div className="p-5 bg-slate-200">
            <h3 className="font-bold text-black text-xl">Tu reserva</h3>
          </div>
          <div className="p-5"></div>
        </div>
        <div className="col-span-1 ">
          <div className=" shadow-xl  border-2 border-slate-200 rounded-lg">
            <h3 className="font-semibold bg-secondary p-5 text-white">
              Resumen rapido
            </h3>

            <div className="p-5 text-sm">
              {/* Resumen */}
              <div>
                {reserva.map((reserva) => (
                  <div
                    key={reserva.id}
                    className="py-3 border-b-2 border-slate-100 flex justify-between"
                  >
                    <div>
                      <h6 className="font-semibold">{reserva.nombre}</h6>
                      <span className="text-slate-400">{reserva.fecha}</span>
                    </div>
                    <div className="text-secondary font-semibold flex items-center">
                      {reserva.precio} €
                    </div>
                  </div>
                ))}
              </div>

              {/* Pago */}
              <div className="mt-4 pt-5">
                <button className="bg-primary w-full p-3 text-white font-bold">
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CestaCompleta;
