import React from 'react'
import {
  StyledLink
} from './StyledLink'

const Link = ({ text, callback }) => {

  const _onClick = ({ target: { value } }) => {
    callback(value)
  }

  return (
    <StyledLink onClick={_onClick}>
      {text}
    </StyledLink>
  )
}

export default Link