import { ReactNode } from 'react'

interface Product {
  id: Number
  img: string
  name: string
  price: ReactNode
  sold: any
  stock: any
}

export default Product
