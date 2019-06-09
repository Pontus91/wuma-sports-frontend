import React from 'react'
import Footer from '../../Components/Footer/Footer'
import {
  GoogleLogin,
  GoogleLogout
} from 'react-google-login';
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
  }

  const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('You have been logged out!');
    });
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
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={signOut}
          >
          </GoogleLogout>
          <StyledButtonWrapper>
          </StyledButtonWrapper>
        </StyledLogin>
      </StyledLoginContainer>
      <Footer />
    </StyledLoginWrapper>
  )
}

export default LoginPage;