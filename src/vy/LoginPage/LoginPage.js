import React from 'react'
import { MAIN } from '../../constants'
import Footer from '../../Components/Footer/Footer'
import { connect } from 'react-redux'
import verifyToken from '../../API/requests'
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledLogin,
  StyledLoginHeader,
  StyledButtonWrapper,
  GoogleButton
} from './StyledLoginPage'
import { actionToMain } from '../../Reducers/pageReducer';

const LoginPage = ({ redirectUrl }) => {

  /**
   * 
   * Google login function
   */
   const responseGoogle = (response) => {
    
    const token = response.getAuthResponse().id_token;
    localStorage.setItem("token", token)
    verifyToken()
    redirectUrl(MAIN);
  }

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLogin>
          <StyledLoginHeader>Login</StyledLoginHeader>
          <GoogleButton
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

const mapDispatchToProps = dispatch => ({
  redirectUrl: type => dispatch(actionToMain(type))
})

export default connect(null, mapDispatchToProps)(LoginPage)


