import React from "react";

function ExtraInfo({ producto }) {
  return (
    <div className="tw-bg-red-50 tw-p-2 dark:tw-bg-red-800 tw-rounded tw-mt-5">
      <h2 className="tw-uppercase tw-font-bold tw-text-danger dark:tw-text-white">
        Importante
      </h2>
      <p className="dark:tw-text-slate-200">{producto.importante}</p>
    </div>
  );
}

export default ExtraInfo;
