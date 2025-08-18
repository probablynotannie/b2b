import { create } from "zustand";

const useNetoStore = create((set) => ({
    neto: false,
    setNeto: (value) => set({ neto: value }),
}));

export default useNetoStore;
