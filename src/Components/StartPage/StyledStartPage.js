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