import React from 'react';
import SlideView from '../SlideView/SlideView';
import * as Icon from 'react-feather';

import {
  StyledContainer,
  StyledSlogan,
  StyledRegister,
  StyledButton,
  StyledPublicInfo,
  StyledInfoHeader,
  StyledHeaderText,
  StyledInfoWrapper,
  StyledFocusInfo,
  StyledFocusMinorInfo,
  StyledInfoWrapperMiddle,

} from './StyledStartPage';

const Startpage = () => {
  return (
    <StyledContainer>
      <StyledSlogan>Skapa turneringar. Spara Statistik. Hitta medspelare.</StyledSlogan>
      <StyledRegister><StyledButton>Registrera dig gratis</StyledButton></StyledRegister>
      <SlideView />
      <StyledPublicInfo>
        <StyledInfoHeader>
          <StyledHeaderText>Med fokus på det roliga</StyledHeaderText>
        </StyledInfoHeader>
        <StyledInfoWrapper>
          <Icon.Award />
          <StyledFocusInfo>
            Turneringar och priser
          </StyledFocusInfo>
          <StyledFocusMinorInfo>
            Skapa turneringar både gratis och med kostnad och tävla emot vänner, familj och andra spelare
          </StyledFocusMinorInfo>
        </StyledInfoWrapper>
        <StyledInfoWrapperMiddle>
          <Icon.BarChart2 />
          <StyledFocusInfo>
            Statistik
          </StyledFocusInfo>
          <StyledFocusMinorInfo>
            Spara statistik på dina padelmatcher och dina slag i bowling
          </StyledFocusMinorInfo>
        </StyledInfoWrapperMiddle>
        <StyledInfoWrapper>
          <Icon.Users />
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
