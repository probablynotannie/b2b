export default function calcularFechaSalida(fechaEntrada, noches) {
    const [day, month, year] = fechaEntrada.split(/[-/]/).map(Number);
    const entradaDate = new Date(year, month - 1, day);
    entradaDate.setDate(entradaDate.getDate() + noches);

    const dd = String(entradaDate.getDate()).padStart(2, "0");
    const mm = String(entradaDate.getMonth() + 1).padStart(2, "0");
    const yyyy = entradaDate.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
}
