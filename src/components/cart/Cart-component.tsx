// Components
import ButtonComponent from '../button/Button-component'
// Icons
import RigthIcon from '@heroicons/react/24/outline/ChevronRightIcon'
const CartComponent = ({ setCartactive }: any) => {
  return (
    <>
      <div
        className="fixed left-0 top-0 z-40  h-full  w-[100vw]   bg-[rgb(0,0,0,.7)]"
        onClick={() => setCartactive((prev: boolean) => !prev)}
      />
      <div className="fixed right-0 top-0 z-50 flex h-full  justify-end">
        <div className="relative z-50 flex h-full w-[60vw] flex-col justify-evenly bg-[#f0f0f0]  opacity-100 sm:w-[350px]">
          {/** Cart Title */}
          <div className="m-auto w-[80%]">
            <h1 className="my-2 text-lg font-semibold">Carrinho</h1>
            <div className="my-2 h-[10px] w-8 rounded-md bg-[#D9D9D9]" />
          </div>
          {/** Cart Title */}
          {/** Cart List*/}
          <ul className="custom-scrollbar m-auto mb-6 h-96 w-[80%] overflow-y-scroll flex flex-col justify-start items-center">
            <li className="my-2 flex w-full h-18 justify-evenly items-center p-3
               gap-2 rounded bg-white  shadow-xl">
              <div className="h-full w-12">
                <img
                  src="https://source.unsplash.com/random/200x200/?sports"
                  alt="Tênis"
                  className="h-full w-full  object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col  w-[30%]">
                <p className="truncate text-sm font-semibold text-gray-800">
                  Tênis de corrida
                </p>
                <div className="my-2 h-[6px] w-6 rounded-md bg-[#D9D9D9]" />
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-600">R$ 199.99</p>
                </div>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200">
                  -
                </div>
                <div className="text-gray-800">1</div>
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200">
                  +
                </div>
              </div>
            </li>
            <li className="my-2  flex w-full h-18 justify-evenly items-center p-3
               gap-2 rounded bg-white  shadow-xl">
              <div className="h-full w-12">
                <img
                  src="https://source.unsplash.com/random/200x200/?sports"
                  alt="Tênis"
                  className="h-full w-full  object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col  w-[30%]">
                <p className="truncate text-sm font-semibold text-gray-800">
                  Tênis de corrida
                </p>
                <div className="my-2 h-[6px] w-6 rounded-md bg-[#D9D9D9]" />
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-600">R$ 199.99</p>
                </div>
              </div>
              <div className="flex items-center gap-1  ">
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200">
                  -
                </div>
                <div className="text-gray-800">1</div>
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200">
                  +
                </div>
              </div>
            </li>

          </ul>
          {/** Cart List*/}
          <div className="m-auto flex  w-[80%] flex-col items-start justify-start  gap-2 py-2">
            <p className="">
              TOTAL: R$ 319.97{' '}
              <span className="text-customgray">(6 items)</span>
            </p>
            <ButtonComponent icon={<RigthIcon width={20} height={20} />}>
              Ir para checkout
            </ButtonComponent>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartComponent
