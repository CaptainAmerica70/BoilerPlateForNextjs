import React, { ReactNode } from 'react';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

interface LinkProps extends ChakraLinkProps {
  href: string;
  children?: string | ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
