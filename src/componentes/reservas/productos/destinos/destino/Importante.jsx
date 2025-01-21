import { Modal } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";
function Importante({ destino }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {destino.notas.length > 1 && (
        <div>
          <h3
            onClick={() => setOpenModal(true)}
            className="font-semibold mt-3 pl-3 bg-orange-100 dark:bg-orange-800 dark:text-white rounded p-1 mb-2"
          >
            Notas importantes
          </h3>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header> Notas importantes</Modal.Header>
            <Modal.Body>
              <div>
                {destino.notas.map((info) => (
                  <div key={info.id}>
                    <h4 className="font-semibold underline dark:text-white">
                      {info.title}
                    </h4>
                    {info.datos.map((dato, index) => (
                      <p className="text-sm dark:text-slate-400" key={index}>
                        {dato}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(false)}>I accept</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Importante;
