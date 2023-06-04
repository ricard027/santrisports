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
          <h1 className="text-slate-950">Imagem</h1>
          <p className="text-slate-50">produto promo</p>
          <div className="custom-border-solid absolute right-0 top-0 flex h-[80px] w-[80px] items-center justify-center bg-slate-50 text-slate-900">
            <p className="text-center font-bold text-black">OFF</p>
          </div>
          <div className="product-inative absolute top-0 flex h-full   w-full items-center justify-center rounded-md bg-[rgb(0,0,0,.3)]">
            <ButtonComponent icon={<IconRigth width={20} />}>
              <p className="font-semibold">Aproveite</p>
            </ButtonComponent>
          </div>
        </div>
        {/* separador */}
        <div className="active-button-on-hover relative flex h-full flex-1  flex-col items-center justify-center gap-2 bg-customgray">
          <h1 className="text-slate-950">Imagem</h1>
          <p className="text-slate-50">produto promo</p>
          <div className="custom-border-solid absolute right-0 top-0 flex h-[80px] w-[80px] items-center justify-center bg-slate-50 text-slate-900">
            <p className="text-center font-bold text-black">OFF</p>
          </div>
          <div className="product-inative absolute top-0 flex h-full   w-full items-center justify-center rounded-md bg-[rgb(0,0,0,.3)]">
            <ButtonComponent icon={<IconRigth width={20} />}>
              <p className="font-semibold">Aproveite</p>
            </ButtonComponent>
          </div>
        </div>
      </section>
    </>
  )
}
export default PromoComponent
