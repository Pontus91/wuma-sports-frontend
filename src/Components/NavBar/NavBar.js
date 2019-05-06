import React from 'react';
import { Award } from 'react-feather';

import {
  StyledNavBarWrapper,
  StyledNavBarInner,
  StyledNavBarInnerLeft,
  StyledNavBarTextHolder,
  StyledNavBarInnerRight,
  StyledAccountButtonWrapper,
  StyledAccountButton,
  StyledAccountText,
  
} from './StyledNavBar'

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNavBarInner>

        <StyledNavBarInnerLeft>
          <StyledNavBarTextHolder>
            <Award />WUMA Tourneys<Award />
            </StyledNavBarTextHolder>
        </StyledNavBarInnerLeft>

        <StyledNavBarInnerRight>
          <StyledAccountButtonWrapper>
            <StyledAccountButton>
              <StyledAccountText>CREATE ACCOUNT</StyledAccountText>
            </StyledAccountButton>
          </StyledAccountButtonWrapper>
        </StyledNavBarInnerRight>

      </StyledNavBarInner>
    </StyledNavBarWrapper>
  )
}

export default NavBar;
