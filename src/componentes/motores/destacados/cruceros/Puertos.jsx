import React from "react";

function Puertos({ puertos }) {
  return (
    <div>
      <h2 className="font-bold text-2xl dark:text-white mt-5">
        Puertos Destacados
      </h2>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {puertos.map((zona, index) => (
            <div key={index}>
              <div className="relative hover:scale-[103%] transition duration-400 h-[20vh] top-0 cursor-pointer group">
                <img
                  src={zona.img}
                  className="opacity-90 h-full shadow mb-4 w-full object-cover"
                  alt="Imagen reserva"
                />
                <div className="absolute text-slate-100 text-3xl font-semibold text-center top-0 left-0 w-full h-full dark:bg-orange-900 dark:bg-opacity-40 bg-black bg-opacity-30 dark:hover:bg-black dark:hover:bg-opacity-75 hover:bg-opacity-65 transition duration-300 flex items-center justify-center p-4 rounded">
                  {zona.txt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Puertos;
