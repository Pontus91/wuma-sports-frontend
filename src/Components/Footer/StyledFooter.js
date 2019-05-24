import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  width: 100%;
  background: #1f1f1f;
  border-top: 1px solid #1852af;
  height: 75px;
  justify-content: center;
  text-align: center;
`
export const StyledLinkHolder = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const StyledLink = styled.p`
  text-transform: uppercase;
  color: white;
  font-family: 'Play', sans-serif;
  padding: 15px;
  &:hover {
    text-decoration: underline;
  }
`