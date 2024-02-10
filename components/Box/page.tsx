import React from 'react';
import { Box, BoxProps, Stack } from '@chakra-ui/react';

interface BoxComponentProps extends BoxProps {
  children: React.ReactNode;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ children, ...props }) => {
  return (
    <Stack spacing={'10px'} {...props} >
      {children}
    </Stack>
  );
};

export default BoxComponent;
