import React, { useState } from 'react'
import iconerror from '../../src/iconerror.svg'

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
    debugger
    const newValue = e.target.value
      
    setValue(newValue)
  }


  const invalidElementOutput = validObj.validationMessage ? (
    <>
      <img src={iconerror} alt='invalid-icon'  />
      <label>{validObj.validationMessage}</label>
    </>
  ) : (
    ''
  )

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
    invalidElementOutput: invalidElementOutput
  }
}

export default useFormInput
