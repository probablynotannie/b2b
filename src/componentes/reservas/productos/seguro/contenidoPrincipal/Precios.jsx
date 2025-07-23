function Precios({ precios, titulo, icono }) {
  return (
    <div className="tw-mt-5 tw-border-t-2 dark:tw-border-slate-800 tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded-xl">
      <div className="tw-flex tw-justify-between tw-items-center tw-pr-2">
        <h2 className="tw-p-3 tw-font-bold dark:tw-text-slate-100">{titulo}</h2>
        <span className="tw-text-xl tw-p-2 tw-px-5 tw-bg-slate-200 dark:tw-bg-slate-700 tw-shadow-inner tw-rounded-lg">
          {icono}
        </span>
      </div>
      <table className="tw-table-auto tw-w-full">
        <tbody className="tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-shadow-inner">
          {precios.map((precio) => (
            <tr key={precio.id}>
              <td
                colSpan={precio.precio ? 1 : 2}
                className="tw-text-start tw-p-2 dark:tw-text-slate-300"
              >
                {precio.texto}
              </td>
              {precio.precio && (
                <td className="tw-text-end tw-p-2 tw-font-semibold tw-text-green-700">
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
