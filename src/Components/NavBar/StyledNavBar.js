import styled from 'styled-components';
import { LEFT, CENTER, RIGHT } from '../../constants';

const alignments = {
  [LEFT]: 'flex-start',
  [CENTER]: 'center',
  [RIGHT]: 'flex-end'
}

export const StyledNavBarWrapper = styled.div `
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #1852af;
  background: #1f1f1f;
  display: flex;
`

export const StyledNavbarColumn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  justify-content: ${({ alignment }) => alignments[alignment] };
`;

export const StyledNavBarTextHolder = styled.span`
  color: #1852af;
`

export const StyledAccountButtonWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex: 0 1 auto;
`
