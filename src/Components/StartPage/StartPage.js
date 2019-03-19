import React from 'react';
import * as Icon from 'react-feather';
import staticData from '../../staticData';

import {
  StyledContainer,
  StyledPublicInfo,
  StyledInfoWrapper,
  StyledIconDiv,
  StyledFocusInfo,
  StyledFocusMinorInfo,
  StyledMottoWrapper,
  StyledMottoText
  

} from './StyledStartPage';

const Startpage = () => {

  return (
    <StyledContainer>
      <StyledPublicInfo>
        <StyledMottoWrapper>
          <StyledMottoText>Med fokus på det roliga</StyledMottoText>
        </StyledMottoWrapper>
        {staticData.map(renderStyledInfoWrapper)}
      </StyledPublicInfo>
    </StyledContainer>
  )
}

const renderStyledInfoWrapper = ({ icon, title, subtitle, id }) => {
  const IconElem = Icon[icon];

  return (
    <StyledInfoWrapper key={id}>
      <StyledIconDiv>
        <IconElem />
      </StyledIconDiv>
      <StyledFocusInfo >
        {title}
      </StyledFocusInfo>
      <StyledFocusMinorInfo >
        {subtitle}
      </StyledFocusMinorInfo>
    </StyledInfoWrapper>
  )
};

export default Startpage;
