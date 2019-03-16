import React from 'react';
import SlideView from '../SlideView/SlideView';

import {
  StyledContainer,
  StyledSlogan,
  StyledRegister,
  StyledButton,
} from './StyledStartPage';

const Startpage = () => {
  return (
    <StyledContainer>
      <StyledSlogan>Skapa turneringar. Spara Statistik. Hitta medspelare.</StyledSlogan>
      <StyledRegister><StyledButton>Registrera dig gratis</StyledButton></StyledRegister>
      <SlideView />
    </StyledContainer>
  )
}

export default Startpage;
