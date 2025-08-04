import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useEffect } from "react";
function Corto({ totalPages, page, setPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      {totalPages > 1 && (
        <div className="tw-flex tw-flex-col tw-items-center">
          <div className="tw-inline-flex tw-items-center tw-mt-2 xs:mt-0">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="tw-smooth tw-flex tw-gap-1 tw-items-center tw-justify-center tw-px-3 tw-h-8 tw-text-sm tw-font-medium tw-text-slate-600 tw-bg-slate-100 tw-rounded-s hover:tw-bg-slate-300 dark:tw-bg-slate-800 dark:tw-border-slate-700 dark:tw-text-slate-400 dark:hover:tw-bg-slate-900 dark:hover:tw-text-white disabled:tw-bg-slate-100 disabled:tw-text-slate-300 disabled:tw-cursor-not-allowed"
            >
              <HiChevronDoubleLeft />
              Anterior
            </button>
            <span className="tw-mx-3 tw-text-sm tw-text-slate-500 dark:tw-text-slate-200">
              {page}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="tw-smooth tw-flex tw-gap-1 tw-items-center tw-justify-center tw-px-3 tw-h-8 tw-text-sm tw-font-medium tw-text-slate-600 tw-bg-slate-100 tw-border-0 tw-border-s tw-border-slate-200 tw-rounded-e hover:tw-bg-slate-300 dark:tw-bg-slate-800 dark:tw-border-slate-700 dark:tw-text-slate-400 dark:hover:tw-bg-slate-900 dark:hover:tw-text-white disabled:tw-bg-slate-100 disabled:tw-text-slate-300 disabled:tw-cursor-not-allowed"
            >
              Siguiente
              <HiChevronDoubleRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Corto;
