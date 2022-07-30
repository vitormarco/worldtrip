import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Main } from '../template/Main';

import { imagesPaths } from '../utils';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box w="100%" position="relative">
        <Grid gridTemplateAreas={`'banner'`} alignItems="center">
          <GridItem area={'banner'} zIndex="1">
            <Image
              src={imagesPaths.sky}
              width="1440px"
              height="335px"
              layout="responsive"
            />
          </GridItem>
          <GridItem
            area={'banner'}
            zIndex={2}
            height="100%"
            paddingInlineEnd={4}
            paddingInlineStart={4}
          >
            <Flex
              maxW={1400}
              display="flex"
              justifyContent="space-between"
              margin="auto"
              height="100%"
            >
              <Box alignSelf="center">
                <Stack spacing={5}>
                  <Heading as="h1" color="white.100" maxW={426}>
                    5 Continentes, infinitas possibilidades.
                  </Heading>
                  <Text as="p" color="gray.200" maxW={524} fontSize="xl">
                    Chegou a hora de tirar do papel a viagem que você sempre
                    sonhou.
                  </Text>
                </Stack>
              </Box>
              <Box alignSelf="flex-end" marginBottom="-40px" rotate={'3deg'}>
                <Image src={imagesPaths.aiplane} width="417" height="271" />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Main>
        <h1>hello</h1>
      </Main>
    </>
  );
};

export default Home;
