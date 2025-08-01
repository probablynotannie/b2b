/* Pasar de x minutos a hora y minutos: h min */
export default function formatearMinutos(e) {
    let horas = Math.floor(e / 60);
    let minutos = e % 60;
    return `${horas}h ${minutos}min`;
}
