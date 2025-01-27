function Zonas({ zonas }) {
  return (
    <>
      <h2 className="font-bold text-2xl dark:text-white">Zonas Destacados</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {zonas.map((zona) => (
          <div key={zona.id} to={"/listadocruceros"}>
            <div className="relative h-[15vh] top-0 cursor-pointer group hover:scale-[103%] transition duration-400">
              <img
                src={zona.img}
                className="opacity-90 rounded h-full shadow mb-4 w-full object-cover"
                alt="Imagen reserva"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-800 dark:bg-indigo-900 dark:bg-opacity-70 bg-opacity-30 hover:bg-opacity-65 transition duration-300 flex items-center justify-center p-4 rounded">
                <div className="text-white text-3xl font-semibold text-center">
                  {zona.txt}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white flex items-center justify-center p-4 rounded opacity-0 hover:opacity-100 transition duration-300">
                <p className="text-md text-center">{zona.descripcion_corta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Zonas;
