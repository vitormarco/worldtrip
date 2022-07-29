import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';

interface IMainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: IMainProps) => {
  return (
    <Flex as="main" w="100%" direction="column">
      <Box w="100%" maxW="1400px" m="auto">
        {children}
      </Box>
    </Flex>
  );
};
