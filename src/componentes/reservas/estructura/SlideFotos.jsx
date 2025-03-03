import { Carousel } from "flowbite-react";

export function Fotos({ fotos }) {
  return (
    <div className="tw-h-56 sm:tw-h-64 xl:tw-h-80 2xl:tw-h-64">
      <Carousel>
        {fotos.map((foto, index) => (
          <img key={index} src={foto} alt="..." />
        ))}
      </Carousel>
    </div>
  );
}
