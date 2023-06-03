'use client'

import { FunctionComponent, ReactNode } from 'react'
import { Swiper as SwiperComponent } from 'swiper/react'
import { Pagination, Navigation, A11y } from 'swiper'

// Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface IcarouselProps {
  children: ReactNode
}

const CarouselComponent: FunctionComponent<IcarouselProps> = ({ children }) => {
  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: true
  }
  return (
    <SwiperComponent
      {...swiperParams}
      modules={[Navigation, Pagination, A11y]}
      slidesPerGroup={5}>
      {children}
    </SwiperComponent>
  )
}

export default CarouselComponent
