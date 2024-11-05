import { Accordion } from "flowbite-react";
function Info() {
  const info = (
    <div className="text-slate-500">
      <h5 className="font-semibold text-secondary text-lg border-b-2 border-secondary pb-2 mb-2">
        General
      </h5>
      <p>
        Hotel recién reformado situado en primera línea de mar y escasos metros
        del paseo marítimo y la playa cuenta con hall, recepción, restaurante
        tipo buffet con una gran variedad gastronómica en la que ofrecemos
        productos típicamente mediterráneos así como platos internacionales, en
        él ofrecemos show cooking tanto por la mañana, como al mediodía y por la
        noche y posibilidad de servicio Todo Incluido.
      </p>
      <br></br>
      <p>
        El hotel, además dispone además de bar/cafetería, piscina exterior para
        adultos y para niños con terraza tipo solárium con hamacas, sala de
        lectura y descanso, sala de juegos (con coste adicional), miniclub,
        animación diaria diurna y nocturna, ascensores, uno de ellos con bonitas
        vistas a la playa, y chiringuito en la zona de la playa. El hotel cuenta
        con parking cubierto con coste adicional y bajo disponibilidad.
        Ofrecemos consigna y servicio de despertador gratuito.
      </p>
      <div className="font-semibold w-16 text-secondary text-lg border-b-2 border-slate-200 my-4">
        
      </div>
      <p>
        Hotel recién reformado situado en primera línea de mar y escasos metros
        del paseo marítimo y la playa cuenta con hall, recepción, restaurante
        tipo buffet con una gran variedad gastronómica en la que ofrecemos
        productos típicamente mediterráneos así como platos internacionales, en
        él ofrecemos show cooking tanto por la mañana, como al mediodía y por la
        noche y posibilidad de servicio Todo Incluido.
      </p>
      <br></br>
      <p>
        El hotel, además dispone además de bar/cafetería, piscina exterior para
        adultos y para niños con terraza tipo solárium con hamacas, sala de
        lectura y descanso, sala de juegos (con coste adicional), miniclub,
        animación diaria diurna y nocturna, ascensores, uno de ellos con bonitas
        vistas a la playa, y chiringuito en la zona de la playa. El hotel cuenta
        con parking cubierto con coste adicional y bajo disponibilidad.
        Ofrecemos consigna y servicio de despertador gratuito.
      </p>
    </div>
  );
  return (
    <Accordion className="w-full">
      <Accordion.Panel>
        <Accordion.Title>Descripción del hotel</Accordion.Title>
        <Accordion.Content>{info}</Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default Info;
