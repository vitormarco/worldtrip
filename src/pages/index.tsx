import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/Header';
import { Main } from '../template/Main';
import { imagesPaths } from '../utils';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box w="100%" position="relative">
        <Image
          src={imagesPaths.sky}
          width="1440px"
          height="335px"
          layout="responsive"
        />
      </Box>
      <Main>
        <h1>hello</h1>
      </Main>
    </>
  );
};

export default Home;
