import { useState } from 'react'

import { useWidth } from './hooks/useWidth'
import { FormDataProvider } from './context/CardDataContext'
import Form from './components/Form'
import Card from './components/Card'

import Background from '../public/images/bg-main-desktop.png'
import MobileBackground from '../public/images/bg-main-mobile.png'
import IconComplete from './assets/IconComplete'

const AppComponent = () => {
  const { width } = useWidth()
  const [isFormValidAndSent, setIsFormValidAndSent] = useState(false)

  const unsendForm = () => {
    setIsFormValidAndSent(false)
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${width > 767 ? Background : MobileBackground})`
        }}
        className="-z-10 absolute bg-no-repeat bg-cover h-72 w-full md:h-screen md:w-1/3 "
      />
      <div className="h-screen w-10/12 mx-auto flex flex-col md:grid md:grid-cols-2 md:place-content-center md:w-full md:gap-6 md:px-12">
        <FormDataProvider>
          <div className="flex flex-col items-center justify-center gap-4 mb-10 md:mr-5 lg:ml-12 xl:ml-36 mt-6 ">
            <div className="-ml-4 md:-ml-14">
              <Card side={width > 767 ? 'front' : 'back'} />
            </div>
            <div className="-mr-4 md:-mr-14">
              <Card side={width > 767 ? 'back' : 'front'} />
            </div>
          </div>
          <div className="xl:mr-36 pb-6">
            {isFormValidAndSent ? (
              <div className="flex flex-col items-center w-10/12 h-full mx-auto py-10 md:justify-center">
                <IconComplete />
                <h3 className="text-3xl uppercase mt-4">thank you!</h3>
                <p className="text-md text-gray-500">
                  We've added your card details
                </p>
                <button
                  className="bg-violet-900 hover:bg-violet-500 transition-colors w-full rounded-md shadow-md p-3 text-white mt-6"
                  onClick={unsendForm}
                >
                  Continue
                </button>
              </div>
            ) : (
              <Form setIsFormValidAndSent={setIsFormValidAndSent} />
            )}
          </div>
        </FormDataProvider>
      </div>
    </>
  )
}

export default AppComponent
