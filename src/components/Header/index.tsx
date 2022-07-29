import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { imagesPaths } from '../../utils';

export const Header = () => {
  return (
    <Flex as="header" pt="27px" pb="27px">
      <Box
        display="flex"
        m="auto"
        w="100%"
        maxW="1400px"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Image src={imagesPaths.logo} width="187px" height="46px" />
        </Box>
      </Box>
    </Flex>
  );
};
