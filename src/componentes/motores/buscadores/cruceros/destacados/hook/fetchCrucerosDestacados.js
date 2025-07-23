const fetchCrucero = async () => {
    const url = `https://devxml-2.vpackage.net/FrontCruceros/api/crucerosDestacados?json=1&debug=0&idv=207`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error al sacar los cruceros destacados`);
    const data = await res.json();
    return data;
};

export default fetchCrucero;
