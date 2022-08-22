import { useFormData } from '../context/CardDataContext'

import CardFrontBackground from '../../public/images/bg-card-front.png'
import CardBackBackground from '../../public/images/bg-card-back.png'
import CardLogo from '../assets/CardLogo'

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
        <p className="text-2xl lg:text-[28px] tracking-wider uppercase overflow-hidden whitespace-nowrap">
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
