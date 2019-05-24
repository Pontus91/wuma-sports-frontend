import styled from 'styled-components';

export const StyledMiniBannerWrapper = styled.div`
  flex: 1;
  padding: 0 15px 0 15px;
  height: 200px;
  border: 1px solid #1852af;
  border-radius: 30px;
  background: #1f1f1f;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:nth-of-type(2){
    margin: 0 15px 0 15px;
  }

`

export const StyledIconDiv = styled.div`
  color: #fff;
`

export const StyledFocusInfo = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  font-family: 'Play', sans-serif;
  margin: 5px 0 5px 0;
`
export const StyledFocusText = styled.div`
  font-size: 14px;
  color: #fff;
  font-family: 'Play', sans-serif;
`