
function Aside({ seguro }) {
  return (
    <div>
      <h2 className="text-xl font-semibold dark:text-white">{seguro.titulo}</h2>
      <span className="text-sm text-slate-500">Resumen de coberturas</span>
    </div>
  );
}

export default Aside;
