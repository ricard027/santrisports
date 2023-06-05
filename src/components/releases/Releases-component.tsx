//  Components
import CarouselComponent from '../carousel/Carousel-component'
//  Utilities
import { SwiperSlide } from 'swiper/react'

const ReleasesComponent = () => {
  return (
    <section className="w-full">
      <CarouselComponent
        iwantNavigateorNot={true}
        iWantPaginationorNot={false}
        autoplayornot={false}
        lg={4}
        md={4}
        sm={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item}>
            <div className="flex h-36 w-36  cursor-pointer flex-col items-center justify-center rounded-full bg-customgray">
              <div className=" ">
                <p>Acessar</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CarouselComponent>
    </section>
  )
}
export default ReleasesComponent
