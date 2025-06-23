export default function formatearFecha(fecha) {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    let dateObj;

    if (fecha instanceof Date) {
        dateObj = fecha;
    } else if (typeof fecha === "string") {
        const matchDMY = fecha.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (matchDMY) {
            const [, dia, mes, año] = matchDMY.map(Number);
            dateObj = new Date(año, mes - 1, dia);
        } else {

            const parsed = new Date(fecha);
            if (!isNaN(parsed)) {
                dateObj = parsed;
            }
        }
    } else {
        console.warn("formatearFecha: tipo de fecha no válido", fecha);
        return "";
    }

    if (!dateObj || isNaN(dateObj)) {
        console.warn("formatearFecha: fecha inválida", fecha);
        return "";
    }

    const day = dateObj.getDate();
    const month = dateObj.getMonth(); // 0-based
    const year = dateObj.getFullYear();

    return `${day} de ${meses[month]} de ${year}`;
}
