/* pasar de dd/mm/yyyy a d de m de yyyy */
export default function formatearFecha(fecha) {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    let dateObj;
    if (fecha instanceof Date) {
        dateObj = fecha;
    } else if (typeof fecha === "string") {
        const match = fecha.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
        if (match) {
            const [, diaStr, mesStr, añoStr] = match;
            const dia = parseInt(diaStr, 10);
            const mes = parseInt(mesStr, 10);
            const año = parseInt(añoStr, 10);
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
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    return `${day} de ${meses[month]} de ${year}`;
}
