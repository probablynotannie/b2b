export default function formatearFecha(fecha) {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    // Convert Date object to parts
    let dateObj;
    if (fecha instanceof Date) {
        dateObj = fecha;
    } else if (typeof fecha === "string") {
        dateObj = new Date(fecha);
    } else {
        console.warn("formatearFecha: fecha inválida", fecha);
        return "";
    }

    if (isNaN(dateObj)) {
        console.warn("formatearFecha: fecha inválida (NaN)", fecha);
        return "";
    }

    const day = dateObj.getDate();
    const month = dateObj.getMonth(); // 0-based
    const year = dateObj.getFullYear();

    return `${day} de ${meses[month]} de ${year}`;
}
