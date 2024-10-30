import React, { useState } from "react";

function OpcionesPago({ selectedPayment, setSelectedPayment, totalPrice }) {
  function handlePaymentSelection(method) {
    setSelectedPayment(method);
  }

  return (
    <div>
      <h5 className="font-bold">Elige una opción de pago</h5>
      <div className="grid grid-cols-3 mt-8 gap-4">
        <div
          onClick={() => handlePaymentSelection("PayPal")}
          className={`rounded-lg shadow-md hover:shadow-xl hover:border-secondary hover:bg-slate-100 p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "PayPal" ? "border-2 border-blue-500" : ""
          }`}
          style={{ height: "120px" }}
        >
          <img src="/paypal.png" className="h-12" alt="PayPal" />{" "}
          <span className="text-blue-950 font-bold">
            Pagar <span className="text-sky-500"> {totalPrice}€</span>
          </span>
        </div>

        <div
          onClick={() => handlePaymentSelection("Visa")}
          className={`rounded-lg shadow-md  hover:shadow-xl hover:border-secondary hover:bg-slate-100 p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "Visa" ? "border-2 border-blue-500" : ""
          }`}
          style={{ height: "120px" }}
        >
          <img src="/visa.png" className="h-7" alt="Visa" />
          <span className="text-sky-800 font-bold">Pagar {totalPrice}€</span>
        </div>

        <div
          onClick={() => handlePaymentSelection("Bizum")}
          className={`rounded-lg shadow-md hover:shadow-xl hover:border-secondary hover:bg-slate-100 p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "Bizum" ? "border-2 border-blue-500" : ""
          }`}
          style={{ height: "120px" }}
        >
          <img src="/bizum.png" className="h-12" alt="Bizum" />
          <span className="text-teal-400 font-bold">Pagar{totalPrice}€</span>
        </div>
      </div>
    </div>
  );
}

export default OpcionesPago;
