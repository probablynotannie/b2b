import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
function Gallery({ imagenes }) {
  const swiperRef = useRef(null);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      loop={true}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {imagenes.map((imagen, index) => (
        <SwiperSlide key={index}>
          <div
            className="tw-relative hover:tw-scale-[103%] tw-transition tw-duration-400 lg:tw-h-[18vh] xl:tw-h-[38vh] tw-h-[15vh] tw-cursor-pointer tw-group"
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
          >
            <img
              className="tw-h-full tw-w-full"
              src={imagen ? imagen : "/default-image.jpg"}
              alt="Imagen"
            />

            <div
              className="tw-absolute tw-text-slate-100 tw-text-xl tw-font-semibold tw-text-center tw-top-0 tw-left-0 tw-w-full tw-h-full 
                 tw-bg-blue-700 dark:tw-bg-orange-900 dark:tw-bg-opacity-40 tw-bg-opacity-30
                 dark:hover:tw-orange-900 dark:hover:tw-bg-opacity-75 hover:tw-bg-opacity-20
                 tw-smooth tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded"
            >
              {/*   {zona.name} */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Gallery;
