import React from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

function Estrellas({ estrellas }) {
  return (
    <div className="tw-flex tw-text-secondary">
      {[...Array(5)].map((_, i) =>
        i < Math.floor(estrellas) ? (
          <IoMdStar key={i} className="tw-text-lg" />
        ) : i === Math.floor(estrellas) && estrellas % 1 !== 0 ? (
          <IoMdStarHalf key={i} className="tw-text-lg" />
        ) : (
          <IoMdStarOutline key={i} className="tw-text-lg" />
        )
      )}
    </div>
  );
}

export default Estrellas;
