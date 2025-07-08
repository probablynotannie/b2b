const fetchCrucero = async () => {
    const url = `https://devxml-2.vpackage.net/FrontCruceros/searchjson?rand=774408346&idZona=&idNav=0&idPuerto=0&fechaSalida=0&duracionCru=0&json=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error al sacar crucero con ID`);
    const data = await res.json();
    return data;
};

export default fetchCrucero;
