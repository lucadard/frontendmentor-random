import { useState } from 'react'
import data from '../data/7day-data.json'

const maxDataAmount = data.reduce(
  (maxAmount, item) => (item.amount > maxAmount ? item.amount : maxAmount),
  0
)

const currentDay = new Date().getDay()

const Chart = () => {
  const [showAmount, setShowAmount] = useState('')
  return (
    <div className="h-full flex justify-between gap-2 md:gap-4 xl:gap-8 ">
      {data.map((item, day) => {
        const heightPercentage = `${(item.amount * 100) / maxDataAmount}%`
        return (
          <div key={item.day} className="flex relative h-full items-end w-full">
            <div
              style={{ height: heightPercentage }}
              className={`w-full relative`}
            >
              <div
                className={`${
                  currentDay === day ? 'bg-cyan-500' : 'bg-orange-500'
                } w-full rounded-md hover:opacity-70 transition-opacity relative h-full`}
                onMouseEnter={() => setShowAmount(item.day)}
                onMouseLeave={() => setShowAmount('')}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '135%',
                  marginLeft: '-17.5%',
                  display: 'flex',
                  justifyContent: 'center',
                  background: 'black',
                  borderRadius: '8px',
                  opacity: showAmount === item.day ? '100' : '0'
                }}
                className="transition-opacity -top-7 md:-top-12"
              >
                <span className="text-white text-xs md:text-lg py-1">
                  ${item.amount}
                </span>
              </div>
            </div>
            <span className="absolute w-full text-center text-sm text-gray-400 -bottom-7">
              {item.day}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Chart
