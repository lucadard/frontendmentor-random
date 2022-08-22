import React from 'react'

import CardFrontBackground from '../images/bg-card-front.png'
import CardBackBackground from '../images/bg-card-back.png'
import { useFormData } from '../context/CardDataContext'
const CardLogo = () => {
  return (
    <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
      <path
        d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
        stroke="#fff"
      />
    </svg>
  )
}
type Props = {
  side: 'front' | 'back'
}

const Card = ({ side }: Props) => {
  const { formValues } = useFormData()

  if (side === 'front')
    return (
      <div
        style={{
          backgroundImage: `url(${CardFrontBackground})`,
          backgroundSize: '100% 100%',
          display: 'grid',
          gridTemplateRows: `60% 1fr 1fr`
        }}
        className="h-44 w-80 lg:h-52 lg:w-96 py-5 px-6 select-none"
      >
        <CardLogo />
        <p className="text-2xl lg:text-3xl tracking-wider uppercase overflow-hidden whitespace-nowrap">
          {formValues.cardnumber.value || '0000 0000 0000 0000'}
        </p>
        <div className="text-sm flex items-end justify-between">
          <p className="uppercase tracking-wider">
            {formValues.name.value || 'name lastname'}
          </p>
          <div className="flex justify-between">
            <p className="w-5 uppercase text-right tracking-widest">
              {formValues.expirationMonth.value || '00'}
            </p>
            <span>/</span>
            <p className="w-5 uppercase tracking-widest">
              {formValues.expirationYear.value || '00'}
            </p>
          </div>
        </div>
      </div>
    )
  else
    return (
      <div
        style={{
          backgroundImage: `url(${CardBackBackground})`,
          backgroundSize: '100% 100%'
        }}
        className="h-44 w-80 lg:h-52 lg:w-96 relative select-none"
      >
        <p className="top-16 right-9 mt-2 lg:mt-6 lg:right-10 font-semibold text-md tracking-widest uppercase absolute">
          {formValues.cvc.value || '000'}
        </p>
      </div>
    )
}

export default Card
