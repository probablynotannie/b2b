import { GoDotFill } from "react-icons/go";

function Cargando() {
  return (
    <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-p-2 tw-rounded-xl dark:md:tw-bg-inherit dark:md:tw-border-0 dark:md:tw-shadow-none dark:tw-border-slate-60">
      <div className="tw-flex tw-flex-col tw-gap-5 md:tw-flex-row md:tw-justify-between">
        <div className="tw-flex tw-items-center tw-gap-2">
          <GoDotFill className="tw-animate-bounce tw-animate-infinite tw-animate-delay-0 tw-text-secondary/50" />
          <GoDotFill className="tw-animate-bounce tw-animate-infinite tw-animate-delay-100 tw-text-secondary/80" />
          <GoDotFill className="tw-animate-bounce tw-animate-infinite tw-animate-delay-200 tw-text-secondary" />
        </div>
      </div>
    </div>
  );
}

export default Cargando;
