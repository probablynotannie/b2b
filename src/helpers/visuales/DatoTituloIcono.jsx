function DatoTituloIcono({ className, icon, title, value, cancelada }) {
  return (
    <div className={`tw-flex tw-items-start tw-gap-3 tw-w-full ${className}`}>
      <div className="tw-mt-1 tw-text-lg">{icon}</div>
      <div className="tw-w-full">
        <h4
          className={`tw-text-sm tw-font-semibold dark:tw-text-slate-100 ${
            cancelada === true ? "tw-text-slate-800" : "tw-text-slate-500"
          }`}
        >
          {title}
        </h4>
        <div className="tw-text-base tw-font-medium tw-text-slate-900 dark:tw-text-slate-400 tw-whitespace-normal tw-break-words">
          {value}
        </div>
      </div>
    </div>
  );
}

export default DatoTituloIcono;
