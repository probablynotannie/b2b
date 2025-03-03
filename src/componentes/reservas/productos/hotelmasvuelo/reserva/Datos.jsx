import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import { Link } from "react-router-dom";
import formatearFecha from "../../../../../helpers/FormatearFecha";
import { useNavigate } from "react-router-dom";
import Input_Nacionalidad from "../../../../inputs/Nacionalidad";

function Datos() {
  const location = useLocation();
  const { selectedHotel, ida, vuelta, habitacion } = location.state || {};
  const img = "/banner_avion.jpg";
  const itinerario = ida.flight.salida + " - " + ida.flight.llegada;
  const fechaIda = formatearFecha(ida.flight.outboundDate);
  const fechaVuelta = vuelta ? formatearFecha(vuelta.flight.returnDate) : "";
  const [datosContacto, setDatosContacto] = useState({
    email: "",
    nombre: "",
    apellido: "",
    numero: "",
  });
  const handleChange = (key, value) => {
    setDatosContacto((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const [pasajeros, setPasajeros] = useState(
    Array.from({ length: 2 }, () => ({
      nombre: "",
      apellido: "",
      pasaporte: "",
      nacionalidad: "",
    }))
  );
  const handlePassengerChange = (index, field, value) => {
    setPasajeros((prevpasajeros) => {
      const updatedpasajeros = [...prevpasajeros];
      updatedpasajeros[index][field] = value;
      return updatedpasajeros;
    });
  };
  const renderPassengerFields = () => {
    return pasajeros.map((passenger, index) => (
      <div
        key={index}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-3"
      >
        <Input_Texto
          tipo={`Nombre (Pasajero ${index + 1})`}
          value={passenger.nombre}
          setValue={(value) => handlePassengerChange(index, "nombre", value)}
        />
        <Input_Texto
          tipo={`Apellido/s (Pasajero ${index + 1})`}
          value={passenger.apellido}
          setValue={(value) => handlePassengerChange(index, "apellido", value)}
        />
        <Input_Texto
          tipo={`Pasaporte (Pasajero ${index + 1})`}
          value={passenger.pasaporte}
          setValue={(value) => handlePassengerChange(index, "pasaporte", value)}
        />
        <Input_Nacionalidad
          value={passenger.nacionalidad}
          setValue={(value) =>
            handlePassengerChange(index, "nacionalidad", value)
          }
        />
      </div>
    ));
  };
  return (
    <main className="my-10  flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:tw-border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <form>
          <h1 className="font-semibold text-xl dark:tw-text-white">
            Datos Contacto
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-6">
            <Input_Texto
              value={datosContacto.nombre}
              setValue={(value) => handleChange("nombre", value)}
              tipo="Nombre"
            />
            <Input_Texto
              value={datosContacto.apellido}
              setValue={(value) => handleChange("apellido", value)}
              tipo="Apellido/s"
            />
            <Input_Numero
              value={datosContacto.numero}
              setValue={(value) => handleChange("numero", value)}
            />
            <Input_Email
              email={datosContacto.email}
              setEmail={(value) => handleChange("email", value)}
            />
          </div>
          <h2 className="font-semibold mt-5 dark:tw-text-white">
            Datos Pasajeros
          </h2>
          {renderPassengerFields()}
        </form>
        <Reserva
          img={img}
          position={"center"}
          tipo={"Hotel + vuelo"}
          itinerario={itinerario}
          fechaIda={fechaIda}
          fechaVuelta={fechaVuelta}
        />
        <div className="flex justify-end">
          <Link
            to={"/reservahotelmasvuelo"}
            state={{
              selectedHotel,
              ida,
              vuelta,
              datosContacto,
              pasajeros,
              habitacion,
            }}
          >
            <button className="tw-bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300">
              Reservar
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
}

export default Datos;
