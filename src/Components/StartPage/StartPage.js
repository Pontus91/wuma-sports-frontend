import React from 'react';
import Motto from '../Motto';
import * as Icon from 'react-feather';

import {
  StyledContainer,
  StyledPublicInfo,
  StyledInfoWrapper,
  StyledIconDiv,
  StyledFocusInfo,
  StyledFocusMinorInfo

} from './StyledStartPage';

const links = [
  {
    icon: "Award",
    title: 'Turneringar och priser',
    subtitle: 'Skapa turneringar både gratis och med kostnad och tävla emot vänner, familj och andra spelare',
    id: 1
  },
  {
    icon: "BarChart2",
    title: "Statistik",
    subtitle: "Spara statistik på dina padelmatcher och dina slag i bowling",
    id: 2
  },
  {
    icon: "Users",
    title: "Medspelare",
    subtitle: "Spela med dina vänner och hitta nya medspelare",
    id: 3
  }
];



const Startpage = () => {
  
  return (
    <StyledContainer>
      <StyledPublicInfo>
        <Motto />
        { links.map(renderStyledInfoWrapper ) }
      </StyledPublicInfo>
    </StyledContainer>
  )
}

const renderStyledInfoWrapper = ({ icon, title, subtitle, id }) => {
  const IconElem = Icon[icon];

  return (
    <StyledInfoWrapper key={id}>
      <StyledIconDiv>
        <IconElem />
      </StyledIconDiv>
      <StyledFocusInfo > 
        {title}
      </StyledFocusInfo>
      <StyledFocusMinorInfo >
        {subtitle}
      </StyledFocusMinorInfo>
    </StyledInfoWrapper>
  )
};

export default Startpage;
