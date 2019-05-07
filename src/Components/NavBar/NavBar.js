import React from 'react';
import Button from '../Button';
import { ButtonInfo } from '../../staticData';

import {
  StyledNavBarWrapper,
  StyledNavBarInner,
  StyledNavBarInnerLeft,
  StyledNavBarTextHolder,
  StyledNavBarInnerRight,
  StyledAccountButtonWrapper,
} from './StyledNavBar'

const NavBar = () => {
 
  return (
    <StyledNavBarWrapper>
      <StyledNavBarInner>
        <StyledNavBarInnerLeft>
          <StyledNavBarTextHolder>
            LOGO GOES HERE
            </StyledNavBarTextHolder>
        </StyledNavBarInnerLeft>
        <StyledNavBarInnerRight>
          <StyledAccountButtonWrapper>
              {ButtonInfo.map(Button)}
          </StyledAccountButtonWrapper>
        </StyledNavBarInnerRight>
      </StyledNavBarInner>
    </StyledNavBarWrapper>
  )
}

export default NavBar;
