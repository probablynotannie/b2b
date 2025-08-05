import Listado_cajas from "../hoteles/Listado_cajas";
import Listado_Tabla from "../hoteles/Listado";
import TipoHabitacion from "../hoteles/TipoHabitacion";
import { useEffect, useState } from "react";
function Precios({
  neto,
  setNeto,
  values,
  setValues,
  minMax,
  setMinMax,
  producto,
  habitaciones,
  habitacionSeleccionada,
  setHabitacionSeleccionada,
  modalMasProductos,
  setModalMasProductos,
  confirmacion,
  sinProductosAdicionales,
  aniadirMas,
}) {
  useEffect(() => {
    const allPrices = [];
    producto.ListaPrecios?.forEach((item) => {
      const price = parseFloat(neto === true ? item.Pvp : item.Price);
      if (!isNaN(price)) allPrices.push(price);
    });

    if (allPrices.length > 0) {
      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);
      setMinMax([minPrice, maxPrice]);
      setValues([minPrice, maxPrice]);
    }
  }, [neto]);
  const [selectedRegimenes, setRegimenes] = useState([]);
  const [regimenesUnicos, setRegimenesUnicos] = useState([]);
  const [reembolsable, setReembolsable] = useState(false);

  useEffect(() => {
    const regimenesSet = new Set();

    producto.ListaPrecios?.forEach((precio) => {
      if (precio?.BoardNameFiltro)
        regimenesSet.add(precio.BoardNameFiltro.toLowerCase());
    });

    const regimenesArray = Array.from(regimenesSet);
    setRegimenesUnicos(regimenesArray);
  }, []);
  useEffect(() => {
    if (!habitaciones || habitaciones.length === 0) return;

    const filtered = habitaciones.filter((habitacion) => {
      const price = parseFloat(habitacion?.Price);
      const board = habitacion?.BoardNameFiltro?.toLowerCase();
      const isRefundable = habitacion?.Reembolsable === true;

      const matchesPrice =
        !isNaN(price) && price >= values[0] && price <= values[1];

      const matchesRegimen =
        selectedRegimenes.length === 0 || selectedRegimenes.includes(board);

      const matchesReembolsable = !reembolsable || isRefundable;

      return matchesPrice && matchesRegimen && matchesReembolsable;
    });

    setPrecios(filtered);
  }, [habitaciones, selectedRegimenes, values, reembolsable]);

  const [precios, setPrecios] = useState([]);
  return (
    <section className="tw-flex tw-flex-col tw-gap-10">
      <TipoHabitacion
        neto={neto}
        setNeto={setNeto}
        values={values}
        setValues={setValues}
        minMax={minMax}
        setRegimenes={setRegimenes}
        regimenesUnicos={regimenesUnicos}
        selectedRegimenes={selectedRegimenes}
        reembolsable={reembolsable}
        setReembolsable={setReembolsable}
      />
      <div className="tw-flex tw-flex-col tw-space-y-10">
        <div className="tw-col-span-5 tw-hidden lg:tw-block">
          <Listado_Tabla
            neto={neto}
            habitaciones={precios}
            habitacionSeleccionada={habitacionSeleccionada}
            setHabitacionSeleccionada={setHabitacionSeleccionada}
            modalMasProductos={modalMasProductos}
            setModalMasProductos={setModalMasProductos}
            confirmacion={confirmacion}
            sinProductosAdicionales={sinProductosAdicionales}
            aniadirMas={aniadirMas}
          />
        </div>
        <div className="tw-col-span-5 tw-block lg:tw-hidden">
          <Listado_cajas
            neto={neto}
            habitaciones={precios}
            habitacionSeleccionada={habitacionSeleccionada}
            setHabitacionSeleccionada={setHabitacionSeleccionada}
            modalMasProductos={modalMasProductos}
            setModalMasProductos={setModalMasProductos}
            confirmacion={confirmacion}
            sinProductosAdicionales={sinProductosAdicionales}
            aniadirMas={aniadirMas}
          />
        </div>
      </div>
    </section>
  );
}

export default Precios;
