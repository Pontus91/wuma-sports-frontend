import React from 'react';
import {
  StyledFooterWrapper,
  StyledLink,
  StyledLinkHolder
} from './StyledFooter';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledLinkHolder>
        <StyledLink>Policy</StyledLink>
        <StyledLink>FAQ</StyledLink>
      </StyledLinkHolder>
    </StyledFooterWrapper>
  )
}

export default Footer;
