function Cruceros() {
  const zonas = [
    {
      id: 0,
      img: "/cruceros/mediterraneo.jpg",
      txt: "Mediterraneo",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 1,
      img: "/cruceros/canarias.jpg",
      txt: "Islas Canarias",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 2,
      img: "/cruceros/norte_de_europa_y_fiordos.jpg",
      txt: "Norte de Europa y Fiordos",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 3,
      img: "/cruceros/caribe.jpg",
      txt: "Caribe",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
  ];
  const puertos = [
    {
      id: 0,
      img: "/cruceros/mediterraneo.jpg",
      txt: "Mediterraneo",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 1,
      img: "/cruceros/canarias.jpg",
      txt: "Islas Canarias",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 2,
      img: "/cruceros/norte_de_europa_y_fiordos.jpg",
      txt: "Norte de Europa y Fiordos",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 3,
      img: "/cruceros/caribe.jpg",
      txt: "Caribe",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 4,
      img: "/cruceros/mediterraneo.jpg",
      txt: "Mediterraneo",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 5,
      img: "/cruceros/mediterraneo.jpg",
      txt: "Mediterraneo",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 6,
      img: "/cruceros/canarias.jpg",
      txt: "Islas Canarias",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 7,
      img: "/cruceros/norte_de_europa_y_fiordos.jpg",
      txt: "Norte de Europa y Fiordos",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 8,
      img: "/cruceros/caribe.jpg",
      txt: "Caribe",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
    {
      id: 9,
      img: "/cruceros/mediterraneo.jpg",
      txt: "Mediterraneo",
      descripcion:
        "Visite algunas de las principales ciudades Italianas, Griegas o de los 20 paises que baán tu costa",
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-2xl dark:text-white">Zonas Destacados</h2>
      <div>
        <div className="grid grid-cols-4 gap-3">
          {zonas.map((zona) => (
            <div
              key={zona.id}
              className="relative h-[15vh] top-0 cursor-pointer group"
            >
              <img
                src={zona.img}
                className="opacity-90 rounded h-full shadow mb-4 w-full object-cover"
                alt="Imagen reserva"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-65 transition duration-300 flex items-center justify-center p-4 rounded">
                <div className="text-white text-3xl font-semibold text-center">
                  {zona.txt}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white flex items-center justify-center p-4 rounded opacity-0 hover:opacity-100 transition duration-300">
                <p className="text-lg text-center">{zona.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="font-bold text-2xl dark:text-white mt-5">
        Puertos Destacados
      </h2>
      <div>
        <div className="grid grid-cols-5 gap-1">
          {puertos.map((zona) => (
            <div
              key={zona.id}
              className="relative h-[20vh] top-0 cursor-pointer group"
            >
              <img
                src={zona.img}
                className="opacity-90 h-full shadow mb-4 w-full object-cover"
                alt="Imagen reserva"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-65 transition duration-300 flex items-center justify-center p-4 rounded">
                <div className="text-white text-3xl font-semibold text-center">
                  {zona.txt}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white flex items-center justify-center p-4 rounded opacity-0 hover:opacity-100 transition duration-300">
                <p className="text-lg text-center">{zona.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cruceros;
