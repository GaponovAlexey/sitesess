"use client"
import { useEffect, useRef, useState } from "react"
import "./works.css"

const i1 = "../../../public/assets/bg2.jpg"
const i2 = "../../../public/assets/bg2.jpg"
const i3 = "../../../public/assets/bg2.jpg"

const OurWorks = () => {
  const images = [{id: 1, url: 'assets/bg2.jpg'}]
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselInterval = useRef(null)

  useEffect(() => {
    carouselInterval.current = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length)
    }, 3000) as any

    return () => {
      if (carouselInterval.current) {
        clearInterval(carouselInterval.current)
      }
    }
  }, [activeIndex, images.length])

  return (
    <div className="relative overflow-hidden">
      {images?.map((image, index) => (
        <img
          key={image.id}
          src={image.url}
          alt={`Carousel ${image.id}`}
          className={`absolute transform transition-transform duration-500 ease-in-out ${
            activeIndex === image.id ? "translate-x-0" : "-translate-x-full"
          }`}
        />
      ))}
      <div className="absolute bottom-0 flex justify-center w-full space-x-2 pb-4">
        {images?.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full bg-white opacity-50 ${
              activeIndex === index ? "opacity-100" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default OurWorks
