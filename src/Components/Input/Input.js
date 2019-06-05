import React from 'react'
import {
  StyledInput
} from './StyledInput'

const Input = ({ placeholder }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
    />
  )
}

export default Input