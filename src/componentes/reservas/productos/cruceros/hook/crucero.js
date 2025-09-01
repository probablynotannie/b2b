const fetchCrucero = async (idCrucero) => {
    const url = `https://devxml-2.vpackage.net/FrontCruceros/crucero/${idCrucero}/crucero?&idv=207&json=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error al sacar crucero con ID: ${idCrucero}`);
    const data = await res.json();
    console.log(url)
    return data.item;
};

export default fetchCrucero;
