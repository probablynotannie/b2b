// src/scripts/extractDateAndTime.js
export const extractFechaHora = (dateString) => {
    if (!dateString) return { fecha: null, hora: null };

    const dateObj = new Date(dateString);

    const fecha = dateObj.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const hora = dateObj.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return { fecha, hora };
};
export default extractFechaHora;