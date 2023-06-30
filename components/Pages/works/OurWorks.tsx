"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const CarouselComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto ">Our works</div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1200/3.png" alt="1" />
        </SwiperSlide>
        {" ."}
      </Swiper>
    </div>
  )
}

export default CarouselComponent
