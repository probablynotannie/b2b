import Ferry from "./Ferry";
function Detalles({ ida, vuelta }) {
  console.log(ida);
  return (
    <div>
      <div className="tw-grid tw-flex-col tw-gap-5">
        <Ferry ferry={ida} tipo={"ida"} />
        {vuelta && <Ferry ferry={vuelta} tipo={"vuelta"} />}
      </div>
    </div>
  );
}

export default Detalles;
