import React from "react";

// Array of image URLs
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
  return (
    <div className="columns-2 md:columns-4 gap-4 space-y-4">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          className="w-full h-auto rounded-lg break-inside-avoid hover:scale-105 transition"
          src={url}
          alt={`Gallery Image ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default Imagenes;
