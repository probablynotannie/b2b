import { create } from "zustand";
import { persist } from "zustand/middleware";
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
      
      vaciarCesta: () =>
        set({
          productos: [],
        }
        ),
    }),
    {
      name: "cesta-storage",
    }
  )
);

export default cesta;
