export default function calcularDuracion(fechaSalida, fechaLlegada) {
    if (!fechaSalida || !fechaLlegada) return null;

    const salida = new Date(fechaSalida);
    const llegada = new Date(fechaLlegada);

    const diffMs = llegada - salida; // milliseconds
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${diffHours}h ${diffMinutes}m`;
}