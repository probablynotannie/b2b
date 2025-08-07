const hoteles = async ({ filtrado }) => {
    const reserva = {
        codearea: 251,
        codcity: 199,
        fecini: "28-07-2026",
        noc: 5,
        numper: "2,0;3,1,6",
    };

    const baseUrl = `https://prodxml-2.vpackage.net/Hoteles/public/search/Op/15/codarea/${reserva.codearea}/codcity/${reserva.codcity}/fecini/${reserva.fecini}/noc/${reserva.noc}/numper/${reserva.numper};?idv=52&vrl=https://b2b.haikutravel.es/&toextdir=reserva_hotel_mundo/&markup=1.1200&B2B=1&json=1&lang=es&coin=EUR`;

    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data)
    return data;
};

export default hoteles;
