import React, { useState } from 'react'

import { Next, Previous } from '../assets/Icons'

import Image1 from '../../../public/images/image-product-1.jpg'
import Image2 from '../../../public/images/image-product-2.jpg'
import Image3 from '../../../public/images/image-product-3.jpg'
import Image4 from '../../../public/images/image-product-4.jpg'

const IMAGES = [Image1, Image2, Image3, Image4]

type Props = {
  setLightboxVisible?: (set: boolean) => void
}

const ImageSelector = ({ setLightboxVisible = () => null }: Props) => {
  const [currentImage, setCurrentImage] = useState(IMAGES[0])

  const changeImage = (direction: 'prev' | 'next') => {
    let currentIndex = IMAGES.indexOf(currentImage)
    if (direction === 'prev') {
      currentIndex === 0
        ? (currentIndex = IMAGES.length - 1)
        : (currentIndex -= 1)
    } else {
      currentIndex === IMAGES.length - 1
        ? (currentIndex = 0)
        : (currentIndex += 1)
    }
    setCurrentImage(IMAGES[currentIndex])
  }
  return (
    <div className="grid grid-flow-row gap-4 select-none">
      <div
        className="flex justify-center items-center relative"
        onClick={() => setLightboxVisible(window.innerWidth > 767)}
      >
        <div className="absolute w-full h-full flex justify-between items-center">
          <div
            onClick={() => changeImage('prev')}
            className="cursor-pointer ml-4 md:-ml-4 bg-white h-10 w-10 grid place-content-center rounded-full"
          >
            <Previous />
          </div>
          <div
            onClick={() => changeImage('next')}
            className="cursor-pointer mr-4 md:-mr-4 bg-white h-10 w-10 grid place-content-center rounded-full"
          >
            <Next />
          </div>
        </div>
        <img className="md:rounded-xl" src={currentImage} alt="" />
      </div>
      <div className="hidden md:grid grid-cols-4 gap-2 items-center justify-items-center">
        <img
          className={`w-11/12 rounded-xl cursor-pointer ${
            currentImage === IMAGES[0]
              ? 'border-orange-500 border-4 opacity-70'
              : ''
          }`}
          src={IMAGES[0]}
          alt=""
          onClick={() => setCurrentImage(IMAGES[0])}
        />
        <img
          className={`w-11/12 rounded-xl cursor-pointer ${
            currentImage === IMAGES[1]
              ? 'border-orange-500 border-4 opacity-70'
              : ''
          }`}
          src={IMAGES[1]}
          alt=""
          onClick={() => setCurrentImage(IMAGES[1])}
        />
        <img
          className={`w-11/12 rounded-xl cursor-pointer ${
            currentImage === IMAGES[2]
              ? 'border-orange-500 border-4 opacity-70'
              : ''
          }`}
          src={IMAGES[2]}
          alt=""
          onClick={() => setCurrentImage(IMAGES[2])}
        />
        <img
          className={`w-11/12 rounded-xl cursor-pointer ${
            currentImage === IMAGES[3]
              ? 'w-10/12 border-orange-500 border-4 opacity-70'
              : ''
          }`}
          src={IMAGES[3]}
          alt=""
          onClick={() => setCurrentImage(IMAGES[3])}
        />
      </div>
    </div>
  )
}

export default ImageSelector
