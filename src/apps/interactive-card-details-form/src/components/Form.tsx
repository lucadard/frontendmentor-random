import { useState, useEffect } from 'react'

import { useFormData } from '../context/CardDataContext'

type Props = {
  setIsFormValidAndSent: (state: boolean) => void
}

const Form = ({ setIsFormValidAndSent }: Props) => {
  const [isSent, setIsSent] = useState(false)
  const { formValues, setFormValues, isValid, resetFormValues } = useFormData()

  useEffect(() => {
    resetFormValues()
  }, [])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSent(true)
    if (isValid()) setIsFormValidAndSent(true)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputName = e.target.name
    let inputValue = e.target.value
    let errorMsg = ''
    let valid = true
    if (inputName === 'name') {
      let inputWords = inputValue.split(' ').reduce((acc, curr) => {
        return curr.length ? acc + 1 : acc
      }, 0)
      if (inputValue.length > 30) return
      if (inputWords !== 2 && inputWords !== 3) {
        valid = false
        if (inputValue.length === 0) errorMsg = "Can't be blank"
        else if (!valid) errorMsg = 'Invalid name'
      }
      if (/\d/.test(inputValue)) {
        valid = false
        errorMsg = 'Should contain only letters'
      }
    }

    if (inputName === 'cardnumber') {
      let newValue = ''
      inputValue = inputValue.replace(/\s/g, '')
      if (inputValue.length > 16) return
      else if (inputValue.length < 16) {
        valid = false
        if (inputValue.length === 0) errorMsg = "Can't be blank"
        else errorMsg = 'Must have 16 digits'
      }
      if (isNaN(+inputValue)) {
        valid = false
        errorMsg = 'Should contain only numbers'
      }
      for (let i = 0; i < inputValue.length; i++) {
        // add space if modulus of 4 is 0
        if (i % 4 == 0 && i > 0) newValue = newValue.concat(' ')
        // concatenate the new value
        newValue = newValue.concat(inputValue[i])
      }
      inputValue = newValue
    }

    if (inputName === 'expirationMonth' || inputName === 'expirationYear') {
      if (inputValue.length > 2) return
      else if (inputValue.length < 2) {
        valid = false
        if (inputValue.length === 0) errorMsg = "Can't be blank"
        else errorMsg = 'Must have 2 digits'
      }
      if (isNaN(+inputValue)) {
        valid = false
        errorMsg = 'Should contain only numbers'
      }
    }

    if (inputName === 'cvc') {
      if (inputValue.length > 3) return
      else if (inputValue.length < 3) {
        valid = false
        if (inputValue.length === 0) errorMsg = "Can't be blank"
        else errorMsg = 'Must have 2 digits'
      }
      if (isNaN(+inputValue)) {
        valid = false
        errorMsg = 'Should contain only numbers'
      }
    }
    setFormValues({
      ...formValues,
      [inputName]: { value: inputValue, valid, errorMsg }
    })
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <div>
        <label className="w-full h-12 uppercase font-bold">
          cardholder name
        </label>
        <input
          name="name"
          value={formValues.name.value}
          placeholder="e.g. Jane Appleseed"
          className={`border-2 rounded-md h-12 w-full pl-4 mt-2 
          ${!formValues.name.valid && isSent ? 'border-red-500' : ''}`}
          onChange={handleFormChange}
        />
        <p className="h-6 text-sm mt-1 text-red-500">
          {!formValues.name.valid && isSent && formValues.name.errorMsg}
        </p>
      </div>
      <div className="mt-3">
        <label className="w-full h-12 uppercase font-bold">card number</label>
        <input
          name="cardnumber"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formValues.cardnumber.value}
          className={`border-2 rounded-md h-12 w-full pl-4 mt-2
          ${!formValues.cardnumber.valid && isSent ? 'border-red-500' : ''}`}
          onChange={handleFormChange}
        />
        <p className="h-6 text-sm mt-1 text-red-500">
          {!formValues.cardnumber.valid &&
            isSent &&
            formValues.cardnumber.errorMsg}
        </p>
      </div>
      <div className="flex w-full gap-4 mt-3">
        <div>
          <label className="w-full h-12 uppercase font-bold">
            exp. date (MM/YY)
          </label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <input
                name="expirationMonth"
                value={formValues.expirationMonth.value}
                placeholder="MM"
                className={`border-2 rounded-md w-full h-12 pl-4
              ${
                !formValues.expirationMonth.valid && isSent
                  ? 'border-red-500'
                  : ''
              }`}
                onChange={handleFormChange}
              />
              <p className="h-6 text-sm mt-1 text-red-500">
                {!formValues.expirationMonth.valid &&
                  isSent &&
                  formValues.expirationMonth.errorMsg}
              </p>
            </div>
            <div>
              <input
                name="expirationYear"
                value={formValues.expirationYear.value}
                placeholder="YY"
                className={`border-2 rounded-md h-12 w-full pl-4
              ${
                !formValues.expirationYear.valid && isSent
                  ? 'border-red-500'
                  : ''
              }`}
                onChange={handleFormChange}
              />
              <p className="h-6 text-sm mt-1 text-red-500">
                {!formValues.expirationYear.valid &&
                  isSent &&
                  formValues.expirationYear.errorMsg}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-full">
          <label className="w-full h-12 uppercase font-bold">CVC</label>
          <input
            name="cvc"
            value={formValues.cvc.value}
            placeholder="e.g. 123"
            className={`border-2 rounded-md h-12 w-full pl-4 mt-2
            ${!formValues.cvc.valid && isSent ? 'border-red-500' : ''}`}
            onChange={handleFormChange}
          />
          <p className="h-6 text-sm mt-1 text-red-500">
            {!formValues.cvc.valid && isSent && formValues.cvc.errorMsg}
          </p>
        </div>
      </div>
      <button className="bg-violet-500 hover:bg-violet-900 transition-colors p-4 rounded-md text-white mt-10">
        Confirm
      </button>
    </form>
  )
}

export default Form
