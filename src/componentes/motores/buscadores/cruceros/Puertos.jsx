import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import puertos from "./puertos.json";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Puertos({ setRequestData }) {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const highlightedPorts = puertos.filter((zona) => zona.destacado === 1);
  const handlePortClick = (producto) => {
    const newRequestData = {
      puerto: producto.id_puerto,
      destino: 0,
      mes: 0,
      duracion: 0,
      naviera: 0,
      img: producto.img_puerto_header,
      titulo: producto.name,
      desc: producto.descripcion,
    };
    setRequestData(newRequestData);
    navigate("/listadoCruceros", { state: { newRequestData } });
  };

  return (
    <div>
      <h2 className="tw-font-bold tw-text-xl xl:tw-text-2xl dark:tw-text-white">
        Puertos Destacados
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="tw-mt-3"
      >
        {highlightedPorts.map((zona, index) => (
          <SwiperSlide key={index}>
            <div
              className="tw-relative hover:tw-scale-[103%] tw-transition tw-duration-400 lg:tw-h-[18vh] xl:tw-h-[38vh] tw-h-[38vh] tw-cursor-pointer tw-group"
              onClick={() => handlePortClick(zona)}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              <img
                src={zona.img_puerto_header || "/default-image.jpg"}
                className="tw-opacity-90 tw-h-full tw-shadow tw-mb-4 tw-w-full tw-object-cover"
                alt="Imagen puerto"
              />
              <div
                className="tw-absolute tw-text-slate-100 tw-text-xl tw-font-semibold tw-text-center tw-top-0 tw-left-0 tw-w-full tw-h-full 
                 tw-bg-blue-700 dark:tw-bg-orange-900 dark:tw-bg-opacity-40 tw-bg-opacity-30
                 dark:hover:tw-orange-900 dark:hover:tw-bg-opacity-75 hover:tw-bg-opacity-20
                 tw-smooth tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded"
              >
                {zona.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Puertos;
