import { FaMoneyBillTransfer } from "react-icons/fa6";

function OpcionesPago({ selectedPayment }) {
  const paymentMethods = [
    {
      name: "Transferencia",
      label: "Transferencia",
      icon: FaMoneyBillTransfer,
      height: "h-12",
    },
    {
      name: "Visa",
      image: "/visa.png",
      height: "h-8",
    },
    {
      name: "Paypal",
      image: "/paypal.png",
      height: "h-12",
    },
  ];
  return (
    <div>
      <h5 className="font-bold">Pagar con</h5>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 mt-2 gap-4">
        {paymentMethods.map((method) => (
          <button
            key={method.name}
            className={`h-[120px] md:h-[80px] rounded-lg shadow-md hover:shadow-xl bg-white dark:bg-slate-900 hover:border-secondary hover:bg-slate-100 dark:hover:bg-slate-800 p-3 flex justify-center border-2 dark:border-slate-700 items-center flex-col cursor-pointer ${
              selectedPayment === method.name ? "border-2 border-blue-500" : ""
            }`}
          >
            <span className="flex justify-center items-center flex-col text-slate-500 dark:text-green-800 font-semibold">
              {method.icon && (
                <method.icon className="text-4xl text-green-500" />
              )}
              {method.image && (
                <img
                  src={method.image}
                  className={method.height}
                  alt={method.name}
                />
              )}
              <span className="dark:text-green-500">
              {method.label}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default OpcionesPago;
