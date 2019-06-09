import React from 'react'
import ProfileBox from '../../Components/ProfileBox'
import LinkBar from '../../Components/LinkBanner'
import { StyledMainWrapper } from './StyledMainPage'


const MainPage = () => {
  return (
    <StyledMainWrapper>
      <ProfileBox />
      <LinkBar />
    </StyledMainWrapper>
  )
}

export default MainPage;