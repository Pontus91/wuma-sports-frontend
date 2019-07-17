import React from 'react';
import { MiniBannerInfo } from '../../staticData';
import MiniBanner from '../../Components/MiniBanner';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

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
      <Footer />
    </StyledStartPageWrapper>
  )
}

export default StartPage;
