import React, { useState } from "react";

function OpcionesPago({ selectedPayment, setSelectedPayment }) {
  function handlePaymentSelection(method) {
    setSelectedPayment(method);
  }

  return (
    <div>
      <h5 className="font-bold">Elige una opción de pago</h5>
      <div className="grid grid-cols-3 mt-8 gap-4">
        <div
          onClick={() => handlePaymentSelection("PayPal")}
          className={`rounded-lg shadow-lg p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "PayPal" ? "border-2 border-blue-500" : ""
          }`}
          style={{ height: "120px" }}
        >
          <img src="/paypal.png" className="h-16" alt="PayPal" />{" "}
          {/* Adjusted image height */}
        </div>

        <div
          onClick={() => handlePaymentSelection("Visa")}
          className={`rounded-lg shadow-lg p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "Visa" ? "border-2 border-blue-500" : ""
          }`}
          style={{ height: "120px" }}
        >
          <img src="/visa.png" className="h-16" alt="Visa" />{" "}
          {/* Adjusted image height */}
        </div>

        <div
          onClick={() => handlePaymentSelection("Bizum")}
          className={`rounded-lg shadow-lg p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "Bizum" ? "border-2 border-blue-500" : ""
          }`}
          style={{ height: "120px" }}
        >
          <img src="/bizum.png" className="h-16" alt="Bizum" />{" "}
          {/* Adjusted image height */}
        </div>
      </div>
    </div>
  );
}

export default OpcionesPago;
