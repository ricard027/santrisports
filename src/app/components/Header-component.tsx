import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function HeaderComponent() {
  return (
    <>
      <header className="flex h-[100px] w-full items-center justify-center bg-primary text-slate-100">
        <nav className="flex w-[800px] items-center justify-between">
          <div className="relative flex h-[50px] cursor-pointer flex-col justify-between">
            <Image
              src="/assets/logo.svg"
              alt="imagem da logo"
              width={20}
              height={20}
            />
            <h1 className="absolute top-0 z-10 text-2xl font-bold">Santri</h1>
            <p className="text-gray-400">Sports</p>
          </div>
          <ul className=" flex items-center gap-4 text-gray-300">
            <li className="cursor-pointer">Entrar</li>
            <li className="cursor-pointer">Categorias</li>
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
      <div className="h-10 w-full bg-lightgray"></div>
    </>
  )
}
