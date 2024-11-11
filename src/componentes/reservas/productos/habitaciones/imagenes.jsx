import React, { useState, useEffect } from "react";

// Array de URLs de imágenes
const imageUrls = [
  "/hotel1.jpg",
  "/hotel2.jpg",
  "/hotel3.jpg",
  "/hotel4.jpg",
  "/hotel3.jpg",
  "/hotel1.jpg",
  "/hotel4.jpg",
  "/hotel1.jpg",
  "/hotel2.jpg",
  "/hotel3.jpg",
  "/hotel4.jpg",
  "/hotel1.jpg",
];

function Imagenes() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Función para abrir el modal y mostrar la imagen en tamaño grande
  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  // UseEffect para escuchar los eventos del teclado
  useEffect(() => {
    // Función que maneja los eventos de teclado
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious(); // Navegar a la imagen anterior
      } else if (event.key === "ArrowRight") {
        goToNext(); // Navegar a la imagen siguiente
      } else if (event.key === "Escape") {
        closeModal(); // Cerrar el modal cuando se presiona Escape
      }
    };

    // Añadir el listener cuando el modal está abierto
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Limpiar el listener cuando el modal se cierra o cuando el componente se desmonta
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <div>
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            className="w-full rounded-lg break-inside-avoid transition cursor-pointer"
            src={url}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-5 z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl font-bold p-5"
          >
            &times;
          </button>

          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-col md:space-x-4">
            <img
              src={imageUrls[selectedImageIndex]}
              alt={`Large view of Gallery Image ${selectedImageIndex + 1}`}
              className="w-[80vw] h-[80vh] object-cover max-h-[80vh] rounded-lg"
            />

            <div className="flex justify-between w-full md:w-auto space-x-32 mt-4 md:mt-0">
              <button
                onClick={goToPrevious}
                className="text-white text-3xl p-5"
              >
                &#10094;
              </button>
              <button onClick={goToNext} className="text-white text-3xl p-5">
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Imagenes;
