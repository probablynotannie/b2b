import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Input_Destinos from "../../../inputs/Destinos";
import Input_Puertos from "../../../inputs/Puertos";
import Input_Navieras from "../../../inputs/Navieras";
import Input_Mes from "../../../inputs/Mes";
import Input_Dias from "../../../inputs/SelectorDias";
import Cargando from "../../../../helpers/placeholders/Cargando";

function Buscador_Cruceros({ listado }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultFormValues = useMemo(() => {
    const parts = location.pathname.split("/").filter(Boolean);

    const values = { idZona: "", idPuerto: "", idNav: "", fechSal: "" };
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "idZona") values.idZona = parts[i + 1] ?? "";
      if (parts[i] === "idPuerto") values.idPuerto = parts[i + 1] ?? "";
      if (parts[i] === "idNav") values.idNav = parts[i + 1] ?? "";
      if (parts[i] === "fechSal") values.fechSal = parts[i + 1] ?? "";
    }
    return values;
  }, [location.pathname]);

  const { handleSubmit, control } = useForm({
    defaultValues: defaultFormValues,
  });

  const [idZona, idPuerto, idNav] = useWatch({
    control,
    name: ["idZona", "idPuerto", "idNav"],
    defaultValue: ["0", "0", "0"],
  });

  const {
    data: cruiseData = {
      zonas: [],
      puertos: [],
      navieras: [],
      CountCruceros: 0,
    },
    isFetching,
  } = useQuery({
    queryKey: ["cruceros", idZona, idPuerto, idNav],
    queryFn: async () => {
      const url =
        `https://devxml-2.vpackage.net/FrontCruceros/searchjson?` +
        new URLSearchParams({
          rand: "774408346",
          idZona: idZona || "0",
          idPuerto: idPuerto || "0",
          idNav: idNav || "0",
          fechaSalida: "0",
          json: "1",
        });
      console.log("GET", url);
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
      Array.isArray(cruiseData.zonas)
        ? [...cruiseData.zonas].sort(sortByNameAsc)
        : [],
    [cruiseData.zonas]
  );

  const puertosOrd = useMemo(
    () =>
      Array.isArray(cruiseData.puertos)
        ? [...cruiseData.puertos].sort(sortByNameAsc)
        : [],
    [cruiseData.puertos]
  );
  const navierasOrd = useMemo(
    () =>
      Array.isArray(cruiseData.navieras)
        ? [...cruiseData.navieras].sort(sortByNameAsc)
        : [],
    [cruiseData.navieras]
  );

  const buildCruiseURLFromForm = (f) => {
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
    navigate(buildCruiseURLFromForm(formData), {
      state: { datosForm: formData },
    });
  };

  return (
    <>
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full"
        >
          Buscador de Cruceros ({cruiseData.CountCruceros})
          <span className="tw-absolute tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaSearch />
          </span>
        </button>
      </div>

      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white dark:tw-bg-slate-800 tw-w-[100vw] tw-min-h-[100vh] tw-relative">
            <div className="tw-flex tw-justify-between tw-items-center tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-4">
              <h2 className="tw-text-xl tw-font-bold tw-text-white py-2">
                Buscador
              </h2>
              {isFetching ? (
                <div className="">
                  <Cargando />
                </div>
              ) : (
                <span className="tw-text-sm tw-font-semibold tw-text-white">
                  cruceros: {cruiseData.CountCruceros}
                </span>
              )}
            </div>
            <div className="tw-p-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="tw-grid tw-gap-4"
              >
                <Input_Destinos
                  datos={zonasOrd}
                  name="idZona"
                  control={control}
                  placeholder="Selecciona un destino"
                />
                <Input_Puertos
                  datos={puertosOrd}
                  name="idPuerto"
                  control={control}
                  placeholder="Selecciona un puerto"
                />
                <Input_Navieras
                  datos={navierasOrd}
                  name="idNav"
                  control={control}
                  placeholder="Selecciona una naviera"
                />
                <Input_Mes control={control} name="fechSal" />
                <Input_Dias control={control} name="duracion" />
                <button className="tw-bg-slate-800 dark:tw-bg-slate-900 tw-w-full tw-p-3 tw-rounded-lg tw-flex tw-justify-center">
                  <FaSearch className="tw-text-white tw-text-xl" />
                </button>
              </form>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center tw-my-4 tw-mt-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
              >
                X
              </button>
              <span className="tw-text-slate-400">Cerrar</span>
            </div>
          </div>
        </div>
      )}
      <div className="tw-hidden sm:tw-flex tw-bg-white dark:tw-bg-slate-900 dark:tw-bg-opacity-80 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-grid tw-grid-cols-12 tw-gap-3 tw-w-full"
        >
          <div className="tw-col-span-12 tw-flex tw-justify-between tw-items-center">
            <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
              Buscador de Cruceros
            </h2>
            {isFetching ? (
              <Cargando />
            ) : (
              <span className="tw-text-sm tw-font-semibold">
                cruceros: {cruiseData.CountCruceros}
              </span>
            )}
          </div>
          <div
            className={`tw-col-span-4 ${
              listado
                ? "lg:tw-col-span-4 xl:tw-col-span-2"
                : "lg:tw-col-span-6 xl:tw-col-span-3"
            }`}
          >
            <Input_Destinos
              datos={zonasOrd}
              name="idZona"
              control={control}
              placeholder="Destino"
            />
          </div>
          <div
            className={`tw-col-span-4 ${
              listado
                ? "lg:tw-col-span-4 xl:tw-col-span-2"
                : "lg:tw-col-span-6 xl:tw-col-span-3"
            }`}
          >
            <Input_Puertos
              datos={puertosOrd}
              name="idPuerto"
              control={control}
              placeholder="Puerto"
            />
          </div>
          <div className="tw-col-span-4 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Navieras
              datos={navierasOrd}
              name="idNav"
              control={control}
              placeholder="Naviera"
            />
          </div>
          <div className="tw-col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Mes control={control} name="fechSal" />
          </div>
          <div
            className={`tw-col-span-6 lg:tw-col-span-4 ${
              listado
                ? "lg:tw-col-span-4 xl:tw-col-span-3"
                : "lg:tw-col-span-4 xl:tw-col-span-2"
            }`}
          >
            <Input_Dias control={control} name="duracion" />
          </div>

          {listado !== true ? (
            <button className="tw-absolute tw--bottom-3 lg:tw--bottom-7 tw-right-10 lg:tw-right-5 tw-px-8 tw-btn_primario tw-btn_accesorios">
              Buscar
            </button>
          ) : (
            <button className="tw-btn_buscador_con_icono dark:tw-btn_buscador_con_icono_dark tw-btn_buscador_con_icono_accesorios tw-col-span-4 xl:tw-col-span-1">
              <FaSearch className="tw-text-white tw-text-xl" />
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default Buscador_Cruceros;
