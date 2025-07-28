import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Cargando from "../../../../helpers/placeholders/Spinner";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
import Buscador from "../Buscador";
function Buscador_Cruceros({ listado }) {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultFormValues = useMemo(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const values = {
      idZona: "",
      idPuerto: "",
      idNav: "",
      fechSal: "",
      duracion: "",
    };
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "idZona") values.idZona = parts[i + 1] ?? "";
      if (parts[i] === "idPuerto") values.idPuerto = parts[i + 1] ?? "";
      if (parts[i] === "idNav") values.idNav = parts[i + 1] ?? "";
      if (parts[i] === "fechSal") values.fechSal = parts[i + 1] ?? "";
      if (parts[i] === "duracion") values.duracion = parts[i + 1] ?? "";
    }
    return values;
  }, [location.pathname]);

  const { handleSubmit, control } = useForm({
    defaultValues: defaultFormValues,
  });

  const [idZona, idPuerto, idNav, fechaSalida] = useWatch({
    control,
    name: ["idZona", "idPuerto", "idNav", "fechSal"],
  });
  const {
    data: crucerosData = {
      zonas: [],
      puertos: [],
      navieras: [],
      fechaSalida: [],
      CountCruceros: 0,
    },
    isFetching,
  } = useQuery({
    queryKey: ["cruceros", idZona, idPuerto, idNav, fechaSalida],
    queryFn: async () => {
      const url =
        `https://devxml-2.vpackage.net/FrontCruceros/searchjson?` +
        new URLSearchParams({
          rand: "774408346",
          idZona: idZona || "0",
          idPuerto: idPuerto || "0",
          idNav: idNav || "0",
          fechaSalida: fechaSalida || "0",
          json: "1",
        });
      const res = await fetch(url);
      if (!res.ok) throw new Error("Problemas con red");
      return res.json();
    },
    keepPreviousData: true,
    staleTime: 60_000,
  });
  const sortByNameAsc = (a, b) =>
    (a?.name ?? "").localeCompare(b?.name ?? "", "es", { sensitivity: "base" });

  const zonasOrd = useMemo(
    () =>
      Array.isArray(crucerosData.zonas)
        ? [...crucerosData.zonas].sort(sortByNameAsc)
        : [],
    [crucerosData.zonas]
  );
  const puertosOrd = useMemo(
    () =>
      Array.isArray(crucerosData.puertos)
        ? [...crucerosData.puertos].sort(sortByNameAsc)
        : [],
    [crucerosData.puertos]
  );
  const navierasOrd = useMemo(
    () =>
      Array.isArray(crucerosData.navieras)
        ? [...crucerosData.navieras].sort(sortByNameAsc)
        : [],
    [crucerosData.navieras]
  );
  const buildUrl = (f) => {
    const parts = [];
    if (f.idZona) parts.push("idZona", f.idZona);
    if (f.idPuerto) parts.push("idPuerto", f.idPuerto);
    if (f.idNav) parts.push("idNav", f.idNav);
    if (f.fechSal) {
      const [year, month] = f.fechSal.split("-");
      if (year && month) parts.push("fechSal", `${month}-${year}`);
    }
    if (f.duracion) parts.push("duracion", f.duracion);
    return `/listadoCruceros/${parts.join("/")}`;
  };
  const onSubmit = (formData) => {
    navigate(buildUrl(formData), {
      state: { datosForm: formData },
    });
  };
  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      listado={listado}
      reverse={true}
      secundario={
        <>
          {isFetching ? (
            <Cargando />
          ) : (
            <span className="tw-text-sm tw-font-semibold dark:tw-text-slate-300">
              cruceros: {crucerosData.CountCruceros}
            </span>
          )}
        </>
      }
      titulo={"Buscador de Cruceros"}
      contenidoEscritorio={
        <Escritorio
          listado={listado}
          zonasOrd={zonasOrd}
          puertosOrd={puertosOrd}
          control={control}
          navierasOrd={navierasOrd}
        />
      }
      contenidoMovil={
        <Movil
          zonasOrd={zonasOrd}
          puertosOrd={puertosOrd}
          control={control}
          navierasOrd={navierasOrd}
        />
      }
    />
  );
}

export default Buscador_Cruceros;
