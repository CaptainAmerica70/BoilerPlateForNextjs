import React, { ReactNode } from 'react';
import { Badge, BadgeProps, Icon } from '@chakra-ui/react';

interface BadgeComponentProps extends BadgeProps {
  children: React.ReactNode;
  color: string;
  textColor: string;
  icon?: React.ElementType;
}

const BadgeComponent: React.FC<BadgeComponentProps> = ({ icon, textColor, color, children, ...props }) => {
  return (
    <Badge  {...props} bg={color} textColor={textColor}>
      {icon ? <Icon as={icon} /> : children}
    </Badge>
  );
};

export default BadgeComponent;
