// Components
import HeaderComponent from '@/components/header/Header-component'
import TitleComponent from '@/components/title/TitleComponent'
import FooterComponent from '@/components/footer/Footer-component'
// Utilities
import Product from '@/components/product/Product-component'
import { Produtos } from '../../../script/Products'

export default function ProductsPage() {
  return (
    <>
      <HeaderComponent />
      <div className="m-auto w-[90vw]  sm:w-[80vw]">
        <TitleComponent>Produtos</TitleComponent>
        <div className="flex flex-wrap items-center  justify-start gap-2">
          {Produtos.map((produtos) => (
            <Product
              id={produtos.id}
              img={produtos.imagem}
              name={produtos.nome}
              price={produtos.preço}
              sold={produtos.vendidos}
              stock={produtos.estoque}
            />
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  )
}
