import styled from 'styled-components';

export const StyledContainer = styled.div `
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
`

export const StyledPublicInfo = styled.div`
  height: 350px;
  background: #141417;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-flow: row wrap;
`

export const StyledMottoWrapper = styled.div`
  height: 50px;
  width: 100%;
`

export const StyledMottoText = styled.div`
  font-family: 'Maven Pro', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
  color: #59A5D8;
  margin-top: 20px;
`

export const StyledInfoWrapper = styled.div`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  height: 130px;

  &:nth-of-type(3){
    border-right: 1px solid #59A5D8;
    border-left: 1px solid #59A5D8;
  }


  }
`

export const StyledIconDiv = styled.div`
  color: #59A5D8;
`

export const StyledFocusInfo = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Maven Pro', sans-serif;
  color: #59A5D8
`

export const StyledFocusMinorInfo = styled.div`
  font-size: 14px;
  font-family: 'Maven Pro', sans-serif;
  color: #59A5D8
`
