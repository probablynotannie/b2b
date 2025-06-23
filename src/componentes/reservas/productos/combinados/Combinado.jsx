import Producto from "./Producto";
import cesta from "../../../estructura/cesta/Zustand";
import Aside from "./Aside";
import { useNavigate } from "react-router-dom";
import Reserva from "../../estructura/reserva/Resumen";

function CestaCompleta() {
  const navigate = useNavigate();
  const productos = cesta((state) => state.productos);
  const removeProducto = cesta((state) => state.removeProducto);
  const total = calcularTotalPrecios(productos);
  function calcularTotalPrecios(productos) {
    const total = productos.reduce((sum, producto) => {
      return sum + (producto.precio || 0);
    }, 0);
    return total.toFixed(2);
  }

  const siguienteApartado = () => {
    navigate("/datosCombinado", {
      state: {
        productos: productos,
        total: total,
      },
    });
  };

  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <div className="tw-flex tw-justify-between tw-items-center tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          <h1>Reservando productos</h1>
          {productos.length > 0 && (
            <span>
              {productos.length} producto{productos.length > 1 && "s"}
            </span>
          )}
        </div>
        {productos.length > 0 ? (
          <div className="tw-flex tw-flex-col tw-divide-y tw-divide-slate-100 dark:tw-divide-slate-700 tw-mt-5">
            {productos.map((producto, index) => (
              <Producto
                key={index}
                producto={producto}
                index={index}
                onRemove={removeProducto}
              />
            ))}
          </div>
        ) : (
          <div className="tw-text-slate-500 tw-h-full tw-flex tw-justify-center tw-items-center tw-my-10">
            No se ha añadido ningun producto para el pack
          </div>
        )}
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>{" "}
        <Reserva
          img={"/banners/banner_combinado.jpg"}
          txt={"Combinado de " + productos.length + " productos"}
        />
        {productos.length > 0 ? (
          <div>
            <div className="tw-divide-y tw-divide-slate-100 dark:tw-divide-slate-700 tw-space-y-4 tw-my-4">
              {productos.map((producto, index) => (
                <Aside key={index} producto={producto} />
              ))}
            </div>
            <button
              onClick={siguienteApartado}
              className="tw-w-full tw-bg-secondary dark:tw-bg-green-600 tw-rounded-lg hover:tw-shadow-lg tw-transition tw-duration-300 tw-text-white tw-p-3 tw-font-semibold tw-mt-2"
            >
              {total}€
            </button>
          </div>
        ) : (
          <div className="tw-text-red-500 tw-font-bold tw-animate-pulse tw-h-full tw-flex tw-justify-center tw-items-center tw-my-10">
            Nada que mostrar aqui
          </div>
        )}
      </article>
    </main>
  );
}

export default CestaCompleta;
