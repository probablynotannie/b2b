const fetchCruceros = async ({ queryKey }) => {
    const [, datosForm, page] = queryKey;
    if (
        !datosForm ||
        (!datosForm.idZona &&
            !datosForm.idPuerto &&
            !datosForm.idNav &&
            !datosForm.fechSal &&
            !datosForm.duracion)
    ) {
        return { items: [], total: 0 };
    }
    const baseUrl = "https://devxml-2.vpackage.net/FrontCruceros/cruceros/";
    const params = new URLSearchParams({
        destino: datosForm.idZona || "",
        puertos: datosForm.idPuerto || "",
        naviera: datosForm.idNav || "",
        fechSal: datosForm.fechSal || "",
        duracion: datosForm.duracion || "",
        idv: "207",
        p: page.toString(),
        json: "1",
    });
    const url = `${baseUrl}?${params.toString()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error cargando datos");
    const data = await response.json();
    return {
        items: data.items || [],
        total: data.totalresults || 0,
    };
};
export default fetchCruceros;