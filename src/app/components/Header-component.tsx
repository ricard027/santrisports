import { ShoppingBagIcon, TruckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderComponent() {
  return (
    <>
      <header className="fixed top-0 z-10 flex h-20 w-full items-center justify-center bg-primary text-slate-100">
        <nav className="flex w-[90vw] items-center justify-between sm:w-[80vw]">
          <div className="relative flex h-[50px] cursor-pointer flex-col justify-between">
            <Image
              src="/assets/logo.svg"
              alt="imagem da logo"
              width={20}
              height={20}
              className="absolute left-[-10px] top-0"
            />
            <div className="relative">
              <h1 className="text-2xl font-bold">Santri</h1>
            </div>
            <p className="text-gray-400">Sports</p>
          </div>
          <ul className="my-list flex items-center gap-4 text-gray-300">
            <Link href="/sign">Criar conta </Link>
            <Link href="/login" className="">
              Entrar
            </Link>
            <Link href="/login" className="">
              Produtos
            </Link>
            <li className=" relative flex cursor-pointer items-center">
              <ShoppingBagIcon
                className="
                    h-5
                   w-5"
              />
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-customred" />
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-[56px]"></div>
    </>
  )
}
