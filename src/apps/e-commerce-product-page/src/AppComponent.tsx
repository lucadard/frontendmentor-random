import React, { useState } from 'react'

import Navbar from './components/layout/Navbar'
import ImageSelector from './components/layout/ImageSelector'

import { Cart as CartIcon, Minus, Plus } from './components/assets/Icons'
import Lightbox from './components/layout/Lightbox'

type Props = {}

const AppComponent = (props: Props) => {
  const [count, setCount] = useState(0)
  const [isLightboxVisible, setIsLightboxVisible] = useState<boolean>(false)
  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '10% 90%',
        gap: ''
      }}
      className="md:px-16 lg:px-24"
    >
      <div className="z-10 h-full bg-white w-full flex flex-col gap-6 top-0 sticky md:relative md:p-0">
        <Navbar />
      </div>
      <div className="p-0 flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-1 md:p-8 md:items-center md:px-4 lg:p-20">
        <section>
          <Lightbox
            visible={isLightboxVisible}
            closeLightbox={() => setIsLightboxVisible(false)}
          />
          <ImageSelector setLightboxVisible={setIsLightboxVisible} />
        </section>
        <section className="flex flex-col justify-center gap-5 md:gap-10 p-4 md:p-0 lg:px-4 xl:px-18">
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="uppercase text-orange-500 text-xs font-bold">
                sneaker company
              </span>
              <p className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold">
                Fall Limited Edition Sneaker
              </p>
            </div>
            <span className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quisquam enim rem? Voluptatibus mollitia qui enim iusto,
              necessitatibus minima
            </span>
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <p className="font-bold text-2xl">$125.00</p>
                <div className="grid place-content-center h-7 mt-1 px-2 text-orange-500 rounded-md bg-orange-100">
                  <span>50%</span>
                </div>
              </div>
              <span className="text-gray-500 line-through text-sm">
                $250.00
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="h-12 flex justify-between rounded-md gap-10 items-center bg-gray-100 text-orange-500 font-bold select-none">
              <span
                onClick={() =>
                  setCount((prevState) =>
                    prevState !== 0 ? prevState - 1 : prevState
                  )
                }
                className="cursor-pointer p-6"
              >
                -
              </span>
              <span className="text-black">{count}</span>
              <span
                onClick={() => setCount((prevState) => prevState + 1)}
                className="cursor-pointer p-6"
              >
                +
              </span>
            </div>
            <button className="h-12 flex gap-2 bg-orange-500 w-full rounded-md items-center justify-center text-white shadow-lg shadow-orange-300 hover:bg-orange-400 duration-300">
              <CartIcon color="#FFFFFF" />
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AppComponent
