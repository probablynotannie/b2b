function DatoTituloIcono({ className, icon, title, value }) {
  return (
    <div className={`tw-flex tw-items-start tw-gap-3 ${className}`}>
      <div className="tw-mt-1 tw-text-lg">{icon}</div>
      <div>
        <h4 className="tw-text-sm tw-font-semibold tw-text-slate-400 dark:tw-text-slate-100">
          {title}
        </h4>
        <p className="tw-text-base tw-font-medium tw-text-slate-900 dark:tw-text-slate-400">
          {value}
        </p>
      </div>
    </div>
  );
}

export default DatoTituloIcono;
