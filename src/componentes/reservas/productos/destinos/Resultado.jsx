import { FaMapPin } from "react-icons/fa";

function Resultado() {
  const destinos = [
    {
      id: "1",
      map: "https://goo.gl/maps/example1",
      precio: 1200,
      titulo: "Aventura en la Gran Barrera de Coral",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Port Douglas", "Fitzroy Island"],
      sitio_noches: [
        "Gran Barrera de Coral",
        "Daintree Rainforest",
        "Playa de Fitzroy Island",
      ],
      dias: 5,
      categorias: "Aventura, Naturaleza",
      comidas: "Desayuno, Almuerzo",
      agencia: "Coral Reef Adventures",
    },
    {
      id: "2",
      map: "https://goo.gl/maps/example2",
      precio: 850,
      titulo: "Escapada Romántica en Cairns",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Green Island", "Palm Cove"],
      sitio_noches: [
        "Laguna Esplanade",
        "Green Island Resort",
        "Palm Cove Beach",
      ],
      dias: 4,
      categorias: "Romántico, Playa",
      comidas: "Desayuno",
      agencia: "Tropical Getaways",
    },
    {
      id: "3",
      map: "https://goo.gl/maps/example3",
      precio: 500,
      titulo: "Relax en las Playas de Cairns",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Trinity Beach", "Mission Beach"],
      sitio_noches: ["Playa Trinity", "Cascadas Crystal", "Playa Mission"],
      dias: 7,
      categorias: "Playa, Relax",
      comidas: "Todo Incluido",
      agencia: "Cairns Beach Resorts",
    },
    {
      id: "4",
      map: "https://goo.gl/maps/example4",
      precio: 1100,
      titulo: "Safari en la Selva Tropical de Daintree",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Daintree Rainforest", "Mossman Gorge"],
      sitio_noches: [
        "Parque Nacional Daintree",
        "Río Daintree",
        "Garganta Mossman",
      ],
      dias: 6,
      categorias: "Aventura, Naturaleza",
      comidas: "Desayuno, Cena",
      agencia: "Wildlife Tours Cairns",
    },
    {
      id: "5",
      map: "https://goo.gl/maps/example5",
      precio: 950,
      titulo: "Exploración en Cairns y Alrededores",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Kuranda", "Atherton Tablelands"],
      sitio_noches: [
        "Mercado de Kuranda",
        "Cataratas Barron",
        "Meseta Atherton",
      ],
      dias: 5,
      categorias: "Cultura, Naturaleza",
      comidas: "Desayuno",
      agencia: "Zen Explorers",
    },
  ];

  return (
    <section className="pb-12 mt-5">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-xl lg:shadow-none p-3 rounded-xl  border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 mt-4 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg ">
          Resultados ({destinos.length})
        </h3>
      </div>
      {destinos.map((destino, index) => (
        <article
          key={index}
          className="bg-white flex p-5 pt-2 dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 lg:flex flex-col relative min-lg:h-[25vh]"
        >
          <div className="flex justify-between items-center">
            <h3 className="dark:text-secondary font-semibold ">
              {destino.titulo}
            </h3>
            <button className="p-2 flex font-semibold text-secondary">
              Mostrar mapa <FaMapPin className="text-secondary" />
            </button>
          </div>
          <img
            src={destino.imagen}
            alt="destino"
            className="w-full object-cover h-[20vh]"
          />
          <div></div>
        </article>
      ))}
    </section>
  );
}

export default Resultado;
