import React from 'react'
import staticData from '../../staticData';


import {
  StyledNewsContainer,
  StyledNewsInfo,
  StyledTournamentInfo,
  StyledHeadline,
  StyledNewsText
} from './StyledNews';

const News = () => {

  const renderStyledNewsText = ({id, text}) => {
    return (
      <StyledNewsText key={id}>{text}</StyledNewsText>
    )
  }

  
  return (
    <StyledNewsContainer>
      <StyledNewsInfo>
        <StyledHeadline>Nyheter</StyledHeadline>
        {(staticData.newsData.map(renderStyledNewsText))}
      </StyledNewsInfo>

      <StyledTournamentInfo>
        <StyledHeadline>Turneringar</StyledHeadline>
        
      </StyledTournamentInfo>
      
    </StyledNewsContainer>
  )
}

export default News;
