import { Box, Divider, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Main, Banner, TripTypeList } from '../template';
import { Slider } from '../template/Home/Slider';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <TripTypeList />
        <Box marginTop="80px">
          <Divider
            color="gray.600"
            borderBottom="2px"
            maxWidth={90}
            margin="auto"
          />
        </Box>
        <Box marginTop="52px">
          <Heading as="h2" textAlign="center" fontWeight={500} color="gray.600">
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>
        </Box>
        <Box maxWidth="1240px" margin="52px auto 20px">
          <Slider />
        </Box>
      </Main>
    </>
  );
};

export default Home;
