// Icons
import CloseIcon from '@heroicons/react/24/outline/XMarkIcon'
import Bars from '@heroicons/react/24/outline/Bars3BottomLeftIcon'
// Utilities
import Link from 'next/link'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 block h-full ${
          isOpen && 'bg-white'
        }  sm:hidden md:hidden`}>
        <div className="flex cursor-pointer justify-end p-4">
          {isOpen ? (
            <CloseIcon
              width={30}
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-[#333]"
            />
          ) : (
            <Bars
              width={30}
              onClick={() => setIsOpen((prev) => !prev)}
              className="fixed left-[20px] top-[20px] bg-red-500"
            />
          )}
        </div>
        <Transition
          show={isOpen}
          enter="transition-transform duration-200 ease-in"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full">
          <div
            className={`h-full w-64 bg-white ${
              isOpen ? 'opacity-100' : 'opacity-0'
            } p-4`}>
            <ul className="space-y-2">
              <li className="cursor-pointer p-2 text-lg text-[#333]">
                <Link href="/produtos">Produtos</Link>
              </li>
              <li className="cursor-pointer p-2 text-lg text-[#333]">
                <Link href="/sign">Cadastro</Link>
              </li>
              <li className="cursor-pointer p-2 text-lg text-[#333]">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
      {isOpen ? (
        <div
          className="fixed right-0 top-0 h-full w-[100%] bg-[rgb(0,0,0,.7)] "
          onClick={() => setIsOpen((prev) => !prev)}
        />
      ) : null}
    </>
  )
}

export default MenuMobile
33
