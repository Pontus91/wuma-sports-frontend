import React from 'react';
import profileImage from '../../images/template.png';
import {
  StyledMainWrapper,
  StyledFlexContainer,
  StyledProfileImage,
  StyledProfileName
} from './StyledProfileBox'

const ProfileBox = () => {
  return (
    <StyledMainWrapper>
      <StyledFlexContainer>
        <StyledProfileImage src={profileImage} />
        <StyledProfileName>Joelmosen</StyledProfileName>
      </StyledFlexContainer>
    </StyledMainWrapper>
  )
}

export default ProfileBox
