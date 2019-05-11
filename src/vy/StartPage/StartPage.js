import React from 'react';
import { MiniBannerInfo } from '../../staticData';
import MiniBanner from '../../Components/MiniBanner';
import NavBar from '../../Components/NavBar';

import { 
  StyledStartPageWrapper,
  StyledBannerWrapper

 } from './StyledStartPage';


const StartPage = () => {

  const renderMiniBanner = () => MiniBannerInfo.map(({id, text, title, icon}) => <MiniBanner key={id} text={text} title={title} icon={icon} />);

  return (
    <StyledStartPageWrapper>
      <NavBar />
      <StyledBannerWrapper>
        {renderMiniBanner()}
      </StyledBannerWrapper>

    </StyledStartPageWrapper>
  )
}

export default StartPage;
