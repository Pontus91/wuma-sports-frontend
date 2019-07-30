import React, { PureComponent } from 'react';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux'
import { loadUser } from '../../store/user/userActions'
import {
  StyledMainWrapper,
  StyledFlexWrapper,
  StyledProfileImage,
  StyledProfileName,
  StyledProfileLinksContainer,
  StyledButton
} from './StyledProfileBox'

class ProfileBox extends PureComponent {
  componentDidMount() {
    this.props.onRequestEmail()
  }

  /**
   * Google signout function
   */
  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    localStorage.removeItem("token")
    auth2.signOut().then(() => window.location = "/login");
  }

  render() {
    return (
      <StyledMainWrapper>
        <StyledFlexWrapper>
          <StyledProfileImage src="/images/template.png" />
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
  console.log(state)
  return {
    fetching: state.user.fetching,
    email: state.user.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestEmail: (data) => dispatch(loadUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBox)
