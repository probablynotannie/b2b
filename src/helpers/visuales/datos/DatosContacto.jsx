// src/components/formularios/InputsContacto.js
import Input_Texto from "../../../componentes/inputs/Texto";
import Input_Numero from "../../../componentes/inputs/Numero";
import Input_Email from "../../../componentes/inputs/Email";

function InputsContacto({ register, errors }) {
  return (
    <>
      <Input_Texto
        /* required={true} */
        tipo="Nombre"
        name="nombre"
        register={register}
        errors={errors}
      />
      <Input_Texto
        /* required={true} */
        tipo="Apellido"
        name="apellido"
        register={register}
        errors={errors}
      />
      <Input_Numero
        /* required={true} */
        tipo="numero"
        name="numero"
        register={register}
        errors={errors}
      />
      <Input_Email
        /* required={true} */
        tipo="email"
        name="email"
        register={register}
        errors={errors}
      />
    </>
  );
}

export default InputsContacto;
