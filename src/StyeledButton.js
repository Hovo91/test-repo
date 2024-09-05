import { Button, buttonClasses, styled } from '@mui/material';

export const StyledButon = styled(Button)`
  background-color: ${({ size }) => (size === 'small' ? '#ff0' : 'blue')};

  &.${buttonClasses.sizeMedium} {
    background-color: red;
  }
`;
