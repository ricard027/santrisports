'use client'
// Components
import HeaderComponent from '../components/Header-component'
import BannerComponent from '../components/Banner-component'
import CarouselComponent from '../components/Carousel-component'
import Product from '../components/Product-component'
import PromoComponent from '../components/promotion/Promotion-component'
import TitleComponent from '../components/title/TitleComponent'
import ReleasesComponent from '../components/releases/Releases-component'
import FooterComponent from '../components/footer/Footer-component'

// Utilities
import { SwiperSlide } from 'swiper/react'
import { Produtos } from '../../script/Products'

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="m-auto w-[90vw] sm:w-[80vw]">
        <BannerComponent />
        <PromoComponent />
        <TitleComponent>Mais vendidos</TitleComponent>
        <CarouselComponent
          qtdSlides={5}
          iwantNavigateorNot={true}
          autoplayornot={false}
          md={4}
          sm={3}
          lg={5}>
          {Produtos.map((produtos) => (
            <SwiperSlide key={produtos.id}>
              <Product
                id={produtos.id}
                img={produtos.imagem}
                name={produtos.nome}
                price={produtos.preço}
                sold={produtos.vendidos}
                stock={produtos.estoque}
              />
            </SwiperSlide>
          ))}
        </CarouselComponent>
        <TitleComponent>Lançamentos</TitleComponent>
        <ReleasesComponent />
      </main>
      <FooterComponent />
    </>
  )
}
