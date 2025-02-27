import { useState, useEffect } from "react";

function Imagenes({ imagenes }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };
  const goToPrevious = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length
    );
  };
  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "Escape") {
        closeModal();
      }
    };
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <div>
      <div className="tw-columns-2 md:tw-columns-4 tw-gap-4 tw-space-y-4">
        {imagenes.map((url, index) => (
          <img
            key={index}
            className="tw-w-full hover:tw-scale-105 tw-rounded-lg tw-break-inside-avoid tw-transition tw-cursor-pointer"
            src={url}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-80 tw-flex tw-items-center tw-justify-center tw-p-5 tw-z-50">
          <button
            onClick={closeModal}
            className="tw-absolute tw-top-4 tw-right-4 tw-text-white tw-text-2xl tw-font-bold tw-p-5"
          >
            &times;
          </button>

          <div className="tw-flex tw-flex-col tw-items-center tw-space-y-4 md:tw-space-y-0 md:tw-flex-col md:tw-space-x-4">
            <img
              src={imagenes[selectedImageIndex]}
              alt={`Large view of Gallery Image ${selectedImageIndex + 1}`}
              className="tw-w-[80vw] tw-h-[80vh] tw-object-cover tw-max-h-[80vh] tw-rounded-lg"
            />

            <div className="tw-flex tw-justify-between tw-w-full md:tw-w-auto tw-space-x-32 tw-mt-4 md:tw-mt-0">
              <button
                onClick={goToPrevious}
                className="tw-text-white tw-text-3xl tw-p-5"
              >
                &#10094;
              </button>
              <button
                onClick={goToNext}
                className="tw-text-white tw-text-3xl tw-p-5"
              >
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
