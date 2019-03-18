import React from 'react';
import * as Icon from 'react-feather';

import {
  StyledContainer,
  StyledPublicInfo,
  StyledInfoHeader,
  StyledHeaderText,
  StyledInfoWrapper,
  StyledFocusInfo,
  StyledFocusMinorInfo,
  StyledInfoWrapperMiddle,
  StyledIconDiv

} from './StyledStartPage';

const Startpage = () => {
  return (
    <StyledContainer>
      <StyledPublicInfo>
        <StyledInfoHeader>
          <StyledHeaderText>Med fokus på det roliga</StyledHeaderText>
        </StyledInfoHeader>
        <StyledInfoWrapper>
          <StyledIconDiv><Icon.Award /></StyledIconDiv>
          <StyledFocusInfo>
            Turneringar och priser
          </StyledFocusInfo>
          <StyledFocusMinorInfo>
            Skapa turneringar både gratis och med kostnad och tävla emot vänner, familj och andra spelare
          </StyledFocusMinorInfo>
        </StyledInfoWrapper>
        <StyledInfoWrapperMiddle>
          <StyledIconDiv><Icon.BarChart2 /></StyledIconDiv>
          <StyledFocusInfo>
            Statistik
          </StyledFocusInfo>
          <StyledFocusMinorInfo>
            Spara statistik på dina padelmatcher och dina slag i bowling
          </StyledFocusMinorInfo>
        </StyledInfoWrapperMiddle>
        <StyledInfoWrapper>
          <StyledIconDiv><Icon.Users /></StyledIconDiv>
          <StyledFocusInfo>
            Medspelare
          </StyledFocusInfo>
          <StyledFocusMinorInfo>
            Spela med dina vänner och hitta nya medspelare
          </StyledFocusMinorInfo>
        </StyledInfoWrapper>
      </StyledPublicInfo>
    </StyledContainer>
  )
}

export default Startpage;
