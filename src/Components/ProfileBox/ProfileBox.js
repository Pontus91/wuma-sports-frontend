import React, { Component } from 'react';
import { connect } from "react-redux"
import profileImage from '../../images/template.png';
import { GoogleLogout } from 'react-google-login';
import {
  StyledMainWrapper,
  StyledFlexWrapper,
  StyledProfileImage,
  StyledProfileName,
  StyledProfileLinksContainer,
  StyledButton
} from './StyledProfileBox'

class ProfileBox extends Component {

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
          <StyledProfileName>{this.props.userInformation.email}</StyledProfileName>
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
    userInformation: state.user.userInformation
  }
}

export default connect(mapStateToProps)(ProfileBox)
