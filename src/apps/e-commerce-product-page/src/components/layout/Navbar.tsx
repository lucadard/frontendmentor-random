import React, { useState } from 'react'

import Cart from '../../components/Cart'
import { Cart as CartIcon, Close, Menu } from '../assets/Icons'
import Avatar from '../../../public/images/image-avatar.png'

const SECTIONS = [
  {
    name: 'collections'
  },
  {
    name: 'men'
  },
  {
    name: 'women'
  },
  {
    name: 'about'
  },
  {
    name: 'contact'
  }
]

type Props = {}

const Navbar = (props: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div
      className={`h-full flex items-center select-none relative px-5 md:px-0`}
    >
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </div>
      <p className="ml-6 md:ml-0 text-4xl cursor-pointer -mt-2 font-bold">
        sneakers
      </p>
      <div>
        <div
          className={`${
            isMenuOpen ? 'ml-0 shadow-2xl' : '-ml-96'
          } pr-32 bg-white transition-all duration-700 absolute md:relative h-screen top-0 left-0 flex flex-col p-6 font-bold md:p-0 md:flex-row md:h-auto md:w-auto md:ml-12 gap-4 md:gap-7 z-10`}
        >
          <div
            className="py-4 w-10 md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Close color="black" />
          </div>
          {SECTIONS.map((section) => (
            <span className="capitalize cursor-pointer md:text-gray-600">
              {section.name}
            </span>
          ))}
        </div>
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`${
            isMenuOpen ? 'opacity-50' : 'pointer-events-none opacity-0'
          } top-0 right-0 absolute bg-black h-screen w-screen transition-opacity duration-200`}
        />
      </div>
      <div className="flex items-center gap-4 lg:gap-10 ml-auto">
        <div>
          <div onClick={() => setIsCartOpen(true)} className="cursor-pointer">
            <CartIcon color="gray" />
          </div>
          <Cart visible={isCartOpen} />
          {isCartOpen && (
            <div
              onClick={() => setIsCartOpen(false)}
              className="absolute top-0 left-0 w-screen h-screen"
            />
          )}
        </div>
        <img className="w-6 md:w-9 cursor-pointer" src={Avatar} alt="" />
      </div>
      <div className="absolute bottom-0 hidden md:block h-[1px] w-full bg-gray-300" />
    </div>
  )
}

export default Navbar
