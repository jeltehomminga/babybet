import { useState } from 'react'

const useFormInput = (description, initialValue = '') => {
  const [value, setValue] = useState(initialValue)
  const [validObj, setValidObj] = useState({})
  const placeholderText = `Enter ${description}`


  const handleBlur = e => {
    let valid = e.target.value ? e.target.validity.valid : false
    let validationMessage = e.target.validationMessage
    setValidObj({ valid, validationMessage })
  }

  const handleChange = e => {
    setValidObj({})
    const newValue = e.target.value
    setValue(newValue)
  }

  const attributes = {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    required: true,
    placeholder: placeholderText,
  }

  return {
    attributes,
    setValue,
    validationMessage: validObj.validationMessage,
    valid: validObj.valid,
  }
}

export default useFormInput
