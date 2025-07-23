import { FaShip } from "react-icons/fa";

function SkeletonBox({ className = "" }) {
  return (
    <div
      className={`tw-animate-pulse tw-rounded-md tw-bg-slate-300 dark:tw-bg-slate-700 ${className}`}
    />
  );
}

function Placeholder() {
  return (
    <main className="tw-container tw-min-h-[55vh] tw-my-10 tw-p-5">
      <section>
        <div className="tw-relative tw-h-[30vh] lg:tw-h-[40vh]">
          <img
            src="/banners/completado.webp"
            alt="Imagen reserva"
            className="tw-opacity-90 tw-rounded tw-h-full tw-shadow tw-w-full tw-object-cover"
          />
          <div className="tw-absolute tw-inset-0 tw-bg-black/60 hover:tw-bg-black/70 tw-transition tw-flex tw-items-center tw-justify-center tw-px-4 tw-rounded"></div>
        </div>
      </section>
      <article className="tw-shadow-md tw-border dark:tw-bg-slate-900 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
        <section className="tw-flex tw-gap-10 tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
          <div>
            <SkeletonBox className="tw-h-6 tw-w-64 tw-mb-2" />
            <SkeletonBox className="tw-h-4 tw-w-40" />
          </div>
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
            <FaShip className="tw-text-xl tw-text-slate-300 dark:tw-text-slate-600 tw-mb-1" />
            <SkeletonBox className="tw-h-5 tw-w-20" />
          </div>
        </section>
        <div className="tw-space-y-4">
          {[...Array(3)].map((_, i) => (
            <SkeletonBox key={i} className="tw-h-24 tw-w-full" />
          ))}
        </div>
      </article>
    </main>
  );
}

export default Placeholder;
