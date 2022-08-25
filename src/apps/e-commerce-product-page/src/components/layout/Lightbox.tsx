import React from 'react'
import ImageSelector from './ImageSelector'

import { Close } from '../assets/Icons'

type Props = {
  closeLightbox: () => void
  visible: boolean
}

const Lightbox = ({ visible, closeLightbox }: Props) => {
  return (
    <div
      className={`z-50 top-0 right-0 absolute h-screen w-screen grid justify-items-center items-center ${
        visible ? '' : 'hidden'
      }`}
    >
      <div className="-z-10 top-0 right-0 absolute h-screen w-screen bg-black opacity-60" />
      <div className="w-5/12">
        <div
          className="ml-auto w-10 h-10 grid place-content-center cursor-pointer"
          onClick={closeLightbox}
        >
          <Close />
        </div>
        <ImageSelector />
      </div>
    </div>
  )
}

export default Lightbox
