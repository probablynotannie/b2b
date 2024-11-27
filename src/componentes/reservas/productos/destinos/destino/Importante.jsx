function Importante({ destino }) {
  return (
    <>
      {destino.notas.length > 1 && (
        <div>
          <h3 className="font-semibold mt-3 pl-3 bg-orange-100 dark:bg-orange-800 dark:text-white rounded p-1 mb-2">
            Notas importantes:
          </h3>
          <div>
            {destino.notas.map((info) => (
              <div key={info.id}>
                <h4 className="font-semibold underline">{info.title}</h4>
                {info.datos.map((dato, index) => (
                  <p className="text-sm" key={index}>
                    {dato}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Importante;
