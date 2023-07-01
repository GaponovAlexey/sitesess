"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Image from "next/image"

import s from "../../../styles/main.module.scss"

const CarouselComponent = () => {
  return (
    <div className="container mx-auto">
      <div className={`${s.colorTextSmall} text-2xl py-16 text-center`}>Our works</div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        // slidesPerView={3}
        navigation
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image height={600} width={600} src={"/assets/h2.png"} alt="1" />
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
