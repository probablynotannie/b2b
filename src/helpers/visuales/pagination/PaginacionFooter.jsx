function PaginacionFooter({ totalPages, setPage, page }) {
  return (
    <div>
      {totalPages > 1 && (
        <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2 tw-mt-6">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              className={`tw-px-3 tw-py-1 tw-rounded ${
                page === idx + 1
                  ? "tw-bg-secondary tw-text-white"
                  : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-white hover:tw-bg-slate-400 tw-smooth"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaginacionFooter;
