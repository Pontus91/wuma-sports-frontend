import styled from 'styled-components';

export const StyledBannerContainer = styled.div`
  background-color: #000;
  width: 100%;
  height: 3.2rem;
  border-radius: 4px;
  border: 2px solid #1852af;
  margin-left: 1rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled.a`
  @import url('https://fonts.googleapis.com/css?family=Play:400,700');
  color: #fff;
  font-family: 'Play', sans-serif;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;