import ButtonComponent from '../button/Button-component'
import RigthIcon from '@heroicons/react/24/outline/ChevronRightIcon'
import React from 'react'
const CartComponent = () => {
  return (
    <div className="bg-rgb(0,0,0,.7) fixed top-[80px] z-30 flex h-full w-full justify-end">
      <div className="relative h-[70vh] w-[300px] bg-white opacity-100">
        <div className="m-auto w-[80%]">
          <h1 className="my-2 text-lg font-semibold">Carrinho</h1>
          <div className="my-2 h-[10px] w-8 rounded-md bg-[#D9D9D9]" />
        </div>
        <ul className="custom-scrollbar m-auto h-[50vh] w-[80%] overflow-y-scroll">
          <li className="my-5 flex items-center justify-start gap-4 rounded p-4 shadow-md">
            <div className=" h-16 w-12 flex-shrink-0">
              <img
                src="https://source.unsplash.com/random/200x200/?sports"
                alt="Tênis"
                className="h-full w-full  object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <p className="truncate text-sm font-semibold text-gray-800">
                Tênis de corrida
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-600">R$ 199.99</p>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200">
                    -
                  </div>
                  <div className="text-gray-800">1</div>
                  <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200">
                    +
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Resto dos itens */}
        </ul>
        <div className="absolute bottom-0 z-50 flex w-[100%] flex-col items-center justify-center gap-2 py-2">
          <p className="w-[80%]">TOTAL: R$ 319.97</p>
          <ButtonComponent icon={<RigthIcon width={20} height={20} />}>
            Ir para checkout
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}

export default CartComponent
