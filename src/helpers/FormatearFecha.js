export default function formatearFecha(fecha) {
    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ];

    const normalizedFecha = fecha.replace(/\//g, '-');
    const parts = normalizedFecha.split("-");
    let day, month, year;
    if (parts.length === 3) {
        if (parts[0].length === 4) {
            [year, month, day] = parts;
        }
        else {
            [day, month, year] = parts;
        }
    }
    const mes = meses[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} de ${mes} de ${year}`;
}
