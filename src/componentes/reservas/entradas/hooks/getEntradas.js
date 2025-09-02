
const entradas = async ({ queryKey }) => {
    const [, reserva] = queryKey;
    const baseUrl = `https://prodxml-2.vpackage.net/Hoteles/public/tickets/search/Op/19/codarea/${reserva.codearea}/codcity/${reserva.codcity}/fecini/${reserva.fecini}/noc/${reserva.noc}/numper/${reserva.numper};?idv=52&msl=vpkdesarrollo&vrl=https://b2b.haikutravel.es/&toextdir=reserva_tickets/&b2b=1&hk=1&markup=1.0100&&ticket=1&B2B=1&debug=0&d=1755852061211&_=1755852061134&json=1`;
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
};
export default entradas;
