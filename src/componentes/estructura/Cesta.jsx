import { Popover } from "flowbite-react";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cesta() {
  const initialCompras = [
    {
      id: 0,
      precio: 452,
      fecha: "21 de Octubre",
      fechaSalida: "21 de Octubre",
      tipo: "Hotel",
      name: "Luxury apartments",
      pax: 2,
      pax_ninios: 0,
      img: "/banner_hoteles.jpg",
    },
    {
      id: 1,
      precio: 452,
      fecha: "21 de Octubre",
      tipo: "Entradas",
      name: "Festival de libros",
      pax: 5,
      pax_ninios: 2,
      fechas: "",
      img: "/banner_entradas.jpg",
    },
    {
      id: 2,
      precio: 452,
      fecha: "21 de Octubre",
      tipo: "Ferris",
      name: "Barcelona - Madrid",
      pax: 2,
      pax_ninios: 0,
      fechas: "",
      img: "/banner_trenes.jpeg",
    },
  ];

  const [compras, setCompras] = useState(initialCompras);
  const [selectedItems, setSelectedItems] = useState(
    new Array(initialCompras.length).fill(false)
  );
  const [selectAll, setSelectAll] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedSelections = [...selectedItems];
    updatedSelections[index] = !updatedSelections[index];
    setSelectedItems(updatedSelections);

    const allSelected = updatedSelections.every(Boolean);
    setSelectAll(allSelected);
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedItems(new Array(compras.length).fill(newSelectAll));
  };

  const handleRemoveItem = (index) => {
    const updatedCompras = compras.filter((_, i) => i !== index);
    setCompras(updatedCompras);

    const updatedSelections = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(updatedSelections);

    if (selectAll && updatedSelections.length === 0) {
      setSelectAll(false);
    } else if (updatedSelections.every(Boolean)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const calculateTotal = () => {
    return compras
      .reduce((total, compra, index) => {
        return total + (selectedItems[index] ? compra.precio : 0);
      }, 0)
      .toFixed(2);
  };

  const total = calculateTotal();

  const closePopover = () => setPopoverOpen(false);

  return (
    <Popover
      aria-labelledby="profile-popover"
      isOpen={popoverOpen}
      onClickOutside={() => setPopoverOpen(false)}
      content={
        <div className="tw-w-96 tw-p-3">
          <div className="tw-border-b-2 tw-border-slate-100 tw-pb-2 tw-mb-2 tw-flex tw-items-center tw-justify-between">
            <span className="tw-font-bold text-primary">Cesta</span>
            <img
              className="tw-h-10 tw-w-16 tw-rounded-full"
              src="/dit.png"
              alt="User Avatar"
            />
          </div>
          <div>
            {compras.map((compra, index) => (
              <div
                key={compra.id}
                className="tw-flex tw-justify-between tw-text-sm tw-border-b-2 tw-border-slate-100 tw-py-5 tw-cursor-pointer"
                onClick={() => handleCheckboxChange(index)}
              >
                <div className="tw-flex tw-justify-between tw-space-x-3">
                  <img
                    src={compra.img}
                    className="tw-w-20 tw-h-20 tw-object-cover tw-rounded-lg tw-shadow-md"
                  />
                  <div className="tw-w-52 tw-flex tw-flex-col tw-justify-between">
                    <div>
                      <h5 className="tw-font-semibold">{compra.name}</h5>
                      <div>
                        <span className="tw-block tw-text-slate-400">
                          {compra.pax && <span>{compra.pax} adultos</span>}

                          {compra.pax_ninios !== 0 && (
                            <span className="tw-ml-2">
                              {compra.pax_ninios} niños
                            </span>
                          )}
                        </span>
                      </div>
                      <span className="tw-text-slate-400">
                        {compra.fecha}{" "}
                        {compra.fechaSalida && `- ${compra.fechaSalida}`}{" "}
                      </span>
                    </div>
                    <div className="tw-text-slate-500">
                      <span className="text-secondary tw-font-semibold">
                        {compra.precio} €
                      </span>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-col tw-justify-between">
                    <button onClick={() => handleRemoveItem(index)}>
                      <FaRegTrashAlt className="tw-text-lg text-danger_text" />
                    </button>
                    <input
                      checked={selectedItems[index]}
                      type="checkbox"
                      readOnly
                      className="tw-w-4 tw-h-4 text-primary tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-primary focus:tw-ring-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {compras.length !== 0 ? (
            <div>
              <div className="tw-text-sm">
                <div className="tw-mt-2 tw-pt-3">
                  <div className="tw-flex tw-justify-between">
                    <div>
                      <div className="tw-flex tw-items-center">
                        <input
                          checked={selectAll}
                          type="checkbox"
                          onChange={handleSelectAllChange}
                          className="tw-w-4 tw-h-4 text-primary tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-primary focus:tw-ring-2"
                        />
                        <label className="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">
                          Todos
                        </label>
                      </div>
                    </div>
                    <div>
                      <span>Total:</span>
                      <span className="tw-font-bold text-secondary">
                        {" "}
                        {total} €
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/cesta"
                    onClick={(e) => {
                      e.preventDefault();
                      closePopover();
                      setTimeout(() => {
                        window.location.href = "/cesta";
                      }, 10);
                    }}
                  >
                    <button className="tw-mt-2 bg-primary hover:tw-bg-slate-900 tw-transition tw-p-2 tw-rounded-lg tw-shadow tw-text-white tw-font-semibold tw-w-full">
                      Ver cesta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="tw-my-4 tw-text-slate-400 tw-text-center">
              {" "}
              Tu cesta esta vacia
            </div>
          )}
        </div>
      }
    >
      <div
        className="tw-relative tw-text-white tw-w-fit tw-cursor-pointer hover:text-secondary tw-transition tw-flex tw-justify-center tw-items-center"
        onClick={() => setPopoverOpen(!popoverOpen)}
      >
        <TiShoppingCart className="tw-text-3xl" />
        {compras.length !== 0 && (
          <div className="tw-absolute tw-select-none -tw-top-1 tw-left-3 tw-text-sm bg-secondary tw-text-white tw-rounded-full tw-w-5 tw-flex tw-justify-center tw-items-center tw-font-bold">
            {compras.length}
          </div>
        )}
      </div>
    </Popover>
  );
}

export default Cesta;
