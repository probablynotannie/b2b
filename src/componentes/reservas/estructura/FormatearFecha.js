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
    const [day, month, year] = normalizedFecha.split("-");
    const mes = meses[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} de ${mes} de ${year}`;
}
