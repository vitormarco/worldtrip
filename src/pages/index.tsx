import { Flex, List, ListItem, Text, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { Header } from '../components/Header';
import { Main, Banner } from '../template';
import { imagesPaths } from '../utils';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <List
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="1240px"
          margin="80px auto 0"
        >
          <ListItem>
            <Stack alignItems="center" justifyContent="center" gap="24px">
              <Image src={imagesPaths.cocktail} width="85px" height="85px" />
              <Text as="span" fontSize="24px" fontWeight="600">
                vida noturna
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack alignItems="center" justifyContent="center" gap="24px">
              <Image src={imagesPaths.surf} width="85px" height="85px" />
              <Text as="span" fontSize="24px" fontWeight="600">
                praia
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack alignItems="center" justifyContent="center" gap="24px">
              <Image src={imagesPaths.building} width="85px" height="85px" />
              <Text as="span" fontSize="24px" fontWeight="600">
                moderno
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack alignItems="center" justifyContent="center" gap="24px">
              <Image src={imagesPaths.museum} width="85px" height="85px" />
              <Text as="span" fontSize="24px" fontWeight="600">
                clássico
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack alignItems="center" justifyContent="center" gap="24px">
              <Image src={imagesPaths.earth} width="85px" height="85px" />
              <Text as="span" fontSize="24px" fontWeight="600">
                e mais ...
              </Text>
            </Stack>
          </ListItem>
        </List>
      </Main>
    </>
  );
};

export default Home;
