const fetchCrucero = async (orden) => {
    const url = `https://devxml-2.vpackage.net/FrontCruceros/reserva/${orden}?debug=0&json=1`
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export default fetchCrucero;
