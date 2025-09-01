import parse, { domToReact } from "html-react-parser";
import { useState } from "react";
function Imagen_Descripcion({ ticket, img }) {
  const [mainDesc, features] = ticket.desc.split(/<b>Características:<\/b>/i);

  const options = {
    replace: (node) => {
      if (node.name === "b") {
        return (
          <span className="tw-font-semibold tw-text-secondary dark:tw-text-seondaryDark">
            {domToReact(node.children)}
          </span>
        );
      }
      if (node.name === "ol") {
        return (
          <ul className="tw-ml-6 tw-space-y-1 tw-list-disc">
            {domToReact(node.children)}
          </ul>
        );
      }
      if (node.name === "li") {
        return (
          <li className="tw-text-gray-700">{domToReact(node.children)}</li>
        );
      }
      if (node.name === "br") {
        return <br className="tw-my-2" />;
      }
    },
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="tw-relative dark:tw-text-slate-300">
        <div
          className={`tw-text-sm ${
            expanded ? "" : "tw-line-clamp-4 tw-overflow-hidden"
          }`}
        >
          {parse(mainDesc, options)}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="tw-text-slate-400 dark:tw-text-slate-400"
        >
          {expanded ? "Mostrar menos" : "Leer más"}
        </button>
      </div>
      <div className="tw-text-sm tw-mt-3 dark:tw-text-slate-300">
        <span className="tw-font-bold tw-text-secondary dark:tw-text-secondar">
          Características:
        </span>
        {parse(features, options)}
      </div>
    </>
  );
}

export default Imagen_Descripcion;
