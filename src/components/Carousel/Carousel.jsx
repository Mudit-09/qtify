import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";

function Carousel({ children }) {
  const swiperRef = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      {/* LEFT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        style={{
          position: "absolute",
          left: 0,
          top: "40%",
          zIndex: 10,
          background: "transparent",
          border: "none",
          fontSize: "30px",
          cursor: "pointer",
        }}
      >
        ◀
      </button>

      {/* SWIPER */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={2} // 🔥 IMPORTANT
        loop={false}
        breakpoints={{
          320: { slidesPerView: 2, slidesPerGroup: 2 },
          768: { slidesPerView: 4, slidesPerGroup: 2 },
          1024: { slidesPerView: 6, slidesPerGroup: 2 },
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        style={{
          position: "absolute",
          right: 0,
          top: "40%",
          zIndex: 10,
          background: "transparent",
          border: "none",
          fontSize: "30px",
          cursor: "pointer",
        }}
      >
        ▶
      </button>
    </div>
  );
}

export default Carousel;