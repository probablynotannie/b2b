import { useState, useEffect } from "react";

import AsideListado from "../../../../motores/buscador/AsideListado";
import Filtrado from "./filtros/Filtrado";

function Aside({
  values,
  setValues,
  minMax,
  setMinMax,
  setHoteles,
  setPage,
  hoteles,
}) {
  const [regimenesUnicos, setRegimenesUnicos] = useState([]);
  const [estrellas, setEstrellas] = useState(0);
  const [reembolsable, setReembolsable] = useState(false);
  const [selectedRegimenes, setRegimenes] = useState([]);
  const [hotelName, setHotelName] = useState("");

  useEffect(() => {
    const allPrices = [];
    hoteles.forEach((hotel) => {
      hotel.ListaPrecios?.forEach((item) => {
        const price = parseFloat(item.Price);
        if (!isNaN(price)) allPrices.push(price);
      });
    });

    if (allPrices.length > 0) {
      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);
      setMinMax([minPrice, maxPrice]);
      setValues([minPrice, maxPrice]);
    }
  }, []);
  useEffect(() => {
    const regimenesSet = new Set();

    hoteles.forEach((hotel) => {
      hotel.ListaPrecios?.forEach((precio) => {
        if (precio?.BoardNameFiltro)
          regimenesSet.add(precio.BoardNameFiltro.toLowerCase());
      });
    });

    const regimenesArray = Array.from(regimenesSet);
    setRegimenesUnicos(regimenesArray);
  }, []);
  useEffect(() => {
    setRegimenes((prev) =>
      prev.filter((regimen) => regimenesUnicos.includes(regimen))
    );
  }, [regimenesUnicos]);

  return (
    <AsideListado
      contenido={
        <Filtrado
          reembolsable={reembolsable}
          setReembolsable={setReembolsable}
          values={values}
          setValues={setValues}
          minMax={minMax}
          setMinMax={setMinMax}
          estrellas={estrellas}
          setEstrellas={setEstrellas}
          selectedRegimenes={selectedRegimenes}
          setRegimenes={setRegimenes}
          regimenesUnicos={regimenesUnicos}
          hotelName={hotelName}
          setHotelName={setHotelName}
          setHoteles={setHoteles}
          setPage={setPage}
          hoteles={hoteles}
        />
      }
    />
  );
}

export default Aside;
