import CartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'

const Product = () => {
  return (
    <div className="custom-border-solid active-button-on-hover flex h-[300px] w-[155px] flex-col gap-2 rounded-md">
      <div className="h-[190px]  bg-customgray"></div>
      <div className=" ml-2">
        <h3 className="font-semibold text-slate-950">Produto - Modelo</h3>
        <p className="text-sm text-[#717171]">4447 | 154 vendidos</p>
        <div className="my-[9px] h-[4px] w-[15px] rounded-xl bg-[#d9d9d9]" />
        <div className="font-semibold text-[#717171]">R$999</div>
      </div>
      <div className="product-inative absolute top-0 flex h-full   w-[154px] items-center justify-center rounded-md bg-[rgb(0,0,0,.3)]">
        <button className="flex w-[80%] items-center justify-evenly rounded-md bg-[#121212]  p-2 text-slate-50">
          <p className="font-medium">adicionar</p>
          <CartIcon width={20} />
        </button>
      </div>
    </div>
  )
}
export default Product
