import { useLocation } from "react-router-dom";
import { useState } from "react";
import Tren from "./contenidoPrincipal/Tren";
import { Link } from "react-router-dom";
import DatosTren from "./contenidoSecundario/DatosTren";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  const [ida, setIda] = useState({
    ...producto[0],
    claseElegida: producto[0].claseElegida || producto[0].clasesDeAsiento[0],
  });
  const [vuelta, setVuelta] = useState(
    producto[1]
      ? {
          ...producto[1],
          claseElegida:
            producto[1].claseElegida || producto[1].clasesDeAsiento[0],
        }
      : null
  );
  const handleClassChange = (tren, setTren, nuevaClase) => {
    setTren((prevTren) => ({
      ...prevTren,
      claseElegida: nuevaClase,
    }));
  };
  return (
    <PaginaDetalles
      titulo={"Reservando tren de ida " + (vuelta && "y vuelta")}
      contenidoPrincipal={
        <>
          <section className="tw-border-2 tw-border-slate-200 tw-rounded-xl tw-shadow tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-p-5">
            <Tren
              tren={ida}
              tipo={"Ida"}
              classSeat={ida.claseElegida}
              setClassSeat={(nuevaClase) =>
                handleClassChange(ida, setIda, nuevaClase)
              }
            />
          </section>
          {vuelta && (
            <section className="tw-border-2 tw-border-slate-200 tw-rounded-xl tw-shadow tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-p-5 tw-mt-10">
              <Tren
                tren={vuelta}
                tipo={"Vuelta"}
                classSeat={vuelta.claseElegida}
                setClassSeat={(nuevaClase) =>
                  handleClassChange(vuelta, setVuelta, nuevaClase)
                }
              />
            </section>
          )}
        </>
      }
      contenidoSecundario={
        <>
          <DatosTren tren={ida} tipo="ida" />
          {vuelta && <DatosTren tren={vuelta} tipo="vuelta" />}
          <Link to={"/datosTren"} state={{ ida, vuelta }}>
            <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
              {(
                ida.price +
                ida.claseElegida.precioExtra +
                (vuelta && vuelta.price + vuelta.claseElegida.precioExtra)
              ).toFixed(2)}
              €
            </button>
          </Link>
        </>
      }
    />
  );
}

export default Producto;
