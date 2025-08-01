import { Modal } from "flowbite-react";
function ModalWindow({ show, onClose, titulo, subTitulo, body, botones }) {
  return (
    <Modal
      show={show && show}
      onClose={onClose}
      size="4xl"
      className="tw-rounded-lg tw-bg-slate-950/50"
      dismissible
    >
      <Modal.Header className="dark:tw-bg-slate-900 dark:tw-border-b-slate-700 tw-border tw-border-secondary tw-rounded-t-lg">
        <div>
          <h4 className="tw-text-secondary tw-font-semibold tw-text-xl">
            {titulo}
          </h4>
          <p className="tw-text-sm tw-text-slate-400">{subTitulo}</p>
        </div>
      </Modal.Header>
      <Modal.Body className="tw-border-x tw-border-secondary tw-bg-white dark:tw-bg-slate-800 tw-p-6 tw-text-gray-900 dark:tw-text-gray-100 scrollbar-hidden tw-overflow-scroll tw-overflow-x-hidden tw-max-h-[74vh]">
        {body}
      </Modal.Body>
      <Modal.Footer className="dark:tw-bg-slate-900  tw-border tw-border-secondary tw-flex tw-items-center tw-pap-2">
        {botones && botones}
        <button
          className="tw-p-3 tw-px-5 tw-bg-slate-700 dark:tw-bg-secondaryDark tw-font-bold tw-rounded-xl tw-text-white"
          onClick={onClose}
        >
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;
