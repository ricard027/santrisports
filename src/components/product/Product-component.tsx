// Components
import CartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'
import ButtonComponent from '../button/Button-component'

// Utilities
import { FunctionComponent } from 'react'
import Link from 'next/link'
import Product from '../../../types/protuct'

const Product: FunctionComponent<Product> = (
  { id, img, price, name, sold, stock },
  i
) => {
  return (
    <div
      className="active-button-on-hover relative flex h-[300px] w-[155px] flex-col gap-2 rounded-md bg-white shadow-lg"
      key={id}>
      <div className="h-[190px] rounded-t-md bg-customgray">
        <img src={img} alt={name} className="h-full rounded-t-md bg-cover" />
      </div>
      <div className=" ml-2">
        <h3 className="font-semibold text-slate-950">{name}</h3>
        <p className="text-sm text-[#717171]">
          {stock} | {sold} vendidos
        </p>
        <p className="text-sm text-[#717171] line-through">R$ 999</p>
        <div className="text-lg font-semibold ">R$ {price}</div>
      </div>
      <div className="product-inative absolute top-0 flex h-full   w-[155px] items-center justify-center rounded-md bg-[rgb(0,0,0,.3)]">
        <ButtonComponent icon={<CartIcon width={20} />}>
          <Link href={`/produto/${id}`}>Adicionar</Link>
        </ButtonComponent>
      </div>
    </div>
  )
}
export default Product
