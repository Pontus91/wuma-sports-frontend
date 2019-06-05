import styled from 'styled-components'
import enterWarImg from '../../images/enter-war.jpg'

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
  height: 600px;
  display: flex;
  justify-content: center;
  background-image: url(${enterWarImg});
  background-size: 100%;
  background-position: bottom;

`
export const StyledLogin = styled.div`
  width: 33.3%;
  height: 450px;
  margin: auto;
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