import data from './data/7day-data.json'
import Chart from './components/Chart'

import Logo from './assets/Logo'

const totalMonth = (
  (data.reduce((total, acc) => total + acc.amount, 0) / 7) *
  30
).toFixed(2)

const AppComponent = () => {
  return (
    <div className="h-screen bg-red-200">
      <div className="h-full flex flex-col justify-center items-center gap-6 text-lg lg:w-3/6 lg:mx-auto xl:w-3/6">
        <div className="h-1/6 w-5/6 bg-orange-500 rounded-3xl flex justify-between items-center px-6">
          <div className="text-white flex flex-col gap-1">
            <p className="text-base">My balance</p>
            <p className="text-2xl font-semibold">${'942.12'}</p>
          </div>
          <Logo />
        </div>
        <div className="h-4/6 w-5/6 bg-white rounded-3xl flex flex-col justify-between gap-6 py-8 px-6">
          <div className="flex flex-col pb-6 h-3/4 gap-20">
            <p className="text-2xl font-semibold">Spending - Last 7 days</p>
            <Chart />
          </div>
          <hr />
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <p className="text-gray-400 text-base">Total this month</p>
              <p className="text-black text-2xl font-semibold">${totalMonth}</p>
            </div>
            <div>
              <p className="text-black text-base font-semibold text-right">
                +{'2.5'}%
              </p>
              <p className="text-gray-400 text-base">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppComponent
