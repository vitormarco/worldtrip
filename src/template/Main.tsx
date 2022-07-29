import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';

interface IMainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: IMainProps) => {
  return (
    <>
      <Header />
      <Flex as="main" w="100%" minH="100vh" direction="column">
        {children}
      </Flex>
    </>
  );
};
