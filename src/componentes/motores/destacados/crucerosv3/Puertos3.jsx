import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import puertos from "./jsons/puertos.json";
import { useRef } from "react";
function Puertos() {
  const swiperRef = useRef(null);
  return (
    <div>
      <h2 className="tw-font-bold tw-text-2xl dark:tw-text-white">
        Puertos Destacados
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="tw-mt-3"
      >
        {puertos.map((zona, index) => (
          <SwiperSlide key={index}>
            <div
              className="tw-relative hover:tw-scale-[103%] tw-transition tw-duration-400 tw-h-[32vh] tw-cursor-pointer tw-group"
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              <img
                src={zona.img}
                className="tw-opacity-90 tw-h-full tw-shadow tw-mb-4 tw-w-full tw-object-cover"
                alt="Imagen reserva"
              />
              <div className="tw-absolute tw-text-slate-100 tw-text-xl tw-font-semibold tw-text-center tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-indigo-700 dark:tw-bg-orange-900 dark:tw-bg-opacity-40 tw-bg-opacity-30 dark:hover:tw-bg-black dark:hover:bg-opacity-75 hover:tw-bg-opacity-65 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded">
                {zona.txt}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Puertos;
