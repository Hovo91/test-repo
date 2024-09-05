import styled from 'styled-components';

export const StyledApp = styled('div')`
  transition: all 0.5s;
  &:hover {
    background-color: aliceblue;
    color: ${props => (props.name === 'Hovo' ? 'black' : 'white')};
  }
  color: ${props => (props.name === 'Hovo' ? 'white' : 'black')};
  background-color: red;
`;
