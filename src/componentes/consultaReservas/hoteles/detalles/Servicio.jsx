import Estrellas from "../../../../helpers/visuales/Estrellas";
function Servicio({ hotel }) {
  return (
    <div>
      <div className="tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-flex tw-justify-between tw-items-center">
        <h2 className="tw-font-bold  tw-text-xl dark:tw-text-slate-100 tw-pb-2">
          {hotel.reserva.nombreHotel}
        </h2>
        <Estrellas estrellas={3.5} />
      </div>
    </div>
  );
}

export default Servicio;
