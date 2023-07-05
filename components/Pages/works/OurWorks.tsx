"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import Image from "next/image"

import s from "../../../styles/main.module.scss"

const data = [
  { id: 1, title: "Recipe Cook", img: "/works/cook1.png" },
  { id: 2, title: "Photo Agency", img: "/works/photo1.png" },
  { id: 3, title: "COMPETE", img: "/works/coms.png" },
  { id: 4, title: "DEXRETURN", img: "/works/dexreturn1.png" },
  { id: 5, title: "Blog", img: "/works/blog.png" },
  { id: 6, title: "E-commerce", img: "/works/ecommerce.png" },
  { id: 7, title: "Brend", img: "/works/brend.png" },
]

const CarouselComponent = () => {
  return (
    <div className="container mx-auto">
      <div className={`${s.colorTextSmall} text-2xl py-16 text-center`}>
        Our works
      </div>
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
        onSwiper={() => console.log()}
        onSlideChange={() => console.log()}
      >
        {data.map((w) => {
          return (
            <SwiperSlide key={w.id} className="flex  align-middle self-center">
              <h2 className="text-center">{w.title}</h2>
              <Image height={1200} width={1200} src={w.img} alt="works" className="h-[25rem]" />
            </SwiperSlide>
          )
        })}
       <br/>
      </Swiper>
    </div>
  )
}

export default CarouselComponent
