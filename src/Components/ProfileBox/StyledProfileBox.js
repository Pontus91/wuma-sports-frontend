import styled from 'styled-components';

export const StyledMainWrapper = styled.section`
  background-color: #000;
  max-width: 300px;
  border-radius: 4px;
  border: 2px solid #1852af;
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

/* export const StyledInnerFlexWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
` */

export const StyledProfileLinksContainer = styled.div`
  border-top: 1px solid #1852af;
  padding: .25rem 0;
`

export const StyledProfileImage = styled.img`
  width: 100px;
  height: auto;
  padding: .5rem;
  border-radius: 1rem;
`

export const StyledProfileName = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Play:400,700');
  color: #fff;
  font-family: 'Play', sans-serif;
  margin: 0 auto;
  border-bottom: 2px solid #1852af;
`

export const StyledButton = styled.button`
  @import url('https://fonts.googleapis.com/css?family=Play:400,700');
  background-color: transparent;
  color: #fff;
  border: none;
  font-family: 'Play', sans-serif;
  &:hover {
    cursor: pointer;
  }
`