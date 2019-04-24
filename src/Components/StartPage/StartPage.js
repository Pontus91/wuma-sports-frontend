import React from 'react';
import * as Icon from 'react-feather';
import staticData from '../../staticData';
import News from '../News';

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

  return (
    <StyledContainer>
      <News />
      <StyledPublicInfo>
        <StyledMottoWrapper>
          <StyledMottoText>Med fokus på det roliga</StyledMottoText>
        </StyledMottoWrapper>
        {staticData.InfoWrapper.map(renderStyledInfoWrapper)}
      </StyledPublicInfo>
    </StyledContainer>
  )
}


export default Startpage;
