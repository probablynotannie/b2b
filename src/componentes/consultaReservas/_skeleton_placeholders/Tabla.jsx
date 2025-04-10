function Tabla({ columnas }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr
          key={index}
          className="tw-animate-pulse tw-border-b dark:tw-border-slate-800 dark:tw-bg-slate-800"
        >
          {Array.from({ length: columnas }).map((__, i) => (
            <td key={i} className="tw-px-6 tw-py-4">
              <div className="tw-h-4 tw-bg-slate-200 dark:tw-bg-slate-900 tw-rounded"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default Tabla;
