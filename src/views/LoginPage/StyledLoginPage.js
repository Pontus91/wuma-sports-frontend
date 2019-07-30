import styled from 'styled-components'
import GoogleLogin from 'react-google-login';

export const StyledLoginWrapper = styled.div`
  background: #1f1f1f;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const StyledLoginContainer = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  justify-content: center;
  background-image: url("/images/enter-war.jpg");
  background-size: 100%;
  background-position: bottom;

`
export const StyledLogin = styled.div`
  width: 33.3%;
  height: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledLoginHeader = styled.h3`
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  text-align: center;
`

export const StyledLabel = styled.label`
  margin: 5px 0 5px 0;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: rgb(255,255,255);
`
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const GoogleButton = styled(GoogleLogin)`
  width: 240px;
  height: 50px;
  border: 1px solid #4285f4 !important;
  &:hover{
    background: #4285f4 !important;
    opacity: 1 !important;
  }
`