function Precios({ precios, titulo, icono }) {
  return (
    <div className="mt-5 border-t-2 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 rounded-xl">
      <div className="flex justify-between items-center pr-2">
        <h2 className="p-3 font-bold dark:text-slate-100">{titulo}</h2>
        <span className="text-xl p-2 px-5 bg-slate-200 dark:bg-slate-700 shadow-inner rounded-lg">
          {icono}
        </span>
      </div>
      <table className="table-auto w-full ">
        <tbody className="border-2 border-slate-100 dark:border-slate-700 shadow-inner ">
          {precios.map((precio) => (
            <tr key={precio.id}>
              <td colSpan={precio.precio ? 1 : 2} className="text-start p-2 dark:text-slate-300">
                {precio.texto}
              </td>
              {precio.precio && (
                <td className=" text-end p-2 font-semibold text-green-700">
                  {typeof precio.precio === "number" ? (
                    <span>{precio.precio.toFixed(2)}€</span>
                  ) : (
                    <span>{precio.precio}</span>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Precios;
