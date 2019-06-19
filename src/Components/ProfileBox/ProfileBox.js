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
    const { onRequestEmail, email } = this.props
    return (
      <StyledMainWrapper>
        <StyledFlexWrapper>
          <StyledProfileImage src={profileImage} />
          <StyledProfileName><button onClick={onRequestEmail}>test?</button>MAIL KMR HÄR{email}</StyledProfileName>
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
  console.log(state)
  return {
    fetching: state.fetching,
    email: state.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestEmail: () => dispatch({ type: "USER_REQUEST"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBox)
