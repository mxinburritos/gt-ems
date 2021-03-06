import React from 'react';
import { Link, Text } from '@chakra-ui/react';

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text fontSize="xl" display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
