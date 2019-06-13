import React, { Component } from 'react';
import profileImage from '../../images/template.png';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux'
import { getUser } from '../../API/requests'
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
    getUser()
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

    const { user } = this.props;
    return (
      <StyledMainWrapper>
        <StyledFlexWrapper>
          <StyledProfileImage src={profileImage} />
          <StyledProfileName>{user}</StyledProfileName>
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
    fetching: state.fetching,
    user: state.user,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBox)
