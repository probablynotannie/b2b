const normalizeDestinos = (destinos, hoteles) => {
    const hotelData = Array.isArray(hoteles?.results)
        ? hoteles.results.map((h) => ({
            id: h.idHotel,
            name: h.Name,
            destino: `${h.NameDestination} - ${h.NameCity}`,
            type: "hotel",
        }))
        : [];

    const destinoData = Array.isArray(destinos?.results)
        ? destinos.results.map((d) => ({
            id: d.codarea,
            codcity: d.codcity,
            name: d.city,
            destino: `${d.region ? d.region + ", " : ""}${d.country}`,
            type: "destino",
        }))
        : [];

    return [...hotelData, ...destinoData];
};

export default normalizeDestinos;
