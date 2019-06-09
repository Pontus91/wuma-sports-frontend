import React from 'react';
import profileImage from '../../images/template.png';
import {
  StyledMainWrapper,
  StyledFlexWrapper,
  StyledProfileImage,
  StyledProfileName,
  StyledProfileLinksContainer,
  StyledButton
} from './StyledProfileBox'

const ProfileBox = () => {
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
      </StyledProfileLinksContainer>
    </StyledMainWrapper>
  )
}

export default ProfileBox
