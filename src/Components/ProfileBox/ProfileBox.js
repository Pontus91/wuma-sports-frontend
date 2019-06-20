import React, { Component } from 'react';
import profileImage from '../../images/template.png';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux'
import {
  StyledMainWrapper,
  StyledFlexWrapper,
  StyledProfileImage,
  StyledProfileName,
  StyledProfileLinksContainer,
  StyledButton
} from './StyledProfileBox'

class ProfileBox extends Component {
  componentDidMount() {
    this.props.onRequestEmail()
  }

  /**
   * Google signout function
   */
  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
    });
    window.location = "/login"
  }

  render() {
    return (
      <StyledMainWrapper>
        <StyledFlexWrapper>
          <StyledProfileImage src={profileImage} />
          <StyledProfileName>{this.props.email}</StyledProfileName>
        </StyledFlexWrapper>
        <StyledProfileLinksContainer>
          <StyledButton>
            Min Profil
        </StyledButton>
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={this.signOut}
          >
          </GoogleLogout>
        </StyledProfileLinksContainer>
      </StyledMainWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.user.fetching,
    email: state.user.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestEmail: () => dispatch({ type: "USER_REQUEST"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBox)
