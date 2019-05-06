import styled from 'styled-components';

export const StyledNavBarWrapper = styled.div `
  width: 100%;
  border-bottom: 1px solid #1852af;
  background: #1f1f1f;
`

export const StyledNavBarInner = styled.div `
  max-width: 1200px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  margin: auto;
  padding: 0px;
`

export const StyledNavBarInnerLeft = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  text-align: center;
  margin auto;
`

export const StyledNavBarTextHolder = styled.div`
  color: #1852af;
`

export const StyledNavBarInnerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 2 1 0%;
`
export const StyledAccountButtonWrapper = styled.div`
  display: block;
  padding: 16px;
  flex: 0 1 auto;
`

export const StyledAccountButton = styled.button`
  text-align: center;
  cursoir: pointer;
  background-color: #1852af;
  height: 32px;
  border-style: none;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  font-weight: bold;
  &:hover {
    background-color: #2369dd;
  }
`

export const StyledAccountText = styled.span`

`