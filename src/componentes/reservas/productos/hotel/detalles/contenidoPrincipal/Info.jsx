import { FaDirections } from "react-icons/fa";
import DatoTituloIcono from "../../../../../../helpers/visuales/DatoTituloIcono";
import { FaCity, FaGlobe, FaHotel, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Info({ hotel }) {
  return (
    <section className="tw-grid lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-flex-wrap tw-gap-5 tw-bg-slate-50 tw-p-5 tw-rounded-lg">
      <DatoTituloIcono
        icon={<FaHotel className="tw-text-pink-500" />}
        title={"HFotel"}
        value={hotel.NombreHotel}
      />
      <DatoTituloIcono
        icon={<FaCity className="tw-text-indigo-500" />}
        title={"Localidad"}
        value={hotel.City}
      />
      <DatoTituloIcono
        icon={<FaDirections className="tw-text-amber-500" />}
        title={"Direccion"}
        value={hotel.Dir}
      />
      <DatoTituloIcono
        icon={<FaGlobe className="tw-text-green-500" />}
        title={"Codigo Postal"}
        value={hotel.ZipCode}
      />
      <DatoTituloIcono
        icon={<FaPhone className="tw-text-orange-500" />}
        title={"Teléfono"}
        value={hotel.Tfno}
      />
      <DatoTituloIcono
        icon={<MdEmail className="tw-text-blue-500" />}
        title={"Email"}
        value={hotel.Email}
      />
    </section>
  );
}

export default Info;
