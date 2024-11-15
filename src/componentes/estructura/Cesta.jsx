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
        <div className="w-96 p-3">
          <div className="border-b-2 border-slate-100 pb-2 mb-2 flex items-center justify-between">
            <span className="font-bold text-primary">Cesta</span>
            <img
              className="h-10 w-16 rounded-full"
              src="/dit.png"
              alt="User Avatar"
            />
          </div>
          <div>
            {compras.map((compra, index) => (
              <div
                key={compra.id}
                className="flex justify-between text-sm border-b-2 border-slate-100 py-5 cursor-pointer"
                onClick={() => handleCheckboxChange(index)}
              >
                <div className="flex justify-between space-x-3">
                  <img
                    src={compra.img}
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />
                  <div className="w-52 flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold">{compra.name}</h5>
                      <div>
                        <span className="block text-slate-400">
                          {compra.pax && <span>{compra.pax} adultos</span>}

                          {compra.pax_ninios !== 0 && (
                            <span className="ml-2">
                              {compra.pax_ninios} niños
                            </span>
                          )}
                        </span>
                      </div>
                      <span className="text-slate-400">
                        {compra.fecha}{" "}
                        {compra.fechaSalida && `- ${compra.fechaSalida}`}{" "}
                      </span>
                    </div>
                    <div className="text-slate-500">
                      <span className="text-secondary font-semibold ">
                        {compra.precio} €
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <button onClick={() => handleRemoveItem(index)}>
                      <FaRegTrashAlt className="text-lg text-danger_text" />
                    </button>
                    <input
                      checked={selectedItems[index]}
                      type="checkbox"
                      readOnly
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {compras.length !== 0 ? (
            <div>
              <div className="text-sm">
                <div className="mt-2 pt-3">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center">
                        <input
                          checked={selectAll}
                          type="checkbox"
                          onChange={handleSelectAllChange}
                          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Todos
                        </label>
                      </div>
                    </div>
                    <div>
                      <span>Total:</span>
                      <span className="font-bold text-secondary">
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
                    <button className="mt-2 bg-primary hover:bg-slate-900 transition p-2 rounded-lg shadow text-white font-semibold w-full">
                      Ver cesta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-4 text-slate-400 text-center">
              {" "}
              Tu cesta esta vacia
            </div>
          )}
        </div>
      }
    >
      <div
        className="relative text-white w-fit cursor-pointer hover:text-secondary transition flex justify-center items-center"
        onClick={() => setPopoverOpen(!popoverOpen)}
      >
        <TiShoppingCart className="text-3xl" />
        {compras.length !== 0 && (
          <div className="absolute select-none -top-1 left-3 text-sm bg-secondary text-white rounded-full w-5 flex justify-center items-center font-bold">
            {compras.length}
          </div>
        )}
      </div>
    </Popover>
  );
}

export default Cesta;
