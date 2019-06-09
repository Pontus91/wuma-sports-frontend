import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { GoogleLogin } from 'react-google-login';
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledLogin,
  StyledLoginHeader,
  StyledButtonWrapper
} from './StyledLoginPage'

const LoginPage = () => {

  const responseGoogle = (response) => {
    console.log(response);
    window.location="/main"
  }

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLogin>
          <StyledLoginHeader>Login</StyledLoginHeader>
          <GoogleLogin
            clientId="341746166149-v1r66sqcp4o1v08hk5d6u8gt81h3aedj.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <StyledButtonWrapper>
          </StyledButtonWrapper>
        </StyledLogin>
      </StyledLoginContainer>
      <Footer />
    </StyledLoginWrapper>
  )
}

export default LoginPage;