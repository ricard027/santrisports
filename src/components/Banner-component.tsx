// Components
import CarouselComponent from './Carousel-component'

// Utilities
import { SwiperSlide } from 'swiper/react'
import { Produtos } from '../../script/Products'

export default function BannerComponent() {
  return (
    <section className="w-full">
      <CarouselComponent
        qtdSlides={1}
        autoplayornot={true}
        iWantPaginationorNot={true}
        iwantNavigateorNot={false}
        sm={1}
        md={1}
        lg={1}>
        {Produtos.slice(0, 4).map((produtos) => (
          <SwiperSlide key={produtos.id}>
            <div className="flex h-[500px] justify-between bg-gray-300 shadow-lg">
              <div className="h-full w-full">
                <img
                  src={produtos.imagem}
                  alt="imagem"
                  className="relative h-full w-full bg-cover"
                />
              </div>
              <div className="absolute left-0 top-0 h-full w-[50%]  bg-[rgb(0,0,0,.6)] blur-md"></div>
              <div className="absolute left-0 top-0 w-[35%] p-4 ">
                <h1 className="text-4xl font-bold italic text-white">
                  FRETE <strong>GRÁTIS</strong>
                </h1>
                <h3 className="text-3xl italic text-slate-200">
                  pra todo <strong>Brasil</strong>
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 w-[35%] p-4 ">
                <h4 className="text-6xl font-bold text-white">50%</h4>
                <h4 className="text-6xl font-bold text-white  ">OFF</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CarouselComponent>
    </section>
  )
}
