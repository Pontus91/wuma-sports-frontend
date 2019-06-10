import React from 'react'
import { MAIN } from '../../constants'
import Footer from '../../Components/Footer/Footer'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledLogin,
  StyledLoginHeader,
  StyledButtonWrapper
} from './StyledLoginPage'
import { updateUser } from '../../store/User/UserActions';
import { actionToMain } from '../../Reducers/pageReducer';

const LoginPage = ({ redirectUrl, userInformation}) => {

  /**
   * 
   * Google login function
   */
   const responseGoogle = (response) => {
    const info = response.profileObj.email;
    userInformation.email = info;
    redirectUrl(MAIN);
    
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

const mapStateToProps = state => {
  return {
    userInformation: state.user.userInformation
  }
}

const mapDispatchToProps = dispatch => ({
  responseGoogle: (data) => dispatch(updateUser(data)),
  redirectUrl: type => dispatch(actionToMain(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)


