import React from 'react'
import Footer from '../../Components/Footer/Footer'
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledLogin,
  StyledLoginHeader,
  StyledButtonWrapper
} from './StyledLoginPage'

const LoginPage = () => {

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLogin>
          <StyledLoginHeader>Login</StyledLoginHeader>
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          <StyledButtonWrapper>
          </StyledButtonWrapper>
        </StyledLogin>
      </StyledLoginContainer>
      <Footer />
    </StyledLoginWrapper>
  )
}

export default LoginPage;
