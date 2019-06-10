import React from 'react'
import {
  StyledBannerContainer,
  StyledLink
} from './StyledLinkBanner'
import { LinkBannerInfo } from '../../staticData'

const LinkBanner = () => {

  /**
   * Rendering links
   */
  const renderLinks = () => {
    return LinkBannerInfo.map(({ text, id }) => <StyledLink key={id}>{text}</StyledLink>)
  }

  return (
    <StyledBannerContainer>
      {renderLinks()}
    </StyledBannerContainer>
  )
}

export default LinkBanner
