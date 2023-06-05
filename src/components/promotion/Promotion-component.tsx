import ButtonComponent from '../button/Button-component'
import IconRigth from '@heroicons/react/24/outline/esm/ArrowSmallRightIcon'
const PromoComponent = () => {
  return (
    <>
      <div className="my-[44px] flex h-[100px] w-full items-center justify-center bg-black text-center text-white">
        <p>Produtos com até 50% OFF</p>
      </div>
      <section className="flex h-[400px] items-center justify-between gap-4">
        <div className="active-button-on-hover  relative flex h-full flex-1 flex-col items-center justify-center gap-2 bg-customgray">
          <img
            src="https://i.pinimg.com/564x/91/a3/0c/91a30c6477ec807cec7794dc0dde7937.jpg"
            alt="mulheres correndo"
            className="h-full w-full bg-cover"
          />
          <div className="custom-border-solid absolute right-0 top-0 flex h-[80px] w-[80px] items-center justify-center bg-[#28A745] text-white">
            <p className="text-center font-bold text-white">30% OFF</p>
          </div>
          <div className="product-inative absolute top-0 flex h-full   w-full items-center justify-center rounded-md bg-[rgb(0,0,0,.3)]">
            <ButtonComponent>
              <p className="font-semibold">Aproveite</p>
            </ButtonComponent>
          </div>
        </div>
        {/* separador */}
        <div className="active-button-on-hover relative flex h-full flex-1  flex-col items-center justify-center gap-2 bg-customgray">
          <img
            src="https://i.pinimg.com/564x/d6/ce/19/d6ce19f0736ef344295b599b41e5a1d2.jpg"
            alt="mulheres correndo"
            className="h-full w-full bg-cover"
          />
          <div className="custom-border-solid absolute right-0 top-0 flex h-[80px] w-[80px] items-center justify-center bg-[#28A745]">
            <p className="text-center font-bold text-white">30% OFF</p>
          </div>
          <div className="product-inative absolute top-0 flex h-full   w-full items-center justify-center rounded-md bg-[rgb(0,0,0,.3)]">
            <ButtonComponent>
              <p className="font-semibold">Aproveite</p>
            </ButtonComponent>
          </div>
        </div>
      </section>
    </>
  )
}
export default PromoComponent
