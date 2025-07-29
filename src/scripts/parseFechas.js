const parseFecha = (fechaStr) => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(fechaStr)) {
    // "yyyy-mm-dd"
    return new Date(fechaStr);
  }
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(fechaStr)) {
    // "dd/mm/yyyy"
    const [day, month, year] = fechaStr.split('/');
    return new Date(`${year}-${month}-${day}`);
  }

  if (/^\d{2}-\d{2}-\d{4}$/.test(fechaStr)) {
    // "dd-mm-yyyy"
    const [day, month, year] = fechaStr.split('-');
    return new Date(`${year}-${month}-${day}`);
  }
  return new Date(fechaStr);
};

export default parseFecha;
