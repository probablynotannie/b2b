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
  isLoading,
  isFetching,
}) {
  const [regimenesUnicos, setRegimenesUnicos] = useState([]);
  const [ciudadesUnicas, setCiudadUnicas] = useState([]);
  const [estrellas, setEstrellas] = useState(0);
  const [reembolsable, setReembolsable] = useState(false);
  const [selectedRegimenes, setRegimenes] = useState([]);
  const [selectedCiudades, setSelectedCiudades] = useState([]);
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
  }, [hoteles]);
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
  }, [hoteles]);

  useEffect(() => {
    const ciudadesSet = new Set();
    hoteles.forEach((hotel) => {
      ciudadesSet.add(hotel.StateName.toLowerCase());
    });

    const regimenesArray = Array.from(ciudadesSet);
    console.log("regimenesArray", regimenesArray);
    setCiudadUnicas(regimenesArray);
  }, [hoteles]);

  useEffect(() => {
    setRegimenes((prev) =>
      prev.filter((regimen) => regimenesUnicos.includes(regimen))
    );
  }, [regimenesUnicos]);

  useEffect(() => {
    setSelectedCiudades((prev) =>
      prev.filter((regimen) => ciudadesUnicas.includes(regimen))
    );
  }, [ciudadesUnicas]);
  console.log(selectedCiudades);
  return (
    <AsideListado
      contenido={
        <Filtrado
          isLoading={isLoading}
          isFetching={isFetching}
          reembolsable={reembolsable}
          sxetReembolsable={setReembolsable}
          values={values}
          setValues={setValues}
          minMax={minMax}
          setMinMax={setMinMax}
          estrellas={estrellas}
          setEstrellas={setEstrellas}
          selectedRegimenes={selectedRegimenes}
          setRegimenes={setRegimenes}
          regimenesUnicos={regimenesUnicos}
          selectedCiudades={selectedCiudades}
          setSelectedCiudades={setSelectedCiudades}
          ciudadesUnicas={ciudadesUnicas}
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
