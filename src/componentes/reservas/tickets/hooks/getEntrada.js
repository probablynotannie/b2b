const fetchTicket = async (idTicket, idOp) => {
    const url = `http://devxml-2.vpackage.net/Hoteles/public/tickets/info/ticket/${idTicket}/IdOp/${idOp}/fecini/10-10-2025/noc/1/numper/2,0;/codarea/216/codcity/0?json=1`;
    let res;
    try {
        res = await fetch(url);
    } catch (err) {
        throw new Error("No se pudo conectar con el servidor.");
    }
    if (!res.ok) {
        if (res.status === 404) {
            throw new Error(`No se encontró ticket con ID: ${idTicket}`);
        } else if (res.status >= 500) {
            throw new Error("Error interno del servidor, inténtalo más tarde.");
        }
        throw new Error(`Error inesperado (código ${res.status}).`);
    }

    const data = await res.json();

    if (!data || Object.keys(data).length === 0) {
        throw new Error(`No se encontró ticket con ID: ${idTicket}`);
    }

    return data;
};

export default fetchTicket;
