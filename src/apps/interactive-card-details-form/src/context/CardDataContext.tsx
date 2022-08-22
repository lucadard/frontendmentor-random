import React, { createContext, useState } from 'react'

type FormValue = {
  value: string
  valid: boolean
  errorMsg: string
}
type Form = {
  name: FormValue
  cardnumber: FormValue
  expirationMonth: FormValue
  expirationYear: FormValue
  cvc: FormValue
}

const FormDataContext = createContext<
  | {
      formValues: Form
      setFormValues: (state: Form) => void
      isValid: () => boolean
      resetFormValues: () => void
    }
  | undefined
>(undefined)

const INITIAL_FORM_VALUES = {
  name: {
    value: '',
    valid: false,
    errorMsg: "Can't be blank"
  },
  cardnumber: {
    value: '',
    valid: false,
    errorMsg: "Can't be blank"
  },
  expirationMonth: {
    value: '',
    valid: false,
    errorMsg: "Can't be blank"
  },
  expirationYear: {
    value: '',
    valid: false,
    errorMsg: "Can't be blank"
  },
  cvc: {
    value: '',
    valid: false,
    errorMsg: "Can't be blank"
  }
}

type Props = {
  children: React.ReactElement[]
}

function FormDataProvider({ children }: Props) {
  const [formValues, setFormValues] = useState<Form>(INITIAL_FORM_VALUES)

  const isValid = (): boolean =>
    !Object.values(formValues).some((obj) => obj.valid === false)
  const resetFormValues = () => {
    setFormValues(INITIAL_FORM_VALUES)
  }

  const value = { formValues, setFormValues, isValid, resetFormValues }
  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  )
}

function useFormData() {
  const context = React.useContext(FormDataContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a FormDataProvider')
  }
  return context
}

export { FormDataProvider, useFormData }
