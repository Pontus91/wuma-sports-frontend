import React, { Component } from 'react'
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
import { updateUser } from '../../store/Test/TestoneActions';

class LoginPage extends Component {

   responseGoogle = (response) => {
    const info = response.profileObj.email;
    this.props.userInformation.email = info;
    
  }

  render(){
  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLogin>
          <StyledLoginHeader>Login</StyledLoginHeader>
          <GoogleLogin
            clientId="341746166149-v1r66sqcp4o1v08hk5d6u8gt81h3aedj.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
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
}

const mapStateToProps = state => {
  return {
    userInformation: state.user.userInformation
  }
}

const mapDispatchToProps = dispatch => ({
  responseGoogle: (data) => dispatch(updateUser(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)


