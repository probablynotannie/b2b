import { create } from "zustand";
import { persist } from "zustand/middleware";


/* 

1- Hoteles
2- Destinos
3- Cruceros
4- Transfers
5- Coches
6- Tickets
7- Entradas
8- Ferris
9- Trenes
10- Seguros
11- Vuelos
12- Circuitos
13- Hotel + vuelo
14- Hotel + actividades
15- Hotel + Ferris


*/

const cesta = create(
  persist(
    (set) => ({
      productos: [],

      anadirProducto: (nuevoProducto) =>
        set((state) => ({
          productos: [...state.productos, nuevoProducto],
        })),

      removeProducto: (index) =>
        set((state) => ({
          productos: state.productos.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "cesta-storage",
    }
  )
);

export default cesta;
