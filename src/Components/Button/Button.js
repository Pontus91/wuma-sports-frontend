import React from 'react'
import { StyledAccountButton } from './StyledButton';

const Button = ({text, id}) => {

  return (
    <StyledAccountButton key={id}>{text}</StyledAccountButton>
  )
} 

export default Button;


