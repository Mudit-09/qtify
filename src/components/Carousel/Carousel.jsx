import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

function Carousel({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          nextEl: ".right-btn",
          prevEl: ".left-btn",
        }}
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

      {/* Buttons */}
      <LeftNav />
      <RightNav />
    </div>
  );
}

export default Carousel;