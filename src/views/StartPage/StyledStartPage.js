import styled from 'styled-components';
import bannerImg from "../../images/background-victory.jpg";

export const StyledStartPageWrapper = styled.div `
  width: 100%;
`

export const StyledFrontView = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${bannerImg});
  align-items: center;
  justify-content: center;
  display: flex;
`

export const StyledBannerWrapper = styled.div`
  width: auto;
  display: flex;
  padding: 90px;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
`