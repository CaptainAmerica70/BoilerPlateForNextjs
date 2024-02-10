import React from 'react';
import { Badge, BadgeProps } from '@chakra-ui/react';

interface BadgeComponentProps extends BadgeProps {
  children: React.ReactNode;
}

const BadgeComponent: React.FC<BadgeComponentProps> = ({ children, ...props }) => {
  return (
    <Badge {...props}>
      {children}
    </Badge>
  );
};

export default BadgeComponent;
