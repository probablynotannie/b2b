import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input_Destinos from "../../../inputs/Destinos";
import Input_Puertos from "../../../inputs/Puertos";
import Input_Navieras from "../../../inputs/Navieras";
import Input_Mes from "../../../inputs/Mes";
import Input_Dias from "../../../inputs/SelectorDias";
import { useQuery } from "@tanstack/react-query";
import Cargando from "../../../../helpers/placeholders/Cargando";

function Buscador_Cruceros({ listado }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      if (parts[i] === "idZona" && parts[i + 1]) values.idZona = parts[i + 1];
      if (parts[i] === "idPuerto" && parts[i + 1])
        values.idPuerto = parts[i + 1];
      if (parts[i] === "idNav" && parts[i + 1]) values.idNav = parts[i + 1];
      if (parts[i] === "fechSal" && parts[i + 1]) values.fechSal = parts[i + 1];
      if (parts[i] === "duracion" && parts[i + 1])
        values.duracion = parts[i + 1];
    }

    return values;
  }, [location.pathname]);

  const { handleSubmit, control, watch } = useForm({
    defaultValues: defaultFormValues,
  });

  const watchedValues = watch();
  const fetchCruises = async () => {
    const { idZona, idNav, idPuerto, fechSal, duracion } = watchedValues;

    const urlParams = new URLSearchParams({
      rand: "774408346",
      idZona: idZona || "0",
      idNav: idNav || "0",
      idPuerto: idPuerto || "0",
      fechaSalida: fechSal || "0",
      duracionCru: duracion || "0",
      json: "1",
    });

    const url = `https://devxml-2.vpackage.net/FrontCruceros/searchjson?${urlParams.toString()}`;
    console.log(url);
    const res = await fetch(url);
    if (!res.ok) throw new Error("Problemas con red");
    return res.json();
  };

  const {
    data: cruiseData = {
      zonas: [],
      puertos: [],
      navieras: [],
      CountCruceros: 0,
    },
    isFetching,
  } = useQuery({
    queryKey: ["cruceros", watchedValues],
    queryFn: fetchCruises,
    keepPreviousData: true,
    staleTime: 60 * 1000,
  });

  const buildCruiseURLFromForm = (formData) => {
    const urlParts = [];

    if (formData.idZona) urlParts.push("idZona", formData.idZona);
    if (formData.idPuerto) urlParts.push("idPuerto", formData.idPuerto);
    if (formData.idNav) urlParts.push("idNav", formData.idNav);

    if (formData.fechSal) {
      const [year, month] = formData.fechSal.split("-");
      if (month && year) {
        urlParts.push("fechSal", `${month}-${year}`);
      }
    }
    if (formData.duracion) urlParts.push("duracion", formData.duracion);

    return `/listadoCruceros/${urlParts.join("/")}`;
  };

  const onSubmit = (formData) => {
    const url = buildCruiseURLFromForm(formData);
    navigate(url, { state: { datosForm: formData } });
  };

  return (
    <>
      {/* Mobile Search Button */}
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Buscador de Cruceros ({cruiseData?.CountCruceros})
          <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaSearch />
          </span>
        </button>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="tw-fixed  tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg  tw-relative  dark:tw-bg-slate-800 tw-min-h-[100vh] tw-w-[100vw]">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Buscador
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="tw-text-xl tw-text-white"
              >
                &times;
              </button>
            </div>
            <div className="tw-p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tw-grid tw-grid-cols-1 tw-gap-4">
                  <Input_Destinos
                    datos={cruiseData.zonas}
                    name="idZona"
                    control={control}
                    placeholder="Selecciona un destino"
                  />
                  <Input_Puertos
                    datos={cruiseData.puertos}
                    name="idPuerto"
                    control={control}
                    placeholder="Selecciona un puerto"
                  />
                  <Input_Navieras
                    datos={cruiseData.navieras}
                    name="idNav"
                    control={control}
                    placeholder="Selecciona una naviera"
                  />
                  <Input_Mes control={control} name="fechSal" />
                  <Input_Dias control={control} name="duracion" />
                </div>
                <button className="tw-bg-slate-800 tw-w-full tw-mt-3 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                  <FaSearch className="tw-text-white tw-text-xl" />
                </button>
              </form>
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
                <button
                  className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300  dark:tw-border-slate-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
                <span className="tw-text-slate-400">Cerrar</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="tw-hidden sm:tw-flex tw-bg-white dark:tw-bg-slate-900 dark:tw-bg-opacity-80 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit w-full">
        <form
          className="tw-grid tw-grid-cols-12 tw-gap-3 tw-w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="tw-flex tw-justify-between tw-items-center tw-col-span-12">
            <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
              Buscador de Cruceros
            </h2>
            {isFetching ? (
              <Cargando soloPuntos={true} />
            ) : (
              <span className="tw-bg-green-500 tw-p-1 tw-text-sm tw-text-white tw-font-semibold tw-rounded">
                cruceros: {cruiseData.CountCruceros}
              </span>
            )}
          </div>
          <div
            className={`tw-col-span-4 ${
              listado !== true
                ? "lg:tw-col-span-6 xl:tw-col-span-3"
                : "lg:tw-col-span-4 xl:tw-col-span-2"
            }`}
          >
            <Input_Destinos
              datos={cruiseData.zonas}
              name="idZona"
              control={control}
              placeholder="Destino"
            />
          </div>

          <div
            className={`tw-col-span-4 ${
              listado !== true
                ? "lg:tw-col-span-6 xl:tw-col-span-3"
                : "lg:tw-col-span-4 xl:tw-col-span-2"
            }`}
          >
            <Input_Puertos
              datos={cruiseData.puertos}
              name="idPuerto"
              control={control}
              placeholder="Puerto"
            />
          </div>
          <div className="tw-col-span-4 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Navieras
              datos={cruiseData.navieras}
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
              listado !== true
                ? "lg:tw-col-span-4 xl:tw-col-span-2"
                : "lg:tw-col-span-4 xl:tw-col-span-3"
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
