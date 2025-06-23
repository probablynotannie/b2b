import { create } from "zustand";
import { persist } from "zustand/middleware";
const cesta = create(

  persist(

    (set) => ({
      diasAntes: 3,
      diasDespues: 8,
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
