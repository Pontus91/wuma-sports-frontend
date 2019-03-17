import styled from 'styled-components';

export const StyledContainer = styled.div `
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
`

export const StyledSlogan = styled.div`
text-align: center;
text-transform: uppercase;
font-size: 20px;
font-weight: 700;
font-family: 'Maven Pro', sans-serif;
`

export const StyledRegister = styled.div `
display: flex;
justify-content: center;
text-align: center;
margin-top: 20px;
margin-bottom: 60px;
`

export const StyledButton = styled.button `
text-transform: uppercase;
font-family: 'Maven Pro', sans-serif;
height: 34px;
min-width: 250px;
color: #f2f2f2;
background-color: #0d990d;
border-color: #0c8c0c;
font-weight: 700;
border-radius: 2px;
cursor: pointer;

&:hover {
  background-color: #0c8c0c;
}

`
export const StyledPublicInfo = styled.div`
height: 350px;
margin-top: 25px;
background: #d6d8d7;
display: flex;
text-align: center;
justify-content: center;
flex-flow: row wrap;
`

export const StyledInfoHeader = styled.div`
height: 50px;
width: 100%;
`

export const StyledHeaderText = styled.p`
font-family: 'Maven Pro', sans-serif;
text-transform: uppercase;
font-weight: 700;
font-size: 25px;
`

export const StyledInfoWrapper = styled.div`
flex-basis: 0;
flex: 1;
padding-right: 15px;
padding-left: 15px;
`

export const StyledInfoWrapperMiddle = styled.div`
flex-basis: 0;
flex: 1;
border-right: 2px solid #0d990d;
border-left: 2px solid #0d990d;
height: 132px;
padding-left: 5px;
padding-right: 5px;
`

export const StyledFocusInfo = styled.div`
text-transform: uppercase;
font-weight: 700;
font-family: 'Maven Pro', sans-serif;
`

export const StyledFocusMinorInfo = styled.div`
font-size: 14px;
font-family: 'Maven Pro', sans-serif;
`