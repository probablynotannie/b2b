/* Para el ruteo, quitar simbolos y reemplazarlos por _ y otras mejoras para URL. */
export const slugify = (text) =>
  text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\w-]+/g, "")
    .replace(/_+/g, "_");
