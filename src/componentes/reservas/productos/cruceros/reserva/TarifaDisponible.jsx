import { useQuery } from "@tanstack/react-query";

const fetchCruceroById = async (idCrucero) => {
  if (!idCrucero) throw new Error("idCrucero is required");
  const url = `https://devxml-2.vpackage.net/FrontCruceros/crucero/${idCrucero}/crucero?&idv=207&json=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error fetching crucero with ID: ${idCrucero}`);
  const data = await res.json();
  return data.item;
};

export function useCrucero(idCrucero) {
  return useQuery({
    queryKey: ["crucero", idCrucero],
    queryFn: () => fetchCruceroById(idCrucero),
    enabled: Boolean(idCrucero),
    refetchOnWindowFocus: false,
  });
}
