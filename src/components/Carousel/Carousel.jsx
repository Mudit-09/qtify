import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Carousel({ children }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={6}   // 🔥 IMPORTANT (default)
      slidesPerGroup={1}  // 🔥 CRITICAL FIX
      breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;