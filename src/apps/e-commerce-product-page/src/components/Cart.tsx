import React from 'react'

import thumbnail from '../../public/images/image-product-2-thumbnail.jpg'

type Props = {
  visible: boolean
}

let ITEMS = [
  {
    name: 'autumn limited edition sneaker',
    price: 125,
    cuantity: 3,
    thumbnail
  }
]

const Cart = ({ visible }: Props) => {
  return (
    <div
      className={`${
        visible ? '' : 'hidden'
      } w-full absolute left-0 top-full mt-2 flex justify-center`}
    >
      <div className="z-50 bg-white p-4 w-11/12 rounded-md flex flex-col gap-6 shadow-xl">
        <h3 className="font-bold text-lg gap-6">Cart</h3>
        <hr />
        <div style={{ maxHeight: '40vh' }} className="overflow-y-scroll">
          {ITEMS.length === 0 ? (
            <p>empty cart</p>
          ) : (
            ITEMS.map((item) => (
              <div
                style={{ gridTemplateColumns: '20% 60% auto' }}
                className="w-full grid text-gray-500 gap-4 py-2"
              >
                <img
                  className="mx-auto rounded-md"
                  src={item.thumbnail}
                  alt=""
                />
                <div>
                  <p className="capitalize whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.name}
                  </p>
                  <div className="flex gap-1">
                    <span>${item.price}</span>
                    <span>x</span>
                    <span>{item.cuantity}</span>
                    <span className="text-black font-bold">
                      ${item.price * item.cuantity}
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => (ITEMS = [])}
                  className="flex justify-center items-center cursor-pointer"
                >
                  📦
                </div>
              </div>
            ))
          )}
        </div>
        <button className="h-12 flex gap-2 bg-orange-500 w-full rounded-md items-center justify-center text-white shadow-lg hover:bg-orange-400 duration-300">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
