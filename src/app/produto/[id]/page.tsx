// Components
import FooterComponent from '@/components/footer/Footer-component'
import HeaderComponent from '@/components/header/Header-component'
import ButtonComponent from '@/components/button/Button-component'
import MyimgComponent from '@/components/imgcomponent/Myimg-component'
import HeartIcon from '@heroicons/react/24/outline/HeartIcon'
import CartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'

// Utilities
import { Produtos } from '../../../../script/Products'

export default function ProductDetails({ params }: any) {
  const idParams = params.id
  return (
    <>
      <HeaderComponent />
      <div className="h-6" />
      <div className="m-auto h-16 w-[100vw] md:w-[80vw]  lg:w-[80vw]"></div>
      <div className=" m-auto  w-[100vw] md:w-[80vw]  lg:w-[80vw] ">
        {Produtos.filter((produtos) => produtos.id == idParams).map(
          (produto) => (
            <div className="m-auto flex w-[80vw] flex-col items-center">
              <div className="w-[80vw ]">
                <div className="relative m-auto h-[300px] w-[400px] rounded-md bg-customgray">
                  <HeartIcon className="absolute right-2 top-2 w-5 cursor-pointer text-white" />
                  <MyimgComponent alt={produto.nome} src={produto.imagem} />
                </div>
                <div className="my-4 flex h-20  w-[400px] gap-4 ">
                  <div className="flex-1 rounded-md bg-customgray opacity-80">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                  </div>
                  <div className="flex-1 cursor-pointer rounded-md bg-customgray opacity-70">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                  </div>
                  <div className="flex-1 cursor-pointer rounded-md bg-customgray opacity-70">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                  </div>
                  <div className="flex-1 cursor-pointer rounded-md bg-customgray opacity-70">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                  </div>
                </div>
              </div>
              <div className="m-auto  py-4 text-left sm:w-[80vw] md:w-[400px]">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">{produto.nome}</h1>
                  <div className="flex items-end justify-end gap-2">
                    <p className="text-xs text-customgray">
                      Vendidos {produto.vendidos}
                    </p>
                    <p className="text-xs text-customgray"> | </p>
                    <p className="text-xs text-customgray">
                      Estoque {produto.estoque}
                    </p>
                  </div>
                </div>
                <p>Mais informações sobre o produto</p>
                <div className="my-4 h-2 w-8 rounded-md  bg-customgray" />
                <p className="font-extralight line-through">
                  de ${Math.floor(produto.preço * 2 + produto.preço / 3)},99
                </p>
                <h3 className="text-lg font-bold">R${produto.preço}</h3>
              </div>
              <div className="flex w-[400px] items-end justify-end">
                <ButtonComponent icon={<CartIcon width={20} />}>
                  Adicionar ao carrinho
                </ButtonComponent>
              </div>
            </div>
          )
        )}
      </div>
      <FooterComponent />
    </>
  )
}
