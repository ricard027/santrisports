'use client'
// Components
import FooterComponent from '@/components/footer/Footer-component'
import HeaderComponent from '@/components/header/Header-component'
import ButtonComponent from '@/components/button/Button-component'
import MyimgComponent from '@/components/imgcomponent/Myimg-component'

// Icons
import HeartIcon from '@heroicons/react/24/outline/HeartIcon'
import HeartActive from '@heroicons/react/24/solid/HeartIcon'

import CartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'
import StarOutline from '@heroicons/react/24/outline/StarIcon'
import StarSolid from '@heroicons/react/24/solid/StarIcon'
import { EyeIcon } from '@heroicons/react/24/outline'

// Utilities
import { Produtos } from '../../../../script/Products'
import { useState } from 'react'
export default function ProductDetails({ params }: any) {
  const idParams = params.id

  const [activeIcon, setActiveIcon] = useState<Boolean>(false)
  return (
    <>
      <HeaderComponent />
      <div className="h-6" />
      <div className="m-auto w-[90vw] sm:w-[80vw]" />
      <div className=" m-auto mt-8  w-[100vw]  sm:w-[80vw]">
        {Produtos.filter((produtos) => produtos.id == idParams).map(
          (produto) => (
            <div className="m-auto flex w-[80vw] flex-col items-center">
              <div className="m-auto w-[80vw]">
                {/* Image */}
                <div className="relative m-auto h-[300px] rounded-md bg-customgray sm:w-[80vw] lg:w-[400px]">
                  {/* Heart Icon */}
                  <div
                    className="absolute right-2 top-2 w-5 cursor-pointer text-white"
                    onClick={() => setActiveIcon((prevstate) => !prevstate)}>
                    {activeIcon ? <HeartActive /> : <HeartIcon />}
                  </div>
                  <MyimgComponent alt={produto.nome} src={produto.imagem} />
                </div>
                {/* Images */}
                <div className="m-auto my-4 flex  h-20 gap-3  sm:w-[80vw] lg:w-[400px]">
                  <div className="active-icon flex-auto cursor-pointer rounded-md bg-customgray opacity-80">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                    <EyeIcon width={30} className="icon-active" />
                  </div>
                  <div className="active-icon flex-auto cursor-pointer rounded-md bg-customgray opacity-70">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                    <EyeIcon width={30} className="icon-active" />
                  </div>
                  <div className="active-icon flex-auto cursor-pointer rounded-md bg-customgray opacity-70">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                    <EyeIcon width={30} className="icon-active" />
                  </div>
                  <div className="active-icon flex-auto cursor-pointer rounded-md bg-customgray opacity-70">
                    <MyimgComponent alt={produto.nome} src={produto.imagem} />
                    <EyeIcon width={30} className="icon-active" />
                  </div>
                </div>
              </div>
              {/* Description product */}
              <div className="m-auto w-[80vw] py-4  text-left lg:w-[400px]">
                <div className="flex w-full items-center justify-between">
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
                <div className="flex">
                  <StarSolid width={30} className="text-yellow-300" />
                  <StarSolid width={30} className="text-yellow-300" />
                  <StarSolid width={30} className="text-yellow-300" />
                  <StarOutline width={30} className="text-yellow-300" />
                  <StarOutline width={30} className="text-yellow-300" />
                </div>
                <div className="my-4 h-2 w-8 rounded-md  bg-customgray" />
                <p className="font-extralight line-through">
                  de ${Math.floor(produto.preço * 2 + produto.preço / 3)},99
                </p>
                <h3 className="text-lg font-bold">R${produto.preço}</h3>
              </div>
              <div className="flex items-end justify-end sm:w-[90vw] lg:w-[400px]">
                <ButtonComponent icon={<CartIcon width={20} />}>
                  Adicionar ao carrinho
                </ButtonComponent>
              </div>
            </div>
          )
        )}
        <div>{/* */}</div>
      </div>
      <FooterComponent />
    </>
  )
}
