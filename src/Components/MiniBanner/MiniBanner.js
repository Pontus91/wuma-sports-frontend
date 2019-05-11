import React from 'react';
import * as Icon from 'react-feather';
import { 
  StyledMiniBannerWrapper ,
  StyledIconDiv,
  StyledFocusInfo,
  StyledFocusText
} from './StyledMiniBanner';

const MiniBanner = ({text, title, icon}) => {
  const IconElem = Icon[icon];

  return (
    <StyledMiniBannerWrapper>
      <StyledIconDiv>
        <IconElem />
      </StyledIconDiv>
      <StyledFocusInfo>
        {title}
      </StyledFocusInfo>
      <StyledFocusText>
        {text}
      </StyledFocusText>
    </StyledMiniBannerWrapper>
  )
}

export default MiniBanner;
