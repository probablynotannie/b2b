import { Carousel } from "flowbite-react";

export function Fotos({ fotos }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-64">
      <Carousel>
        {fotos.map((foto, index) => (
          <img key={index} src={foto} alt="..." />
        ))}
      </Carousel>
    </div>
  );
}
