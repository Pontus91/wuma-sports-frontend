import React from 'react'
import { MAIN } from '../../constants'
import Footer from '../../Components/Footer/Footer'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledLogin,
  StyledLoginHeader,
  StyledButtonWrapper,
  GoogleButton
} from './StyledLoginPage'
import { redirectRoute } from '../../Reducers/pageReducer';

const LoginPage = ({ redirectUrl }) => {
  /**
   * Google login function
   */
   const responseGoogle = (response) => {
    const token = response.getAuthResponse().id_token;
    localStorage.setItem("token", token)
    redirectUrl(MAIN)
  }

  /**
   * Google login error handler
   */
  const errorHandler = (response) => {
      toast("An error occured, please try to login again.")
      console.log(response)
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
            onFailure={errorHandler}
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
  redirectUrl: type => dispatch(redirectRoute(type))
})

export default connect(null, mapDispatchToProps)(LoginPage)


