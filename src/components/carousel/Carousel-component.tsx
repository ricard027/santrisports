'use client'

import { FunctionComponent, ReactNode } from 'react'
import { Swiper as SwiperComponent } from 'swiper/react'
import { Pagination, Navigation, A11y, Autoplay } from 'swiper'

// Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Components
interface IcarouselProps {
  children: ReactNode
  qtdSlides?: any
  iwantNavigateorNot?: boolean
  iWantPaginationorNot?: boolean
  autoplayornot?: boolean
  sm: number
  md: number
  lg: number
}

const CarouselComponent: FunctionComponent<IcarouselProps> = ({
  children,
  iwantNavigateorNot,
  iWantPaginationorNot,
  autoplayornot,
  sm,
  md,
  lg
}) => {
  const swiperParams = {
    navigation: true
  }
  return (
    <SwiperComponent
      {...swiperParams}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      pagination={iWantPaginationorNot}
      navigation={iwantNavigateorNot}
      autoplay={autoplayornot}
      breakpoints={{
        1024: {
          slidesPerGroup: lg,
          slidesPerView: lg,
          spaceBetween: 20
        },
        768: {
          slidesPerGroup: md,
          slidesPerView: md,
          spaceBetween: 20
        },
        375: {
          slidesPerGroup: sm,
          slidesPerView: sm,
          spaceBetween: 150
        }
      }}
      className="my-6">
      {children}
    </SwiperComponent>
  )
}

export default CarouselComponent
