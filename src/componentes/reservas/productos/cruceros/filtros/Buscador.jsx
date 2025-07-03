import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Input_Destinos from "../../../../inputs/Destinos";
import Input_Puertos from "../../../../inputs/Puertos";
import Input_Navieras from "../../../../inputs/Navieras";
import Input_Mes from "../../../../inputs/Mes";
import Input_Dias from "../../../../inputs/SelectorDias";
const fetchDestinos = async () => {
  const res = await fetch(
    "https://devxml-2.vpackage.net/FrontCruceros/searchjson?rand=774408346&info&json=1"
  );
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  return data;
};

function Buscador() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading } = useQuery({
    queryKey: ["destinos"],
    queryFn: fetchDestinos,
  });

  const toggleModal = () => setIsModalOpen((prev) => !prev);

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
      if (parts[i] === "fechSal" && parts[i + 1]) {
        const [month, year] = parts[i + 1].split("-");
        if (month && year) values.fechSal = `${year}-${month}`;
      }
      if (parts[i] === "duracion" && parts[i + 1])
        values.duracion = parts[i + 1];
    }

    return values;
  }, [location.pathname]);

  const { handleSubmit, control } = useForm({
    defaultValues: defaultFormValues,
  });

  const buildCruiseURLFromForm = (data) => {
    const urlParts = [];

    if (data.idZona) urlParts.push("idZona", data.idZona);
    if (data.idPuerto) urlParts.push("idPuerto", data.idPuerto);
    if (data.idNav) urlParts.push("idNav", data.idNav);

    if (data.fechSal) {
      const [year, month] = data.fechSal.split("-");
      if (month && year) urlParts.push("fechSal", `${month}-${year}`);
    }

    if (data.duracion) urlParts.push("duracion", data.duracion);

    return `/listadoCruceros/${urlParts.join("/")}`;
  };

  const onSubmit = (data) => {
    const url = buildCruiseURLFromForm(data);
    navigate(url, { state: { datosForm: data } });
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Mobile Button */}
      <div className="tw-w-full lg:tw-hidden">
        <button
          onClick={toggleModal}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white dark:tw-bg-slate-800 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Cambiar búsqueda
          <span className="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-8 tw-flex tw-items-center tw-justify-center tw-text-xl tw-text-white dark:tw-bg-slate-800 tw-bg-inputIcon tw-rounded-tl-lg tw-rounded-bl-lg">
            <FaSearch />
          </span>
        </button>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center">
          <div className="tw-bg-white dark:tw-bg-slate-800 tw-w-full tw-h-full tw-rounded-none">
            <div className="tw-flex tw-justify-between tw-items-center tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Buscador
              </h2>
              <button
                onClick={toggleModal}
                className="tw-text-white tw-text-xl"
              >
                &times;
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="tw-grid tw-grid-cols-12 tw-gap-3 tw-p-5"
            >
              <div className="tw-col-span-12">
                <Input_Destinos
                  datos={!isLoading ? data.zonas : []}
                  name="idZona"
                  control={control}
                  placeholder="Selecciona un destino"
                />
              </div>
              <div className="tw-col-span-12">
                <Input_Puertos
                  datos={!isLoading ? data.puertos : []}
                  name="idPuerto"
                  control={control}
                  placeholder="Selecciona un puerto"
                />
              </div>
              <div className="tw-col-span-12">
                <Input_Navieras
                  datos={!isLoading ? data.navieras : []}
                  name="idNav"
                  control={control}
                  placeholder="Selecciona una naviera"
                />
              </div>
              <div className="tw-col-span-12">
                <Input_Mes control={control} name="fechSal" />
              </div>
              <div className="tw-col-span-12">
                <Input_Dias control={control} name="duracion" />
              </div>
              <button className="tw-col-span-12 tw-bg-slate-800 dark:tw-bg-slate-900 tw-text-white tw-w-full tw-p-3 tw-rounded-lg tw-shadow tw-flex tw-justify-center tw-items-center">
                <FaSearch className="tw-text-white tw-text-xl" />
              </button>
            </form>
            <div className="tw-flex tw-flex-col tw-items-center tw-my-4">
              <button
                onClick={toggleModal}
                className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
              >
                X
              </button>
              <span className="tw-text-slate-400">Cerrar</span>
            </div>
          </div>
        </div>
      )}
      <div className="tw-hidden lg:tw-block tw-border-2 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-inner tw-min-h-28 tw-p-5 tw-bg-white dark:tw-bg-slate-800">
        <h2 className="tw-mb-4 tw-font-bold tw-text-2xl dark:tw-text-secondaryDark">
          Buscador
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-grid tw-grid-cols-12 tw-gap-3"
        >
          <div className="tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Destinos
              datos={!isLoading ? data.zonas : []}
              name="idZona"
              control={control}
              placeholder="Selecciona un destino"
            />
          </div>
          <div className="tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-3">
            <Input_Puertos
              datos={!isLoading ? data.puertos : []}
              name="idPuerto"
              control={control}
              placeholder="Selecciona un puerto"
            />
          </div>
          <div className="tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Navieras
              datos={!isLoading ? data.navieras : []}
              name="idNav"
              control={control}
              placeholder="Selecciona una naviera"
            />
          </div>
          <div className="tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Mes control={control} name="fechSal" />
          </div>
          <div className="tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Dias control={control} name="duracion" />
          </div>
          <button className="tw-btn_buscador_con_icono dark:tw-btn_buscador_con_icono_dark tw-btn_buscador_con_icono_accesorios tw-col-span-4 xl:tw-col-span-1">
            <FaSearch className="tw-text-white tw-text-xl" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador;
