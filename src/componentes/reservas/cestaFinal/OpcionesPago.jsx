import { FaMoneyBillTransfer } from "react-icons/fa6";

function OpcionesPago({ selectedPayment }) {
  return (
    <div>
      <h5 className="font-bold">Pagar con</h5>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 mt-2 gap-4">
        <button
          className={`h-[120px] md:h-[80px] rounded-lg shadow-md hover:shadow-xl hover:border-secondary hover:bg-slate-100 p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "PayPal" ? "border-2 border-blue-500" : ""
          }`}
        >
          <span className="flex justify-center items-center flex-col text-slate-500 font-semibold">
            <FaMoneyBillTransfer className="text-4xl text-green-700" />
            Transferencia
          </span>
        </button>

        <button
          className={`h-[120px] md:h-[80px] rounded-lg shadow-md  hover:shadow-xl hover:border-secondary hover:bg-slate-100 p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "Visa" ? "border-2 border-blue-500" : ""
          }`}
        >
          <img src="/visa.png" className="h-7" alt="Visa" />
        </button>

        <button
          className={`h-[120px] md:h-[80px] rounded-lg shadow-md hover:shadow-xl hover:border-secondary hover:bg-slate-100 p-3 flex justify-center border-2 items-center flex-col cursor-pointer ${
            selectedPayment === "Paypal" ? "border-2 border-blue-500" : ""
          }`}
        >
          <img src="/paypal.png" className="h-12" alt="Paypal" />
        </button>
      </div>
    </div>
  );
}

export default OpcionesPago;
