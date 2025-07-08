import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Puertos({ data, isLoading, setRequestData }) {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const puertosDestacados = data.reduce((acc, zona) => {
    if (
      zona.destacado === 1 &&
      !acc.some((z) => z.id_puerto === zona.id_puerto)
    ) {
      acc.push(zona);
    }
    return acc;
  }, []);
  const handlePortClick = (producto) => {
    if (swiperRef.current?.animating) return;

    const datosForm = {
      idPuerto: producto.id_puerto,
      idZona: 0,
      fechSal: 0,
      duracion: 0,
      idNav: 0,
      img: producto.img_puerto_header,
      titulo: producto.name,
      desc: producto.descripcion,
    };
    const enlace = "/idPuerto/" + producto.id_puerto;
    setRequestData(datosForm);
    navigate(`/listadoCruceros${enlace}`, { state: { datosForm } });
  };
  return (
    <div>
      {!isLoading && puertosDestacados?.length > 0 && (
        <>
          <h2 className="tw-font-bold tw-text-xl xl:tw-text-2xl dark:tw-text-white">
            Puertos Destacados
          </h2>
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
            className="tw-mt-3"
          >
            {puertosDestacados.map((zona, index) => (
              <SwiperSlide key={index}>
                <div
                  className="tw-relative hover:tw-scale-[103%] tw-transition tw-duration-400 lg:tw-h-[18vh] xl:tw-h-[38vh] tw-h-[38vh] tw-cursor-pointer tw-group"
                  onClick={() => handlePortClick(zona)}
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay.start()}
                >
                  <img
                    className="tw-h-full tw-w-full"
                    src={
                      zona.img_puerto_header
                        ? `//pic-2.vpackage.net/cruceros_img/${zona.img_puerto_header}`
                        : "/default-image.jpg"
                    }
                    alt="Imagen del barco"
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
        </>
      )}
    </div>
  );
}

export default Puertos;
