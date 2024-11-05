import { Carousel } from "flowbite-react";
function Imagenes_Carousel({ imagenes }) {
  return (
    <Carousel>
      {imagenes.map((img) => (
        <img key={img.id} src={img.src} alt="..." />
      ))}
    </Carousel>
  );
}

export default Imagenes_Carousel;
