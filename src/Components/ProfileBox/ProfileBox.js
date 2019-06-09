import React from 'react';
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

const ProfileBox = () => {

  const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('You have been logged out!');
    });
    window.location = "/login"
  }


  return (
    <StyledMainWrapper>
      <StyledFlexWrapper>
        <StyledProfileImage src={profileImage} />
        <StyledProfileName>Joelmosen</StyledProfileName>
      </StyledFlexWrapper>
      <StyledProfileLinksContainer>
        <StyledButton>
          Min Profil
        </StyledButton>
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={signOut}
        >
        </GoogleLogout>
      </StyledProfileLinksContainer>
    </StyledMainWrapper>
  )
}

export default ProfileBox
