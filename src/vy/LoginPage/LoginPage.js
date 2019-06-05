import React from 'react'
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledLogin,
  StyledLoginHeader,

} from './StyledLoginPage'

const LoginPage = () => {
  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLogin>
          <StyledLoginHeader>Login</StyledLoginHeader>
        </StyledLogin>
      </StyledLoginContainer>
      
    </StyledLoginWrapper>
  )
}

export default LoginPage;
