export default function encontrarPrecioMasBajo(tarifas) {
    let precioMasBajo = Infinity;
    tarifas.forEach((tarifa) => {
        const precio = parseFloat(tarifa.precio);
        if (precio < precioMasBajo) precioMasBajo = precio;
    });
    return precioMasBajo === Infinity ? "No disponible" : `${precioMasBajo.toFixed(2)}`;
};