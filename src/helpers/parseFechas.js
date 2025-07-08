const parseFecha = (fechaStr) => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(fechaStr)) {
    // "2025-07-07"
    return new Date(fechaStr);
  }
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(fechaStr)) {
    // "07/07/2025"
    const [day, month, year] = fechaStr.split('/');
    return new Date(`${year}-${month}-${day}`);
  }

  if (/^\d{2}-\d{2}-\d{4}$/.test(fechaStr)) {
    // "07-07-2025"
    const [day, month, year] = fechaStr.split('-');
    return new Date(`${year}-${month}-${day}`);
  }
  return new Date(fechaStr);
};

export default parseFecha;
