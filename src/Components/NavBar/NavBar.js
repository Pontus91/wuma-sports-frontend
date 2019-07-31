import React from 'react';
import Button from '../Button';
import { ButtonInfo } from '../../staticData';
import Link from 'redux-first-router-link'
import { 
  CENTER, 
  RIGHT 
} from '../../constants';

import {
  StyledNavBarWrapper,
  StyledNavBarTextHolder,
  StyledNavbarColumn,
  StyledAccountButtonWrapper,
} from './StyledNavBar'

const NavBar = () => {

  /**
   * Renders navbar buttons
   */
  const renderButtons = () => ButtonInfo.map(({ id, text, path }) => (
    <Link to={path} key={id}>
      <Button text={text} />
    </Link>
  ));

  return (
    <StyledNavBarWrapper>
      <StyledNavbarColumn alignment={CENTER}>
        <StyledNavBarTextHolder>
          LOGO GOES HERE
        </StyledNavBarTextHolder>
      </StyledNavbarColumn>

      <StyledNavbarColumn alignment={RIGHT}>
        <StyledAccountButtonWrapper>
          {renderButtons()}
        </StyledAccountButtonWrapper>
      </StyledNavbarColumn>
    </StyledNavBarWrapper>
  )
}

export default NavBar;
