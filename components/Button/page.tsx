import React from 'react';
import { Button, ButtonProps, Icon } from '@chakra-ui/react';

interface ButtonComponentProps extends ButtonProps {
  children?: React.ReactNode;
  variant: string;
  color: string;
  border?: string;
  icon?: React.ElementType; // Add this line
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ border, variant, children, icon, ...props }) => {
  return (
    <Button variant={variant} border={border} {...props}>
      {icon ? <Icon width={'24 px'} height={'24px'} as={icon} /> : children}
    </Button>
  );
};

export default ButtonComponent;
