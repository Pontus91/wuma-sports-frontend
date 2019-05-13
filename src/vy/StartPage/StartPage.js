import React from 'react';
import { MiniBannerInfo } from '../../staticData';
import MiniBanner from '../../Components/MiniBanner';
import NavBar from '../../Components/NavBar';

import {
  StyledStartPageWrapper,
  StyledFrontView,
  StyledBannerWrapper

} from './StyledStartPage';


const StartPage = () => {

  /**
   * Renders MiniBanners
   */
  const renderMiniBanner = () => MiniBannerInfo.map(({ id, text, title, icon }) => (
    <MiniBanner 
      key={id} 
      text={text} 
      title={title} 
      icon={icon} 
    />
  ));

  return (
    <StyledStartPageWrapper>
      <NavBar />
      <StyledFrontView>
        <StyledBannerWrapper>
          {renderMiniBanner()}
        </StyledBannerWrapper>
      </StyledFrontView>
    </StyledStartPageWrapper>
  )
}

export default StartPage;
